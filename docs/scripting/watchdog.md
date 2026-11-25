# Script watchdog

The watchdog detects scripts that hang, spike, run slowly, or use too much memory. By default:

- A 10-second single-tick hang can interrupt the script and shut down the server.
- Combined script memory above 100 MB logs a warning.
- Above 250 MB the server saves and shuts down.

Configure it with [`script-watchdog-*`](../config/server-properties#script-watchdog).

Older guides mention `script watchdog exportstats`. It does not exist in 1.26.66.1. Use `script profiler` or `script diagnostics` instead.

Raising limits can hide a bug. Profile first, split long jobs with `system.runJob`, unsubscribe unused listeners, and clear growing maps.
