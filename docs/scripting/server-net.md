# @minecraft/server-net

HTTP, WebSockets, and packet events from BDS scripts. It does not work in the client or on Realms. [Limit its access](./module-permissions#limiting-server-net).

## HTTP

```js
import { http, HttpRequest, HttpRequestMethod, HttpHeader } from '@minecraft/server-net';

export async function report(count) {
  const request = new HttpRequest('https://example.com/status');
  request.method = HttpRequestMethod.Post;
  request.timeout = 10;
  request.headers = [new HttpHeader('Content-Type', 'application/json')];
  request.body = JSON.stringify({ count });
  const response = await http.request(request);
  if (response.status >= 400) console.warn(`HTTP ${response.status}`);
}
```

Handle errors including `HttpRequestLimitExceededError`, `RequestBodyTooLargeError`, `UriNotAllowedError`, and `TLSOnlyError`.

## WebSockets

Added to the beta API in 26.20; connection headers followed in 26.30.

```js
import { websocket } from '@minecraft/server-net';

const client = await websocket.connect('wss://example.com/bds');
client.send(JSON.stringify({ type: 'hello' }));
```

Use `client.afterEvents` for messages and closure, `client.isOpen` for state, and `client.close()` when finished. Reconnect with a delay after failure. Since 26.50 the client pings every 45 seconds rather than every second.

## Packet events

`beforeEvents` exposes packet send and receive events. Filter them:

```js
import { beforeEvents, PacketId } from '@minecraft/server-net';

beforeEvents.packetReceive.subscribe((event) => {
  if (event.packetSize > 10000) event.cancel = true;
}, { monitoredPacketIds: [PacketId.TextPacket] });
```

Canceling a received packet makes the server silently ignore it. This example is illustrative; an unsuitable limit can break normal play. Monitoring every packet is costly.

[Official reference](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server-net/minecraft-server-net).
