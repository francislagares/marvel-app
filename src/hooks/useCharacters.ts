import { useQuery } from '@tanstack/react-query';
import { getCharacters } from '@/services/api';

export const useCharacters = () => {
  return useQuery({
    queryKey: ['characters'],
    queryFn: getCharacters,
  });
};
