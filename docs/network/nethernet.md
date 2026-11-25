# NetherNet

NetherNet is Bedrock's WebRTC-based network transport. It carries game data over data channels secured with DTLS and replaces RakNet.

| Version | Change |
|---|---|
| 26.40 | Clients probe dedicated servers for NetherNet, with a 3-second timeout |
| 26.50 | Default transport for BDS |
| 26.60 | Not using it became an error; RakNet is deprecated |
| Preview 26.70.23 | UDP defaults to a shared port matching `server-port`; advertised mappings fixed |

1.26.61.1 states that NetherNet is the **only supported transport type** in that release.

## Enable it

```properties
transport=nethernet
server-port=19132
server-udp-ports=19132
```

Open 19132 for TCP **and** UDP. Set an explicit UDP port on current releases; otherwise the operating system assigns ephemeral ports.

## How a join works

1. The client probes the server over TCP using HTTP.
2. They exchange WebRTC signaling data.
3. The client verifies the server's identity and may ask for trust.
4. ICE selects a UDP path.
5. Encrypted gameplay runs over UDP.

Steps 2 to 4 summarize WebRTC and community findings; Mojang has not published a full BDS specification.

## Slow joins by hostname

Mojang documented one situation where WinHTTP ignores the 3-second probe timeout: the client connects by hostname, DNS returns several addresses, and a firewall drops the TCP probes instead of rejecting them. Open TCP, reject rather than drop closed ports, or reduce the hostname to one working address.

Sources: [26.40](https://www.minecraft.net/en-us/article/minecraft-bedrock-edition-26-40), [26.50](https://www.minecraft.net/en-us/article/minecraft--bedrock-edition-26-50-changelog), [26.60](https://www.minecraft.net/en-us/article/minecraft--bedrock-edition-26-60-changelog), [community specification](https://github.com/df-mc/nethernet-spec).
