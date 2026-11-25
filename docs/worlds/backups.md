# Backups

Back up `worlds/`, `server.properties`, `allowlist.json`, root `permissions.json`, `config/`, `keys/`, and custom packs. `config/` and `keys/` may contain secrets.

## Stopped backup

The simplest reliable method:

1. Run `stop`.
2. Wait for `bedrock_server` to exit.
3. Copy the files.
4. Start the server.

Do not kill the process to begin a backup.

## Live backup

```text
save hold
save query
save resume
```

1. `save hold` requests a snapshot and returns before it is necessarily ready.
2. Repeat `save query` until it says the files are ready.
3. Copy **only the files it lists**.
4. **Truncate every copied file to its listed byte length.** The server keeps writing, so this step matters.
5. Always run `save resume`, even if copying fails.

When ready, `save query` prints `Data saved. Files are now ready to be copied.` and one comma-separated line. Paths start inside `worlds/`. The list pairs each path with a byte count, separated by a colon. For example, `World/db/000123.ldb:45678` means keep exactly 45678 bytes.

::: danger A plain folder copy is not a live backup
Skipping truncation can create a backup that fails only when restored.
:::

Scripts can use [`LevelStorage`](../scripting/server-admin#snapshots) for the same workflow.

## Restore

1. Stop the server.
2. Rename the damaged world; do not delete it.
3. Copy the backup into `worlds/`.
4. Match `level-name`, start, and inspect the log.

Test this regularly. Keep copies on another device, and several generations of them.
