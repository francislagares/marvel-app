import { useQuery } from '@tanstack/react-query';
import { getCharacterComics } from '@/services/api';

export const useComics = (characterId: string) => {
  return useQuery({
    queryKey: ['comics', characterId],
    queryFn: () => getCharacterComics(characterId),
  });
};
