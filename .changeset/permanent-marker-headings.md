---
"@hanabi-challenges/design-system": minor
---

Replace heading typeface: Pacifico → Permanent Marker

The `display` and `heading` font families now use "Permanent Marker" instead
of "Pacifico". Body, prose, mono, and meta families are unchanged.

Consuming applications that load fonts via Google Fonts should update their
`<link>` to request `Permanent+Marker` instead of `Pacifico`. See
`docs/typography.md` for the updated snippet.
