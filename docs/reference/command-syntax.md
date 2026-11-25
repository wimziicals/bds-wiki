# Command syntax

Every command printed by the 1.26.66.1 server console with cheats on and no extra experiments. Your world's experiments can add more; `help` is always right for your server.

`<angle brackets>` are required, `[square brackets]` are optional. Do not type the brackets. The word after `:` is the kind of value.

| Kind | Type this |
|---|---|
| `target` | A player name, or a selector such as `@a` |
| `x y z` | Three coordinates |
| `int` / `float` | Whole number / decimal number |
| `Boolean` | `true` or `false` |
| `message` | The rest of the line |

Use your browser's find (Ctrl+F) or the page list on the right.

## aimassist

```text
aimassist <players: target> clear
aimassist <players: target> set [x angle: float] [y angle: float] [max distance: float] [target mode: AimAssistTargetMode] [preset id: string]
```

## allowlist

```text
allowlist <action: AllowListAction> [name: string]
```

## alwaysday

```text
alwaysday [lock: Boolean]
```

## camera

```text
camera <players: target> attach_to_entity <entity: target>
camera <players: target> clear
camera <players: target> detach_from_entity
camera <players: target> fade
camera <players: target> fade color <red: int> <green: int> <blue: int>
camera <players: target> fade time <fadeInSeconds: float> <holdSeconds: float> <fadeOutSeconds: float>
camera <players: target> fade time <fadeInSeconds: float> <holdSeconds: float> <fadeOutSeconds: float> color <red: int> <green: int> <blue: int>
camera <players: target> fov_clear [fovEaseTime: float] [fovEaseType: Easing]
camera <players: target> fov_set <fov_value: float> [fovEaseTime: float] [fovEaseType: Easing]
camera <players: target> play_spline <name: string>
camera <players: target> remove_target
camera <players: target> set <preset: string> [default: default]
camera <players: target> set <preset: string> ease <easeTime: float> <easeType: Easing> [default: default]
camera <players: target> set <preset: string> ease <easeTime: float> <easeType: Easing> entity_offset <xEntityOffset: float> <yEntityOffset: float> <zEntityOffset: float>
camera <players: target> set <preset: string> ease <easeTime: float> <easeType: Easing> facing <lookAtEntity: target>
camera <players: target> set <preset: string> ease <easeTime: float> <easeType: Easing> facing <lookAtPosition: x y z>
camera <players: target> set <preset: string> ease <easeTime: float> <easeType: Easing> pos <position: x y z>
camera <players: target> set <preset: string> ease <easeTime: float> <easeType: Easing> pos <position: x y z> facing <lookAtEntity: target>
camera <players: target> set <preset: string> ease <easeTime: float> <easeType: Easing> pos <position: x y z> facing <lookAtPosition: x y z>
camera <players: target> set <preset: string> ease <easeTime: float> <easeType: Easing> pos <position: x y z> rot <xRot: value> <yRot: value>
camera <players: target> set <preset: string> ease <easeTime: float> <easeType: Easing> rot <xRot: value> <yRot: value>
camera <players: target> set <preset: string> ease <easeTime: float> <easeType: Easing> rot <xRot: value> <yRot: value> entity_offset <xEntityOffset: float> <yEntityOffset: float> <zEntityOffset: float>
camera <players: target> set <preset: string> ease <easeTime: float> <easeType: Easing> rot <xRot: value> <yRot: value> view_offset <xViewOffset: float> <yViewOffset: float>
camera <players: target> set <preset: string> ease <easeTime: float> <easeType: Easing> rot <xRot: value> <yRot: value> view_offset <xViewOffset: float> <yViewOffset: float> entity_offset <xEntityOffset: float> <yEntityOffset: float> <zEntityOffset: float>
camera <players: target> set <preset: string> ease <easeTime: float> <easeType: Easing> view_offset <xViewOffset: float> <yViewOffset: float>
camera <players: target> set <preset: string> ease <easeTime: float> <easeType: Easing> view_offset <xViewOffset: float> <yViewOffset: float> entity_offset <xEntityOffset: float> <yEntityOffset: float> <zEntityOffset: float>
camera <players: target> set <preset: string> entity_offset <xEntityOffset: float> <yEntityOffset: float> <zEntityOffset: float>
camera <players: target> set <preset: string> facing <lookAtEntity: target>
camera <players: target> set <preset: string> facing <lookAtPosition: x y z>
camera <players: target> set <preset: string> pos <position: x y z>
camera <players: target> set <preset: string> pos <position: x y z> facing <lookAtEntity: target>
camera <players: target> set <preset: string> pos <position: x y z> facing <lookAtPosition: x y z>
camera <players: target> set <preset: string> pos <position: x y z> rot <xRot: value> <yRot: value>
camera <players: target> set <preset: string> rot <xRot: value> <yRot: value>
camera <players: target> set <preset: string> rot <xRot: value> <yRot: value> entity_offset <xEntityOffset: float> <yEntityOffset: float> <zEntityOffset: float>
camera <players: target> set <preset: string> rot <xRot: value> <yRot: value> view_offset <xViewOffset: float> <yViewOffset: float>
camera <players: target> set <preset: string> rot <xRot: value> <yRot: value> view_offset <xViewOffset: float> <yViewOffset: float> entity_offset <xEntityOffset: float> <yEntityOffset: float> <zEntityOffset: float>
camera <players: target> set <preset: string> view_offset <xViewOffset: float> <yViewOffset: float>
camera <players: target> set <preset: string> view_offset <xViewOffset: float> <yViewOffset: float> entity_offset <xEntityOffset: float> <yEntityOffset: float> <zEntityOffset: float>
camera <players: target> target_entity <entity: target>
camera <players: target> target_entity <entity: target> target_center_offset <xTargetCenterOffset: float> <yTargetCenterOffset: float> <zTargetCenterOffset: float>
```

