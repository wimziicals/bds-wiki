# Performance

Strong single-thread performance often matters more than many slow cores. Allow enough memory for the world, players, packs, and scripts; there is no launch heap size.

Change one setting at a time:

| Setting | Start | Effect |
|---|---|---|
| `tick-distance` | 4 | Higher simulates more chunks |
| `view-distance` | 10–16 | Higher sends and loads more |
| `max-players` | Realistic peak | Avoid excess capacity |
| `compression-threshold` | 256–512 | Higher uses more bandwidth, less CPU |
| `compression-algorithm` | Test `snappy` | Usually less CPU, weaker compression |

These starting points are advice, not measured recommendations.

## Investigate

1. Compare with packs disabled on a **copy** of the world.
2. Check entity counts, hoppers, redstone, and ticking areas.
3. Use the [script profiler](../scripting/debugging#profiler).
4. Watch disk latency as well as CPU and RAM.

Minecraft Wiki notes that a heavily loaded server can appear stuck despite low overall CPU, consistent with a single-thread bottleneck. Preview 26.70.20 adds optional performance warnings with configurable tick-time thresholds and cooldowns.
