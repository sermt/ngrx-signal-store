import { Dictionaries, Dictionary } from '../data/dictionaries';

export function getDictionary(
  language: string,
  dictionaries: Dictionaries
): Dictionary {
  return dictionaries[language] ?? Object.values(dictionaries)[0];
}

export function translate(key: string, dictionary: Dictionary): string {
  return dictionary[key] ?? key;
}

export function translateToPair(
  key: string,
  dictionary: Dictionary
): { key: string; name: string } {
  return { key, name: translate(key, dictionary) };
}

export function translateToPairs(
  keys: string[],
  dictionary: Dictionary
): { key: string; name: string }[] {
  return keys.map((key) => translateToPair(key, dictionary));
}
