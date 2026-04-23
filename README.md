# SARY ARQA BELT — Corporate Landing Page

Corporate landing page for SARY ARQA BELT, TOO. Deployed at https://sab.com.kz

## Stack

- Pure HTML5 + CSS3
- Minimal vanilla JS (smooth scroll to anchors)
- Inter (Google Fonts) with a system sans-serif fallback stack
- No build step, no dependencies — ready to deploy to any static host

## Files

- `index.html` — main page (Hero, About, Contacts)
- `privacy.html` — privacy policy (required for App Store / Google Play publishing)
- `style.css` — design tokens and layout
- `favicon.svg` — site icon
- `favicon.ico` — legacy icon (TODO: regenerate as binary .ico from favicon.svg)

## Local preview

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

## Deployment

The site is a set of static files. Any of the following will work:

- **GitHub Pages** with a custom domain `sab.com.kz`
- **Netlify** (drag-and-drop the folder)
- **Cloudflare Pages** (connect the GitHub repo)
- Plain FTP upload to any shared hosting
