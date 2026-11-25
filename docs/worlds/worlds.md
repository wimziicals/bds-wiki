# Managing worlds

Each folder in `worlds/` is a world. `level-name` selects **one** active world.

## Import a world

1. Start BDS once so folders exist, then stop it.
2. On Windows, look under `%appdata%\Minecraft Bedrock\users\<user id>\games\com.mojang\minecraftWorlds`.
3. Read each `levelname.txt` to find the right folder.
4. Copy the entire folder into `worlds/` and give it a simple name.
5. Set `level-name` to that exact name, including case.
6. Start and check the log.

An exported `.mcworld` is a ZIP archive: extract its contents into one folder under `worlds/`.

## Create or switch worlds

Stop the server and set a new `level-name`. If the folder does not exist, BDS creates a world. Set `level-seed` beforehand; changing it later does not regenerate terrain.

## Export

Use a [consistent backup](./backups). Copying only while writes are active risks corruption.
