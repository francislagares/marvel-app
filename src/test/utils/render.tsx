import { PropsWithChildren, ReactElement } from 'react';
import { render } from '@testing-library/react';
import { FavoritesProvider } from '@/context/FavoritesContext';
import { ReactQueryProvider } from '@/providers/ReactQueryProvider';

const AllProviders = ({ children }: PropsWithChildren) => {
  return (
    <ReactQueryProvider>
      <FavoritesProvider>{children}</FavoritesProvider>
    </ReactQueryProvider>
  );
};

export default AllProviders;

const customRender = (
  ui: ReactElement,
  options: Parameters<typeof render>[1] = {},
) => render(ui, { wrapper: AllProviders, ...options });

export { customRender as render };
