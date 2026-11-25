# Hardening checklist

- [ ] Keep `online-mode=true`.
- [ ] Use `allow-list=true` for private servers.
- [ ] Set the default permission level to `member` or `visitor`.
- [ ] Give operator only to people you trust.
- [ ] Save the [server identity](./server-identity) and protect the key.
- [ ] Run as a normal user, never Administrator or root.
- [ ] Open only the ports you use.
- [ ] Keep script debugging off in production.
- [ ] Never expose a non-loopback debugger without a firewall and passcode.
- [ ] Give script modules only to [packs that need them](../scripting/module-permissions).
- [ ] Put tokens in [`secrets.json`](../scripting/variables-secrets).
- [ ] Limit `server-net` with `allowed_uris` and `force_tls`.
- [ ] Download builds only from minecraft.net.
- [ ] Test restoring a [backup](../worlds/backups).

## Proxies and online-mode=false

Some proxies authenticate players themselves and ask for `online-mode=false` behind them. If you do this, firewall BDS so **only the proxy** can reach it; otherwise identities may be spoofed. The allowlist is incompatible with this mode, so enforce access at the proxy.
