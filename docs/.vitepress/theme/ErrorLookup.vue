<script setup>
import { ref, computed } from 'vue'
import { withBase } from 'vitepress'
import { ERRORS, CATEGORIES } from './errors.js'

const text = ref('')
const compiled = ERRORS.map((e) => ({ ...e, re: new RegExp(e.m, 'i') }))
const KIND = {
  stop: ['Server will not run', 'k-stop'],
  error: ['Error', 'k-error'],
  warn: ['Warning', 'k-warn'],
  client: ['Player or disconnect message', 'k-client'],
  ok: ['Normal', 'k-ok']
}
const ORDER = { stop: 0, error: 1, client: 2, warn: 3, ok: 4 }

// Remove "[2026-11-25 22:00:12:768 ERROR]" style prefixes so lines read cleanly.
const clean = (l) => l.replace(/^\s*\[[\d\- :.]+\s*(INFO|WARN|ERROR)?\]\s*/i, '').trim()

const result = computed(() => {
  const lines = text.value.split(/\r?\n/).map((l) => l.trim()).filter(Boolean)
  const hits = new Map()
  const unknown = []
  for (const line of lines) {
    let matched = false
    for (const e of compiled) {
      if (e.re.test(line)) {
        matched = true
        if (!hits.has(e.id)) hits.set(e.id, { e, lines: [] })
        const h = hits.get(e.id)
        if (h.lines.length < 3) h.lines.push(clean(line))
      }
    }
    if (!matched && /\b(ERROR|WARN)\]|error|failed|invalid|unable|denied|exception/i.test(line)) unknown.push(clean(line))
  }
  const list = [...hits.values()].sort((a, b) => ORDER[a.e.kind] - ORDER[b.e.kind])
  return { list, unknown: [...new Set(unknown)].slice(0, 10), any: lines.length > 0 }
})
const SAMPLE = `[2026-11-25 22:00:12:768 INFO] Game mode: 0 Survival
[2026-11-25 22:00:13:521 ERROR] Using an allowlist without online authentication can be dangerous and is not allowed.
[2026-11-25 22:00:14:002 WARN] Allow list is enabled but contains no entries.`
</script>

<template>
  <div class="el">
    <textarea v-model="text" rows="7" placeholder="Paste an error, a few lines, or your whole console log here."></textarea>
    <div class="el-bar">
      <button @click="text = SAMPLE">Try an example</button>
      <button v-if="text" @click="text = ''">Clear</button>
      <span class="el-note">Nothing you paste leaves your browser.</span>
    </div>

    <template v-if="result.any">
      <p v-if="!result.list.length" class="el-none">No known message found. Try pasting the lines around it, or check the list below.</p>
      <p v-else class="el-count">Found {{ result.list.length }} known message{{ result.list.length > 1 ? 's' : '' }}, most serious first.</p>
      <div v-for="{ e, lines } in result.list" :key="e.id" class="el-card" :class="KIND[e.kind][1]">
        <div class="el-head"><span class="el-kind">{{ KIND[e.kind][0] }}</span><code>{{ e.t }}</code></div>
        <p v-for="l in lines" :key="l" class="el-line">Your line: <code>{{ l }}</code></p>
        <p><strong>Why:</strong> {{ e.why }}</p>
        <p><strong>Fix:</strong></p>
        <ol><li v-for="f in e.fix" :key="f">{{ f }}</li></ol>
        <p class="el-more"><a :href="withBase(e.link)">Read more</a><span v-if="!e.seen"> · From documentation or the program; not produced in our tests.</span></p>
      </div>
      <div v-if="result.unknown.length" class="el-unknown">
        <p><strong>Lines we do not recognize yet:</strong></p>
        <ul><li v-for="l in result.unknown" :key="l"><code>{{ l }}</code></li></ul>
        <p>Search this wiki or the <a href="https://bugs.mojang.com" target="_blank" rel="noreferrer">Mojang bug tracker</a> for the text. If you work out the cause, <a :href="withBase('/contribute/contributing')">add it to the lookup</a>.</p>
      </div>
    </template>

    <h2 id="all-messages">All known messages</h2>
    <p>Every message the lookup knows about, by area.</p>
    <template v-for="[c, title] in CATEGORIES" :key="c">
      <h3 :id="'m-' + c">{{ title }}</h3>
      <table>
        <thead><tr><th>Message</th><th>What to do</th></tr></thead>
        <tbody>
          <tr v-for="e in ERRORS.filter((x) => x.c === c)" :key="e.id">
            <td><code>{{ e.t }}</code><br /><span class="el-kind-small" :class="KIND[e.kind][1]">{{ KIND[e.kind][0] }}</span></td>
            <td>{{ e.why }} {{ e.fix[0] }} <a :href="withBase(e.link)">More</a></td>
          </tr>
        </tbody>
      </table>
    </template>
  </div>
</template>

<style scoped>
.el textarea { width: 100%; border: 1px solid var(--vp-c-divider); border-radius: 8px; padding: 10px; font-family: var(--vp-font-family-mono); font-size: 13px; background: var(--vp-c-bg-alt); }
.el textarea:focus { border-color: var(--vp-c-brand-1); outline: none; }
.el-bar { display: flex; flex-wrap: wrap; gap: 6px; align-items: center; margin: 6px 0 16px; }
.el button { border: 1px solid var(--vp-c-divider); border-radius: 6px; padding: 4px 10px; font-size: 14px; background: var(--vp-c-bg-soft); }
.el button:hover { border-color: var(--vp-c-brand-1); }
.el-note { font-size: 13px; color: var(--vp-c-text-2); }
.el-count, .el-none { font-weight: 600; }
.el-card { border: 1px solid var(--vp-c-divider); border-left-width: 5px; border-radius: 8px; padding: 10px 16px; margin: 12px 0; overflow-wrap: anywhere; }
.el-card p, .el-card ol { margin: 6px 0; }
.el-head { display: flex; flex-direction: column; gap: 4px; }
.el-head code { font-size: 14px; }
.el-kind { font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: .04em; }
.el-line { font-size: 13px; color: var(--vp-c-text-2); }
.el-more { font-size: 13px; color: var(--vp-c-text-2); }
.el-unknown { border: 1px dashed var(--vp-c-divider); border-radius: 8px; padding: 10px 16px; margin: 12px 0; overflow-wrap: anywhere; }
.k-stop { border-left-color: var(--vp-c-danger-1); } .k-stop .el-kind, .el-kind-small.k-stop { color: var(--vp-c-danger-1); }
.k-error { border-left-color: var(--vp-c-danger-2); } .k-error .el-kind, .el-kind-small.k-error { color: var(--vp-c-danger-2); }
.k-warn { border-left-color: var(--vp-c-warning-1); } .k-warn .el-kind, .el-kind-small.k-warn { color: var(--vp-c-warning-1); }
.k-client { border-left-color: var(--vp-c-indigo-1); } .k-client .el-kind, .el-kind-small.k-client { color: var(--vp-c-indigo-1); }
.k-ok { border-left-color: var(--vp-c-success-1); } .k-ok .el-kind, .el-kind-small.k-ok { color: var(--vp-c-success-1); }
.el-kind-small { font-size: 12px; font-weight: 600; }
.el table { display: table; width: 100%; table-layout: fixed; }
.el td { vertical-align: top; overflow-wrap: anywhere; }
.el th:first-child { width: 45%; }
.el td code { white-space: normal; }
</style>
