import { HttpResponse, http } from 'msw';

import { characters } from './data/characters';

export const handlers = [
  http.get(`${process.env.MARVEL_API_URL}/characters`, async () => {
    return HttpResponse.json(characters.results, { status: 200 });
  }),
];
