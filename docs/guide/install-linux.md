# Install on Linux

Ubuntu is the only officially supported distribution. Create a dedicated unprivileged user:

```bash
sudo useradd --system --create-home --home-dir /opt/bds --shell /usr/sbin/nologin bds
```

Download the Linux ZIP from the [official page](https://www.minecraft.net/download/server/bedrock), then extract it (adjust the filename):

```bash
sudo apt install unzip
sudo -u bds unzip /tmp/bedrock-server-VERSION.zip -d /opt/bds
sudo chmod +x /opt/bds/bedrock_server
```

Run it for the first time:

```bash
sudo -u bds bash -c 'cd /opt/bds && LD_LIBRARY_PATH=. ./bedrock_server'
```

At the server console:

```text
allowlist add "Your Gamertag"
serveridentity save
stop
```

## Firewall

NetherNet needs TCP for connection setup and UDP for gameplay:

```bash
sudo ufw allow 19132/tcp
sudo ufw allow 19132/udp
sudo ufw reload
```

Match the UDP rule to [`server-udp-ports`](../network/server-udp-ports). For unattended operation, see [Run as a service](../operations/service).
