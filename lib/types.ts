import { NextFont } from 'next/dist/compiled/@next/font';

export type Font = {
  label: string;
  font: NextFont;
};

export type Theme = 'light' | 'dark';

export type WordInfo = {
  word: string;
  phonetic: string;
  phonetics: {
    text: string;
    audio: string;
    sourceUrl?: string;
    license?: {
      name: string;
      url: string;
    };
  }[];
  meanings: {
    partOfSpeech: string;
    definitions: {
      definition: string;
      synonyms: string[];
      antonyms: string[];
      example?: string;
    }[];
    synonyms: string[];
    antonyms: string[];
  }[];
  license: {
    name: string;
    url: string;
  };
  sourceUrls: string[];
};

export type Meaning = {
  partOfSpeech: string;
  definitions: {
    definition: string;
    synonyms: string[];
    antonyms: string[];
    example?: string;
  }[];
  synonyms: string[];
  antonyms: string[];
};

export enum SubmitErrors {
  EmptySearchField = `Whoops, can't be empty...`,
  WordNotFound = `Sorry pal, we couldn't find definitions for the word you were looking for. You can try the search again at later time or head to the web instead.`,
}
