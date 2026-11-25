# How to contribute

Anyone can help, and most ways do not need any coding. Pick what fits:

| You want to… | Do this | Skill needed |
|---|---|---|
| Report something wrong or out of date | [Open an issue](#report-a-mistake) | None |
| Ask for a guide or topic | [Open an issue](#suggest-a-guide-or-topic) | None |
| Fix a typo, a fact, or a step | [Edit the page on GitHub](#fix-or-improve-a-page) | A GitHub account |
| Add information to a page | [Edit the page on GitHub](#fix-or-improve-a-page) | A GitHub account |
| Write a whole new guide | [Add a page](#write-a-new-guide) | Basic Markdown |
| Explain an error message | [Add it to the lookup](#add-a-message-to-the-error-lookup) | Basic editing |
| Update the wiki for a new BDS version | [Follow the checklist](#update-for-a-new-bds-version) | Running BDS |

## Report a mistake

Found something wrong, unclear, or outdated? [Open an issue](https://github.com/wimziicals/bds-wiki/issues/new) and include:

1. The page address.
2. What it says, and what is wrong with it.
3. What is right, and how you know: a Mojang changelog, Microsoft's docs, or what your server did.
4. Your BDS version and operating system, if it is about behavior.

You do not need to know the fix. "This step did not work for me" is useful on its own.

## Suggest a guide or topic

[Open an issue](https://github.com/wimziicals/bds-wiki/issues/new) saying what you were trying to do and where you got stuck. Guides written from real problems are the most useful ones.

## Fix or improve a page

Every page has **Suggest a change to this page** at the bottom.

1. Click it. GitHub opens the page's file. Sign in if asked.
2. Click the pencil icon if the editor is not already open. GitHub makes your own copy automatically.
3. Make your change. Pages are [Markdown](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax): plain text with a few symbols for headings, lists, and links.
4. Click **Commit changes**, describe what you changed and why, then **Propose changes** and **Create pull request**.

Someone will review it before it goes live. If a change needs a source, put the link in the pull request description.

This works for anything on a page: fixing a fact, adding a missing step, a setting, a warning, a tip, or a whole new section.

## Write a new guide

For a new page, work on your own computer. You need [Git](https://git-scm.com/) and [Node.js](https://nodejs.org/).

```bash
git clone https://github.com/<your-name>/bds-wiki.git   # your fork
cd bds-wiki
npm install
npm run dev
```

Open the address it prints to see the site update as you type.

1. Create a `.md` file in the matching folder under `docs/`, such as `docs/worlds/moving-a-realm.md`.
2. Add it to the sidebar in `docs/.vitepress/config.mjs`. `npm run check` fails if you forget.
3. Link to it from at least one related page.
4. Run `npm run build`. It fails on broken links and missing settings.
5. Open a pull request.

A guide that works for everyone usually looks like this:

```markdown
# Moving a Realm to your own server

One or two sentences: what this does and who it is for.

## Before you start
- What you need, and what version this applies to.

## Steps
1. One action per step.
2. Show the exact command or setting.
3. Say what you should see when it worked.

## If it does not work
- Common problems and their fixes.

Sources: links to where the facts come from.
```

## Add a message to the error lookup

Edit `docs/.vitepress/theme/errors.js` and copy an existing entry. Each entry has:

| Field | Meaning |
|---|---|
| `m` | Text or pattern that finds the message in a pasted log |
| `t` | The message as people will see it |
| `why` | What causes it, in plain words |
| `fix` | Steps to solve it |
| `link` | The wiki page with more detail |
| `seen` | `true` only if you saw it in a real server log. Say which version in your pull request |

## Update for a new BDS version

1. Read Mojang's changelog and note anything about the server.
2. Update the matching pages and the [BDS changelog](../reference/changelog), marking the version where something changed.
3. Add new `server.properties` keys to `tools/property-keys.txt`, then document them. `npm run check` lists any you missed.
4. Update the [generator](../config/generator) in `docs/.vitepress/theme/PropertiesGenerator.vue` if defaults or keys changed.
5. Check `help` in the new server for new or removed commands.

## Page rules

1. Say which version something applies to.
2. Link a source, or describe a test someone else can repeat.
3. Keep official facts, things you observed, and guesses apart, and say which is which.
4. Write for beginners: short sentences, one action per step, exact commands.
5. Never publish real keys, tokens, XUIDs, or other people's IP addresses.
6. Use placeholders such as `192.0.2.20` and `example.com`.

When you report a test, include the BDS build, operating system, transport, and the exact steps. See [Evidence and sources](./sources) for which sources the wiki trusts most.
