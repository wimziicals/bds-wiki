# Packet limits

Limits how many packets of chosen types each player can send. It is **off by default**.

## Turn it on

1. Add this to `server.properties`:

   ```properties
   enable-packet-rate-limiter=true
   ```

2. Edit `packetlimitconfig.json` if you want different limits.
3. Restart. The log says `Packet rate limiting enabled`.

::: warning
Without `enable-packet-rate-limiter=true`, `packetlimitconfig.json` does nothing, even though `reloadpacketlimitconfig` still says it was updated.
:::

## The file

```json
{
  "limitGroups": [
    {
      "minecraftPacketIds": [9, 97],
      "algorithm": {
        "name": "BucketPacketLimitAlgorithm",
        "params": { "drainRatePerSec": 10, "maxBucketSize": 50 }
      }
    }
  ]
}
```

| Key | Meaning | Allowed |
|---|---|---|
| `limitGroups` | Groups of packets and their limit | Required, at least one |
| `minecraftPacketIds` | Packet numbers in the group | Numbers |
| `name` | Only one algorithm exists | `BucketPacketLimitAlgorithm` |
| `drainRatePerSec` | Sustained packets per second | 0.0 to 10000.0 |
| `maxBucketSize` | Largest burst | 1 to 10000 |
| `defaultAlgorithm` | Optional limit for all packets | Same shape as `algorithm` |

In our test a file with only `defaultAlgorithm`, or with an empty `limitGroups`, was rejected.

Example adding a default:

```json
{
  "defaultAlgorithm": {
    "name": "BucketPacketLimitAlgorithm",
    "params": { "drainRatePerSec": 100, "maxBucketSize": 100 }
  },
  "limitGroups": [
    {
      "minecraftPacketIds": [9, 97],
      "algorithm": {
        "name": "BucketPacketLimitAlgorithm",
        "params": { "drainRatePerSec": 10, "maxBucketSize": 50 }
      }
    }
  ]
}
```

These numbers show the format. They are not recommendations.

## Shipped limits

| Packet IDs | Drain per second | Bucket size |
|---|---|---|
| 193, 4 | 0.0013 | 1 |
| 9, 97 | 10 | 50 |
| 93 | 10 | 50 |
| 154 | 20 | 60 |
| 356 | 1 | 5 |

Run `reloadpacketlimitconfig` after editing (since 1.21.100).

::: danger A mistake stops the server
With the limiter on, a broken file stops startup with `Failed to load packet limit config` and exit code `2`. Packet IDs can change between versions, and low limits can disconnect real players. Back up the file first.
:::

Sources: the bundled `bedrock_server_how_to.html` and tests on 1.26.66.1.
