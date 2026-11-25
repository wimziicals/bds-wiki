# Updating safely

A new ZIP contains fresh copies of your configuration. Extracting it over an existing server can overwrite `server.properties`, `allowlist.json`, and `permissions.json`.

1. Run `stop` and wait for the process to exit.
2. Back up the whole server folder.
3. Extract the new version into a **new, empty folder**.
4. Copy across what is yours:

| Copy | Notes |
|---|---|
| `worlds/` | Your worlds and their packs |
| `keys/` | Your saved [server identity](../security/server-identity) |
| `allowlist.json`, `permissions.json` | Access and roles |
| `config/` | Script permissions, variables, secrets |
| `packetlimitconfig.json`, `cdn_config.json` | Only if customized |
| Your own packs | Not the bundled `vanilla*` or `chemistry*` packs |

5. Merge your values into the **new** `server.properties`. Do not replace it, or you will miss new keys.
6. Start, read the log, and test a join before deleting the old folder.

::: danger Do not downgrade a world
Once a newer version has opened a world, restore a backup rather than opening it in an older server.
:::

## Upgrading to 26.50 or later

- Set `transport=nethernet`. Older configuration files may contain `raknet`.
- Open TCP and the UDP ports you use.
- Run `serveridentity save` once, then back up `keys/`.
- Upgrade old proxies and tunnels, or check they support NetherNet.
