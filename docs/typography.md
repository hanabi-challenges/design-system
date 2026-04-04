# Typography

## Font stack

| Role    | Family           | Weight | Usage                                                |
| ------- | ---------------- | ------ | ---------------------------------------------------- |
| Display | Permanent Marker | 400    | Hero text, page titles (h1)                          |
| Heading | Permanent Marker | 400    | Section headings (h2–h5)                             |
| Body    | Inter            | 400    | All UI text, labels, inputs                          |
| Prose   | Inter            | 400    | Long-form reading content (temporarily matches body) |
| Mono    | Roboto Mono      | 400    | Seeds, code, technical values                        |
| Meta    | Inter            | 400    | Captions, tooltips, microcopy                        |

## Loading fonts

The design system references fonts by name only — it does not bundle or load them. Consuming applications must load the fonts themselves. The recommended approach is a single Google Fonts `<link>` in the HTML `<head>`:

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  href="https://fonts.googleapis.com/css2?family=Inter:wght@400&family=Permanent+Marker&family=Roboto+Mono:wght@400&display=swap"
  rel="stylesheet"
/>
```

Only request the weights you use. All DS font roles use weight 400.

## Heading levels

The `Heading` component maps semantic levels to text styles:

| Level | Style      | Size | Family           |
| ----- | ---------- | ---- | ---------------- |
| 1     | display.md | 40px | Permanent Marker |
| 2     | heading.lg | 34px | Permanent Marker |
| 3     | heading.md | 28px | Permanent Marker |
| 4     | heading.sm | 24px | Permanent Marker |
| 5     | heading.xs | 20px | Permanent Marker |
| 6     | body.lg    | 20px | Inter            |

Level 6 intentionally uses the body font — it is a minor label, not a display heading.
