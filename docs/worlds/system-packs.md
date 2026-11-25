# System packs

Since 26.30, BDS automatically loads packs from:

- `system_behavior_packs/`
- `system_resource_packs/`

Create these folders yourself; the ZIP does not include them. System packs load into the world automatically, and Mojang says their pack and module IDs are protected. (In our 1.26.66.1 test, a world pack reusing a system pack's header ID still loaded beside it, so do not rely on that.) This suits host-provided tools that world owners should not need to activate.

Since 26.50 they are sorted alphabetically before loading. A pack with an unreadable manifest, or a script plugin that fails to run, **stops the server**. Pack settings are also loaded correctly from that release.

::: warning
Treat changes here as deployment changes. Test on a copy: one bad system pack can prevent startup. The log says `System packs contain errors` or `System pack failed to load`.

The server then exits with code **0**, so `Restart=on-failure` and similar rules treat it as a normal stop.
:::

Sources: [26.30](https://feedback.minecraft.net/hc/en-us/articles/46570672409997), [26.50](https://feedback.minecraft.net/hc/en-us/articles/48826825649933).
