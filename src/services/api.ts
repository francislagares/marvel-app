import { env } from '@/env';
import { CharacterDataWrapper } from '@/models/character';
import { createQueryKey, getTimestamp } from '@/utils';

const timeStamp = getTimestamp();
const query = createQueryKey(timeStamp, env.MARVEL_API_PUBLIC_KEY);

const responseHandler = async <T>(response: Response) => {
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  const result = await response.json();

  return result.data as T;
};

export const getCharacters = async () => {
  const url = `${env.MARVEL_API_URL}/characters?limit=50&${query}`;
  const response = await fetch(url);

  return responseHandler<CharacterDataWrapper>(response);
};
