# Anti-cheat settings

BDS simulates movement itself and corrects clients that disagree. These settings decide how strict it is; they are not a complete anti-cheat.

## Strict modes

| Setting | Catches | Cost |
|---|---|---|
| `server-authoritative-movement-strict` | Bad positions | Corrections near moving blocks at high latency |
| `server-authoritative-dismount-strict` | Dismount abuse | Dismount corrections |
| `server-authoritative-entity-interactions-strict` | Implausible interactions | Harder interaction at high latency |

Lower `player-position-acceptance-threshold` is stricter. Raise it slightly for legitimate rubber-banding; values above 1.0 make cheating likelier.

## Attack validation

Added in 26.60:

```properties
server-authoritative-entity-attack-request-validation=observe
server-authoritative-entity-attack-range-validation=observe
server-authoritative-entity-attack-range-tolerance=0.5
```

Request validation checks that an attack matches the item's authoritative behavior; range validation checks distance. Start with `observe`, review a normal play session, then try `enforce`. The log format for `observe` is an [open question](../contribute/open-questions).

## Also consider

- [Packet limits](../config/packet-limits)
- Packet events in [server-net](../scripting/server-net#packet-events)
- Behavior-pack checks with `@minecraft/server`
