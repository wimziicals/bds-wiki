# server.properties

The server's main configuration: one `key=value` per line, comments starting with `#`. Keys and defaults were read from the file shipped with **1.26.66.1**. Restart after changes unless noted.

Keys are case-sensitive. If a key appears twice, the last one wins.

**Default** comes from that file, or Microsoft's reference where a line is commented out or absent. If your file says something different, your file wins. "Commented out" means the line ships disabled with `#`.

::: tip How to change a setting
1. Type `stop` in the server console and wait.
2. Open `server.properties` in Notepad or another text editor.
3. Change the text after `=` and save.
4. Start the server again.
:::

Prefer not to edit by hand? Use the [generator](./generator). Looking for ready-made lines? See [Common setups](../guide/recipes).

## Essentials

| Key | Default | Allowed and purpose |
|---|---|---|
| `server-name` | `Dedicated Server` | Display name; no semicolons |
| `gamemode` | `survival` | `survival`, `creative`, `adventure`; mode for new players |
| `force-gamemode` | `false` | Force `gamemode` over the value saved at world creation |
| `difficulty` | `easy` | `peaceful`, `easy`, `normal`, `hard` |
| `allow-cheats` | `false` | Allow cheat commands |
| `max-players` | `10` | Any positive integer |
| `level-name` | `Bedrock level` | Folder under `worlds/`; case matters |
| `level-seed` | none | Seed for new world generation |
| `default-player-permission-level` | `member` | `visitor`, `member`, `operator` |
| `texturepack-required` | `false` | Force players to use the world's resource packs |

## Authentication and joining

| Key | Default | Allowed and purpose |
|---|---|---|
| `online-mode` | `true` | Require Xbox authentication; remote clients always need it |
| `allow-list` | `true` (since 26.30) | Only [allowlisted](./allowlist) players may join |
| `allow-player-joining` | `true` | If `false`, only a script can admit players |
| `player-idle-timeout` | `30` | Minutes before an idle kick; `0` disables |

## Network

| Key | Default | Allowed and purpose |
|---|---|---|
| `transport` | `nethernet` (since 26.50) | `nethernet`. `raknet` starts, but prints that players cannot connect |
| `server-port` | `19132` | 1 to 65535 |
| `server-portv6` | `19133` | Ignored with NetherNet |
| `server-ip` | empty | Bind address; empty is all interfaces. Ignored with RakNet |
| `server-udp-ports` | `19132` | NetherNet UDP ports; [syntax](../network/server-udp-ports) |
| `enable-lan-visibility` | `true` | LAN discovery; under RakNet also binds 19132 and 19133 |
| `compression-threshold` | `1` | 0 to 65535; smallest payload to compress |
| `compression-algorithm` | `zlib` | `zlib` or `snappy` |
| `block-network-ids-are-hashes` | `true` | Use stable hashed block network IDs |

## Performance and world loading

| Key | Default | Allowed and purpose |
|---|---|---|
| `view-distance` | `32` | Chunks, 5 or more |
| `tick-distance` | `4` | Chunks, 4 to 12 |
| `max-threads` | `8` | `0` or removed means as many as possible |
| `client-side-chunk-generation-enabled` | `true` | Let clients generate visual-only distant chunks |
| `server-build-radius-ratio` | `Disabled` | `Disabled`, or 0.0 to 1.0; needs client-side generation |
| `persistent-ticking-area-max-count` | `10` | Positive integer up to 2147483647, or `unlimited` |
| `persistent-ticking-area-max-chunks` | `100` | Same; per new area |
| `transient-ticking-area-max-chunks` | `300` | Same; aggregate unique chunks per behavior pack |

The ticking-area keys arrived in 26.60. [More](../worlds/ticking-areas).

## Server-authoritative gameplay

| Key | Default | Allowed and purpose |
|---|---|---|
| `server-authoritative-movement-strict` | `false` | Stricter positions, more corrections with latency |
| `server-authoritative-dismount-strict` | `false` | Stricter dismount positions |
| `server-authoritative-entity-interactions-strict` | `false` | Stricter entity interaction |
| `server-authoritative-entity-attack-request-validation` | `disabled` | `disabled`, `observe`, `enforce` (26.60) |
| `server-authoritative-entity-attack-range-validation` | `disabled` | `disabled`, `observe`, `enforce` (26.60) |
| `server-authoritative-entity-attack-range-tolerance` | `0.5` | Extra blocks; finite and not negative |
| `player-position-acceptance-threshold` | `0.5` | Above 1.0 raises the chance of cheating |
| `player-movement-action-direction-threshold` | `0.85` | 0 to 1; 1 is an exact look/attack match. The bundled guide says -1 to 1 |
| `server-authoritative-block-breaking-pick-range-scalar` | `1.5` | Above 1.0. Squared, then multiplied by the normal reach |

