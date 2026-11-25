# Evidence and sources

Preferred order:

1. Mojang release notes.
2. Microsoft creator documentation and API reference.
3. Files and messages in an official build.
4. Reproducible community tests.
5. Minecraft Wiki and third-party guides.

Newer release notes win over older documentation pages.

## What this edition used

- Mojang's feedback-site changelog archive, searched for server terms, and individual minecraft.net articles.
- Microsoft's `minecraft-creator` repository, as of 17 November 2026.
- The configuration, language files, and printable strings of Windows BDS **1.26.61.1**, inspected without running it. Its settings and `commands.json` parsers were examined to list recognized keys.
- Minecraft Wiki and community guides where identified.

- A clean copy of Windows BDS **1.26.66.1** from Mojang, run on a disposable world on 25 November 2026, plus its bundled `bedrock_server_how_to.html`.

## What was tested live

Console commands and `help` output, Server Identity and its failure cases, `commands.json`, packet limits, the hidden settings marked **Tested**, log files, save hold/query/resume, pack loading, system packs, the pack optimizer, script permissions, variables, secrets, HTTP, and snapshots.

## What was not tested

- Anything needing a connected player, including trust prompts and join messages.
- Linux, Docker, systemd, and Bedrock Editor clients.
- Port forwarding, NAT, and proxies.
- Hidden settings not marked **Tested**.

Strings found in a build prove that the text exists; they do not by themselves prove behavior.

## Core links

- [BDS downloads](https://www.minecraft.net/download/server/bedrock)
- [Microsoft BDS documentation](https://learn.microsoft.com/en-us/minecraft/creator/documents/bedrockserver/getting-started)
- [Mojang changelogs](https://feedback.minecraft.net/hc/en-us/sections/360001186971)
- [Mojang bug tracker](https://bugs.mojang.com)
- [NetherNet community specification](https://github.com/df-mc/nethernet-spec)
