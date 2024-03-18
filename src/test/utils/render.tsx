import { PropsWithChildren, ReactElement } from 'react';
import { render } from '@testing-library/react';
import { CharactersProvider } from '@/context/CharactersContext';
import { FavoritesProvider } from '@/context/FavoritesContext';

const AllProviders = ({ children }: PropsWithChildren) => {
  return (
    <CharactersProvider>
      <FavoritesProvider>{children}</FavoritesProvider>
    </CharactersProvider>
  );
};

export default AllProviders;

const customRender = (
  ui: ReactElement,
  options: Parameters<typeof render>[1] = {},
) => render(ui, { wrapper: AllProviders, ...options });

export { customRender as render };
