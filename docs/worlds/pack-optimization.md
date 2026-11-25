# Pack optimization

Pack optimization minifies JSON and packages loose files into `__brarchive/` data so players can join faster. Released in 26.40 for Windows; Linux support arrived in Preview 26.70.22.

Optimized packs require client **1.26.40 or later**.

Create a config:

```json
{
  "input_directory": "D:/work/packs_input",
  "output_directory": "D:/work/packs_output",
  "verbose_logging": false
}
```

Each subfolder of the input is one pack. Then:

```powershell
.\bedrock_server.exe PackOptimizerConfigPath=D:/work/pack_optimizer_config.json
```

Quote the entire argument when the path has spaces:

```powershell
.\bedrock_server.exe "PackOptimizerConfigPath=D:/path with spaces/config.json"
```

The process exits instead of starting a server. Failure returns exit code `7` (`ResourceProcessingError`).

Keep your source packs.

## Unpack

To turn optimized packs back into loose files, point the input at them and add `"unpack": true`:

```json
{
  "input_directory": "D:/work/packs_output",
  "output_directory": "D:/work/packs_unpacked",
  "unpack": true
}
```

Use `true`, not `"true"`: text fails with exit code 7. Tested on 1.26.66.1 in both directions. A missing input folder or config file also exits with 7, without explaining why.

From Preview 26.70.23, the config uses an **output mode** instead: `brpak` (default), `brarchive`, or `unpacked`. Mojang's note does not give the JSON field name.

Source: [Microsoft](https://learn.microsoft.com/en-us/minecraft/creator/documents/bedrockserver/pack-optimization).
