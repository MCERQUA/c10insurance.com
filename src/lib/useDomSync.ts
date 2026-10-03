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
    type Field = HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;
    type Props = { value?: unknown; checked?: unknown; onChange?: (e: unknown) => void };
    const propsOf = (el: Field): Props | null => {
      const key = Object.keys(el).find((k) => k.startsWith("__reactProps$"));
      const p = key ? (el as unknown as Record<string, Props>)[key] : null;
      return p && typeof p.onChange === "function" ? p : null;
    };
    const isToggle = (el: Field): el is HTMLInputElement =>
      el instanceof HTMLInputElement && (el.type === "radio" || el.type === "checkbox");
    // Visible values React has not seen yet, captured BEFORE any re-render can reset them.
    const snap = new Map<Field, string | boolean>();
    let timer: number | undefined;

    const sync = () => {
      document.querySelectorAll<Field>("form input, form textarea, form select").forEach((el) => {
        if (el instanceof HTMLInputElement && ["hidden", "submit", "button", "file"].includes(el.type)) return;
        const p = propsOf(el);
        if (!p || snap.has(el)) return;
        if (isToggle(el)) {
          // A card/radio tapped before hydration stays checked on screen while state is empty; a
          // second tap on an already-checked radio fires no change, so the visitor is stuck.
          if (p.checked === undefined) return;
          if (el.checked !== Boolean(p.checked) && (el.type === "checkbox" || el.checked)) snap.set(el, el.checked);
        } else if (p.value !== undefined && p.value !== null && el.value !== String(p.value)) {
          snap.set(el, el.value);
        }
      });
      // Apply ONE field per tick: handlers like setForm({ ...form, x }) close over the render they
      // came from, so several calls in one tick would overwrite each other.
      for (const [el, want] of snap) {
        const p = propsOf(el);
        snap.delete(el);
        if (!p || !el.isConnected) continue;
        if (isToggle(el)) {
          if (Boolean(p.checked) === want) continue;
        } else {
          const rendered = String(p.value ?? "");
          if (rendered === want) continue;
          // The visitor has typed something new since the snapshot: theirs wins.
          if (el.value !== want && el.value !== rendered) continue;
        }
        // Call the field's own onChange with a fixed target, so neither React's post-event restore
        // of controlled inputs nor a lazy e.target read inside a state updater can lose the value.
        const target = {
          name: el.name, id: el.id, type: (el as unknown as HTMLInputElement).type,
          value: isToggle(el) ? el.value : (want as string),
          checked: isToggle(el) ? (want as boolean) : false,
          form: el.form, tagName: el.tagName,
        };
        p.onChange!({ target, currentTarget: target, type: "change", preventDefault() {}, stopPropagation() {}, persist() {} });
        if (snap.size) timer = window.setTimeout(sync, 16);
        return;
      }
    };

    sync();
    const id = window.setInterval(sync, everyMs);
    document.addEventListener("focusin", sync, true);
    document.addEventListener("pointerdown", sync, true);
    return () => {
      window.clearInterval(id);
      window.clearTimeout(timer);
      document.removeEventListener("focusin", sync, true);
      document.removeEventListener("pointerdown", sync, true);
    };
  }, [everyMs]);
}
