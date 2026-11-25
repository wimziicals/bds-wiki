# Open questions

Please contribute a reproducible test or primary source.

## Server Identity
- What does the client bind trust to: address, name, or key alone?
- Where can players revoke trust?
- Does changing only the hostname trigger a new prompt?
- What are the effects of sharing a key across a network?
- Does `save` behave identically on Linux and Education servers?

## Networking
- Which `server-udp-ports` form works best in Docker bridge mode?
- Is a list of several mappings officially supported?
- What does `/v1/join` expect? (`GET` returns an empty 200; `POST /v1/join/1` without data returns 400, "Missing SDP offer in request body".)

## Configuration
- What is the exact effect of each [hidden property](../config/hidden-properties) marked as inferred?
- How do player roles map to `commands.json` levels for each `op-permission-level`?
- Where do `observe` attack-validation results appear?
- What is the format of `server-port-mappings`?
- What are the performance-warning property names in 26.70?

## Tools
- What is the optimizer's 26.70 output mode field called?
- Why does a world pack with a system pack's header ID still load?
- What does `ExperimentalPacksUpgraderConfigPath` do?
