# Installing packs

| Location | Scope |
|---|---|
| `worlds/<world>/behavior_packs/` | One world |
| `worlds/<world>/resource_packs/` | One world |
| `behavior_packs/` | Available to all worlds |
| `resource_packs/` | Available to all worlds |
| `development_behavior_packs/`, `development_resource_packs/` | Available to all worlds |

Copying a pack makes it available; activate it in the world's JSON file. Use the **header** UUID and version from its `manifest.json`.

`worlds/<world>/world_behavior_packs.json`:

```json
[
  { "pack_id": "11111111-2222-3333-4444-555555555555", "version": [1, 0, 0] }
]
```

Resource packs use `world_resource_packs.json`. Set `texturepack-required=true` if players must accept them.

## Check the result

Run `packstack server` for behavior packs and `packstack client` for resource packs. Add `verbose` or `exclude-vanilla` as needed (since 26.0).

At startup the log prints each loaded behavior pack with its folder after `Pack Stack`. `Configured pack (...) was not found and was ignored` means the ID or version does not match, and the server starts anyway.

If a pack is missing, check the header UUID, exact version, dependencies, required experiments, and [content log](../operations/logging). Scripts also need [module permissions](../scripting/module-permissions).
