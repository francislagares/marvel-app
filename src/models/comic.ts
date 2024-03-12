export interface Comic {
  id: number;
  title: string;
  thumbnail: {
    path: string;
    extension: string;
  };
}

export interface ComicDataWrapper {
  results: Comic[];
  count: number;
}
