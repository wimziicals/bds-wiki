<script setup>
import { reactive, computed, ref, onMounted, watch } from 'vue'

// t: text | num | bool | sel. ship: 'on' (shipped line), 'off' (shipped commented out), absent = hidden property.
const B = 'bool'
const F = [
  // Essentials
  { k: 'server-name', g: 'basics', l: 'Server name', t: 'text', d: 'Dedicated Server', ship: 'on', h: 'Shown in the server list. No semicolons.' },
  { k: 'level-name', g: 'basics', l: 'World folder name', t: 'text', d: 'Bedrock level', ship: 'on', h: 'Folder inside worlds/. Must match exactly, including capitals.' },
  { k: 'gamemode', g: 'basics', l: 'Game mode', t: 'sel', o: ['survival', 'creative', 'adventure', 'spectator'], d: 'survival', ship: 'on', h: 'For new players.' },
  { k: 'force-gamemode', g: 'basics', l: 'Force this game mode', t: B, d: 'false', ship: 'on', h: 'Use the game mode above even for players who already have one.' },
  { k: 'difficulty', g: 'basics', l: 'Difficulty', t: 'sel', o: ['peaceful', 'easy', 'normal', 'hard'], d: 'easy', ship: 'on' },
  { k: 'allow-cheats', g: 'basics', l: 'Allow cheats', t: B, d: 'false', ship: 'on', h: 'Needed for most commands.' },
  { k: 'max-players', g: 'basics', l: 'Max players', t: 'num', d: '10', ship: 'on' },
  { k: 'default-player-permission-level', g: 'basics', l: 'New players are', t: 'sel', o: ['visitor', 'member', 'operator'], d: 'member', ship: 'on' },
  { k: 'texturepack-required', g: 'basics', l: 'Players must accept resource packs', t: B, d: 'false', ship: 'on' },
  { k: 'level-seed', g: 'world', l: 'Seed', t: 'text', d: '', ship: 'on', h: 'Empty means random.' },
  { k: 'level-type', g: 'world', l: 'World type', t: 'sel', o: ['DEFAULT', 'FLAT', 'LEGACY'], d: 'DEFAULT', h: 'Hidden setting. FLAT is a superflat world.' },
  { k: 'isHardcore', g: 'world', l: 'Hardcore', t: B, d: 'false', h: 'Hidden setting. Also forces hard difficulty.' },
  // Joining
  { k: 'online-mode', g: 'join', l: 'Require Xbox sign-in', t: B, d: 'true', ship: 'on', h: 'Keep this on. Players from other networks need it.' },
  { k: 'allow-list', g: 'join', l: 'Only allowlisted players can join', t: B, d: 'true', ship: 'on', h: 'Add players with allowlist add "Name".' },
  { k: 'allow-player-joining', g: 'join', l: 'Players can join without a script', t: B, d: 'true', ship: 'off', h: 'Turn off only if a script approves each player.' },
  { k: 'player-idle-timeout', g: 'join', l: 'Kick idle players after (minutes)', t: 'num', d: '30', ship: 'on', h: '0 never kicks.' },
  // Chat
  { k: 'enable-player-connection-text', g: 'chat', l: 'Show join and leave messages', t: B, d: 'true', h: 'Hidden setting.' },
  { k: 'enable-player-sleeping-text', g: 'chat', l: 'Show sleeping messages', t: B, d: 'true', h: 'Hidden setting.' },
  { k: 'enable-player-changed-skin-text', g: 'chat', l: 'Show skin change messages', t: B, d: 'true', h: 'Hidden setting.' },
  { k: 'chat-restriction', g: 'chat', l: 'Chat', t: 'sel', o: ['None', 'Dropped', 'Disabled'], d: 'None', ship: 'on', h: 'Dropped throws messages away. Disabled hides chat except for operators.' },
  // Network
  { k: 'server-port', g: 'net', l: 'Port (TCP)', t: 'num', d: '19132', ship: 'on', h: 'Forward this as TCP.' },
  { k: 'server-udp-ports', g: 'net', l: 'Game ports (UDP)', t: 'text', d: '19132', ship: 'on', h: 'Forward these as UDP. Usually the same number as the port.' },
  { k: 'server-ip', g: 'net', l: 'Listen only on this address', t: 'text', d: '', ship: 'off', h: 'Leave empty to use every network card.' },
  { k: 'enable-lan-visibility', g: 'net', l: 'Show in LAN games', t: B, d: 'true', ship: 'on' },
  { k: 'transport', g: 'net', l: 'Transport', t: 'sel', o: ['nethernet', 'raknet'], d: 'nethernet', ship: 'on', h: 'Keep nethernet.' },
  // Performance
  { k: 'view-distance', g: 'perf', l: 'View distance (chunks)', t: 'num', d: '32', ship: 'on', h: 'At least 5. Lower uses less memory and bandwidth.' },
  { k: 'tick-distance', g: 'perf', l: 'Simulation distance (chunks)', t: 'num', d: '4', ship: 'on', h: '4 to 12. Higher uses much more CPU.' },
  { k: 'max-threads', g: 'perf', l: 'Max threads', t: 'num', d: '8', ship: 'on', h: '0 uses as many as possible.' },
  { k: 'client-side-chunk-generation-enabled', g: 'perf', l: 'Clients draw far-away chunks', t: B, d: 'true', ship: 'on' },
  { k: 'server-build-radius-ratio', g: 'perf', l: 'Server build radius ratio', t: 'text', d: 'Disabled', ship: 'on', h: 'Disabled, or 0.0 to 1.0.' },
  { k: 'persistent-ticking-area-max-count', g: 'perf', l: 'Max saved ticking areas', t: 'text', d: '10', ship: 'on', h: 'Number or unlimited.' },
  { k: 'persistent-ticking-area-max-chunks', g: 'perf', l: 'Max chunks per saved ticking area', t: 'text', d: '100', ship: 'on' },
  { k: 'transient-ticking-area-max-chunks', g: 'perf', l: 'Max temporary ticking chunks per pack', t: 'text', d: '300', ship: 'on' },
  // Anti-cheat
  { k: 'server-authoritative-movement-strict', g: 'ac', l: 'Strict movement checks', t: B, d: 'false', ship: 'on', h: 'More corrections for laggy players.' },
  { k: 'server-authoritative-dismount-strict', g: 'ac', l: 'Strict dismount checks', t: B, d: 'false', ship: 'on' },
  { k: 'server-authoritative-entity-interactions-strict', g: 'ac', l: 'Strict entity interaction checks', t: B, d: 'false', ship: 'on' },
  { k: 'server-authoritative-entity-attack-request-validation', g: 'ac', l: 'Attack request checks', t: 'sel', o: ['disabled', 'observe', 'enforce'], d: 'disabled', ship: 'on', h: 'Try observe before enforce.' },
  { k: 'server-authoritative-entity-attack-range-validation', g: 'ac', l: 'Attack reach checks', t: 'sel', o: ['disabled', 'observe', 'enforce'], d: 'disabled', ship: 'on' },
  { k: 'server-authoritative-entity-attack-range-tolerance', g: 'ac', l: 'Extra reach allowed (blocks)', t: 'text', d: '0.5', ship: 'on' },
  { k: 'player-position-acceptance-threshold', g: 'ac', l: 'Position tolerance', t: 'text', d: '0.5', ship: 'on', h: 'Above 1.0 makes cheating easier.' },
  { k: 'player-movement-action-direction-threshold', g: 'ac', l: 'Look direction tolerance', t: 'text', d: '0.85', ship: 'on' },
  { k: 'server-authoritative-block-breaking-pick-range-scalar', g: 'ac', l: 'Block breaking reach scalar', t: 'text', d: '1.5', ship: 'on' },
  // Logs
  { k: 'content-log-file-enabled', g: 'log', l: 'Write content errors to a file', t: B, d: 'false', ship: 'on' },
  { k: 'content-log-console-output-enabled', g: 'log', l: 'Show content errors in the console', t: B, d: 'false', ship: 'on' },
  { k: 'content-log-level', g: 'log', l: 'Content log level', t: 'sel', o: ['error', 'warning', 'info', 'verbose'], d: 'info', ship: 'on' },
  { k: 'server-log-file-enabled', g: 'log', l: 'Save the console log to a file', t: B, d: 'false', h: 'Hidden setting.' },
  { k: 'server-log-file-path', g: 'log', l: 'Console log file', t: 'text', d: '', h: 'Hidden setting. Without .txt, for example logs/server.' },
  { k: 'enable-packet-rate-limiter', g: 'log', l: 'Use packetlimitconfig.json', t: B, d: 'false', h: 'Hidden setting. Rate-limits packets.' },
  // Everything else
  { k: 'compression-threshold', g: 'more', l: 'Compression threshold', t: 'num', d: '1', ship: 'on' },
  { k: 'compression-algorithm', g: 'more', l: 'Compression', t: 'sel', o: ['zlib', 'snappy'], d: 'zlib', ship: 'on' },
  { k: 'disable-player-interaction', g: 'more', l: 'Ask clients to ignore other players', t: B, d: 'false', ship: 'on' },
  { k: 'block-network-ids-are-hashes', g: 'more', l: 'Hashed block IDs', t: B, d: 'true', ship: 'on' },
  { k: 'disable-persona', g: 'more', l: 'Disable persona skins (internal)', t: B, d: 'false', ship: 'on' },
  { k: 'disable-custom-skins', g: 'more', l: 'Block custom skins', t: B, d: 'false', ship: 'on' },
  { k: 'disable-client-vibrant-visuals', g: 'more', l: 'Ask clients to turn off Vibrant Visuals', t: B, d: 'true', ship: 'off' },
  { k: 'allow-outbound-script-debugging', g: 'more', l: 'Allow debugger connect', t: B, d: 'false', ship: 'on' },
  { k: 'allow-inbound-script-debugging', g: 'more', l: 'Allow debugger listen', t: B, d: 'false', ship: 'on' },
  { k: 'force-inbound-debug-port', g: 'more', l: 'Debugger port', t: 'num', d: '19144', ship: 'off' },
  { k: 'script-debugger-listen-address', g: 'more', l: 'Debugger listen address', t: 'text', d: '127.0.0.1', ship: 'off' },
  { k: 'script-debugger-auto-attach', g: 'more', l: 'Debugger auto attach', t: 'sel', o: ['disabled', 'connect', 'listen'], d: 'disabled', ship: 'on' },
  { k: 'script-debugger-auto-attach-connect-address', g: 'more', l: 'Auto attach address', t: 'text', d: 'localhost:19144', ship: 'off' },
  { k: 'script-debugger-auto-attach-timeout', g: 'more', l: 'Auto attach timeout', t: 'num', d: '0', ship: 'off' },
  { k: 'script-debugger-passcode', g: 'more', l: 'Debugger passcode', t: 'text', d: '', ship: 'off' },
  { k: 'script-watchdog-enable', g: 'more', l: 'Script watchdog', t: B, d: 'true', ship: 'off' },
  { k: 'script-watchdog-enable-exception-handling', g: 'more', l: 'Watchdog exception handling', t: B, d: 'true', ship: 'off' },
  { k: 'script-watchdog-enable-shutdown', g: 'more', l: 'Watchdog can shut down', t: B, d: 'true', ship: 'off' },
  { k: 'script-watchdog-hang-exception', g: 'more', l: 'Interrupt hung scripts', t: B, d: 'true', ship: 'off' },
  { k: 'script-watchdog-hang-threshold', g: 'more', l: 'Hang threshold (ms)', t: 'num', d: '10000', ship: 'off' },
  { k: 'script-watchdog-spike-threshold', g: 'more', l: 'Spike warning (ms)', t: 'num', d: '100', ship: 'off' },
  { k: 'script-watchdog-slow-threshold', g: 'more', l: 'Slow warning (ms)', t: 'num', d: '10', ship: 'off' },
  { k: 'script-watchdog-memory-warning', g: 'more', l: 'Script memory warning (MB)', t: 'num', d: '100', ship: 'off' },
  { k: 'script-watchdog-memory-limit', g: 'more', l: 'Script memory limit (MB)', t: 'num', d: '250', ship: 'off' },
  { k: 'diagnostics-capture-auto-start', g: 'more', l: 'Start diagnostics capture automatically', t: B, d: 'false', ship: 'off' },
  { k: 'diagnostics-capture-max-files', g: 'more', l: 'Diagnostics files kept', t: 'num', d: '5', ship: 'off' },
  { k: 'diagnostics-capture-max-file-size', g: 'more', l: 'Diagnostics file size (bytes)', t: 'num', d: '2097152', ship: 'off' },
  { k: 'sentry-rate-limit-window', g: 'more', l: 'Sentry window (seconds)', t: 'num', d: '60', ship: 'off' },
  { k: 'sentry-max-events-per-window', g: 'more', l: 'Sentry events per window', t: 'num', d: '10', ship: 'off' },
  { k: 'enable-profiler', g: 'more', l: 'Profiler', t: B, d: 'true', ship: 'off' },
  { k: 'enable-editor-network-metrics', g: 'more', l: 'Editor network metrics', t: B, d: 'true', ship: 'off' },
  { k: 'convert-world-to-editor-project', g: 'more', l: 'Convert world to Editor project', t: B, d: 'false', ship: 'off' }
]
// Order of the shipped file (1.26.66.1).
const ORDER = 'server-name gamemode force-gamemode difficulty allow-cheats max-players online-mode allow-list server-port server-ip server-udp-ports transport enable-lan-visibility view-distance tick-distance persistent-ticking-area-max-count persistent-ticking-area-max-chunks transient-ticking-area-max-chunks player-idle-timeout allow-player-joining max-threads level-name level-seed default-player-permission-level texturepack-required content-log-file-enabled content-log-console-output-enabled content-log-level compression-threshold compression-algorithm server-authoritative-movement-strict server-authoritative-dismount-strict server-authoritative-entity-interactions-strict server-authoritative-entity-attack-request-validation server-authoritative-entity-attack-range-validation server-authoritative-entity-attack-range-tolerance player-position-acceptance-threshold player-movement-action-direction-threshold server-authoritative-block-breaking-pick-range-scalar chat-restriction disable-player-interaction client-side-chunk-generation-enabled block-network-ids-are-hashes disable-persona disable-custom-skins server-build-radius-ratio allow-outbound-script-debugging allow-inbound-script-debugging force-inbound-debug-port script-debugger-listen-address script-debugger-auto-attach script-debugger-auto-attach-connect-address script-debugger-auto-attach-timeout script-debugger-passcode script-watchdog-enable script-watchdog-enable-exception-handling script-watchdog-enable-shutdown script-watchdog-hang-exception script-watchdog-hang-threshold script-watchdog-spike-threshold script-watchdog-slow-threshold script-watchdog-memory-warning script-watchdog-memory-limit diagnostics-capture-auto-start diagnostics-capture-max-files diagnostics-capture-max-file-size disable-client-vibrant-visuals sentry-rate-limit-window sentry-max-events-per-window enable-profiler enable-editor-network-metrics convert-world-to-editor-project'.split(' ')
const GROUPS = [
  ['basics', 'Basics'], ['world', 'New world'], ['join', 'Who can join'], ['chat', 'Chat messages'],
  ['net', 'Network'], ['perf', 'Performance'], ['ac', 'Anti-cheat'], ['log', 'Logs and limits'], ['more', 'Everything else']
]
const byKey = Object.fromEntries(F.map((f) => [f.k, f]))
const defaults = () => Object.fromEntries(F.map((f) => [f.k, f.d]))
const v = reactive(defaults())
const extra = ref([]) // unknown lines kept from an imported file
const open = reactive({ basics: true, world: true, join: true, chat: true, net: true })
const importText = ref('')
const importMsg = ref('')
const copied = ref(false)

