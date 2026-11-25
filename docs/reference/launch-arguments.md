# Launch arguments

BDS uses `Key=value` arguments.

| Argument | Purpose | Evidence |
|---|---|---|
| `Editor=true` | [Editor mode](../operations/editor) | Mojang, bundled comments |
| `PackOptimizerConfigPath=<file>` | [Optimize packs](../worlds/pack-optimization) and exit | Microsoft |
| `ExperimentalPacksUpgraderConfigPath` | Purpose unknown | Name in executable only |

There are no documented arguments for heap memory, port, or world: use `server.properties` and the working directory.

## Exit codes

Seen on Windows 1.26.66.1:

| Code | Cause |
|---|---|
| `0` | Clean stop, **or** a bad [system pack](../worlds/system-packs) |
| `2` | Bad setup: invalid [identity key](../security/server-identity), bad [packet limits](../config/packet-limits), or allowlist on with online mode off |
| `7` | [Pack optimizer](../worlds/pack-optimization) failed |

On Linux, set `LD_LIBRARY_PATH=.` in the environment before the executable.
