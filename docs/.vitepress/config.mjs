import { defineConfig } from 'vitepress'
const s = (text, dir, items) => ({ text, collapsed: false, items: items.map(([t, l]) => ({ text: t, link: `/${dir}/${l}` })) })
export default defineConfig({
  base: '/bds-wiki/',
  title: 'BDS Wiki',
  description: 'The community reference for Minecraft: Bedrock Dedicated Server',
  lastUpdated: true,
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/bds-wiki/logo.svg' }],
    ['link', { rel: 'apple-touch-icon', href: '/bds-wiki/logo-512.png' }],
    // Link previews (Discord, Slack, social sites). Discord cannot show SVG, so these are PNG.
    ['meta', { name: 'theme-color', content: '#6fcfa9' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:site_name', content: 'BDS Wiki' }],
    ['meta', { property: 'og:title', content: 'BDS Wiki' }],
    ['meta', { property: 'og:description', content: 'The community guide to Minecraft Bedrock Dedicated Server: every setting, Server Identity, NetherNet, scripting, a server.properties generator and an error lookup.' }],
    ['meta', { property: 'og:url', content: 'https://wimziicals.github.io/bds-wiki/' }],
    ['meta', { property: 'og:image', content: 'https://wimziicals.github.io/bds-wiki/og-image.png' }],
    ['meta', { property: 'og:image:width', content: '1200' }],
    ['meta', { property: 'og:image:height', content: '630' }],
    ['meta', { property: 'og:image:alt', content: 'BDS Wiki logo and title' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }]
  ],
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
