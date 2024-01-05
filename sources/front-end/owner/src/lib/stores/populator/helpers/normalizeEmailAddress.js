const umlauts = new Map([
  ['ä', 'ae'],
  ['ö', 'oe'],
  ['ü', 'ue'],
]);

export const normalizeEmailAddress = (emailAddress) => Array.from(emailAddress.toLowerCase())
  .map((char) => umlauts.has(char) ? umlauts.get(char) : char).join('');