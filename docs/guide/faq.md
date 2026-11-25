# FAQ

### What does this error mean?
Paste it into the [error lookup](../reference/error-lookup).

### Why are players asked to trust my server after every restart?
You have no saved identity key. Run `serveridentity save`. [Details](../security/server-identity).

### Why can nobody join my new server?
The allowlist is on by default since 26.30 and starts empty. Run `allowlist add "Gamertag"`. Also check TCP **and** UDP [ports](../network/ports).

### Can I still use RakNet?
Not for normal players on current versions. It is deprecated, and the 26.61 server says players cannot connect without NetherNet.

### How do I hide join and leave messages?
Add `enable-player-connection-text=false`. It is a [hidden property](../config/hidden-properties).

### How do I let everyone use a command?
Use [`config/commands.json`](../config/commands-json).

### Why are resource packs slow to download?
Use a [CDN](../config/cdn).

### Does BDS have RCON?
No. Send commands through standard input, or build control with [server-net](../scripting/server-net).

### Can I allocate RAM with a launch flag?
No. BDS is native code; there is no Java-style heap setting.

### Do I need to open 19133?
With `transport=nethernet`, `server-portv6` is ignored and one dual-stack socket opens on `server-port`.

### Can I run plugins?
There is no official plugin API. Use [behavior packs and scripts](../scripting/overview). Unofficial loaders such as Endstone and LeviLamina exist.

### Can I host BDS behind CGNAT?
Ordinary port forwarding will generally not work. Use hosting with a public address or a NetherNet-compatible [tunnel](../network/proxies).
