# Disconnect reasons

Selected internal reason names found in 1.26.61.1. Meanings are inferred from names unless stated.

| Name | Likely area |
|---|---|
| `NetherNetProtocolVersion` | Incompatible transport versions |
| `NetherNetSessionNotFound` | Session unavailable |
| `NetherNetICE` | Network path or UDP failure |
| `NetherNetConnectRequest` / `Response` | Signaling failure |
| `NetherNetNegotiationTimeout` | Setup did not finish |
| `NetherNetNegotiationTimeoutWaitingForResponse` | No signaling response |
| `NetherNetNegotiationTimeoutWaitingForAccept` | Connection never accepted |
| `NetherNetInactivityTimeout` | Connection went quiet |
| `NetherNetDataChannelClosed` | Established channel closed |
| `NetherNetIdentityNotAllowed` | [Server identity](../security/server-identity) rejected |
| `ResourcePackLoadingFailed` | Pack failure |
| `ScriptWatchdogException` | [Watchdog](../scripting/watchdog) |
| `ScriptMemoryLimitExceeded` | Script memory limit |
| `AsyncJoinTaskDenied` | Script denied a join |
| `EditorMismatchEditorWorld` / `EditorMismatchVanillaWorld` | Editor mismatch |
| `SubClientLoginDisabled` | Split-screen client refused |
| `DenyListed` | Denied identity |

The [error lookup](./error-lookup) explains the common ones.

Do not assume a friendly client error name maps to exactly one of these.
