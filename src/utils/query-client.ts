import { QueryClient } from '@tanstack/query-core';
import ms from 'ms';

const getQueryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: ms('12h'),
    },
  },
});

export default getQueryClient;
