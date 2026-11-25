# Ports and firewalls

| Use | Default | Protocol | Internet? |
|---|---|---|---|
| NetherNet setup | `server-port` (19132) | TCP | Yes |
| NetherNet game | `server-udp-ports` | UDP | Yes |
| RakNet IPv4 (deprecated) | 19132 | UDP | Legacy |
| RakNet IPv6 (deprecated) | 19133 | UDP | Legacy |
| Script debugger | 19144 | TCP | **No** |

Microsoft's getting-started page predates NetherNet and describes the old 19132/19133 arrangement.

## Router checklist

1. Give the server a fixed LAN address.
2. Forward TCP `server-port`.
3. Forward the UDP ports in `server-udp-ports`.
4. Allow the same ports in the host firewall and cloud security group.
5. Confirm your router's WAN address is public and not CGNAT.

IPv6 does not normally use NAT: create inbound firewall rules instead of forwards.

## Test TCP

```powershell
Test-NetConnection your.server.address -Port 19132
```

Or open `http://ADDRESS:19132/v1/join`. A working 1.26.66.1 server replies **200 with an empty page**, so blank is good; an error or timeout is not. (`/` gives 404.) Neither test proves UDP works. Test from outside your network.
