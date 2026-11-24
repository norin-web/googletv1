# Google TV Remote — promo site

Static promo site for the Google TV Remote iPhone app. Built with React 18, TypeScript, Vite, Tailwind CSS 4 and React Router 7. Deployed to GitHub Pages.

## Run locally

```bash
pnpm install
pnpm dev
```

## Build

```bash
pnpm run build
```

## Where content lives

- `src/app/content/site.ts` — brand, App Store ID, support email, features, tabs, FAQ.
- `src/app/content/legal.ts` — Privacy Policy and Terms of Use. Paste the owner's text here verbatim (one string per paragraph). Until then the pages show a notice.
- `src/app/pages/` — page layouts. Facts come from `site.ts`, not from the pages.
- `public/images/` — images. Reference them only through the `img()` helper (`src/app/utils/img.ts`), otherwise they 404 on GitHub Pages.

## Deployment

GitHub Actions (`.github/workflows/deploy.yml`) builds on every push to `main`.

- Settings → Pages → Source must be **GitHub Actions**.
- Custom domain: `https://googletvremote.rest/`. It is set in `public/CNAME`, and `base` in `vite.config.ts` is `/`. Change both in the same commit.
- If the domain is removed, set `base` back to `/googletv1/` and delete `public/CNAME`, or every asset 404s.

## Notes

- Reveal animations are not used. Content is always visible without JavaScript-driven transitions.
- The app is not yet published, so the App Store button links to the store page, which will work after release.
