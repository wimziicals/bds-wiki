# Module permissions

`config/default/permissions.json` lists modules available by default:

```json
{
  "allowed_modules": [
    "@minecraft/server-gametest",
    "@minecraft/server",
    "@minecraft/server-ui",
    "@minecraft/server-admin",
    "@minecraft/server-editor",
    "@minecraft/debug-utilities"
  ]
}
```

That is what 1.26.66.1 ships. Note that `@minecraft/server-net` and `@minecraft/diagnostics` are **not** allowed by default.

Keep it minimal and grant more per script. A script's own file **replaces** the default list, so repeat every module it needs. The folder name is the **script module UUID** from `manifest.json`, not the header UUID.

`config/<script-module-uuid>/permissions.json`:

```json
{
  "allowed_modules": [
    "@minecraft/server",
    "@minecraft/server-ui",
    "@minecraft/server-admin",
    "@minecraft/server-net"
  ]
}
```

Before 26.30, server-net incorrectly looked for the pack ID. If an upgrade broke your HTTP configuration, check this first.

## Limiting server-net

Since 26.10, each script can be restricted:

```json
{
  "allowed_modules": ["@minecraft/server", "@minecraft/server-admin", "@minecraft/server-net"],
  "module_permissions": {
    "@minecraft/server-net": {
      "allowed_uris": ["https://example.com/"],
      "force_tls": true,
      "max_body_bytes": 1048576,
      "max_concurrent_requests": 4
    }
  }
}
```

`force_https` was renamed to `force_tls` in 26.20. `session_headers` can also add headers. Unspecified limits are not enforced.

Run `reloadconfig` after edits. If a script failed to load, run `reload all` as well: this worked on 1.26.66.1 without a restart.

| Blocked request | Error in the script |
|---|---|
| Address not listed | `UriNotAllowedError` |
| Plain `http` or `ws` with `force_tls` | `TLSOnlyError` |
| Body too big | `RequestBodyTooLargeError` |

Sources: [Microsoft](https://learn.microsoft.com/en-us/minecraft/creator/documents/bedrockserver/scripting), [26.10](https://feedback.minecraft.net/hc/en-us/articles/44418129038733), [26.20](https://feedback.minecraft.net/hc/en-us/articles/45400537384333).
