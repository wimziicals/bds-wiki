import { defineConfig } from 'vitepress'
const s = (text, dir, items) => ({ text, collapsed: false, items: items.map(([t, l]) => ({ text: t, link: `/${dir}/${l}` })) })
export default defineConfig({
  base: '/bds-wiki/',
  title: 'BDS Wiki',
  description: 'The community reference for Minecraft: Bedrock Dedicated Server',
  lastUpdated: true,
  head: [['link', { rel: 'icon', type: 'image/svg+xml', href: '/bds-wiki/logo.svg' }]],
  themeConfig: {
    logo: '/logo.svg',
    search: { provider: 'local' },
    socialLinks: [{ icon: 'github', link: 'https://github.com/wimziicals/bds-wiki' }],
    editLink: { pattern: 'https://github.com/wimziicals/bds-wiki/edit/main/docs/:path', text: 'Suggest a change to this page' },
    outline: [2, 3],
    nav: [
      { text: 'Start here', link: '/guide/quick-start' },
      { text: 'Server Identity', link: '/security/server-identity' },
      { text: 'server.properties', link: '/config/server-properties' },
      { text: 'Generator', link: '/config/generator' },
      { text: 'Error lookup', link: '/reference/error-lookup' },
      { text: 'Commands', link: '/reference/commands' },
      { text: 'Changelog', link: '/reference/changelog' }
    ],
    sidebar: [
      s('Getting started', 'guide', [['Quick start', 'quick-start'], ['What is BDS?', 'what-is-bds'], ['Common setups', 'recipes'], ['Things you may not know', 'things-you-may-not-know'], ['Install on Windows', 'install-windows'], ['Install on Linux', 'install-linux'], ['Connecting players', 'connecting'], ['Updating safely', 'updating'], ['FAQ', 'faq']]),
      s('Configuration', 'config', [['Files and folders', 'files'], ['server.properties', 'server-properties'], ['properties generator', 'generator'], ['Hidden properties', 'hidden-properties'], ['commands.json', 'commands-json'], ['Allowlist', 'allowlist'], ['Operators and permissions', 'permissions'], ['Packet limits', 'packet-limits'], ['CDN config', 'cdn']]),
      s('Networking', 'network', [['NetherNet', 'nethernet'], ['Ports and firewalls', 'ports'], ['server-udp-ports', 'server-udp-ports'], ['Docker', 'docker'], ['Proxies and tunnels', 'proxies'], ['Connection troubleshooting', 'troubleshooting']]),
      s('Security', 'security', [['Server Identity', 'server-identity'], ['Hardening checklist', 'hardening'], ['Anti-cheat settings', 'anti-cheat']]),
      s('Worlds and packs', 'worlds', [['Managing worlds', 'worlds'], ['Backups', 'backups'], ['Installing packs', 'packs'], ['System packs', 'system-packs'], ['Pack optimization', 'pack-optimization'], ['Ticking areas', 'ticking-areas']]),
      s('Scripting', 'scripting', [['Overview', 'overview'], ['Module permissions', 'module-permissions'], ['Variables and secrets', 'variables-secrets'], ['server-admin', 'server-admin'], ['server-net', 'server-net'], ['Diagnostics and Sentry', 'diagnostics'], ['Debugger', 'debugging'], ['Script watchdog', 'watchdog']]),
      s('Operations', 'operations', [['Run as a service', 'service'], ['Performance', 'performance'], ['Logging', 'logging'], ['Multiple servers', 'multiple-servers'], ['Editor mode', 'editor']]),
      s('Reference', 'reference', [['Error lookup', 'error-lookup'], ['Server commands', 'commands'], ['Gameplay commands', 'gameplay-commands'], ['Command syntax', 'command-syntax'], ['Launch arguments', 'launch-arguments'], ['Disconnect reasons', 'disconnect-reasons'], ['BDS changelog', 'changelog'], ['Release list', 'releases'], ['Limitations', 'limitations'], ['Glossary', 'glossary']]),
      s('Contribute', 'contribute', [['How to contribute', 'contributing'], ['Evidence and sources', 'sources'], ['Open questions', 'open-questions']])
    ],
    footer: { message: 'Unofficial community wiki. Not approved by or associated with Mojang or Microsoft.' }
  }
})
