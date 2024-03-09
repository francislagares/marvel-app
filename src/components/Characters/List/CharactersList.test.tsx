import { render, screen } from '@testing-library/react';
import { expect } from 'vitest';

import { CharactersList } from './CharactersList';

describe('Characters List', () => {
  it('displays a list of characters', async () => {
    render(<CharactersList />);

    const character = await screen.findByRole('application');
    console.log(character);

    expect(character).toBeInTheDocument();
  });
});
