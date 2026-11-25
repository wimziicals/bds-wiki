# What is Bedrock Dedicated Server?

Bedrock Dedicated Server (BDS) is Mojang's free, standalone multiplayer server for Minecraft: Bedrock Edition. It runs without a game client and keeps a world online independently of any one player. Its first public alpha arrived in 2018.

As of 25 November 2026 the release build is **1.26.66.1** and the preview build is **1.26.70.26**. Release numbers drop the leading `1.` in player-facing names: server 1.26.66.1 pairs with client 26.66.

## BDS, Realms, or a LAN world?

| | BDS | Realms | LAN world |
|---|---|---|---|
| Who runs it | You | Mojang | A player's device |
| Cost | Free software; you supply hardware | Subscription | Included |
| Stays online | While your process runs | Yes | While the host plays |
| `@minecraft/server-net` | Yes | No | No |
| Config file access | Full | No | Limited |

Third-party software such as PocketMine-MP, Geyser, and Endstone is separate. This wiki covers it only where it meets BDS.

## Requirements

| | Minimum or supported |
|---|---|
| Windows | Windows 10 version 1703, or Windows Server 2016, or later |
| Linux | Ubuntu on x86-64; Minecraft Wiki lists 22.04 or later |
| Processor | 64-bit Intel or AMD, 2 cores or more |
| Memory | Mojang's bundled guide says 1 GB; Minecraft Wiki lists 4 GB, which is safer |

::: warning The official Linux requirement is stale
Microsoft's getting-started page and the bundled guide still say Ubuntu 18. Mojang raised the minimum to 20.04 in 1.20.30, and the Minecraft Wiki now lists 22.04 with glibc 2.35.
:::

## Next steps

New? Follow the [Quick start](./quick-start). Otherwise:

1. Install on [Windows](./install-windows) or [Linux](./install-linux).
2. Add yourself to the [allowlist](../config/allowlist), which is on by default since 26.30.
3. Run [`serveridentity save`](../security/server-identity).
4. Open the [TCP and UDP ports](../network/ports).
5. Set up [backups](../worlds/backups).

Sources: [Microsoft getting started](https://learn.microsoft.com/en-us/minecraft/creator/documents/bedrockserver/getting-started), [Minecraft Wiki](https://minecraft.wiki/w/Bedrock_Dedicated_Server).
