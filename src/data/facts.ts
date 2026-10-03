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

/**
 * The device breakdown on /support/#devices. Two tiers only: claims.md still
 * rules out any claim about the downloadable local model, so a device either
 * has Apple Intelligence or it scans without Data Cards. The first tier must
 * stay in step with `facts.aiDevices`.
 */
export const deviceTiers = [
  {
    name: 'Scanning and Data Cards',
    needs: 'Apple Intelligence',
    gets: 'Everything. Data Cards and the features built on them are read by Apple’s on-device model. Apple Intelligence has to be turned on in Settings.',
    devices: [
      'iPhone 15 Pro and iPhone 15 Pro Max',
      'iPhone 16 and later, every model',
      'iPad Pro and iPad Air with M1 or later',
      'iPad mini (A17 Pro)',
    ],
  },
  {
    name: 'Scanning',
    needs: 'Any other device on iOS or iPadOS 26',
    gets: 'Scanning, text recognition and PDF export. Data Cards and the features built on them aren’t available, because these devices don’t have Apple Intelligence.',
    devices: [
      'iPhone 11, 12, 13 and 14, every model',
      'iPhone 15 and iPhone 15 Plus',
      'iPhone SE (2nd and 3rd generation)',
      'iPad (8th generation and later)',
      'iPad Air (3rd and 4th generation)',
      'iPad mini (5th and 6th generation)',
      'iPad Pro 11-inch (1st and 2nd generation) and 12.9-inch (3rd and 4th generation)',
    ],
  },
];

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
