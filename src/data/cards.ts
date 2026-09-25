import raw from './datacards.json';

/**
 * The Data Card library. Generated from the OneScribe app source (the
 * @Generable schemas and the DocumentType enum) by reading the repo; see the
 * header of datacards.json's source note in PLAN.md. Fields are names only:
 * the site never invents example values for a real document type.
 */
export interface DataCard {
  id: string;
  name: string;
  category: string;
  summary: string;
  fields: string[];
  actions: string[];
  symbol: string | null;
}

export const cards: (DataCard & { slug: string })[] = (raw as DataCard[])
  .map((c) => ({ ...c, slug: slugify(c.id) }))
  .sort((a, b) => a.name.localeCompare(b.name));

export const categories: { name: string; cards: typeof cards }[] = Array.from(
  cards.reduce((m, c) => m.set(c.category, [...(m.get(c.category) ?? []), c]), new Map<string, typeof cards>()),
)
  .map(([name, list]) => ({ name, cards: list }))
  .sort((a, b) => b.cards.length - a.cards.length || a.name.localeCompare(b.name));

export function related(card: DataCard, n = 6) {
  return cards.filter((c) => c.category === card.category && c.id !== card.id).slice(0, n);
}

export const catSlug = (name: string) => name.toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

/** "a driver’s license", "an insurance card", "a W-2", "a Form 1040". */
export function withArticle(name: string) {
  const keepCase = /^Form\b/.test(name) || !/^[A-Z][a-z’']/.test(name);
  const noun = keepCase ? name : name[0].toLowerCase() + name.slice(1);
  return `${/^[aeiou]/i.test(noun) && !/^(u[bcfhjkqrstn]|eu|one)/i.test(noun) ? 'an' : 'a'} ${noun}`;
}

function slugify(id: string) {
  return id
    .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
    .replace(/[^a-zA-Z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
    .toLowerCase();
}
