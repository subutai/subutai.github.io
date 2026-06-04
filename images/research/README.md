# Research theme images

Each theme detail page (`research-theme.html#<slug>`) has two image slots — a
lead image and a supporting image. Drop files here and they appear
automatically (until then, a dashed placeholder is shown in their place).

Naming convention per theme slug:

- `images/research/<slug>-1.<ext>`  — lead image (shown under the title)
- `images/research/<slug>-2.<ext>`  — supporting image (shown after the text)

Supported formats: **.jpg, .jpeg, .png, .gif, .webp** — the page tries each and
uses whichever file exists, so no code change is needed. For example, a lead
image for Sparsity can be any of `images/research/sparsity-1.jpg`,
`sparsity-1.png`, or `sparsity-1.gif`.

Theme slugs:

- `sparsity`
- `cortical-theory`
- `continual-learning`
- `anomaly-detection`
- `vision-attention`
- `neural-net-foundations`

## Per-image size & caption (edit `themes.js`)

Each of the two images is tuned independently on its theme object:

- **Size** — `scale1` (image 1) and `scale2` (image 2): displayed width as a
  **percent** of the text column. e.g. `"scale1": 60` shows the lead image at
  60% width. Omit for full width. (Values ≤ 1 are still read as a 0–1 fraction.)
- **Caption** — `fig1` / `fig2`: `"fig1": { "caption": "Shown under the image." }`

```js
// in themes.js, on the sparsity theme:
"scale1": 80,
"fig1": { "caption": "Video of cells firing in a mouse neocortex." }
```
