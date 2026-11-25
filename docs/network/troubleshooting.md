# Connection troubleshooting

Have an error message? Paste it into the [error lookup](../reference/error-lookup).

| Symptom | Likely checks |
|---|---|
| "You're not invited" | [Allowlist](../config/allowlist), on by default |
| Outdated client/server | Match versions |
| LAN works, internet fails | TCP, UDP, public IP, CGNAT |
| Server visible but join fails | TCP may work while UDP fails |
| Trust prompt repeats | [`serveridentity save`](../security/server-identity) |
| Players cannot find LAN server | `enable-lan-visibility`, subnet, firewall |
| Slow hostname joins | [Dropped TCP probes or several DNS records](./nethernet#slow-joins-by-hostname) |
| RakNet error at startup | Set `transport=nethernet` |
| Port already in use | [Another server](../operations/multiple-servers) |

## Work through it

1. Confirm the server finished starting and inspect its first error.
2. Join from the LAN using its LAN IP.
3. Test TCP from outside.
4. Set one UDP port and forward it.
5. If behind NAT, add the public IP to `server-udp-ports`.
6. Remove proxies and custom packs temporarily.
7. Retry with a second client and another network.

## Friendly error names

Minecraft shows names such as **Door** or **Terracotta**. Third-party guides connect Door with general multiplayer failures, but sources disagree on several others. Use [Mojang's current error list](https://help.minecraft.net/hc/en-us/articles/38555497091469) and the server's [disconnect reason](../reference/disconnect-reasons).

Mojang's tracker has had reports of NetherNet servers being inaccessible, including BDS-23108. Search it before changing many settings at once.
