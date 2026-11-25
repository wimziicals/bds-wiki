# How to contribute

Pages are Markdown in `docs/`. With Node.js installed:

```bash
npm install
npm run dev
```

Run `npm run check` to confirm every known property is documented. For a new BDS version, add new keys to `tools/property-keys.txt`.

Run `npm run build` before submitting; broken internal links fail the build.

## Add a message to the error lookup

Edit `docs/.vitepress/theme/errors.js`. Each entry has a pattern `m` to match, the message `t`, `why`, `fix` steps, and a `link`. Set `seen: true` only if you saw the message in a real server log, and say which version in your change.

## Page rules

1. State the first version a feature applies to.
2. Link a primary source, or describe a reproducible test.
3. Separate official fact, observed behavior, and inference.
4. Never publish real keys, tokens, XUIDs, or private IPs of others.
5. Use placeholders such as `192.0.2.20` and `example.com`.
6. Add new pages to `docs/.vitepress/config.mjs`.

For a BDS test, record build, operating system, transport, and steps.
