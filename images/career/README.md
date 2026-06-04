# Career images

Each section on `career.html` has one image slot. Drop a file here and it
appears automatically (until then, a dashed placeholder is shown).

Naming convention — one image per career slug:

- `images/career/<slug>.<ext>`

Supported formats: **.jpg, .jpeg, .png, .gif, .webp** — the page tries each and
uses whichever file exists, so no code change is needed (a logo, photo, or even
an animated GIF all work).

Career slugs:

- `numenta`
- `yesvideo`
- `eplanet`
- `interval-research`

## Optional per-image size & caption (edit `career.js`)
Two independent knobs on the career entry:

- **Size** — `scale`: displayed width as a **percent** of the column.
  e.g. `"scale": 60` shows the image at 60% width. Omit for full width.
  (Values ≤ 1 are still read as a 0–1 fraction.)
- **Caption** — `fig`: `"fig": { "caption": "Shown under the image." }`

```js
// in career.js, on a career entry:
"scale": 60,
"fig": { "caption": "The YesVideo team, 2003." }
```
