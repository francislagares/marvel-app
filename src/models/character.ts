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

export interface CharacterDataWrapper {
  results: Character[];
  count: number;
}
