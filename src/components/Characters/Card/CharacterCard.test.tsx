import { screen } from '@testing-library/react';
import { expect } from 'vitest';

import { Character } from '@/models/character';
import { render } from '@/test/utils/render';
import { CharacterCard } from './CharacterCard';

const characterProps: Character = {
  id: 1010354,
  name: 'Adam Warlock',
  description:
    'Adam Warlock is an artificially created human who was born in a cocoon at a scientific complex called The Beehive.',
  thumbnail: {
    extension: 'jpg',
    path: 'http://i.annihil.us/u/prod/marvel/i/mg/a/f0/5202887448860',
  },
  comics: {
    items: Array(20),
  },
};

describe('CharacterCard Component', () => {
  it('displays character card props', async () => {
    render(<CharacterCard character={characterProps} />);

    const character = await screen.findByRole('article');

    expect(character).toBeInTheDocument();
  });

  it('displays character name', async () => {
    render(<CharacterCard character={characterProps} />);

    const character = await screen.findByText(/Adam Warlock/i);

    expect(character).toBeInTheDocument();
  });

  it('displays character image', async () => {
    render(<CharacterCard character={characterProps} />);

    const image = await screen.findByRole('img');

    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src');
  });
});