## camerashake

```text
camerashake add <player: target> [intensity: float] [seconds: float] [shakeType: CameraShakeType]
camerashake stop [player: target]
```

## changesetting

```text
changesetting allow-cheats <value: Boolean>
changesetting difficulty <value: Difficulty>
changesetting difficulty <value: int>
```

## clear

```text
clear [player: target] [itemName: Item] [data: int] [maxCount: int]
```

## clearspawnpoint

```text
clearspawnpoint [player: target]
```

## clone

```text
clone <begin: x y z> <end: x y z> <destination: x y z> [maskMode: MaskMode] [cloneMode: CloneMode]
clone <begin: x y z> <end: x y z> <destination: x y z> filtered <cloneMode: CloneMode> <tileName: Block> <tileData: int>
clone <begin: x y z> <end: x y z> <destination: x y z> filtered <cloneMode: CloneMode> <tileName: Block> [blockStates: block states]
```

## connect

```text
connect <serverUri: text>
```

## controlscheme

```text
controlscheme <players: target> clear
controlscheme <players: target> set <control scheme: controlscheme>
```

## damage

```text
damage <target: target> <amount: int> <cause: DamageCause> entity <damager: target>
damage <target: target> <amount: int> <cause: DamageCauseSuicide> entity <damager: target>
damage <target: target> <amount: int> [cause: DamageCauseSuicide]
damage <target: target> <amount: int> [cause: DamageCause]
```

## daylock

```text
daylock [lock: Boolean]
```

## deop

```text
deop <player: target>
```

## dialogue

```text
dialogue change <npc: target> <sceneName: string> [players: target]
dialogue open <npc: target> <player: target> [sceneName: string]
```

## difficulty

```text
difficulty <difficulty: Difficulty>
difficulty <difficulty: int>
```

## editor-allowlist

```text
editor-allowlist reload
```

## effect

```text
effect <player: target> <effect: Effect> [seconds: int] [amplifier: int] [hideParticles: Boolean]
effect <player: target> <effect: Effect> infinite [amplifier: int] [hideParticles: Boolean]
effect <player: target> clear [effect: Effect]
```

## enchant

```text
enchant <player: target> <enchantmentId: int> [level: int]
enchant <player: target> <enchantmentName: Enchant> [level: int]
```

## event

```text
event entity <target: target> <eventName: string>
```

## execute

