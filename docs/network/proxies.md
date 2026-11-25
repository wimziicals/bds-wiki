# Proxies and tunnels

A product advertising "Bedrock" or "UDP" may support only RakNet. Ask whether it supports **NetherNet for BDS**, including TCP signaling, UDP, and the advertised public address.

| Situation | Check |
|---|---|
| UDP-only tunnel | Cannot carry NetherNet setup over TCP |
| RakNet proxy | Needs a NetherNet-capable version or bridge |
| DDoS proxy | Must allow both protocols and advertise the proxy IP |
| CGNAT | Needs a tunnel, VPS relay, or public hosting |

Community reports, not tested here: playit has a NetherNet tunnel type, and WaterdogPE can sit beside BDS. `nethernet-bridge` serves RakNet software such as PocketMine rather than normal BDS installations.

If TLS/DTLS and WebRTC terminate at a proxy, **its** identity is what players see. Back up that key too. Read the [online-mode warning](../security/hardening#proxies-and-online-mode-false) before weakening authentication.

## Transferring between servers

Use the dedicated-server `transfer` command, or [`transferPlayer`](../scripting/server-admin#transfer-players). Test identity prompts at every destination.
