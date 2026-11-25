# Server Identity

Server Identity gives your server a cryptographic key that lets a player's game recognize it as the same server. By default the key is **not kept** between runs.

::: tip Do this now
At the server console:

```text
serveridentity save
```

Then back up `keys/server_identity_key.pem` privately.
:::

Introduced in Preview 26.50.24 (5 August 2026) and released in 26.50 (September 2026). Mojang's whole release note was one line, which is why it is easy to miss.

## The problem it solves

On a first connection, the game asks:

> **Trust this server?**
> You are connecting to *server* for the first time. Only trust servers you recognize.

Players choose **Trust and Join** or **Don't Trust**. If no key is saved, the server creates a new one at each start. To the client it looks like a different server, so players must accept trust again.

## Commands

The Minecraft Wiki lists these as dedicated-server-only, at permission level 4.

| Command | What it does |
|---|---|
| `serveridentity status` | Reports whether a **saved** key exists, and its path |
| `serveridentity save` | Saves the identity key to disk |
| `serveridentity delete` | Deletes the saved key; fails if there is none |

Type these in the server console without `/`.

### Messages

Run on 1.26.66.1, except the two failure-to-write messages, which were only found in the program:

| Message | Meaning |
|---|---|
| `Saved server identity key to …` | It will survive restarts |
| `A saved server identity key exists at …` | You are set |
| `No saved server identity key exists at …` | Run `save` |
| `Failed to save server identity key to …` | Check folder permissions and disk space |
| `Deleted server identity key at …` | The next start can use a new identity |
| `Invalid server identity key file …` | File is damaged or not a valid key |
| `Unable to create server identity key directory …` | The server cannot create the folder |

::: warning Deletion is not immediate
The server states that the **currently running** identity does not change until the next start. Restart to use a new identity. If you run `delete` and then `save` **without restarting**, the same key is saved again.
:::

## Where the key lives

`keys/server_identity_key.pem`, relative to the server directory. The `.pem` file holds private key material. Anyone who obtains it may be able to present your server's identity.

- Never commit it to Git or include it in a public support bundle.
- Restrict it to the account running BDS.
- Back it up separately from shareable world downloads.

Linux:

```bash
sudo chown -R bds:bds /opt/bds/keys
sudo chmod 700 /opt/bds/keys
sudo chmod 600 /opt/bds/keys/server_identity_key.pem
```

## Common tasks

### Move or reinstall a server
Stop it, copy `keys/` to the new installation, then start. Keep the key unique to one logical server unless you have tested sharing it.

### Docker
Persist the server directory or mount `keys/`. If the container's filesystem is discarded, so is the saved key. See [Docker](../network/docker).

### Rotate a leaked key
1. Run `serveridentity delete`.
2. Restart the server.
3. Run `serveridentity save`. The key is now different.
4. Tell players through a channel they trust to expect a new prompt.

### Make your own key
You can supply a key instead of saving the generated one. Mojang's bundled guide asks for an unencrypted P-384 (`secp384r1`) PEM:

```bash
mkdir keys
openssl ecparam -name secp384r1 -genkey -noout -out keys/server_identity_key.pem
```

Then restart.

### The server will not start after adding a key

| What you see | Cause |
|---|---|
| `Invalid server identity key file` and exit code `2` | Damaged file or wrong curve, such as P-256 |
| Startup hangs | The key has a passphrase. Use an unencrypted key |

Move the file out of `keys/` to start again with a temporary identity.

### Check it works
Join and accept trust, run `serveridentity status`, restart the server, and rejoin. There should be no new prompt.

## What it does not do

- It does not replace `online-mode`, the allowlist, or a firewall.
- It does not authenticate **players**; it identifies the **server**.
- It does not show that a server is safe, official, or approved by Mojang.

## How it fits with NetherNet

NetherNet is WebRTC-based. The binary contains an identity-assertion component, the message "application declined the server identity", and disconnect reason `NetherNetIdentityNotAllowed`. A community bridge describes an ECDSA key asserted through an `a=identity` attribute. Treat that last detail as reverse-engineering, not official specification.

## Still unknown

- Exactly what the client associates the trusted key with (address, name, or both).
- How players revoke trust in the client.
- Whether sharing a key across a server network is supported.

[Help verify these](../contribute/open-questions).

Sources: [Mojang 26.50 changelog](https://www.minecraft.net/en-us/article/minecraft--bedrock-edition-26-50-changelog), [Preview 26.50.24](https://www.minecraft.net/en-us/article/minecraft-preview-26-50-24), [Minecraft Wiki](https://minecraft.wiki/w/Commands/serveridentity), [Wikily](https://wikily.gg/minecraft/guides/bedrock-server), and [1.26.61.1 inspection](../contribute/sources).