```text
execute <origin: target> <position: x y z> <command: command>
execute <origin: target> <position: x y z> detect <detectPos: x y z> <block: Block> <data: int> <command: command>
execute <subcommand: Option_If_Unless> block <position: x y z> <block: Block> <blockStates: block states> [chainedCommand: ExecuteChainedOption_0]
execute <subcommand: Option_If_Unless> block <position: x y z> <block: Block> <data: int> [chainedCommand: ExecuteChainedOption_0]
execute <subcommand: Option_If_Unless> block <position: x y z> <block: Block> [chainedCommand: ExecuteChainedOption_0]
execute <subcommand: Option_If_Unless> blocks <begin: x y z> <end: x y z> <destination: x y z> <scan mode: BlocksScanMode> [chainedCommand: ExecuteChainedOption_0]
execute <subcommand: Option_If_Unless> entity <target: target> [chainedCommand: ExecuteChainedOption_0]
execute <subcommand: Option_If_Unless> score <target: target> <objective: string> <operation: compare operator> <source: target> <objective: string> [chainedCommand: ExecuteChainedOption_0]
execute <subcommand: Option_If_Unless> score <target: target> <objective: string> matches <range: integer range> [chainedCommand: ExecuteChainedOption_0]
execute align <axes: string> <chainedCommand: ExecuteChainedOption_0>
execute anchored <eyes|feet> <chainedCommand: ExecuteChainedOption_0>
execute as <origin: target> <chainedCommand: ExecuteChainedOption_0>
execute at <origin: target> <chainedCommand: ExecuteChainedOption_0>
execute facing <position: x y z> <chainedCommand: ExecuteChainedOption_0>
execute facing entity <origin: target> <eyes|feet> <chainedCommand: ExecuteChainedOption_0>
execute in <dimension: Dimension> <chainedCommand: ExecuteChainedOption_0>
execute positioned <position: x y z> <chainedCommand: ExecuteChainedOption_0>
execute positioned as <origin: target> <chainedCommand: ExecuteChainedOption_0>
execute rotated <yaw: value> <pitch: value> <chainedCommand: ExecuteChainedOption_0>
execute rotated as <origin: target> <chainedCommand: ExecuteChainedOption_0>
execute run <command: command>
```

## fill

```text
fill <from: x y z> <to: x y z> <tileName: Block> <blockStates: block states> [oldBlockHandling: FillMode]
fill <from: x y z> <to: x y z> <tileName: Block> <blockStates: block states> replace [replaceTileName: Block] [replaceBlockStates: block states]
fill <from: x y z> <to: x y z> <tileName: Block> <tileData: int> replace [replaceTileName: Block] [replaceDataValue: int]
fill <from: x y z> <to: x y z> <tileName: Block> [oldBlockHandling: FillMode]
fill <from: x y z> <to: x y z> <tileName: Block> [tileData: int] [oldBlockHandling: FillMode]
fill <from: x y z> <to: x y z> <tileName: Block> replace [replaceTileName: Block] [replaceBlockStates: block states]
```

## fog

```text
fog <victim: target> <mode: delete> <userProvidedId: string>
fog <victim: target> push <fogId: string> <userProvidedId: string>
```

## function

```text
function <name: filepath>
```

## gamemode

```text
gamemode <gameMode: GameMode> [player: target]
gamemode <gameMode: int> [player: target]
```

## gamerule

```text
gamerule
gamerule <rule: BoolGameRule> [value: Boolean]
gamerule <rule: IntGameRule> [value: int]
gamerule locatorbar [value: Boolean]
gamerule playerwaypoints <value: playerwaypointsValues>
```

## gametest

```text
gametest clearall
gametest create <testName: string> [width: int] [height: int] [depth: int]
gametest pos
gametest run <testName: string> <stopOnFailure: Boolean> <repeatCount: int> [rotationSteps: int]
gametest run <testName: string> [rotationSteps: int]
gametest runset [tag: string] [rotationSteps: int]
gametest runsetuntilfail [tag: string] [rotationSteps: int]
gametest runthese
gametest runthis
gametest stopall
```

## give

```text
give <player: target> <itemName: Item> [amount: int] [data: int] [components: json]
```

## help

```text
help <page: int>
help [command: CommandName]
```

## hud

```text
hud <target: target> <visible: HudVisibility> [hud_element: HudElement]
```

