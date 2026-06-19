# QA Report — c10insurance.com

## Build Status: GREEN ✅

## Routes (19 pages)
- / (homepage — 8 sections with motion + lenis)
- /about
- /blog
- /blog/c10-license-insurance-requirements
- /blog/electrical-contractor-general-liability-guide
- /blog/workers-comp-california-electricians
- /contact
- /coverages
- /coverages/commercial-auto
- /coverages/contractor-bond
- /coverages/general-liability
- /coverages/tools-equipment
- /coverages/workers-compensation
- /quote
- /robots.txt
- /sitemap.xml
- /_not-found

## Quality Gate Checklist
- [x] Homepage ≥ 6 sections (8 sections: hero+image, trust bar, coverages grid, why CCA+image, how it works, testimonials, FAQ accordion, CTA+image bg)
- [x] ≥ 5 service pages (5: GL, workers comp, commercial auto, tools, bond)
- [x] Blog with ≥ 3 posts (3 MDX posts, C10/California electrical niche)
- [x] ≥ 2 Netlify forms (quote + contact) with webhook in netlify.toml
- [x] ≥ 8 generated images (8 HuggingFace FLUX images, all verified JPEG 1024x1024)
- [x] Schema: InsuranceAgency JSON-LD in layout.tsx
- [x] sitemap.ts (all 19 routes)
- [x] robots.ts
- [x] llms.txt
- [x] public/__forms.html
- [x] npm run build GREEN (no errors, no type errors, 19 static pages)
- [x] UNIQUE design: blue palette (brand-700 #1d4ed8), accent amber, circuit pattern motif — distinct from slabjacking (green) and others
- [x] Responsive + interactive (motion/lenis: SmoothScroll component, whileInView animations on all sections, FAQ accordion with useState)
- [x] Pushed to GitHub: MCERQUA/c10insurance.com

## Images Generated (HuggingFace FLUX.1-schnell)
1. hero.jpg — California electrician working on commercial panel
2. general-liability.jpg — contractor reviewing insurance documents
3. workers-comp.jpg — electrical crew at job site with safety gear
4. commercial-auto.jpg — fleet of electrical contractor vans
5. tools-equipment.jpg — professional electrical tools on workbench
6. about.jpg — insurance agent portrait in modern office
7. cta-bg.jpg — California aerial neighborhood view
8. contractor-bond.jpg — electrician installing circuit breaker panel

## Netlify Webhook
- Quote: https://josh.jam-bot.com/social-api/api/leads/webhook/netlify?tenant=josh&site=c10insurance.com
- Contact: same URL

## Design System
- Primary: Blue #1d4ed8 (brand-700)
- Accent: Amber #f59e0b (accent-500)
- Background: White + slate-50 sections
- Hero: Dark blue gradient with circuit SVG pattern
- Font: Inter (single typeface, high weight range: 400-900)
- Motif: Circuit board pattern (electrical contractor niche visual language)
