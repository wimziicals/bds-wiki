# Things you may not know about BDS

Features that are easy to miss, newest first.

| Feature | Available since | Why it matters |
|---|---|---|
| [Entity attack validation](../security/anti-cheat#attack-validation) | 26.60 | Observe or enforce attack type and range |
| [Ticking area limits](../worlds/ticking-areas) | 26.60 | Raise or remove limits from `server.properties` |
| [RakNet startup error](../network/nethernet) | 26.60 | RakNet is deprecated |
| [Server Identity](../security/server-identity) | Preview 26.50.24; release 26.50 | Keeps players' trust across restarts |
| [NetherNet by default](../network/nethernet) | 26.50 | You need TCP as well as UDP |
| [Pack optimization](../worlds/pack-optimization) | 26.40 | Packages loose files so players join faster |
| [Allowlist on by default](../config/allowlist) | 26.30 | New servers reject everyone until you add them |
| [System packs](../worlds/system-packs) | 26.30 | Packs that load automatically into every world |
| [WebSockets from scripts](../scripting/server-net#websockets) | 26.20 beta API | A live link to bots and dashboards |
| [HTTP limits](../scripting/module-permissions#limiting-server-net) | 26.10 | Restrict which URLs a script can reach |
| [`packstack`](../reference/commands#diagnostics-and-packs) | 26.0 | Shows the packs actually loaded |
| [Live packet-limit reload](../config/packet-limits) | 1.21.100 | No restart needed |
| [Sentry reporting](../scripting/diagnostics) | 1.21.70 beta API | Remote script error tracking |
| [`chat-restriction`](../config/server-properties#player-behavior-and-privacy) | 1.19.20 | Drop or disable chat |
| [`save hold`](../worlds/backups#live-backup) | Long-standing | Consistent backups while players are online |

Also worth knowing:

- [`config/commands.json`](../config/commands-json) changes who can use each command.
- [Hidden properties](../config/hidden-properties) can hide join messages and more.
- [`cdn_config.json`](../config/cdn) can make resource packs download much faster.
- `allow-player-joining=false` turns scripts into your join gate. See [server-admin](../scripting/server-admin#gate-joins).
- Put tokens in `secrets.json`, not script source. See [variables and secrets](../scripting/variables-secrets).
- `transferPlayer` accepts a NetherNet ID as well as a host and port, and its loading screen is customizable.
