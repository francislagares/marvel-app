import { render, screen } from '@testing-library/react';
import { expect } from 'vitest';

import Home from '@/app/page';

describe('Home Page', () => {
  it('renders without crashing', () => {
    render(<Home />);

    const main = screen.getByRole('main');

    expect(main).toBeInTheDocument();
  });
});
