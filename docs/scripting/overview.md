# Scripting on BDS

BDS runs JavaScript from behavior packs and offers APIs the normal game does not.

| Module | Use | BDS only? |
|---|---|---|
| `@minecraft/server` | World, players, events | No |
| `@minecraft/server-ui` | Forms | No |
| [`@minecraft/server-admin`](./server-admin) | Administration, secrets, join control | Mostly or entirely |
| [`@minecraft/server-net`](./server-net) | HTTP, WebSocket, packet events | Yes |
| [`@minecraft/diagnostics`](./diagnostics) | Sentry error reporting | Yes |

The admin, net, and diagnostics modules are beta. Enable **Beta APIs** on the world and expect breaking changes. BDS has no setting for this: turn it on when creating the world in the game, then copy the world to the server.

## Checklist

1. Add a `script` module and dependencies to the behavior pack's `manifest.json`.
2. [Allow the modules](./module-permissions).
3. Enable Beta APIs if needed.
4. [Activate the pack](../worlds/packs).
5. Enable content-log console output and start.

## Example manifest

```json
{
  "format_version": 2,
  "header": {
    "name": "My server tools",
    "description": "Server-only script",
    "uuid": "REPLACE-WITH-UUID-1",
    "version": [1, 0, 0],
    "min_engine_version": [1, 26, 60]
  },
  "modules": [{
    "type": "script",
    "language": "javascript",
    "uuid": "REPLACE-WITH-UUID-2",
    "version": [1, 0, 0],
    "entry": "scripts/main.js"
  }],
  "dependencies": [
    { "module_name": "@minecraft/server", "version": "beta" },
    { "module_name": "@minecraft/server-admin", "version": "beta" },
    { "module_name": "@minecraft/server-net", "version": "beta" }
  ]
}
```

Generate two new UUIDs. If your build rejects the `beta` version alias, use the exact version in its API documentation.

The `beta` alias works on 1.26.66.1. Permissions, variables, secrets, HTTP, allowlist, and snapshot samples ran on a live server. Samples needing a player (join gate, kick, transfer), packet contents, a working WebSocket, or Sentry delivery were not exercised end to end.

## Common errors

| Console says | Fix |
|---|---|
| `the Beta APIs experiment is not enabled` | Turn on Beta APIs for the world. Without it, even `@minecraft/server` at `beta` fails |
| `requesting dependency on module [...] but it is not configured to use it` | [Allow the module](./module-permissions) |
| `Import [...] not found` | Fix the file name in your import |
