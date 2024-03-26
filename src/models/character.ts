import { Comic } from './comic';

export interface Character {
  id: number;
  name: string;
  description: string;
  thumbnail: {
    path: string;
    extension: string;
  };
  comics: {
    items: Comic[];
  };
}

export interface CharactersDataWrapper {
  results: Character[];
  count: number;
}

export interface CharacterDataWrapper {
  results: {
    [key: number]: Character;
  };
}