## inputpermission

```text
inputpermission query <targets: target> <permission: permission> [state: state]
inputpermission set <targets: target> <permission: permission> <state: state>
```

## kick

```text
kick <name: target> <reason: message>
```

## kill

```text
kill [target: target]
```

## list

```text
list
```

## locate

```text
locate <feature: string> [useNewChunksOnly: Boolean]
locate biome <biome: Biome>
locate structure <structure: string> [useNewChunksOnly: Boolean]
```

## loot

```text
loot give <players: target> kill <entity: target> [<tool>|mainhand|offhand: string]
loot give <players: target> loot <loot_table: string> [<tool>|mainhand|offhand: string]
loot give <players: target> mine <TargetBlockPosition: x y z> [<tool>|mainhand|offhand: string]
loot insert <position: x y z> kill <entity: target> [<tool>|mainhand|offhand: string]
loot insert <position: x y z> loot <loot_table: string> [<tool>|mainhand|offhand: string]
loot insert <position: x y z> mine <TargetBlockPosition: x y z> [<tool>|mainhand|offhand: string]
loot replace block <position: x y z> slot.container <slotId: int> <count: int> kill <entity: target> [<tool>|mainhand|offhand: string]
loot replace block <position: x y z> slot.container <slotId: int> <count: int> loot <loot_table: string> [<tool>|mainhand|offhand: string]
loot replace block <position: x y z> slot.container <slotId: int> <count: int> mine <TargetBlockPosition: x y z> [<tool>|mainhand|offhand: string]
loot replace block <position: x y z> slot.container <slotId: int> kill <entity: target> [<tool>|mainhand|offhand: string]
loot replace block <position: x y z> slot.container <slotId: int> loot <loot_table: string> [<tool>|mainhand|offhand: string]
loot replace block <position: x y z> slot.container <slotId: int> mine <TargetBlockPosition: x y z> [<tool>|mainhand|offhand: string]
loot replace entity <entity: target> <slotType: EntityEquipmentSlot> <slotId: int> <count: int> kill <entity: target> [<tool>|mainhand|offhand: string]
loot replace entity <entity: target> <slotType: EntityEquipmentSlot> <slotId: int> <count: int> loot <loot_table: string> [<tool>|mainhand|offhand: string]
loot replace entity <entity: target> <slotType: EntityEquipmentSlot> <slotId: int> <count: int> mine <TargetBlockPosition: x y z> [<tool>|mainhand|offhand: string]
loot replace entity <entity: target> <slotType: EntityEquipmentSlot> <slotId: int> kill <entity: target> [<tool>|mainhand|offhand: string]
loot replace entity <entity: target> <slotType: EntityEquipmentSlot> <slotId: int> loot <loot_table: string> [<tool>|mainhand|offhand: string]
loot replace entity <entity: target> <slotType: EntityEquipmentSlot> <slotId: int> mine <TargetBlockPosition: x y z> [<tool>|mainhand|offhand: string]
loot spawn <position: x y z> kill <entity: target> [<tool>|mainhand|offhand: string]
loot spawn <position: x y z> loot <loot_table: string> [<tool>|mainhand|offhand: string]
loot spawn <position: x y z> mine <TargetBlockPosition: x y z> [<tool>|mainhand|offhand: string]
```

## me

```text
me <message: message>
```

## mobevent

```text
mobevent <event: MobEvent> [value: Boolean]
```

## msg

```text
msg <target: target> <message: message>
```

## music

```text
music play <trackName: string> [volume: float] [fadeSeconds: float] [repeatMode: MusicRepeatMode]
music queue <trackName: string> [volume: float] [fadeSeconds: float] [repeatMode: MusicRepeatMode]
music stop [fadeSeconds: float]
music volume <volume: float>
```

## op

```text
op <player: target>
```

## ops

```text
ops <action: PermissionsAction>
ops <action: PermissionsAction> <player: target> [permission: PermissionLevel]
```

## packstack

```text
packstack <stackType: stackType> [verbose: verbose] [exclude-vanilla: exclude-vanilla]
```

## particle

```text
particle <effect: string> [position: x y z]
```

## permission

```text
permission <action: PermissionsAction>
permission <action: PermissionsAction> <player: target> [permission: PermissionLevel]
```

