const sidebar = document.querySelector('#sidebar');
const menu = document.querySelector('#menu-toggle');
const backdrop = document.querySelector('#menu-backdrop');
const workspace = document.querySelector('.workspace');
const desktop = matchMedia('(min-width: 761px)');
const scrollArea = sidebar.querySelector('.sidebar-scroll');
const groups = [...sidebar.querySelectorAll('.nav-group')];
const filter = sidebar.querySelector('#topic-filter');
const clear = sidebar.querySelector('#topic-filter-clear');
const status = sidebar.querySelector('#topic-filter-status');
const preferenceKey = 'assessment-navigation-v1';
let preference = {};
try { preference = JSON.parse(localStorage.getItem(preferenceKey)) || {}; } catch { /* Navigation also works without storage. */ }
if (typeof preference !== 'object' || Array.isArray(preference)) preference = {};
function remember() {
  try { localStorage.setItem(preferenceKey, JSON.stringify(preference)); } catch { /* Storage may be unavailable. */ }
}

function keepCurrentVisible() {
  const current = scrollArea.querySelector('[aria-current="page"]') || scrollArea.querySelector('details[open] > summary');
  if (!current) return;
  const bounds = scrollArea.getBoundingClientRect();
  const item = current.getBoundingClientRect();
  const section = current.closest('.nav-group').getBoundingClientRect();
  if (section.height <= bounds.height && (section.top < bounds.top || section.bottom > bounds.bottom)) {
    scrollArea.scrollTop += section.top - bounds.top;
  } else if (item.bottom > bounds.bottom) scrollArea.scrollTop += item.bottom - bounds.bottom + 8;
  else if (item.top < bounds.top + 48) scrollArea.scrollTop += item.top - bounds.top - 48;
}

function syncMenu() {
  const mobileOpen = !desktop.matches && document.body.classList.contains('menu-open');
  const expanded = desktop.matches ? !preference.collapsed : mobileOpen;
  document.body.classList.toggle('sidebar-collapsed', desktop.matches && !!preference.collapsed);
  menu.setAttribute('aria-expanded', String(expanded));
  menu.setAttribute('aria-label', expanded ? 'Hide navigation' : 'Show navigation');
  menu.title = expanded ? 'Hide navigation' : 'Show navigation';
  sidebar.inert = !expanded;
  workspace.inert = mobileOpen;
  if (mobileOpen) { sidebar.setAttribute('role', 'dialog'); sidebar.setAttribute('aria-modal', 'true'); }
  else { sidebar.removeAttribute('role'); sidebar.removeAttribute('aria-modal'); }
}
function closeMenu(returnFocus = false) {
  document.body.classList.remove('menu-open');
  syncMenu();
  if (returnFocus) menu.focus();
}
menu.addEventListener('click', () => {
  if (desktop.matches) {
    preference.collapsed = !preference.collapsed;
    remember(); syncMenu();
  } else {
    document.body.classList.toggle('menu-open');
    syncMenu();
    if (document.body.classList.contains('menu-open')) sidebar.querySelector('#menu-close').focus();
  }
  if (!sidebar.inert) requestAnimationFrame(keepCurrentVisible);
});
backdrop.addEventListener('click', () => closeMenu(true));
sidebar.querySelector('#menu-close').addEventListener('click', () => closeMenu(true));
desktop.addEventListener('change', () => {
  const focusInSidebar = sidebar.contains(document.activeElement);
  closeMenu();
  if (sidebar.inert && focusInSidebar) menu.focus();
});
window.addEventListener('pageshow', () => closeMenu());
document.addEventListener('keydown', event => {
  if (!document.body.classList.contains('menu-open')) return;
  if (event.key === 'Escape') { event.preventDefault(); closeMenu(true); }
  if (event.key === 'Tab') {
    const items = [...sidebar.querySelectorAll('a, button, summary, input, [tabindex="0"]')]
      .filter(el => el.getClientRects().length && !el.disabled);
    const first = items[0]; const last = items.at(-1);
    if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
    else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
  }
});

// A linked page always takes priority over the last section browsed.
if (!groups.some(group => group.open) && typeof preference.category === 'string') {
  const previous = groups.find(group => group.dataset.category === preference.category);
  if (previous) previous.open = true;
}
let filtering = false;
let previouslyOpen = null;
const normalise = value => value.toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();
function applyFilter() {
  const query = normalise(filter.value);
  if (query && !filtering) {
    previouslyOpen = groups.find(group => group.open)?.dataset.category ?? null;
    groups.forEach(group => group.removeAttribute('name'));
  }
  filtering = !!query;
  let count = 0;
  for (const group of groups) {
    const categoryMatch = normalise(group.querySelector('.nav-group-label').textContent).includes(query);
    const links = [...group.querySelectorAll('.nav-topics a')];
    let matches = 0;
    links.forEach(link => {
      const match = !query || categoryMatch || normalise(link.textContent).includes(query);
      link.hidden = !match;
      if (match) matches++;
    });
    group.hidden = !matches;
    if (query) group.open = !!matches;
    count += matches;
  }
  if (!query && previouslyOpen !== null) {
    groups.forEach(group => { group.open = group.dataset.category === previouslyOpen; });
  } else if (!query && groups.some(group => !group.hasAttribute('name'))) {
    groups.forEach(group => { group.open = false; });
  }
  if (!query) {
    groups.forEach(group => group.setAttribute('name', 'learning-area'));
    previouslyOpen = null;
  }
  clear.hidden = !filter.value;
  sidebar.querySelector('#topic-filter-empty').hidden = count > 0;
  status.textContent = query ? `${count} matching topic ${count === 1 ? 'link' : 'links'}` : '';
  scrollArea.scrollTop = 0;
  if (!query) requestAnimationFrame(keepCurrentVisible);
}
filter.addEventListener('input', applyFilter);
clear.addEventListener('click', () => { filter.value = ''; applyFilter(); filter.focus(); });
for (const group of groups) {
  group.addEventListener('toggle', () => {
    if (filtering) return;
    preference.category = groups.find(item => item.open)?.dataset.category ?? null;
    remember();
  });
}
sidebar.querySelector('.sidebar-filter').hidden = false;
syncMenu();
requestAnimationFrame(keepCurrentVisible);
