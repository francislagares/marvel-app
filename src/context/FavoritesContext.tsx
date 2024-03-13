'use client';
import {
  PropsWithChildren,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { Character } from '@/models/character';
interface FavoritesContext {
  favorites: Character[];
  addFavorite: (character: Character) => void;
  removeFavorite: (id: number) => void;
  isFavorite: (id: number) => boolean;
}

const initFavorites: Character[] = [];

const getInitialState = () => {
  // ensure that access to localStorage is only done on the client side.
  if (typeof window !== 'undefined') {
    const favorites = localStorage.getItem('favorites');

    return favorites ? JSON.parse(favorites) : initFavorites;
  }

  return initFavorites;
};

const setLocalStorageFavorites = (favorites: Character[]) => {
  localStorage.setItem('favorites', JSON.stringify(favorites));
};

const FavoritesContext = createContext<FavoritesContext>({
  favorites: initFavorites,
  addFavorite: () => {},
  removeFavorite: () => {},
  isFavorite: () => false,
});

export const FavoritesProvider = ({ children }: PropsWithChildren) => {
  const [favorites, setFavorites] = useState<Character[]>(getInitialState);

  useEffect(() => {
    setLocalStorageFavorites(favorites);
  }, [favorites]);

  const addFavorite = (character: Character) =>
    setFavorites(prev => [...prev, character]);

  const removeFavorite = (id: number) =>
    setFavorites(prev => prev.filter(fav => fav.id !== id));

  const isFavorite = useCallback(
    (id: number) => favorites.some(fav => fav.id === id),
    [favorites],
  );

  const contextValues = useMemo(
    () => ({ favorites, addFavorite, removeFavorite, isFavorite }),
    [favorites, isFavorite],
  );

  return (
    <FavoritesContext.Provider value={contextValues}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavoritesContext = () => {
  const context = useContext(FavoritesContext);

  if (!context) {
    throw new Error(
      'useFavoritesContext must be used within a FavoritesProvider',
    );
  }

  return context;
};
