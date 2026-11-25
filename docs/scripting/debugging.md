# Script debugger

Install Microsoft's Minecraft Bedrock debugger for VS Code.

## VS Code listens

```properties
allow-outbound-script-debugging=true
```

Start the VS Code listener, then at the BDS console:

```text
script debugger connect localhost 19144
```

## BDS listens

```properties
allow-inbound-script-debugging=true
force-inbound-debug-port=19144
```

```text
script debugger listen 19144
```

Attach VS Code, and finish with `script debugger close`. Set `script-debugger-auto-attach` to debug startup code.

## Security

Since 26.50 the listener binds to loopback by default. A non-loopback `script-debugger-listen-address` requires `script-debugger-passcode` and exposes debugging to the network. Prefer an SSH tunnel and turn debugging off in production.

## Profiler

```text
script profiler start
script profiler stop
```
