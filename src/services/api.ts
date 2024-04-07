import { CharactersDataWrapper } from '@/models/character';
import { ComicDataWrapper } from '@/models/comic';
import { createQueryKey, getTimestamp } from '@/utils';

const timeStamp = getTimestamp();
const query = createQueryKey(timeStamp, process.env.MARVEL_API_PUBLIC_KEY!);

const responseHandler = async <T>(response: Response) => {
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  const result = await response.json();

  return result.data as T;
};

export const getCharacters = async () => {
  const url = `${process.env.MARVEL_API_URL}/characters?limit=50&${query}`;
  const response = await fetch(url);

  return responseHandler<CharactersDataWrapper>(response);
};

export const characterDetail = async (characterId: string) => {
  const url = `${process.env.MARVEL_API_URL}/characters/${characterId}?${query}`;
  const response = await fetch(url);

  return responseHandler<CharactersDataWrapper>(response);
};

export const searchCharacters = async (
  querySearch: string | null,
): Promise<CharactersDataWrapper> => {
  const url = `${process.env.MARVEL_API_URL}/characters?nameStartsWith=${querySearch}&limit=50&${query}`;
  const response = await fetch(url);

  return responseHandler<CharactersDataWrapper>(response);
};

export const getCharacterComics = async (characterId: string) => {
  const url = `${process.env.MARVEL_API_URL}/characters/${characterId}/comics?limit=20&${query}`;
  const response = await fetch(url);

  return responseHandler<ComicDataWrapper>(response);
};
