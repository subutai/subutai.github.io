# Publication PDFs

Drop publication PDFs in this folder, then link them from `publications.js`.

## How to link a PDF
1. Add the PDF here, e.g. `papers/ahmad-2016-neurons.pdf`
2. In `publications.js`, add a `"pdf"` field to that paper's entry:

   ```js
   {"title":"How do neurons operate…", …, "link":"https://arxiv.org/abs/1601.00720",
    "pdf":"papers/ahmad-2016-neurons.pdf"}
   ```

3. Commit both the PDF and `publications.js`.

The dashed "＋ add PDF" placeholder on that paper becomes a real "PDF ↓" link.
The path is relative to the site root, so `papers/…` works on the homepage and
on the theme pages.

## Naming suggestion
Keep filenames lowercase with no spaces. A simple, sortable convention:

```
<lastname>-<year>-<short-slug>.pdf
```

For example:
- `ahmad-2016-neurons.pdf`
- `ahmad-2017-anomaly-detection.pdf`
- `hawkins-2019-grid-cells.pdf`

(You can also skip this folder entirely and point `"pdf"` at a full URL hosted
elsewhere — both work.)
