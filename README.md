# Anushka Gurav — animated portfolio

A fast, animated personal portfolio built with plain HTML, CSS and JavaScript.
No frameworks and no build step, so it runs on GitHub Pages exactly as it is.

## What's inside

| Section | Animation |
|---|---|
| Loader | Triple spinning ring, then a circular wipe into the page |
| Hero dashboard | Your name drawn as thousands of particles that fly into place. Move the mouse through it to scatter letters; click to explode them. Typing roles, live-status card, stats that count up |
| Hero character | Original anime-style girl drawn in SVG: arms crossed, confident smirk and raised brow. She breathes, blinks, sways her hair, follows the cursor with her eyes and head, and talks in a speech bubble. Click her for a wink and a hop. Change her lines (or turn her off) under `girl` in `data.js` |
| Education | Timeline that draws itself as you scroll, nodes light up, cursor spotlight on cards |
| Skills | Orbiting tech icons, sliding tab pill, animated progress bars with shine, % counters |
| Experience | Alternating timeline, cards slide in from each side |
| Projects | Category filter with smooth FLIP re-layout, 3D tilt + glare on hover |
| Coding profiles | Progress rings that fill, number count-ups, rotating glow border on hover |
| Resume | Floating paper with a scan line, download + in-page PDF preview |
| Contact | Floating-label form with validation, magnetic buttons, social links |
| Everywhere | Custom cursor, scroll progress bar, split-letter headings, aurora background, auto-hiding nav |

It respects "reduce motion" settings, works with keyboard, and is responsive down to small phones.

## Make it yours

1. **Edit `assets/js/data.js`** — name, roles, education, skills, experience,
   projects, coding profiles, socials and email all live in this one file.
2. **Replace `assets/resume.pdf`** with your real resume (keep the same file name).
3. **Project screenshots (optional):** put images in `assets/img/` and set
   `image: "assets/img/your-shot.png"` on the project. Leave it `""` to get a
   generated gradient cover.
4. **Skill icons:** use any class from [devicon.dev](https://devicon.dev),
   e.g. `devicon-react-original colored`.
5. **Contact form:** by default it opens the visitor's email app. To receive
   messages directly, create a free form at [formspree.io](https://formspree.io)
   and paste its ID into `formspreeId` in `data.js`.
6. Update the `<title>` and description tags at the top of `index.html`
   (the title is also set automatically from your name).

Preview locally by double-clicking `index.html`, or for the most accurate test run
`python -m http.server` inside this folder and open http://localhost:8000.

## Host it on GitHub Pages

**Option A — your main site at `https://<username>.github.io`**

1. On GitHub, create a new public repository named exactly `<username>.github.io`
   (for Anushka: `Anushka-Gurav.github.io` → live at https://anushka-gurav.github.io).
2. Upload everything in this folder (keep the folder structure: `index.html`
   must be at the top level, not inside another folder). Include the hidden
   `.nojekyll` file.
   - Web: **Add file → Upload files**, drag the contents in, **Commit**.
   - Or with Git:
     ```bash
     git init
     git add .
     git commit -m "Portfolio"
     git branch -M main
     git remote add origin https://github.com/<username>/<username>.github.io.git
     git push -u origin main
     ```
3. Go to **Settings → Pages**, set **Source** to *Deploy from a branch*,
   branch `main`, folder `/ (root)`, and **Save**.
4. Wait 1–2 minutes, then open `https://<username>.github.io`.

**Option B — any repo name** (e.g. `portfolio`): same steps; the site appears at
`https://<username>.github.io/portfolio/`. All paths in this project are
relative, so it works in a sub-folder without changes.

## Files

```
index.html            page structure
assets/css/style.css  all styles and keyframe animations
assets/js/data.js     ← your content
assets/js/main.js     rendering + animation logic
assets/resume.pdf     ← your resume
assets/img/           project screenshots
.nojekyll             tells GitHub Pages to serve files as-is
```
