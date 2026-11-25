# Variables and secrets

Put these in `config/default/` or preferably `config/<script-module-uuid>/`.

`variables.json` holds ordinary values:

```json
{ "serverEndpoint": "https://example.com/api/" }
```

`secrets.json` holds credentials:

```json
{ "authtoken": "replace-me" }
```

```js
import { variables, secrets } from '@minecraft/server-admin';
import { HttpHeader } from '@minecraft/server-net';

const endpoint = variables.get('serverEndpoint');
const token = secrets.get('authtoken');
if (!token) throw new Error('authtoken is not configured');
const header = new HttpHeader('Authorization', token);
```

`secrets.get` returns a `SecretString` placeholder. Supported APIs resolve it at execution without exposing the value to the script. It cannot be concatenated, so include a prefix such as `Bearer ` in the secret itself.

Restrict file access, keep `secrets.json` out of Git, and remember that backups contain it. Use `reloadconfig` after edits.
