# Commands

Type commands in the server console without `/`. Run `help` for your version's authoritative list, and `help <command>` for its syntax.

Checked on BDS **1.26.66.1**. For the exact syntax of every command, see [Command syntax](./command-syntax).

## Server lifecycle

| Command | Purpose |
|---|---|
| `stop` | Save and shut down cleanly |
| `save hold` | Prepare a live backup |
| `save query` | Check readiness and list files |
| `save resume` | Resume normal writes |
| `reload` | Reload functions and scripts |
| `reload all` | Reload world, resource packs, and behavior packs |
| `reloadconfig` | Reload script variables, secrets, permissions, and the [CDN config](../config/cdn). Follow with `reload all` if a script failed to load |
| `reloadpacketlimitconfig` | Reload packet limits |

## Identity

| Command | Purpose |
|---|---|
| `serveridentity save` | Keep the [identity key](../security/server-identity) |
| `serveridentity status` | Check for a saved key |
| `serveridentity delete` | Delete the saved key |

## Access

| Command | Purpose |
|---|---|
| `allowlist add <name>` / `remove <name>` | Change the [allowlist](../config/allowlist) |
| `allowlist on` / `off` / `list` / `reload` | Manage it |
| `op <player>` / `deop <player>` | Change operator status. The player must be online |
| `permission list` / `reload` | Show or reload roles. Alias: `ops`. There is no `permissions` command |
| `kick <player> <reason>` | Disconnect a player by name or XUID |
| `list` | Show online players |
| `setmaxplayers <number>` | Change the limit for this session |

## Runtime settings

| Command | Purpose |
|---|---|
| `changesetting allow-cheats <true\|false>` | Change cheats |
| `changesetting difficulty <value>` | Change difficulty |
| `gamerule [rule] [value]` | Read or set game rules |

`allowlist on`/`off`, `setmaxplayers`, and `changesetting` do not update `server.properties`.

## Diagnostics and packs

| Command | Purpose |
|---|---|
| `packstack <client\|server> [verbose] [exclude-vanilla]` | Show loaded packs |
| `script debugger connect [host] [port]` | Connect to VS Code |
| `script debugger listen <port>` | Await VS Code |
| `script debugger close` | Disconnect |
| `script profiler start` / `stop` | Profile scripts |
| `script diagnostics startcapture` / `stopcapture` | Record [diagnostics](../scripting/diagnostics#captures) |
| `editor-allowlist reload` | Reload the Editor allowlist |

## Players and store

| Command | Purpose |
|---|---|
| `transfer <player> <address> [port]` | Send a player to another server |
| `sendshowstoreoffer …` | Show a store offer; see [syntax](./command-syntax#sendshowstoreoffer) |

See [Gameplay commands](./gameplay-commands) for `give`, `tp`, and the rest. Change who may use commands with [`commands.json`](../config/commands-json).