const PRESETS = {
  'Private for friends': {},
  'Public server': { 'allow-list': 'false', 'enable-lan-visibility': 'false', 'player-idle-timeout': '15' },
  'Creative building': { gamemode: 'creative', difficulty: 'peaceful', 'allow-cheats': 'true', 'level-type': 'FLAT' },
  Hardcore: { isHardcore: 'true', difficulty: 'hard' },
  'Quiet chat': { 'enable-player-connection-text': 'false', 'enable-player-sleeping-text': 'false', 'enable-player-changed-skin-text': 'false' }
}
function preset(name) {
  if (name !== 'Quiet chat') Object.assign(v, defaults())
  Object.assign(v, PRESETS[name])
}
function reset() { Object.assign(v, defaults()); extra.value = []; importMsg.value = '' }

function doImport() {
  let n = 0, unknown = []
  for (const raw of importText.value.split(/\r?\n/)) {
    const line = raw.trim()
    if (!line || line.startsWith('#')) continue
    const i = line.indexOf('=')
    if (i < 1) continue
    const k = line.slice(0, i).trim(), val = line.slice(i + 1).trim()
    if (byKey[k]) { v[k] = val; n++ } else unknown.push(`${k}=${val}`)
  }
  extra.value = unknown
  importMsg.value = `Loaded ${n} settings.` + (unknown.length ? ` Kept ${unknown.length} unknown line(s) unchanged at the end.` : '')
}

