# Connecting players

In Minecraft, open **Play**, then **Servers**, choose **Add Server**, and enter the address and port (default `19132`).

| Player location | Address |
|---|---|
| Same PC | `127.0.0.1` (Windows may need a [loopback exemption](./install-windows#joining-from-the-same-pc)) |
| Same network | The server's LAN address |
| Internet | Your public address or domain, with [ports open](../network/ports) |

The first time, players may see **"Trust this server?"** This comes from [Server Identity](../security/server-identity). Choose **Trust and Join** only if you recognize the server.

## Before blaming the network

- Client and server versions must use a compatible protocol.
- The [allowlist](../config/allowlist) is on by default since 26.30.
- Preview clients need a preview server.
- Remote players always need Xbox authentication, even with `online-mode=false`.

## Consoles

The Minecraft Wiki reports that Xbox, PlayStation, and Switch players can join only over LAN or with custom DNS workarounds. A third-party guide reported in late 2026 that BedrockConnect was not yet NetherNet-compatible.

Still stuck? See [troubleshooting](../network/troubleshooting).
