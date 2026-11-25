# Ticking areas

A ticking area keeps chunks simulating without a nearby player. Since 26.60, BDS limits are configurable:

| Key | Limits |
|---|---|
| `persistent-ticking-area-max-count` | Saved areas across all dimensions |
| `persistent-ticking-area-max-chunks` | Chunks in a newly added persistent area |
| `transient-ticking-area-max-chunks` | Unique chunks across transient areas, per behavior pack |

Each accepts a positive integer up to 2147483647, or `unlimited`. Lowering a limit does not remove existing areas. `unlimited` removes the configured limit, not hardware or data-representation limits.

::: warning
Large values can severely affect CPU and memory. Raise gradually.
:::

Use `tickingarea list all-dimensions` to review areas.
