export type Genre = {
  id: number,
  genre: string,
}

export type Country = {
  id: number,
  country: string
}

export type Filtered = {
  countries?: number[],
  genres?: number[],
  order?: "RATING" | "NUM_VOTE" | "YEAR",
  type?: "FILM" | "TV_SHOW" | "TV_SERIES" | "MINI_SERIES" | "ALL",
  ratingFrom?: number,
  ratingTo?: number,
  yearFrom?: number,
  yearTo?: number,
  imdbId?: number,
  keyword?: string,
  page?: number
}

export type FilmPreview = {
  kinopoiskId: number;
  posterUrl: string;
};

export type FilteredFilm = {
  kinopoiskId: number;
  imdbId?: string;
  nameRu?: string;
  nameEn?: string;
  nameOriginal?: string;
  posterUrl: string;
  posterUrlPreview: string;
  ratingKinopoisk?: number;
  ratingImdb?: number;
  year?: number;
  filmLength?: number;
  description?: string;
  shortDescription?: string;
  countries: { country: string }[];
  genres: { genre: string }[];
}

export type FilmResponse = {
  items: FilteredFilm[];
  total: number;
  totalPages: number;
}