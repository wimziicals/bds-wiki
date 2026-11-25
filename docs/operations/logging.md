# Logging

Enable content errors in both places:

```properties
content-log-file-enabled=true
content-log-console-output-enabled=true
content-log-level=warning
```

On Windows the default file goes to `%APPDATA%\Minecraft Bedrock Server\logs\ContentLog<date>.txt`, not the server folder. Set [`content-log-file-path`](../config/hidden-properties#logs) to choose another place. Startup prints the exact path. In our test no file appeared while there was nothing to log.

Use `verbose` only while investigating. A bug stopped the file option from creating a log until 26.40 (BDS-23033).

More log settings, including server and chat log files, are [hidden properties](../config/hidden-properties#logs).

Paste anything you do not understand into the [error lookup](../reference/error-lookup).

## A healthy startup

Look for these lines:

```text
Accepting clients on ...
Signed in to signaling service successfully
Server started.
```

A clean stop ends with `Quit correctly`.

## Packet statistics

After a clean stop, `packet-statistics.txt` lists how much data was sent by packet type. Use it to see what uses your bandwidth.

## Before sharing logs

Startup prints **your whole `server.properties`**, so the log can contain `script-debugger-passcode`, your seed, and your addresses.

Remove those, plus public IPs, XUIDs, Gamertags, tokens, and private paths. Never attach `keys/` or `secrets.json`.

Report reproducible bugs to the [Mojang tracker](https://bugs.mojang.com) under BDS with version, operating system, transport, minimal packs, steps, and log.
