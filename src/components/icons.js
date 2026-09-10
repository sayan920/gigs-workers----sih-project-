export const icon = (name, size = 24) => {
  const paths = {
    grid: '<rect x="4" y="4" width="6" height="6" rx="1"/><rect x="14" y="4" width="6" height="6" rx="1"/><rect x="4" y="14" width="6" height="6" rx="1"/><rect x="14" y="14" width="6" height="6" rx="1"/>',
    plumbing: '<path d="M7 3v6a5 5 0 0 0 10 0V3M5 3h4M15 3h4M12 14v7M8 21h8"/>', cleaning: '<path d="M7 3l10 10M14 3l-2 2M19 8l-2 2M5 13l6 6M4 20l3-3"/>', electrical: '<path d="M13 2L4 14h7l-1 8 9-12h-7z"/>', carpentry: '<path d="M14 6l4-4 4 4-4 4M16 6L5 17l-3 5 5-3L18 8"/>', gardening: '<path d="M12 21V11M12 14c-5 0-7-3-7-7 5 0 7 3 7 7zm0 0c0-5 3-8 7-8 0 5-3 8-7 8z"/>', search: '<circle cx="11" cy="11" r="6"/><path d="m16 16 4 4"/>', arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>', check: '<path d="m5 12 4 4L19 6"/>', calendar: '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M7 3v4M17 3v4M3 10h18"/>', clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>', chevron: '<path d="m9 18 6-6-6-6"/>', home: '<path d="m3 11 9-8 9 8v9a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z"/>'
  };
  return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths[name] || paths.grid}</svg>`;
};
