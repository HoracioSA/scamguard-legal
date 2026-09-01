// Kept separate from next.config.ts so it can also be imported by
// components (next.config.ts itself isn't importable at runtime). Update
// this alongside next.config.ts's basePath if the deploy target changes —
// e.g. back to Vercel, which needs this to be ''.
export const BASE_PATH = '/scamguard-legal';
