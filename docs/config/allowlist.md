# Allowlist

With `allow-list=true`, only listed players can join. Since 26.30 this is on in the default `server.properties`, and an empty list produces a startup warning. Microsoft's reference still lists the old `false` default.

| Command | Result |
|---|---|
| `allowlist add "Gamer Tag"` | Add a player |
| `allowlist remove "Gamer Tag"` | Remove a player |
| `allowlist list` | List entries |
| `allowlist on` / `allowlist off` | Toggle |
| `allowlist reload` | Read external file edits |

`on` and `off` do not change `server.properties`. Use quotes when a Gamertag contains spaces.

## File format

```json
[
  { "ignoresPlayerLimit": false, "name": "MyPlayer" },
  { "ignoresPlayerLimit": true, "name": "AnotherPlayer", "xuid": "0000000000000000" }
]
```

`xuid` is optional. It is filled in when a matching player connects. `ignoresPlayerLimit` lets someone join a full server, subject to a soft cap of 30 or `max-players + 1`, whichever is higher.

## Requires online mode

The game rejects allowlisting without online authentication. Since 26.60 the server exits (code `2` on 1.26.66.1) if `allow-list=true` and `online-mode=false`, saying `Using an allowlist without online authentication can be dangerous and is not allowed.` Keep `online-mode=true`.

## History

Before 1.17.0 this was `whitelist` and `whitelist.json`. A `whitelist.json`, if present, is **used instead of** `allowlist.json`. To move over: stop the server, delete the default `allowlist.json`, and rename `whitelist.json` to `allowlist.json`. The `whitelist` command still works as an alias. Scripts can manage it with [`dedicatedServer.allowList`](../scripting/server-admin#allowlist).
