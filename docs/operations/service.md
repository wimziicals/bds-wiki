# Run as a service

BDS needs a clean `stop`. A forced kill risks losing recent data.

## systemd

This uses `screen` so commands can reach the console:

```ini
# /etc/systemd/system/bds.service
[Unit]
Description=Minecraft Bedrock Dedicated Server
After=network-online.target
Wants=network-online.target

[Service]
User=bds
WorkingDirectory=/opt/bds
Environment=LD_LIBRARY_PATH=/opt/bds
ExecStart=/usr/bin/screen -DmS bds ./bedrock_server
ExecStop=/usr/bin/screen -S bds -p 0 -X stuff "stop\r"
ExecStop=/bin/sh -c 'while kill -0 $MAINPID 2>/dev/null; do sleep 1; done'
TimeoutStopSec=120
Restart=on-failure
RestartSec=10

[Install]
WantedBy=multi-user.target
```

```bash
sudo apt install screen
sudo systemctl daemon-reload
sudo systemctl enable --now bds
```

A bad [system pack](../worlds/system-packs) exits with code 0, so `on-failure` will not restart it.

Test stopping it with a disposable world; this unit was not run as part of this wiki.

## Windows

Task Scheduler can start BDS at boot, but it does not send `stop` through standard input. Use a process manager that supports stdin commands and waits for exit. Do not rely on `taskkill /F`.

Run as a limited account with access only to the server folder.
