import { screen } from '@testing-library/react';
import { expect } from 'vitest';

import { render } from '@/test/utils/render';
import { Header } from './Header';

describe('Header Component', () => {
  it('renders without crashing', () => {
    render(<Header />);

    const main = screen.getByRole('banner');

    expect(main).toBeInTheDocument();
  });
});
