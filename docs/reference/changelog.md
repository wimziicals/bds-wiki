# BDS changelog

BDS-relevant changes extracted from Mojang's official notes. Game-only changes are omitted. This is not exhaustive: some server changes were never listed, and some notes may not name the server.

## 2026

### Preview 26.70 (in development)
- Performance warnings with tick thresholds and cooldowns (26.70.20).
- Linux pack optimization (26.70.22).
- NetherNet UDP defaults to a shared port matching `server-port`; correct public address and mapping advertisement (26.70.23).
- Invalid network settings stop startup; IP prefixes in `server-udp-ports` deprecated in favor of `server-public-ip` (26.70.23).
- PackOptimizer output modes: `brpak`, `brarchive`, `unpacked` (26.70.23).
- Packs depending on `@minecraft/common` or `server-graphics` no longer rejected by default configurations (26.70.24).

### 26.60
- Entity attack request and range validation.
- Configurable persistent and transient ticking-area limits.
- Incompatible allowlist and online-mode settings exit cleanly.
- RakNet warning became an error.
- server-admin level-storage methods return promises.

[Official notes](https://feedback.minecraft.net/hc/en-us/articles/49852828563853)

### 26.50
- [`serveridentity`](../security/server-identity) command.
- NetherNet became the default.
- Correct Windows application-data directory.
- Option to unpack optimized creator packs.
- System-pack settings fixed; broken system packs stop startup.
- Allowlist script APIs changed.

[Official notes](https://feedback.minecraft.net/hc/en-us/articles/48826825649933)

### 26.40
- Pack optimization mode.
- NetherNet client probe.
- World seed hidden from non-operators.
- Content-log file creation fixed.
- Expanded allowlist script APIs.

[Official notes](https://feedback.minecraft.net/hc/en-us/articles/47787720931213)

### 26.30
- Allowlist enabled by default.
- System pack folders.
- Vanilla world to Editor project conversion.
- server-net uses script module ID for config; WebSocket headers.

[Official notes](https://feedback.minecraft.net/hc/en-us/articles/46570672409997)

### 26.20
- Script WebSockets, kick, op, deop, and reload APIs.
- `force_https` renamed `force_tls`.

[Official notes](https://feedback.minecraft.net/hc/en-us/articles/45400537384333)

### 26.12
- Allowlist issue fixed (MCPE-237527).

### 26.10
- HTTP permission limits and Editor metrics toggle.
- `dedicatedServer`, level storage, and allowlist script APIs.

[Official notes](https://feedback.minecraft.net/hc/en-us/articles/44418129038733)

### 26.0
- `packstack` command (per Minecraft Wiki).

## 2025

| Version | Change |
|---|---|
| 1.21.100 | `reloadpacketlimitconfig` (per Minecraft Wiki) |
| 1.21.90 | NetherNet player transfers; Vibrant Visuals server setting; Sentry DSN secrets |
| 1.21.70 | Sentry module; stricter authority settings |
| 1.21.62 | Entity interaction strictness |
| 1.21.60 | Movement authority shown at launch; Editor project loading improved |

## 2018–2024

| Version | Change |
|---|---|
| 1.21.50 | server-net packet before-events |
| 1.21.0 | Old sound and block-breaking authority properties removed from defaults |
| 1.20.30 | Ubuntu 20.04 minimum; chunk memory leak fixed |
| 1.20.0 | Content-log console properties |
| 1.19.50 | LAN visibility and client-side chunk toggles |
| 1.19.40 | Script modules renamed to `@minecraft/server-admin` and `server-net` |
| 1.19.20 | `chat-restriction`; watchdog properties |
| 1.19.0 | Script modules require permission; UTF-16 Windows console input |
| 1.17.0 | Whitelist renamed allowlist |
| 1.16.210 | Illegal names sanitized; permission command docs corrected |
| 1.12.0 | Content logging on BDS |
| 1.6.1 | Alpha test mentioned in official notes |

See [Mojang release changelogs](https://feedback.minecraft.net/hc/en-us/sections/360001186971).
