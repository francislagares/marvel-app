import { screen } from '@testing-library/react';
import { expect } from 'vitest';

import { render } from '@/test/utils/render';
import { Logo } from './Logo';

describe('Logo Component', () => {
  it('renders without crashing', () => {
    render(<Logo />);

    const main = screen.getByAltText('Marvel Logo');

    expect(main).toBeInTheDocument();
  });
});
