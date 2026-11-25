# Faster resource packs with a CDN

Normally players download packs through your game server. `cdn_config.json` sends them to ordinary web storage instead, which can be much faster.

::: info Undocumented by Mojang
The file is real, and BDS 1.26.61.1 reads it. Its format is known from community work and may change.
:::

## Set it up by hand

1. Select the files **inside** your resource pack and ZIP them. `manifest.json` must be at the top of the ZIP.
2. Upload the ZIP to direct-download web storage.
3. Find `header.uuid` and `header.version` in `manifest.json`.
4. Edit `cdn_config.json` beside `server.properties`:

```json
{
  "11111111-2222-3333-4444-555555555555_1.0.0": "https://cdn.example.com/my-pack-v1.0.0.zip"
}
```

5. Add **every non-vanilla resource pack** used by the world, with exact versions.
6. Restart.

If one pack is missing or has the wrong version, BDS ignores the whole configuration and sends packs normally.

## Download requirements

| Requirement | Correct value |
|---|---|
| Link | Direct file download; redirects must end at the file |
| `Content-Type` | `application/zip` |
| `Content-Length` | Present and exactly the file size |
| ZIP | `manifest.json` at top level |

Check the headers:

```bash
curl -I -L https://cdn.example.com/my-pack-v1.0.0.zip
```

Google Drive, Dropbox, and Discord links generally do not meet these requirements.

## Update a pack

1. Increase `header.version` and any dependencies that refer to it.
2. Upload with a **new filename**.
3. Change the key and URL in `cdn_config.json`.
4. Change the version in `world_resource_packs.json`.
5. Restart.

Players cache by UUID and version, so changing contents without changing version leaves existing players on the old pack.

## Automatic option

The [bedrock-cdn tool](https://github.com/wimziicals/bedrock-cdn) builds ZIPs, uploads them to Cloudflare R2 or similar storage, checks headers, and writes this file.

Scripts can call `dedicatedServer.reloadCDNConfig()` ([server-admin](../scripting/server-admin#reload-and-stop)); restart if unsure.

Sources: [bedrock-cdn](https://github.com/wimziicals/bedrock-cdn), [xKingDark's original findings](https://gist.github.com/xKingDark/e80569d688e692ee11e161b427f6e49f), and 1.26.61.1 messages.
