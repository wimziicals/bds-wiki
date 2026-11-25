# config/commands.json

Choose who can use each command. Make one command available to everyone, restrict another, or turn it off.

::: tip Do you need this?
To make a friend an admin, use [`op`](./permissions). Use `commands.json` only to change what a **command** requires.
:::

## Set it up

1. Stop the server.
2. Open the `config` folder beside `server.properties`.
3. Create `commands.json` if it does not exist.
4. Paste an example below.
5. Save and start the server.

A minimal example, letting everyone use `gamemode`:

```json
{
  "permission_levels": {
    "gamemode": "any"
  }
}
```

An empty file containing `{}` changes nothing.

## The two settings

| Key | Purpose |
|---|---|
| `permission_levels` | Level required for each named command |
| `default_permission_level` | Level for every command **not** listed |

Write command names without `/`. Leave out `default_permission_level` unless you intend to change every unlisted command.

## Levels

Lowest first:

| Number | Value | Who |
|---|---|---|
| 0 | `any` | Everyone |
| 1 | `game_directors` | Game-director level or higher |
| 2 | `admin` | Admin level or higher |
| 3 | `host` | Host level or higher |
| 4 | `owner` | Owner level or higher |
| 5 | `internal` | Nobody. This blocks **the console too** |

These are **command levels**, not the player roles in `permissions.json` (`visitor`, `member`, `operator`). Do not put `admin` or `owner` in `permissions.json`. The numeric order is conventional; the hidden [`op-permission-level`](./hidden-properties#players-and-permissions) appears to choose what operators receive.

## Examples

### Let everyone teleport and change game mode

```json
{
  "permission_levels": {
    "teleport": "any",
    "gamemode": "any"
  }
}
```

### Turn off some commands

```json
{
  "permission_levels": {
    "me": "internal",
    "tell": "internal"
  }
}
```

### Use the main name

Aliases follow the main command, and entries for an alias are ignored:

| Use this | It also covers |
|---|---|
| `teleport` | `tp` |
| `tell` | `msg`, `w` |
| `allowlist` | `whitelist` |
| `permission` | `ops` |
| `help` | `?` |

We confirmed that `tp`, `whitelist`, and `ops` entries do nothing on 1.26.66.1. The [error message](#if-it-does-not-work) shows a command's main name.

### Keep powerful commands at owner level

```json
{
  "permission_levels": {
    "stop": "owner",
    "op": "owner",
    "deop": "owner",
    "kick": "admin"
  }
}
```

::: danger Avoid locking yourself out
Never make `stop` or `default_permission_level` internal. In our test `stop` then failed in the console and the server had to be killed. If locked out, stop the process through your host, rename `commands.json`, and start again. A forced stop can lose recent progress.
:::

## If it does not work

- Read the startup log. A bad level name or broken JSON prints `Failed to parse JSON in file 'config/commands.json'`. The server still starts, and **ignores the whole file**.
- `Incorrect permission level for command: teleport.` means your file is working.
- Validate the JSON: use double quotes and no comma after the last item.
- Use the path `config/commands.json`, not `config/default/commands.json`.
- Remove `/` from command names.
- Restart. `reloadconfig` and `permission reload` do **not** reload this file.
- Commands marked as cheats may still need `allow-cheats=true`.
- This works on your own BDS, not Realms.

Sources: tests on BDS 1.26.66.1 and [Jayly's command-permissions guide](https://jaylydev.github.io/posts/bds-commands-config/). Jayly's sample role descriptions differ from BDS's player-role names, so this page uses the schema's level names only.
