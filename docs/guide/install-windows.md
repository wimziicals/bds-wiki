# Install on Windows

1. Download the Windows build from the [official page](https://www.minecraft.net/download/server/bedrock).
2. Extract the whole ZIP into an empty folder, such as `C:\BDS`.
3. Open PowerShell there and start it:

```powershell
cd C:\BDS
.\bedrock_server.exe
```

4. Allow the network profile you need in the Windows Firewall prompt.
5. At the **server console**, allow yourself to join and preserve the server's identity:

```text
allowlist add "Your Gamertag"
op "Your Gamertag"
serveridentity save
stop
```

6. Edit `server.properties`, then start the server again.

`op` may need the player to be connected; if it fails, join first and repeat it.

## Joining from the same PC

Microsoft documents a loopback exemption for the game client. In an elevated terminal, for the release client:

```powershell
CheckNetIsolation.exe LoopbackExempt -a -p=S-1-15-2-1958404141-86561845-1752920682-3514627264-368642714-62675701-733520436
```

Preview client:

```powershell
CheckNetIsolation.exe LoopbackExempt -a -p=S-1-15-2-424268864-5579737-879501358-346833251-474568803-887069379-4040235476
```

Then add server `127.0.0.1`, port `19132`.

::: tip
Those instructions date from 2025. If `127.0.0.1` fails under NetherNet, try the PC's LAN address.
:::

## Open the firewall

Run in an elevated PowerShell:

```powershell
New-NetFirewallRule -DisplayName "BDS TCP 19132" -Direction Inbound -Protocol TCP -LocalPort 19132 -Action Allow
New-NetFirewallRule -DisplayName "BDS UDP 19132" -Direction Inbound -Protocol UDP -LocalPort 19132 -Action Allow
```

Adjust the UDP rule to match [`server-udp-ports`](../network/server-udp-ports).

::: info Application data
Since 26.50, Windows dedicated servers use the correct application data directory for Bedrock and Education.
:::