const output = computed(() => {
  const lines = []
  for (const k of ORDER) {
    const f = byKey[k]
    const changed = v[k] !== f.d
    lines.push(f.ship === 'off' && !changed ? `#${k}=${f.d}` : `${k}=${v[k]}`)
  }
  const hidden = F.filter((f) => !f.ship && v[f.k] !== f.d)
  if (hidden.length) {
    lines.push('', '# Hidden settings (not in the shipped file)')
    for (const f of hidden) lines.push(`${f.k}=${v[f.k]}`)
  }
  if (extra.value.length) lines.push('', '# Kept from your file', ...extra.value)
  return lines.join('\n') + '\n'
})

const udpOk = (s) => s.split(',').every((e) => {
  const m = e.trim().match(/^(?:(\d{1,3}(?:\.\d{1,3}){3}|\[[0-9a-fA-F:]+\]):)?(\d+)(?:-(\d+))?(?::(\d+)(?:-(\d+))?)?$/)
  if (!m) return false
  const [, ip, a, b, c, d] = m
  const ports = [a, b, c, d].filter(Boolean).map(Number)
  if (ports.some((p) => p < 1 || p > 65535)) return false
  if (ip && !c) return false
  if (c && (b ? Number(b) - Number(a) : 0) !== (d ? Number(d) - Number(c) : 0)) return false
  return true
})
const num = (k) => Number(v[k])
const isInt = (k) => /^-?\d+$/.test(String(v[k]).trim())

