'use client';
import {
  PropsWithChildren,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { Character, CharacterDataWrapper } from '@/models/character';
import { ComicDataWrapper } from '@/models/comic';
import {
  detailCharacter,
  getCharacterComics,
  getCharacters,
  searchCharacters,
} from '@/services/api';

interface CharactersContext {
  characters: CharacterDataWrapper | null;
  fetchCharacters: (querySearch?: string | null) => Promise<void>;
  fetchCharacterDetails: (characterId: string) => Promise<Character>;
  fetchCharacterComics: (characterId: string) => Promise<ComicDataWrapper>;
}

const CharactersContext = createContext<CharactersContext | null>(null);

export const CharactersProvider = ({ children }: PropsWithChildren) => {
  const [characters, setCharacters] = useState<CharacterDataWrapper | null>(
    null,
  );

  const fetchCharacters = useCallback(async (querySearch?: string | null) => {
    try {
      const data = querySearch
        ? await searchCharacters(querySearch)
        : await getCharacters();

      setCharacters(data);
    } catch (error) {
      console.error('Error fetching characters:', error);
    }
  }, []);

  const fetchCharacterDetails = useCallback(async (characterId: string) => {
    try {
      const data = await detailCharacter(characterId);

      if (!data.results || data.results.length === 0) {
        throw new Error('Character not found');
      }

      return data.results[0];
    } catch (error) {
      console.error('Error fetching character details:', error);

      throw error;
    }
  }, []);

  const fetchCharacterComics = useCallback(async (characterId: string) => {
    try {
      const data = await getCharacterComics(characterId);

      return data;
    } catch (error) {
      console.error('Error fetching character comics:', error);

      throw error;
    }
  }, []);

  useEffect(() => {
    fetchCharacters();
  }, [fetchCharacters]);

  const contextValue: CharactersContext = useMemo(
    () => ({
      characters,
      fetchCharacters,
      fetchCharacterDetails,
      fetchCharacterComics,
    }),
    [characters, fetchCharacters, fetchCharacterDetails, fetchCharacterComics],
  );

  return (
    <CharactersContext.Provider value={contextValue}>
      {children}
    </CharactersContext.Provider>
  );
};

export const useCharactersContext = () => {
  const context = useContext(CharactersContext);

  if (!context) {
    throw new Error('useCharacters must be used within a CharactersProvider');
  }

  return context;
};
