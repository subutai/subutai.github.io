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

## Optional per-image caption / size
Add a `fig` object to that entry in `career.js` to caption an image or shrink
its displayed size:

```js
"fig": { "caption": "Shown under the image.", "scale": 0.6 }
```
- `caption` — text under the image (omit → no caption)
- `scale`   — 0–1 fraction of the displayed width (e.g. 0.6 = 60%; omit → full width)
