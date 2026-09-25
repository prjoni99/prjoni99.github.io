// Renders the Open Graph cards in public/og/ with headless Chrome on macOS
// (so the system font is SF Pro, matching the App Store screenshots).
// Run after changing a headline or a count: node scripts/og-cards.mjs
import { execFileSync } from 'node:child_process';
import { mkdtempSync, readFileSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';

const root = resolve(import.meta.dirname, '..');
const chrome = process.env.CHROME ?? '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const icon = `data:image/png;base64,${readFileSync(join(root, 'src/assets/app-icon.png')).toString('base64')}`;

const cards = [
  { file: 'onescribe', title: 'Every document has a story.', sub: 'OneScribe reads it on your iPhone or iPad and turns it into a Data Card.' },
  { file: 'cards', title: 'The Data Card library.', sub: 'Every kind of document OneScribe knows how to read, and what it pulls out of each.' },
];

const html = (c) => `<!doctype html><html><head><meta charset="utf-8"><style>
*{box-sizing:border-box}html,body{margin:0;width:1200px;height:630px;overflow:hidden}
body{background:linear-gradient(180deg,#faf9f6,#f3f0ea 60%,#ece8e1);color:#15171e;font-family:-apple-system,BlinkMacSystemFont,'SF Pro Display',sans-serif;padding:72px 80px;position:relative}
.top{display:flex;align-items:center;gap:16px;font-size:30px;font-weight:700;letter-spacing:-0.02em}
.top img{width:56px;height:56px;border-radius:13px}
h1{position:absolute;left:80px;right:80px;bottom:150px;margin:0;font-size:104px;font-weight:800;letter-spacing:-0.047em;line-height:0.95;text-wrap:balance}
p{position:absolute;left:80px;right:180px;bottom:70px;margin:0;font-size:32px;line-height:1.3;color:#5f636c;letter-spacing:-0.012em}
.url{position:absolute;right:80px;top:84px;font-size:24px;color:#5f636c}
</style></head><body><div class="top"><img src="${icon}"><span>OneScribe</span></div><div class="url">getonescribe.app</div><h1>${c.title}</h1><p>${c.sub}</p></body></html>`;

const tmp = mkdtempSync(join(tmpdir(), 'og-'));
for (const c of cards) {
  const page = join(tmp, `${c.file}.html`);
  writeFileSync(page, html(c));
  execFileSync(chrome, ['--headless=new', '--disable-gpu', '--hide-scrollbars', '--window-size=1200,630',
    '--force-device-scale-factor=1', '--virtual-time-budget=1500', `--screenshot=${join(root, 'public/og', `${c.file}.png`)}`, `file://${page}`], { stdio: 'ignore' });
  console.log(`public/og/${c.file}.png`);
}
