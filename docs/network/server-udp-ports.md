# server-udp-ports

Controls NetherNet's UDP ports. It is ignored with RakNet.

| Value | Meaning |
|---|---|
| `19489` | One port shared by all clients |
| `29489:19489` | Public 29489 maps to local 19489 |
| `19400-19500` | Range, same public and local ports |
| `21200-21300:19400-19500` | Public range to local range |
| `192.0.2.20:19489:19489` | One port plus public IPv4 |
| `[2001:db8::20]:21200-21300:19400-19500` | Range plus public IPv6 |

Rules from the bundled file:

- The order is **`public:local`**.
- Ranges on both sides must have the same length.
- With an IP prefix, both port values are required even if identical.
- A range is distributed across clients and ports are **reused** when exhausted. You do not need one port per player.
- Empty means the operating system picks temporary ports, which cannot be forwarded reliably.
- Do not map one public port to two different local ports.

::: info Preview 26.70.23 and later
UDP defaults to one shared port matching `server-port`. IP prefixes here still work but are deprecated in favor of `server-public-ip`. Invalid network settings now stop the server from starting.
:::

## Error messages

In 1.26.66.1 the server **still starts** after these, so check the log:

| Message | Fix |
|---|---|
| `has mismatched range lengths` | Make both ranges the same size |
| `Invalid Port. Port must be in the range [ 1, 65535 ]` | Remove text or fix the number |

A comma list (`29132,29133`) and a DNS name (`example.com:29132:29132`) printed no error, but that does not show they work for players.

## Common choices

```properties
# Simple server
server-udp-ports=19132

# NAT or container: advertise a public address
server-udp-ports=192.0.2.20:19132:19132
```

Replace `192.0.2.20` with your real address. Use an IP literal: a community report says a DNS name failed even though signaling worked. If your public IP changes, update the setting.