## place

```text
place feature <feature: features> [position: x y z]
place featurerule <featurerule: featureRules> [position: x y z]
place jigsaw <pool: filepath> <jigsawTarget: string> <maxDepth: int> [pos: x y z] [keepJigsaws: Boolean] [includeEntities: Boolean] [liquidSettings: LiquidSettings]
place structure <structure: string> [pos: x y z] [ignoreStartHeight: Boolean] [keepJigsaws: Boolean] [includeEntities: Boolean] [liquidSettings: LiquidSettings]
```

## playanimation

```text
playanimation <entity: target> <animation: string> [next_state: string] [blend_out_time: float] [stop_expression: string] [controller: string]
```

## playsound

```text
playsound <sound: string> [player: target] [position: x y z] [volume: float] [pitch: float] [minimumVolume: float]
```

## recipe

```text
recipe give <player: target> <recipe: string>
recipe take <player: target> <recipe: string>
```

## reload

```text
reload [all: reload_all]
```

## reloadconfig

```text
reloadconfig
```

## reloadpacketlimitconfig

```text
reloadpacketlimitconfig
```

## replaceitem

```text
replaceitem block <position: x y z> slot.container <slotId: int> <itemName: Item> [amount: int] [data: int] [components: json]
replaceitem block <position: x y z> slot.container <slotId: int> <oldItemHandling: ReplaceMode> <itemName: Item> [amount: int] [data: int] [components: json]
replaceitem entity <target: target> <slotType: EntityEquipmentSlot> <slotId: int> <itemName: Item> [amount: int] [data: int] [components: json]
replaceitem entity <target: target> <slotType: EntityEquipmentSlot> <slotId: int> <oldItemHandling: ReplaceMode> <itemName: Item> [amount: int] [data: int] [components: json]
```

## ride

```text
ride <riders: target> start_riding <ride: target> [teleportRules: TeleportRules] [howToFill: FillType]
ride <riders: target> stop_riding
ride <riders: target> summon_ride <entityType: EntityType> [rideRules: RideRules] [spawnEvent: string] [nameTag: string]
ride <rides: target> evict_riders
ride <rides: target> summon_rider <entityType: EntityType> [spawnEvent: string] [nameTag: string]
```

## save

```text
save <mode: SaveMode>
```

## say

```text
say <message: message>
```

## schedule

```text
schedule clear <function: filepath>
schedule delay add <function: filepath> <time: int> [replace|append]
schedule delay add <function: filepath> <time: int>D [replace|append]
schedule delay add <function: filepath> <time: int>S [replace|append]
schedule delay add <function: filepath> <time: int>T [replace|append]
schedule delay clear <function: filepath>
schedule on_area_loaded add <from: x y z> <to: x y z> <function: filepath>
schedule on_area_loaded add circle <center: x y z> <radius: int> <function: filepath>
schedule on_area_loaded add tickingarea <name: string> <function: filepath>
schedule on_area_loaded clear function <function: filepath>
schedule on_area_loaded clear tickingarea <name: string> [function: filepath]
```

## scoreboard

```text
scoreboard objectives add <objective: string> dummy [displayName: string]
scoreboard objectives list
scoreboard objectives remove <objective: string>
scoreboard objectives setdisplay <list|sidebar> [objective: string] [ascending|descending]
scoreboard objectives setdisplay belowname [objective: string]
scoreboard players <set|add|remove> <player: target> <objective: string> <count: int>
scoreboard players list [playername: target]
scoreboard players operation <targetName: target> <targetObjective: string> <operation: operator> <selector: target> <objective: string>
scoreboard players random <player: target> <objective: string> <min: int> <max: int>
scoreboard players reset <player: target> [objective: string]
scoreboard players test <player: target> <objective: string> <min: wildcard int> [max: wildcard int]
```

## script

```text
script debugger close
script debugger connect [host: string] [port: int]
script debugger listen <port: int>
script diagnostics startcapture
script diagnostics stopcapture
script profiler start
script profiler stop
```

## scriptevent

```text
scriptevent <messageId: string> <message: message>
```

## sendshowstoreoffer

