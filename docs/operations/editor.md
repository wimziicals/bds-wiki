# Editor mode

BDS can host Bedrock Editor projects with a launch argument:

```powershell
.\bedrock_server.exe Editor=true
```

On 1.26.66.1 the server starts normally with this argument. Connecting an Editor client was not tested.

Since 1.21.60, existing Editor projects load correctly even without the argument.

To convert an existing vanilla world (since 26.30):

```properties
convert-world-to-editor-project=true
```

Conversion runs only with `Editor=true`. **Back up first** and treat it as irreversible. Afterward set the property to `false`.

Editor and ordinary client/world combinations can produce `EditorMismatch…` disconnects. `enable-editor-network-metrics` adds data to the debugger.
