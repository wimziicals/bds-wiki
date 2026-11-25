# Common setups

Copy the lines you need, or build a whole file with the [generator](../config/generator). **Change an existing line rather than adding the same key twice**, then restart.

## Private survival with friends

```properties
gamemode=survival
difficulty=normal
max-players=10
online-mode=true
allow-list=true
default-player-permission-level=member
```

Add each person with `allowlist add "Gamertag"`.

## Creative building server

```properties
gamemode=creative
force-gamemode=true
difficulty=peaceful
allow-cheats=true
default-player-permission-level=member
```

## Flat world

```properties
level-name=My Flat World
level-type=FLAT
```

`level-type` is [hidden](../config/hidden-properties#worlds-and-gameplay) and affects only a newly generated world. Use a new `level-name`.

## Public server

```properties
online-mode=true
allow-list=false
default-player-permission-level=member
allow-cheats=false
```

Read the [security checklist](../security/hardening) first. Never make the default level `operator`.

## Look-only server

```properties
gamemode=adventure
force-gamemode=true
default-player-permission-level=visitor
```

## Hide automatic chat messages

```properties
enable-player-connection-text=false
enable-player-sleeping-text=false
enable-player-changed-skin-text=false
```

## Require the resource pack

```properties
texturepack-required=true
```

[Install the pack first](../worlds/packs).

## Quiet chat

```properties
chat-restriction=Dropped
```

Use `Disabled` to hide chat from non-operators.

## Let everyone use one command

In `config/commands.json`:

```json
{ "permission_levels": { "gamemode": "any" } }
```

[More examples](../config/commands-json).

## Help a slow server

```properties
view-distance=10
tick-distance=4
max-threads=0
```

Change one setting at a time. [Performance guide](../operations/performance).

## Use a different port

```properties
server-port=19142
server-udp-ports=19142
```

Forward 19142 over TCP and UDP.

## Keep LAN players from discovering it

```properties
enable-lan-visibility=false
```
