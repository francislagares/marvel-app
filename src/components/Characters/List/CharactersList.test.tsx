import { screen } from '@testing-library/react';
import { expect } from 'vitest';

import { render } from '@/test/utils/render';
import { CharactersList } from './CharactersList';

describe('CharactersList Component', () => {
  it('displays a list of characters', async () => {
    render(<CharactersList />);

    const characterSection = await screen.findByRole('grid');

    expect(characterSection).toBeInTheDocument();
  });
});
