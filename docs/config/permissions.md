# Operators and permissions

| Level | Typical use |
|---|---|
| `visitor` | Can look around but not build |
| `member` | Normal play |
| `operator` | Administrative access |

`default-player-permission-level` sets the level for **new** players.

```text
op "Gamer Tag"
deop "Gamer Tag"
```

The player must be online. If they are not signed in to Xbox, the change lasts only for the session.

`permissions.json` needs `online-mode=true`. It stores roles by XUID:

```json
[
  { "permission": "operator", "xuid": "0000000000000000" }
]
```

Reload manual edits with `permission reload` and inspect them with `permission list`. `ops` is an alias. Some Microsoft text says `permissions`, which 1.26.66.1 rejects.

Want to change what a **command** requires? See [commands.json](./commands-json).

::: danger
Do not set `default-player-permission-level=operator` on a public server. Every new player would become an operator.
:::
