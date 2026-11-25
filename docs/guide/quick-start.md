# Quick start

A private server for friends, using Windows. For Linux, use the [Linux guide](./install-linux) and return at step 3.

## 1. Download
Get the Windows version from the [official page](https://www.minecraft.net/download/server/bedrock). Extract **everything** to a folder such as `C:\BDS`.

## 2. Start
Open the folder and double-click `bedrock_server.exe`. Allow it through Windows Firewall on **Private** networks (and Public if needed). Wait for **Server started**.

The black window is the **server console**. You type commands there.

## 3. Let yourself in
Type each line and press Enter. Replace the name:

```text
allowlist add "Your Gamertag"
serveridentity save
```

The first line is needed because new servers reject everyone by default. The second stops players being asked to trust the server after every restart.

## 4. Join at home
On another device using the same Wi-Fi, open Minecraft, **Play**, **Servers**, **Add Server**. Enter the server PC's local IP address and port `19132`.

Find the IP on the server PC:

```powershell
ipconfig
```

Look for **IPv4 Address**. Same PC? Follow [this extra step](./install-windows#joining-from-the-same-pc).

Choose **Trust and Join** when you recognize the server.

## 5. Become operator
While connected, type in the console:

```text
op "Your Gamertag"
```

## 6. Let friends in over the internet
1. `allowlist add "Friend's Gamertag"` for each friend.
2. In your router, forward port **19132** for both **TCP and UDP** to the server PC.
3. Give friends your **public** IP, not the local one.

If it does not work, use the [connection checklist](../network/troubleshooting).

## 7. Stop properly
Type:

```text
stop
```

Wait for the window to close. Closing it with X may lose recent progress. Next, [make a backup](../worlds/backups).
