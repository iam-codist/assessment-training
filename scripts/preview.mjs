import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const dist = path.join(root, 'dist');
const config = JSON.parse(await readFile(path.join(root, 'site.config.json'), 'utf8'));
const types = { '.html': 'text/html; charset=utf-8', '.css': 'text/css', '.js': 'text/javascript', '.mjs': 'text/javascript', '.c': 'text/plain', '.cpp': 'text/plain', '.sql': 'text/plain', '.json': 'application/json', '.svg': 'image/svg+xml', '.png': 'image/png', '.java': 'text/plain', '.py': 'text/plain' };
createServer(async (req, res) => {
  try {
    const url = new URL(req.url, 'http://127.0.0.1');
    if (url.pathname === '/') { res.writeHead(302, { Location: config.basePath }); res.end(); return; }
    if (!url.pathname.startsWith(config.basePath)) throw new Error('Not found');
    let file = path.resolve(dist, decodeURIComponent(url.pathname.slice(config.basePath.length)));
    if (file !== dist && !file.startsWith(dist + path.sep)) throw new Error('Not found');
    if ((await stat(file)).isDirectory()) file = path.join(file, 'index.html');
    res.writeHead(200, { 'Content-Type': types[path.extname(file)] ?? 'application/octet-stream', 'Cache-Control': 'no-store' }); res.end(await readFile(file));
  } catch { res.writeHead(404, { 'Content-Type': 'text/html' }); res.end(await readFile(path.join(dist, '404.html'))); }
}).listen(4173, '127.0.0.1', () => console.log(`Local: http://127.0.0.1:4173${config.basePath}`));
