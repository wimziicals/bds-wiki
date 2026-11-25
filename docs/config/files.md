# Files and folders

Paths are relative to the server's working directory.

| Path | Purpose | Back up? |
|---|---|---|
| `bedrock_server` / `.exe` | Server program | No |
| `server.properties` | [Main settings](./server-properties) | Yes |
| `allowlist.json` | [Who may join](./allowlist) | Yes |
| `permissions.json` | [Player roles](./permissions) | Yes |
| `config/commands.json` | [Who can use each command](./commands-json) | Yes |
| `keys/server_identity_key.pem` | [Saved identity key](../security/server-identity) | Yes, privately |
| `worlds/` | Worlds | Yes |
| `config/default/permissions.json` | [Script module permissions](../scripting/module-permissions) | Yes |
| `config/<script-module-uuid>/` | Per-script permissions, variables, secrets | Yes, privately |
| `config/<script-module-uuid>/variables.json` | [Script variables](../scripting/variables-secrets) | Yes |
| `config/<script-module-uuid>/secrets.json` | [Script secrets](../scripting/variables-secrets) | Yes, privately |
| `bedrock_server_how_to.html` | Mojang's bundled guide | No |
| `release-notes.txt` | Bundled release notes | No |
| `profanity_filter.wlist` | Word filter data | No |
| `packetlimitconfig.json` | [Packet rate limits](./packet-limits) | If edited |
| `cdn_config.json` | [CDN config](./cdn). Not in the ZIP; create it | Yes, if used |
| `packet-statistics.txt` | Packet statistics; Minecraft Wiki says a clean stop is needed | No |
| `behavior_packs/`, `resource_packs/` | Bundled and shared packs | Custom packs only |
| `system_behavior_packs/`, `system_resource_packs/` | [Auto-loaded packs](../worlds/system-packs) | Custom packs |
| `development_*_packs/` | Packs under development | Optional |
| `world_templates/` | World templates | Custom only |
| `definitions/`, `data/` | Bundled game data | No |

`keys/`, `cdn_config.json`, `config/commands.json`, and `system_*_packs/` are not in the ZIP: create them when needed. `worlds/`, `world_templates/`, and `development_*_packs/` appear on first run.

::: warning Two files named permissions.json
The root file grants **players** roles. `config/default/permissions.json` grants **scripts** access to modules.
:::
