import { readFile } from 'node:fs/promises';
import path from 'node:path';
const escape = value => value.replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));

export async function solutionPanels(root, id, specification, href) {
  const programs = await Promise.all(Object.entries(specification.files).map(async ([language, file], index) => ({
    language, file, code: await readFile(path.join(root, file), 'utf8'), key: `${id.toLowerCase()}-language-${index}`
  })));
  return `<section class="language-solutions" aria-label="Solutions in C, C++, Python and Java">
    <h3>Read a solution in your language</h3>
    <p>Each program reads the sample input shown above. Copy it, run it, then try an edge case.</p>
    <div class="solution-tabs" hidden aria-label="Programming language">${programs.map(p => `<button type="button" id="${p.key}-tab" data-panel="${p.key}">${escape(p.language)}</button>`).join('')}</div>
    ${programs.map(p => `<section class="solution-panel" id="${p.key}" aria-label="${escape(p.language)} solution"><div class="solution-panel-heading"><h4>${escape(p.language)}</h4><a href="${href(p.file)}" download>Download ${escape(path.basename(p.file))} ↓</a></div><pre><code>${escape(p.code)}</code></pre></section>`).join('')}
    <p class="solution-note">These are reference programs for local practice. Code is not executed in your browser. <a href="${href('guide/running-solutions/')}">Compile and run instructions →</a></p>
  </section>`;
}
