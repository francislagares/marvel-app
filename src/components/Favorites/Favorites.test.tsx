import { render, screen } from '@testing-library/react';
import { expect } from 'vitest';

import { Favorites } from './Favorites';

describe('Favorites Component', () => {
  it('renders without crashing', () => {
    render(<Favorites />);

    const main = screen.getByAltText('Favorites');

    expect(main).toBeInTheDocument();
  });
});
