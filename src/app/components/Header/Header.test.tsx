import { render, screen } from '@testing-library/react';
import { expect } from 'vitest';

import { Header } from './Header';

describe('Header Component', () => {
  it('renders without crashing', () => {
    render(<Header />);

    const main = screen.getByRole('banner');

    expect(main).toBeInTheDocument();
  });
});
