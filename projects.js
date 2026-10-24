const G = "https://github.com/112345brian/";
const sections = {
  obsidian: [
    ["obsidian-redirects", "TypeScript", "Frontmatter-driven redirects and disambiguation."],
    ["return-headings", "TypeScript", "Heading-return markers with sticky bar, floating TOC and outline pane."],
    ["obsidian-diff-list", "TypeScript", "Keeps ordered lists as 1. 1. 1. in source for clean git diffs, renders as 1. 2. 3."],
    ["obsidian-stateful-filename", "TypeScript", "Derives a clean value from the filename and keeps it in sync in frontmatter."],
    ["obsidian-create-note-with-type", "TypeScript", "Hover a dead wikilink to create the note with frontmatter pre-filled."],
    ["cursor-control", "TypeScript", "Control where the cursor starts in a new note."],
    ["obsidian-ontologize", "TypeScript", "Ontology plugin."],
    ["obsidian-properties-first", "TypeScript", ""],
    ["obsidian-trash-collection", "TypeScript", ""],
    ["obsidian-continue", "TypeScript", ""],
    ["inherit", "TypeScript", ""],
    ["bread-trail", "TypeScript", ""],
    ["obsidian-mobile-quick-widget", "TypeScript", ""]
  ],
  tools: [
    ["knowledge", "Python", "Personal SQLite knowledge base: ingest pipeline, schema and CLI, no personal data."],
    ["lifeops-app", "Kotlin", ""],
    ["semantic-diff", "TypeScript", "Clause-based semantic diff and git staging for prose in VS Code."],
    ["bripe-standards", "Python", ""],
    ["nous", "TypeScript", ""],
    ["zotero-zotflow-autosync", "Zotero plugin", "Real-time ZotFlow Obsidian vault sync on annotation change."],
    ["ethics-demonstrated-in-hyperlink-order", "Python", "Offline scholarly workbench for Spinoza's Ethics."],
    ["chess-vs-stockfish", "HTML", ""],
    ["LeagueCreator", "Java", ""]
  ],
  data: [
    ["walkability-commuting-obesity", "HTML", ""],
    ["la-predictive-policing", "Lua", ""],
    ["2026-hackathon-data-center", "R", ""],
    ["reddit-isolation-suicidality-analysis", "HTML", ""],
    ["data-analyst-job-ranking", "R", "Ranks job applications by chance, value, salary and location."],
    ["bripey-r-helpers", "R", ""]
  ],
  redesigns: [
    ["rate-your-music-modern", "HTML", ""],
    ["stanford-encyclopedia-modern", "HTML", ""],
    ["wikipedia-modern", "HTML", ""],
    ["my-anime-list-modern", "CSS", ""]
  ]
};
for (const [id, items] of Object.entries(sections)) {
  const el = document.getElementById(id);
  for (const [name, lang, desc] of items) {
    const d = document.createElement("div");
    d.className = "card";
    const h = document.createElement("h3");
    const a = document.createElement("a");
    a.href = G + name;
    a.textContent = name;
    h.append(a);
    const p = document.createElement("p");
    p.textContent = desc;
    const l = document.createElement("span");
    l.className = "lang";
    l.textContent = lang;
    d.append(h);
    if (desc) d.append(p);
    d.append(l);
    el.append(d);
  }
}
