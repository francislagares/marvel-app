import { useQuery } from '@tanstack/react-query';
import { searchCharacters } from '@/services/api';

export const useCharacterSearch = (querySearch: string | null) => {
  return useQuery({
    queryKey: ['searchCharacters', querySearch],
    queryFn: () => searchCharacters(querySearch),
  });
};
