/**
 * Every product fact on the site comes from here, and every claim must have a
 * row in OneScribe's marketing/copy/claims.md (the owner's source of truth,
 * traced to code). That file bans any document-type count ("83" is retired),
 * a Siri count, Smart Lookup until PRIVACY.md covers it, "no Apple
 * Intelligence required", and "100% on-device" / "never leaves". Check a change against the
 * App Store listing and the app before editing: this site has shipped a stale
 * price, stale counts and absolute privacy claims before. PLAN.md §5.
 */
export const facts = {
  appStoreUrl: 'https://apps.apple.com/us/app/onescribe-ai-note-scanner/id6756506734',
  appStoreId: '6756506734',
  platforms: 'iPhone and iPad',
  requires: 'iOS and iPadOS 26 or later',
  proPrice: '$9.99',
  proPriceValue: '9.99',
  /** The app dropped its "Limited Time" badge on 2026-08-01 (OneScribe 811bb693). Don't bring it back here. */
  exportModes: 19,
  /** Data Cards run on Apple's on-device model (Foundation Models). */
  aiDevices: 'iPhone 15 Pro or later, or iPad with M1 or A17 Pro',
  supportEmail: 'support@getonescribe.app',
  privacyEmail: 'privacy@getonescribe.app',
};

export const free = ['Unlimited scans', 'PDF export', 'Data Card preview', 'Document reading'];

export const pro = [
  'Full Data Cards for every document type',
  'Ask questions about any document',
  'Daily briefing and weekly digest',
  'Deadline and expiration alerts',
  'Connections across documents',
  'Search in plain English',
  'Document series tracking',
  `${facts.exportModes} smart export modes`,
  'Siri and Shortcuts'
];
