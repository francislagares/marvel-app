import { useQuery } from '@tanstack/react-query';
import { characterDetail } from '@/services/api';

export const useCharacter = (characterId: string) => {
  return useQuery({
    queryKey: ['characterId'],
    queryFn: () => characterDetail(characterId),
    refetchOnMount: 'always',
  });
};
