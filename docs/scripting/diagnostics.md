# Diagnostics and Sentry

## Sentry

`@minecraft/diagnostics` sends script errors to [Sentry](https://sentry.io). It arrived in beta in 1.21.70 and was described as dedicated-server-only.

```js
import { sentry } from '@minecraft/diagnostics';
import { secrets } from '@minecraft/server-admin';

const dsn = secrets.get('sentryDsn');
if (dsn) sentry.init({ dsn, sampleRate: 1 });
```

The import is confirmed on 1.26.66.1; sending events was not tested. The module must be [allowed](./module-permissions) first.

Limit volume with `sentry-rate-limit-window` and `sentry-max-events-per-window`. Avoid sending players' personal data in tags or breadcrumbs.

## Captures

`diagnostics-capture-auto-start=true` begins a capture at level load. Keep file count and size bounded. You can also run `script diagnostics startcapture` and `stopcapture`.

On Windows, captures are saved as `.mcstats` files in `%APPDATA%\Minecraft Bedrock Server\logs\diagnostics\`, **not** in the server folder.

## Live diagnostics

VS Code's Minecraft debugger can display server diagnostics. BDS 26.10 added the toggle for Editor network metrics, and 26.50 added beta scripting classes for custom diagnostics tabs.
