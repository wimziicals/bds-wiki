# Gameplay commands

Short descriptions of standard commands. For server management commands such as `allowlist`, `stop`, and `save`, see [Commands](./commands).

**In the console:** leave off `/`. `help <command>` shows the syntax your version accepts. Commands that work from the player's position usually need `execute` first:

```text
execute as "Gamertag" at @s run fill ~ ~ ~ ~5 ~5 ~5 stone
```

Some commands need `allow-cheats=true`, and some are Education-only or experimental. Change who may use a command with [`commands.json`](../config/commands-json).

## Players

| Command | Purpose |
|---|---|
| `clear` | Remove items from an inventory |
| `clearspawnpoint` | Remove a saved spawn point |
| `effect` | Add or remove an effect |
| `enchant` | Enchant a held item |
| `gamemode` | Change game mode |
| `give` | Give an item |
| `inputpermission` | Control player input |
| `hud` | Show or hide interface parts |
| `loot` | Give or spawn loot |
| `recipe` | Unlock or lock recipes |
| `replaceitem` | Replace an inventory item |
| `spawnpoint` | Set a player's spawn |
| `tag` | Add or remove a label |
| `tp`, `teleport` | Move players or entities |
| `xp` | Change experience |

## World

| Command | Purpose |
|---|---|
| `alwaysday`, `daylock` | Lock daylight |
| `clone` | Copy blocks |
| `difficulty` | Set difficulty |
| `fill` | Fill an area |
| `fog` | Control fog |
| `gamerule` | Read or change a rule |
| `locate` | Find a structure or biome |
| `mobevent` | Toggle mob events |
| `place` | Place a structure or feature |
| `setblock` | Set one block |
| `setworldspawn` | Set world spawn |
| `structure` | Save, load, or delete structures |
| `tickingarea` | Manage [ticking areas](../worlds/ticking-areas) |
| `time` | Read or change time |
| `toggledownfall`, `weather` | Control weather |

## Entities

| Command | Purpose |
|---|---|
| `damage` | Deal damage |
| `event` | Trigger an entity event |
| `kill` | Remove entities |
| `playanimation` | Play an animation |
| `ride` | Control riding |
| `spreadplayers` | Scatter targets |
| `summon` | Create an entity |
| `testfor` | Count matching targets |

## Chat, sound and camera

| Command | Purpose |
|---|---|
| `camera` | Control a player's camera |
| `camerashake` | Shake the camera |
| `dialogue` | Open or change NPC dialogue |
| `me` | Action-style message |
| `music` | Control music |
| `particle` | Show particles |
| `playsound`, `stopsound` | Control sounds |
| `say` | Message everyone |
| `tell`, `msg`, `w` | Private message |
| `tellraw`, `titleraw` | JSON-formatted text |
| `title` | On-screen title |

## Automation

| Command | Purpose |
|---|---|
| `execute` | Run a command as, at, or under a condition |
| `function` | Run a behavior-pack function |
| `schedule` | Run a function later |
| `scoreboard` | Manage scores |
| `scriptevent` | Send an event to scripts |
| `testforblock`, `testforblocks` | Compare blocks |
| `wsserver`, `connect` | Connect to a WebSocket server |

## Less common

| Command | Purpose |
|---|---|
| `aimassist` | Control aim assist |
| `controlscheme` | Change a player's control scheme |
| `gametest` | Run and manage GameTests |

## Not in the server's list

The game's language files also name these, but the 1.26.66.1 server does not list them, even with cheats on.

`ability`, `gametips`, `closewebsocket`, `gettopsolidblock`, `querytarget`, `achievement`, `classroommode`, `clearfixedinv`, `clearrealmevents`, `code`, `compactdb`, `corruptworld`, `debug`, `educlientinfo`, `getchunkdata`, `getchunks`, `getlocalplayername`, `getspawnpoint`, `globalpause`, `immutableworld`, `itemswithtag`, `lesson`, `setfixedinvslot`, `setfixedinvslots`, `setmovementauthority`, `tagsfromitem`, `validategamelighting`, `volumearea`, `worldbuilder`

For exact arguments, see [Command syntax](./command-syntax).
