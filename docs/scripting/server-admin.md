# @minecraft/server-admin

A beta module for administering BDS. Allow it in [module permissions](./module-permissions).

## Gate joins

With `allow-player-joining=false`, a script must approve each player. Without a working script, **nobody can join**.

```js
import { beforeEvents } from '@minecraft/server-admin';

const admitted = new Set(['Example Player']);
beforeEvents.asyncPlayerJoin.subscribe(async (event) => {
  if (admitted.has(event.name)) event.allowJoin();
  else event.disallowJoin('Apply on our website first.');
});
```

The callback is asynchronous, so you can await a web request. Check `event.isValid()` afterward because the player may have left. Prefer `event.persistentId` to names for durable records.

## Player actions

```js
import { kickPlayer, opPlayer, deopPlayer } from '@minecraft/server-admin';

kickPlayer(player, 'Server restarting');
opPlayer(player);
deopPlayer(player);
```

These cannot run in restricted-execution mode; from a before-event, defer with `system.run`.

## Transfer players

```js
import { transferPlayer } from '@minecraft/server-admin';

transferPlayer(player, { hostname: 'play.example.com', port: 19132 });
```

NetherNet destinations can use `{ netherNetId: '...' }`. An optional third argument customizes the progress screen with `titleText`, `bodyText`, `cancelButtonText`, visibility flags, and `cancelButtonDelaySeconds`.

## Allowlist

```js
import { dedicatedServer } from '@minecraft/server-admin';

const list = dedicatedServer?.allowList;
if (list) {
  list.add({ name: 'Example Player' }, false);
  console.log(list.contains({ name: 'Example Player' }));
}
```

Scripts can edit the list while `allow-list=false`; `enabled` tells you which. Also available: `enabled`, `entries`, `remove`, `clear`, and `reloadFile`. The signatures changed in 26.40 and 26.50.

## Snapshots

Since 26.60 these methods return promises:

```js
async function snapshot(copyFiles) {
  const storage = dedicatedServer?.levelStorage;
  if (!storage) return;
  await storage.saveHold();
  try {
    const files = await storage.saveQuery();
    await copyFiles(files);
  } finally {
    await storage.saveResume();
  }
}
```

Each file has `fileName` and `fileSize`. Scripts cannot read arbitrary disk files: `copyFiles` must signal an external program, which must [truncate copies](../worlds/backups#live-backup).

## Reload and stop

`dedicatedServer` provides `reloadScriptingConfig()`, `reloadPermissions()`, `reloadCDNConfig()`, and `stopServer()`.

[Official reference](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server-admin/minecraft-server-admin).
