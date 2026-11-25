# Hidden server properties

These settings are read by BDS but are **not in the `server.properties` file it ships with**. Add a line yourself, save, and restart.

We found them by examining the settings loader in Windows BDS **1.26.61.1**. Entries marked **Tested** were run on 1.26.66.1. The loader reading a key proves the key is recognized. It does not prove every feature behind it works on a public server, so each group says how safe it is to use.

## Useful for most servers

Easy to undo: remove the line and restart.

| Setting | Values | What it does | Default |
|---|---|---|---|
| `enable-player-connection-text` | `true`, `false` | Shows "joined the game" and "left the game" in chat | `true` |
| `enable-player-sleeping-text` | `true`, `false` | Shows messages about players sleeping | `true` |
| `enable-player-changed-skin-text` | `true`, `false` | Shows "has changed their skin" messages | `true` |
| `disable-emote-chat` | `true`, `false` | Turns off emote messages in chat | Not confirmed |
| `emit-server-telemetry` | `true`, `false` | Sends server telemetry to Mojang. The server prints a notice when off | Off |
| `allow-player-joining` | `true`, `false` | `false` makes a [script approve every player](../scripting/server-admin#gate-joins). Ships as a commented line | `true` |

The three text defaults were confirmed from the loader's starting value. The other descriptions in this group follow the key's name, except telemetry and joining, which the server or its file explains.

### Example: hide join, leave, sleep and skin messages

```properties
enable-player-connection-text=false
enable-player-sleeping-text=false
enable-player-changed-skin-text=false
```

You do not need to add them as `true`: that is already the default. If you want custom join messages, turn the built-in one off and send your own from a [script](../scripting/overview).

## Worlds and gameplay

Try on a copy of your world first. Purposes are inferred from names unless a source is given.

| Setting | Values | Likely purpose |
|---|---|---|
| `level-type` | `DEFAULT`, `FLAT`, `LEGACY` | Terrain type for a **new** world. **Tested:** all three work |
| `isHardcore` | `true`, `false` | **Tested:** hardcore mode; also forces hard difficulty. Note the capital `H` |
| `allow-command-blocks` | `true`, `false` | Allow command blocks |
| `allow-code-builder` | `true`, `false` | Education Code Builder |
| `adventure-mode-overrides-enabled` | `true`, `false` | Adventure-mode override behavior |
| `language` | Language code, such as `en_US` | Server language |

**Tested:** `gamemode=spectator` is accepted, although the shipped file lists only survival, creative, and adventure. `gamemode` and `difficulty` also accept numbers.

## Players and permissions

| Setting | Values | Likely purpose |
|---|---|---|
| `op-permission-level` | `0` to `4` | Command level operators receive. See [command levels](./commands-json#levels) |
| `msa-gamertags-only` | `true`, `false` | Restrict or display only Microsoft-account Gamertags; exact effect unconfirmed |
| `allow-subclient-login` | `true`, `false` | Allow split-screen players to join |
| `disable-persona` | `true`, `false` | Character Creator skins. Shipped, but marked internal use only |
| `item-transaction-logging-enabled` | `true`, `false` | Log item transactions |
| `chat-logging-enabled` | `true`, `false` | Older name related to chat logging |

`op-permission-level` is often called Java-only. The Bedrock loader does recognize it.

## Logs

| Setting | Values | Likely purpose |
|---|---|---|
| `server-log-file-enabled` | `true`, `false` | **Tested:** write the server log to a file |
| `server-log-file-path` | Path without extension | **Tested:** `mylogs/server` creates `mylogs/server.txt` in the server folder |
| `chat-log-file-enabled` | `true`, `false` | Write chat to a file |
| `chat-log-file-path` | Path without extension | Where to write it |
| `content-log-file-path` | Path without extension | **Tested:** accepted; `mylogs/content` becomes `mylogs/content.txt` |

```properties
server-log-file-enabled=true
server-log-file-path=mylogs/server
```

Console `say` did not create a chat log in our test; real player chat was not tested. Chat logs are personal data. Tell players if you keep them.

## Networking

A wrong value can stop players joining. Keep a copy of your working file.

| Setting | Values | Likely purpose |
|---|---|---|
| `server-public-ip` | IP address | Public address advertised to players. Mojang names this as the replacement for IP prefixes in `server-udp-ports` from Preview 26.70.23 |
| `server-port-mappings` | Not confirmed | Public/local port mappings |
| `allow-unconnected-pings` | `true`, `false` | Respond to status pings before connection |
| `raknet-joinflood-protection` | `true`, `false` | Join-flood protection for deprecated RakNet |
| `enable-packet-rate-limiter` | `true`, `false` | **Tested:** turn the [packet limiter](./packet-limits) on. Default `false`; documented in Mojang's bundled guide |
| `enable-packet-receipt-eventing` | `true`, `false` | Emit packet-receipt events |
| `client-throttle-threshold` | Number | When to throttle a client |
| `client-throttle-scalar` | 0 or more | Throttle strength. Negative values become 1 |
| `minecraft-services-timeout` | Number | Timeout for Minecraft services |
| `wsserver-encryption` | `true`, `false` | WebSocket server encryption |
| `wserver-retry-time` | Number | WebSocket retry delay. This spelling is in the build |
| `nethernet-id` | UUID | NetherNet ID. The server reports an error if the format is wrong |

## Movement tuning

| Setting | Likely purpose |
|---|---|
| `player-rewind-history-size-ticks` | Movement history kept for rewinding |
| `player-rewind-min-correction-delay-ticks` | Minimum delay between corrections |
| `player-tick-throttled-input-batch-size` | Input batch size when throttled |
| `player-tick-throttled-max-tick-credits` | Tick credits when throttled |
| `server-authoritative-block-breaking` | Older block-breaking switch; left the default file in 1.21.0 |
| `enable-item-stack-net-manager-deprecated` | Deprecated inventory networking switch |

## Older spellings

| Older name | Use instead |
|---|---|
| `white-list` | `allow-list` |
| `allow-commands` | `allow-cheats` |

The loader handles each pair in the same place.

## Internal or hosting-platform settings

Documented for completeness. **Do not set these on a normal server.**

| Setting | Apparent area |
|---|---|
| `server-type`, `server-id`, `trusted-key` | Managed hosting identity |
| `application-id`, `application-tenant-id` | Application identity |
| `service-discovery` | JSON; contains `environment` and `maxRetryAttempts` |
| `service-overrides` | JSON service overrides |
| `remote-server-communication-endpoint` | Remote management |
| `realms-stories-enabled` | Realms |
| `community-sift-config`, `pss-text-filtering-config` | Text filtering. Names seen in the build; loader use not fully confirmed |
| `server-wakeup-frequency` | Server loop timing |
| `enable-script` | Script engine switch |
| `permission-level` | Seen in comparison data; purpose unconfirmed |

## My setting does nothing

1. Check spelling and letter case.
2. Keys are case-sensitive: `Max-Players` is ignored. (Spaces around `=` are fine.) If a key appears twice, the **last** one wins.
3. Make sure the line does not start with `#`.
4. Fully stop and restart the server.
5. Check it was saved in the folder the server runs from.
6. If it still has no effect, [tell us](../contribute/contributing).