const issues = computed(() => {
  const e = [], w = [], i = []
  if (v['allow-list'] === 'true' && v['online-mode'] === 'false') e.push('The server will not start: the allowlist needs Xbox sign-in. Turn on "Require Xbox sign-in" or turn off the allowlist.')
  if (v['online-mode'] === 'false') w.push('Without Xbox sign-in, players from other networks cannot join and anyone can use any name.')
  if (v['transport'] === 'raknet') e.push('With raknet, players cannot connect in current versions. Use nethernet.')
  if (v['server-name'].includes(';')) e.push('The server name cannot contain a semicolon.')
  if (!v['server-name'].trim()) w.push('The server name is empty.')
  if (/[\\/:*?"<>|]/.test(v['level-name'])) e.push('The world folder name contains a character folders cannot use.')
  if (!v['level-name'].trim()) e.push('The world folder name is empty.')
  for (const k of ['server-port', 'force-inbound-debug-port']) if (!isInt(k) || num(k) < 1 || num(k) > 65535) e.push(`${byKey[k].l} must be a whole number from 1 to 65535.`)
  if (!udpOk(v['server-udp-ports'])) e.push('Game ports (UDP) are not valid. Use a port such as 19132, a range such as 19132-19140, or see the server-udp-ports page.')
  if (!isInt('max-players') || num('max-players') < 1) e.push('Max players must be a whole number of 1 or more.')
  if (!isInt('view-distance') || num('view-distance') < 5) e.push('View distance must be 5 or more.')
  if (!isInt('tick-distance') || num('tick-distance') < 4 || num('tick-distance') > 12) e.push('Simulation distance must be from 4 to 12.')
  if (!isInt('player-idle-timeout') || num('player-idle-timeout') < 0) e.push('Idle timeout must be 0 or more.')
  if (v['default-player-permission-level'] === 'operator') w.push('Every new player will be an operator. Never do this on a public server.')
  if (v['allow-list'] === 'false' && v['online-mode'] === 'true') w.push('Anyone who knows your address can join. Consider the allowlist.')
  if (v['allow-player-joining'] === 'false') w.push('Nobody can join unless a script approves them.')
  if (v['allow-cheats'] === 'true' && v['allow-list'] === 'false') i.push('Cheats are on for a public server. Only operators can use most commands, but check your operator list.')
  if (num('view-distance') > 32) w.push('A view distance above 32 uses a lot of memory and bandwidth.')
  for (const k of ['persistent-ticking-area-max-count', 'persistent-ticking-area-max-chunks', 'transient-ticking-area-max-chunks'])
    if (v[k] === 'unlimited') w.push(`${byKey[k].l}: unlimited can seriously slow the server.`)
    else if (!isInt(k) || num(k) < 1) e.push(`${byKey[k].l} must be a positive whole number or unlimited.`)
  if (v['server-build-radius-ratio'] !== 'Disabled' && !(num('server-build-radius-ratio') >= 0 && num('server-build-radius-ratio') <= 1)) e.push('Server build radius ratio must be Disabled or 0.0 to 1.0.')
  if (!(num('server-authoritative-entity-attack-range-tolerance') >= 0)) e.push('Extra reach must be 0 or more.')
  if (num('player-position-acceptance-threshold') > 1) w.push('A position tolerance above 1.0 makes movement cheats easier.')
  if (v['script-debugger-passcode']) w.push('The passcode is printed in the startup log. Do not share logs without removing it.')
  if (!['127.0.0.1', 'localhost', '::1'].includes(v['script-debugger-listen-address']) && !v['script-debugger-passcode']) e.push('A debugger listening on a non-local address needs a passcode.')
  if (v['allow-inbound-script-debugging'] === 'true') w.push('Do not open the debugger port to the internet.')
  for (const k of ['script-watchdog-memory-warning', 'script-watchdog-memory-limit']) if (num(k) > 2000) e.push(`${byKey[k].l} can be at most 2000.`)
  if (v['convert-world-to-editor-project'] === 'true') w.push('Converting to an Editor project needs the Editor=true launch argument. Back up the world first and set this back to false afterwards.')
  if (v['server-log-file-enabled'] === 'true' && !v['server-log-file-path']) i.push('Set a console log file path too, for example logs/server.')
  if (v['enable-packet-rate-limiter'] === 'true') i.push('The packet limiter uses packetlimitconfig.json. A broken file stops the server from starting.')
  if (v['level-type'] !== 'DEFAULT' || v['isHardcore'] === 'true' || v['level-seed']) i.push('World type, hardcore, and seed only affect a world created after this change. Use a new world folder name.')
  if (v['server-port'] !== v['server-udp-ports'] && v['server-udp-ports'] === '19132') i.push('You changed the port but not the game ports. Usually both should match.')
  return { e, w, i }
})

function copy() {
  navigator.clipboard.writeText(output.value).then(() => { copied.value = true; setTimeout(() => (copied.value = false), 1500) })
}
function download() {
  const a = document.createElement('a')
  a.href = URL.createObjectURL(new Blob([output.value], { type: 'text/plain' }))
  a.download = 'server.properties'
  a.click()
  URL.revokeObjectURL(a.href)
}
const changedCount = computed(() => F.filter((f) => v[f.k] !== f.d).length)

const SAVE = 'bds-wiki-properties-generator'
onMounted(() => {
  try { const s = JSON.parse(localStorage.getItem(SAVE) || 'null'); if (s) { Object.assign(v, s.v); extra.value = s.extra || [] } } catch {}
})
watch([v, extra], () => { try { localStorage.setItem(SAVE, JSON.stringify({ v, extra: extra.value })) } catch {} }, { deep: true })
</script>

<template>
  <div class="pg">
    <div class="pg-bar">
      <span class="pg-label">Start from:</span>
      <button v-for="(_, name) in PRESETS" :key="name" @click="preset(name)">{{ name }}</button>
      <button class="pg-reset" @click="reset">Reset all</button>
    </div>

    <details class="pg-import">
      <summary>Load my existing server.properties</summary>
      <p>Paste your file. Nothing leaves your browser.</p>
      <textarea v-model="importText" rows="6" placeholder="server-name=My Server&#10;gamemode=survival"></textarea>
      <button @click="doImport">Load</button> <span>{{ importMsg }}</span>
    </details>

    <div class="pg-main">
      <div class="pg-form">
        <section v-for="[g, title] in GROUPS" :key="g">
          <h3 class="pg-h" @click="open[g] = !open[g]">
            <span>{{ open[g] ? '▾' : '▸' }}</span> {{ title }}
          </h3>
          <div v-show="open[g]">
            <label v-for="f in F.filter((x) => x.g === g)" :key="f.k" class="pg-row" :class="{ changed: v[f.k] !== f.d }">
              <span class="pg-name">{{ f.l }}<code>{{ f.k }}</code></span>
              <span class="pg-input">
                <input v-if="f.t === 'bool'" type="checkbox" :checked="v[f.k] === 'true'" @change="v[f.k] = $event.target.checked ? 'true' : 'false'" />
                <select v-else-if="f.t === 'sel'" v-model="v[f.k]"><option v-for="o in f.o" :key="o">{{ o }}</option></select>
                <input v-else :type="f.t === 'num' ? 'number' : 'text'" v-model.trim="v[f.k]" :placeholder="f.d === '' ? '(empty)' : ''" />
              </span>
              <small v-if="f.h">{{ f.h }}</small>
            </label>
          </div>
        </section>
      </div>

      <div class="pg-out">
        <div class="pg-checks">
          <p v-if="!issues.e.length && !issues.w.length" class="ok">No problems found.</p>
          <p v-for="m in issues.e" :key="m" class="err">✖ {{ m }}</p>
          <p v-for="m in issues.w" :key="m" class="warn">⚠ {{ m }}</p>
          <p v-for="m in issues.i" :key="m" class="info">ℹ {{ m }}</p>
        </div>
        <div class="pg-bar">
          <button class="pg-primary" @click="download">Download server.properties</button>
          <button @click="copy">{{ copied ? 'Copied' : 'Copy' }}</button>
          <span class="pg-label">{{ changedCount }} changed</span>
        </div>
        <pre class="pg-pre">{{ output }}</pre>
      </div>
    </div>
  </div>
</template>

<style scoped>
.pg { margin-top: 16px; overflow-wrap: anywhere; }
.pg button { border: 1px solid var(--vp-c-divider); border-radius: 6px; padding: 4px 10px; margin: 2px 4px 2px 0; font-size: 14px; background: var(--vp-c-bg-soft); }
.pg button:hover { border-color: var(--vp-c-brand-1); }
.pg .pg-primary { background: var(--vp-c-brand-1); color: var(--vp-c-white); border-color: var(--vp-c-brand-1); }
.pg-bar { display: flex; flex-wrap: wrap; align-items: center; gap: 2px; margin: 8px 0; }
.pg-label { font-size: 14px; color: var(--vp-c-text-2); margin-right: 6px; }
.pg-reset { margin-left: auto !important; }
.pg-import { border: 1px solid var(--vp-c-divider); border-radius: 8px; padding: 8px 12px; margin: 8px 0 16px; }
.pg-import summary { cursor: pointer; font-weight: 600; }
.pg textarea, .pg input[type=text], .pg input[type=number], .pg select { width: 100%; border: 1px solid var(--vp-c-divider); border-radius: 6px; padding: 4px 8px; background: var(--vp-c-bg); font-size: 14px; }
.pg textarea { font-family: var(--vp-font-family-mono); margin-bottom: 6px; }
.pg-main { display: grid; grid-template-columns: minmax(0, 1fr) minmax(0, 1fr); gap: 24px; align-items: start; }
.pg-out { position: sticky; top: calc(var(--vp-nav-height) + 16px); }
.pg-h { cursor: pointer; user-select: none; margin: 16px 0 6px !important; padding-top: 0 !important; border-top: none !important; font-size: 17px !important; }
.pg-row { display: grid; grid-template-columns: minmax(0, 1fr) 180px; gap: 2px 12px; padding: 6px 8px; border-radius: 6px; align-items: center; }
.pg-row.changed { background: var(--vp-c-brand-soft); }
.pg-row small { grid-column: 1 / -1; color: var(--vp-c-text-2); font-size: 13px; line-height: 1.4; }
.pg-name { font-size: 14px; }
.pg-name code { display: block; font-size: 12px; color: var(--vp-c-text-3); background: none; padding: 0; }
.pg-input input[type=checkbox] { width: 18px; height: 18px; }
.pg-pre { max-height: 60vh; overflow: auto; border: 1px solid var(--vp-c-divider); border-radius: 8px; padding: 12px; font-size: 13px; line-height: 1.5; background: var(--vp-c-bg-alt); margin: 0; }
.pg-checks p { margin: 4px 0; font-size: 14px; line-height: 1.5; }
.err { color: var(--vp-c-danger-1); }
.warn { color: var(--vp-c-warning-1); }
.info { color: var(--vp-c-text-2); }
.ok { color: var(--vp-c-success-1); }
@media (max-width: 960px) { .pg-main { grid-template-columns: minmax(0, 1fr); } .pg-out { position: static; } }
@media (max-width: 560px) { .pg-row { grid-template-columns: minmax(0, 1fr); } .pg-reset { margin-left: 0 !important; } }
</style>
