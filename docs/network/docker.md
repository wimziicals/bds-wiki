# Docker

Mojang does not publish an official BDS image. `itzg/minecraft-bedrock-server` is a widely used community image.

```yaml
services:
  bds:
    image: itzg/minecraft-bedrock-server
    environment:
      EULA: "TRUE"
      TRANSPORT: "nethernet"
      SERVER_UDP_PORTS: "192.0.2.20:19132:19132"
    ports:
      - "19132:19132/tcp"
      - "19132:19132/udp"
    volumes:
      - ./data:/data
    stdin_open: true
    tty: true
    restart: unless-stopped
```

Read and accept the EULA yourself, replace the example IP, and check the image's current variable names. This sample was assembled from documentation and community guides and has not been tested here.

## Requirements

- Publish both TCP and UDP. Many older examples publish only UDP.
- Advertise the host's reachable address, not a container address.
- Persist `/data`, including `keys/`, or [trust resets](../security/server-identity).
- Send commands with `docker attach` or the image's documented helper.

If bridge networking fails on Linux, host networking avoids Docker's port translation.