```text
sendshowstoreoffer <player: target> <redirectType: RedirectLocation> <offerId: string>
sendshowstoreoffer <player: target> server
```

## serveridentity

```text
serveridentity <action: ServerIdentityAction>
```

## setblock

```text
setblock <position: x y z> <tileName: Block> <blockStates: block states> [replace|destroy|keep]
setblock <position: x y z> <tileName: Block> [replace|destroy|keep]
setblock <position: x y z> <tileName: Block> [tileData: int] [replace|destroy|keep]
```

## setmaxplayers

```text
setmaxplayers <maxPlayers: int>
```

## setworldspawn

```text
setworldspawn [spawnPoint: x y z]
```

## spawnpoint

```text
spawnpoint [player: target] [spawnPos: x y z]
```

## spreadplayers

```text
spreadplayers <x: value> <z: value> <spreadDistance: float> <maxRange: float> <victim: target> [maxHeight: value]
```

## stop

```text
stop
```

## stopsound

```text
stopsound <player: target> [sound: string]
```

## structure

```text
structure delete <name: string>
structure load <name: string> <to: x y z> [rotation: Rotation] [mirror: Mirror] [animationMode: StructureAnimationMode] [animationSeconds: float] [includeEntities: Boolean] [includeBlocks: Boolean] [integrity: float] [seed: string]
structure load <name: string> <to: x y z> [rotation: Rotation] [mirror: Mirror] [animationMode: StructureAnimationMode] [animationSeconds: float] [includeEntities: Boolean] [includeBlocks: Boolean] [waterlogged: Boolean] [integrity: float] [seed: string]
structure load <name: string> <to: x y z> [rotation: Rotation] [mirror: Mirror] [includeEntities: Boolean] [includeBlocks: Boolean] [integrity: float] [seed: string]
structure load <name: string> <to: x y z> [rotation: Rotation] [mirror: Mirror] [includeEntities: Boolean] [includeBlocks: Boolean] [waterlogged: Boolean] [integrity: float] [seed: string]
structure save <name: string> <from: x y z> <to: x y z> [includeEntities: Boolean] [saveMode: StructureSaveMode] [includeBlocks: Boolean]
structure save <name: string> <from: x y z> <to: x y z> [saveMode: StructureSaveMode]
```

## summon

```text
summon <entityType: EntityType> <nameTag: string> [spawnPos: x y z]
summon <entityType: EntityType> [spawnPos: x y z] [spawnEvent: string] [nameTag: string]
summon <entityType: EntityType> [spawnPos: x y z] [yRot: value] [xRot: value] [spawnEvent: string] [nameTag: string]
summon <entityType: EntityType> [spawnPos: x y z] facing <lookAtEntity: target> [spawnEvent: string] [nameTag: string]
summon <entityType: EntityType> [spawnPos: x y z] facing <lookAtPosition: x y z> [spawnEvent: string] [nameTag: string]
```

## tag

```text
tag <entity: target> <add|remove> <name: string>
tag <entity: target> list
```

## teleport

```text
teleport <destination: target>
teleport <destination: x y z> [checkForBlocks: Boolean] [forceProvidedPositionOnDimensionChange: Boolean]
teleport <destination: x y z> [yRot: value] [xRot: value] [checkForBlocks: Boolean] [forceProvidedPositionOnDimensionChange: Boolean]
teleport <destination: x y z> facing <lookAtEntity: target> [checkForBlocks: Boolean] [forceProvidedPositionOnDimensionChange: Boolean]
teleport <destination: x y z> facing <lookAtPosition: x y z> [checkForBlocks: Boolean] [forceProvidedPositionOnDimensionChange: Boolean]
teleport <victim: target> <destination: target> [checkForBlocks: Boolean] [forceProvidedPositionOnDimensionChange: Boolean]
teleport <victim: target> <destination: x y z> [checkForBlocks: Boolean] [forceProvidedPositionOnDimensionChange: Boolean]
teleport <victim: target> <destination: x y z> [yRot: value] [xRot: value] [checkForBlocks: Boolean] [forceProvidedPositionOnDimensionChange: Boolean]
teleport <victim: target> <destination: x y z> facing <lookAtEntity: target> [checkForBlocks: Boolean] [forceProvidedPositionOnDimensionChange: Boolean]
teleport <victim: target> <destination: x y z> facing <lookAtPosition: x y z> [checkForBlocks: Boolean] [forceProvidedPositionOnDimensionChange: Boolean]
```

