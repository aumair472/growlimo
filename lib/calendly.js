// Empty when unset — callers fall back to the /contact/ form so a missing env
// var degrades to the old behaviour instead of a dead CTA.
export const CALENDLY_URL = process.env.NEXT_PUBLIC_CALENDLY_URL || '';
