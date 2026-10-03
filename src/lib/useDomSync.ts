"use client";

import { useEffect } from "react";

/**
 * Keeps React state in step with what the visitor can SEE in the form fields.
 *
 * Why: the quote wizard's Next/Continue buttons are disabled on React state. Text typed before
 * React hydrates, and autofill that writes `.value` without firing input events, show up in the
 * fields but never reach state, so the button stayed disabled with every field visibly filled
 * (lead lost). Found by the 2026-10-03 wizard-hydration sweep after ghostworkerscompinsurance.
 *
 * How: on mount and every `everyMs`, any controlled field (React props carry `value` + `onChange`)
 * whose visible value differs from the value React rendered gets its own onChange fired with the
 * visible value. The existing validation and disabled conditions then work unchanged, and the
 * submit payload (built from state) carries what the visitor sees. No-op on uncontrolled fields.
 */
export function useDomSync(everyMs = 400) {
  useEffect(() => {
    const sync = () => {
      type Field = HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;
      type Tracked = { _valueTracker?: { setValue: (v: string) => void } };
      // 1) Snapshot EVERY out-of-sync field first. Syncing one field re-renders the form, and React
      //    then rewrites the other controlled fields back to their (stale) state values - so a
      //    one-at-a-time loop would wipe the rest of an autofill before reaching it.
      const pending: { el: Field; visible: string; rendered: string }[] = [];
      document.querySelectorAll<Field>("form input, form textarea, form select").forEach((el) => {
        if (el instanceof HTMLInputElement && ["checkbox", "radio", "hidden", "submit", "button", "file"].includes(el.type)) return;
        const key = Object.keys(el).find((k) => k.startsWith("__reactProps$"));
        if (!key) return;
        const props = (el as unknown as Record<string, { value?: unknown; onChange?: unknown }>)[key];
        if (!props || typeof props.onChange !== "function" || props.value === undefined || props.value === null) return;
        const rendered = String(props.value);
        if (el.value !== rendered) pending.push({ el, visible: el.value, rendered });
      });
      // 2) For each: put the visible value back (an earlier re-render may have reset it), tell React's
      //    value tracker the old value, and fire the event so the field's own onChange runs.
      pending.forEach(({ el, visible, rendered }) => {
        el.value = visible;
        (el as unknown as Tracked)._valueTracker?.setValue(rendered);
        el.dispatchEvent(new Event(el.tagName === "SELECT" ? "change" : "input", { bubbles: true }));
      });
    };
    sync();
    const id = window.setInterval(sync, everyMs);
    document.addEventListener("focusin", sync, true);
    document.addEventListener("pointerdown", sync, true);
    return () => {
      window.clearInterval(id);
      document.removeEventListener("focusin", sync, true);
      document.removeEventListener("pointerdown", sync, true);
    };
  }, [everyMs]);
}
