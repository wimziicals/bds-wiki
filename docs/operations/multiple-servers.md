# Multiple servers on one machine

Use a separate folder, world, and [identity key](../security/server-identity) for each instance.

| | Server A | Server B |
|---|---|---|
| `server-port` | `19132` | `19142` |
| `server-udp-ports` | `19132` | `19142` |
| `transport` | `nethernet` | `nethernet` |
| `enable-lan-visibility` | `true` or `false` | `false` |

Forward TCP and UDP for each. Under RakNet, LAN visibility can bind 19132 and 19133 even when you chose different ports. Assign different debugger ports too, and do not point two processes at one world.

::: danger BDS does not stop you
On Windows 1.26.66.1 we started two servers from the same folder with the same port and world. Both said `Server started` and neither warned. Two servers writing one world can corrupt it, so check Task Manager before starting.
:::