## tell

```text
tell <target: target> <message: message>
```

## tellraw

```text
tellraw <target: target> <raw json message: json>
```

## testfor

```text
testfor <victim: target>
```

## testforblock

```text
testforblock <position: x y z> <tileName: Block> [blockStates: block states]
testforblock <position: x y z> <tileName: Block> [dataValue: int]
```

## testforblocks

```text
testforblocks <begin: x y z> <end: x y z> <destination: x y z> [masked|all]
```

## tickingarea

```text
tickingarea add <from: x y z> <to: x y z> [name: string] [preload: Boolean]
tickingarea add circle <center: x y z> <radius: int> [name: string] [preload: Boolean]
tickingarea list [all-dimensions: AllDimensions]
tickingarea preload <name: string> [preload: Boolean]
tickingarea preload <position: x y z> [preload: Boolean]
tickingarea remove <name: string>
tickingarea remove <position: x y z>
tickingarea remove_all
```

## time

```text
time add <amount: int>
time of <clockName: string> add <amount: int>
time of <clockName: string> pause
time of <clockName: string> query time
time of <clockName: string> resume
time of <clockName: string> set <amount: int>
time of <clockName: string> set <timeMarkerName: timemarker name> [timeMarkerOccurrence: TimeMarkerOccurrence]
time pause
time query <time: TimeQuery2>
time query <time: TimeQuery>
time resume
time set <amount: int>
time set <time: TimeSpec>
time set <timeMarkerName: timemarker name> [timeMarkerOccurrence: TimeMarkerOccurrence]
```

## title

```text
title <player: target> <title|subtitle|actionbar> <titleText: message>
title <player: target> clear
title <player: target> reset
title <player: target> times <fadeIn: int> <stay: int> <fadeOut: int>
```

## titleraw

```text
titleraw <player: target> <titleLocation: TitleRawSet> <raw json titleText: json>
titleraw <player: target> clear
titleraw <player: target> reset
titleraw <player: target> times <fadeIn: int> <stay: int> <fadeOut: int>
```

## toggledownfall

```text
toggledownfall
```

## tp

```text
tp <destination: target>
tp <destination: x y z> [checkForBlocks: Boolean] [forceProvidedPositionOnDimensionChange: Boolean]
tp <destination: x y z> [yRot: value] [xRot: value] [checkForBlocks: Boolean] [forceProvidedPositionOnDimensionChange: Boolean]
tp <destination: x y z> facing <lookAtEntity: target> [checkForBlocks: Boolean] [forceProvidedPositionOnDimensionChange: Boolean]
tp <destination: x y z> facing <lookAtPosition: x y z> [checkForBlocks: Boolean] [forceProvidedPositionOnDimensionChange: Boolean]
tp <victim: target> <destination: target> [checkForBlocks: Boolean] [forceProvidedPositionOnDimensionChange: Boolean]
tp <victim: target> <destination: x y z> [checkForBlocks: Boolean] [forceProvidedPositionOnDimensionChange: Boolean]
tp <victim: target> <destination: x y z> [yRot: value] [xRot: value] [checkForBlocks: Boolean] [forceProvidedPositionOnDimensionChange: Boolean]
tp <victim: target> <destination: x y z> facing <lookAtEntity: target> [checkForBlocks: Boolean] [forceProvidedPositionOnDimensionChange: Boolean]
tp <victim: target> <destination: x y z> facing <lookAtPosition: x y z> [checkForBlocks: Boolean] [forceProvidedPositionOnDimensionChange: Boolean]
```

## transfer

```text
transfer <pfidOrMSA: string> <server: string> [port: int]
```

## w

```text
w <target: target> <message: message>
```

## weather

```text
weather <clear|rain|thunder> [duration: int]
weather query
```

## whitelist

```text
whitelist <action: AllowListAction> [name: string]
```

## wsserver

```text
wsserver <serverUri: text>
```

## xp

```text
xp <amount: int> [player: target]
xp <amount: int>L [player: target]
```