See [anti-cheat settings](../security/anti-cheat).

## Player behavior and privacy

| Key | Default | Allowed and purpose |
|---|---|---|
| `chat-restriction` | `None` | `None`; `Dropped` discards messages; `Disabled` hides chat except for operators |
| `disable-player-interaction` | `false` | Ask clients to ignore other players; **not** authoritative |
| `disable-custom-skins` | `false` | Block skins customized outside store or game assets |
| `disable-persona` | `false` | Internal use only |
| `disable-client-vibrant-visuals` | Commented out (`true`) | Ask clients not to use Vibrant Visuals |
| `emit-server-telemetry` | Off | Send server telemetry; the server suggests opting in with `true` |

## Content log

| Key | Default | Allowed and purpose |
|---|---|---|
| `content-log-file-enabled` | `false` | Write content errors to a file |
| `content-log-console-output-enabled` | `false` | Print them to the console |
| `content-log-level` | `info` | `error`, `warning`, `info`, `verbose` |

## Script debugger

| Key | Default | Allowed and purpose |
|---|---|---|
| `allow-outbound-script-debugging` | `false` | Allow debugger `connect` |
| `allow-inbound-script-debugging` | `false` | Allow debugger `listen` |
| `force-inbound-debug-port` | `19144` | Lock listener port |
| `script-debugger-listen-address` | loopback | Non-loopback requires a passcode (26.50) |
| `script-debugger-auto-attach` | `disabled` | `disabled`, `connect`, `listen` |
| `script-debugger-auto-attach-connect-address` | `localhost:19144` | `host:port` |
| `script-debugger-auto-attach-timeout` | `0` | Wait at world load |
| `script-debugger-passcode` | none | Passcode prompted by VS Code. **Printed in the startup log** |

## Script watchdog

| Key | Default | Purpose |
|---|---|---|
| `script-watchdog-enable` | `true` | Enable watchdog |
| `script-watchdog-enable-exception-handling` | `true` | Allow the terminate event |
| `script-watchdog-enable-shutdown` | `true` | Shut down after an unhandled watchdog exception |
| `script-watchdog-hang-exception` | `true` | Interrupt scripts on a hang |
| `script-watchdog-hang-threshold` | `10000` | Single-tick hang, ms |
| `script-watchdog-spike-threshold` | `100`* | Single-tick spike warning |
| `script-watchdog-slow-threshold` | `10`* | Slow scripts over several ticks |
| `script-watchdog-memory-warning` | `100` | MB; `0` disables; max 2000 |
| `script-watchdog-memory-limit` | `250` | MB; saves and shuts down; `0` disables; max 2000 |

\* Microsoft lists these values, but the file says the warning is disabled when unset.

## Diagnostics and Editor

| Key | Default | Purpose |
|---|---|---|
| `diagnostics-capture-auto-start` | `false` | Start capture at level load |
| `diagnostics-capture-max-files` | `5` | Files kept |
| `diagnostics-capture-max-file-size` | `2097152` | Bytes per file |
| `sentry-rate-limit-window` | `60` | Seconds; `0` disables limits |
| `sentry-max-events-per-window` | `10` | `0` disables sending |
| `enable-profiler` | Commented out (`true`) | Profiler support |
| `enable-editor-network-metrics` | Commented out (`true`) | Live metrics for the debugger |
| `convert-world-to-editor-project` | Commented out (`false`) | Needs `Editor=true`; [read first](../operations/editor) |

## Hidden settings

BDS reads many more settings than its file lists, including `enable-player-connection-text` and `level-type`. See [Hidden server properties](./hidden-properties) for all of them.

## Removed keys

`server-authoritative-sound` and `server-authoritative-block-breaking` left the default file in 1.21.0. Microsoft's page still lists the latter.

Sources: [Microsoft reference](https://learn.microsoft.com/en-us/minecraft/creator/documents/bedrockserver/server-properties), [26.50](https://feedback.minecraft.net/hc/en-us/articles/48826825649933), [26.60](https://feedback.minecraft.net/hc/en-us/articles/49852828563853).
