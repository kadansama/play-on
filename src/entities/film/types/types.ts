export interface Movie {
  kinopoiskId: number
  nameRu: string
  nameEn: string
  ratingKinopoisk: number
  year: number
  genres: Array<{ genre: string }>
  filmLength: number
  ratingAgeLimits: string
  description: string
  posterUrl: string
  logoUrl: string
}

export interface MovieFullData {
    kinopoiskId?: number
    kinopoiskHDId?: string
    imdbId?: string
    nameRu?: string
    nameEn?: string
    nameOriginal?: string
    posterUrl?: string
    posterUrlPreview?: string
    coverUrl?: string
    logoUrl?: string
    reviewsCount?: number
    ratingGoodReview?: number
    ratingGoodReviewVoteCount?: number
    ratingKinopoisk?: number
    ratingKinopoiskVoteCount?: number
    ratingImdb?: number
    ratingImdbVoteCount?: number
    ratingFilmCritics?: number
    ratingFilmCriticsVoteCount?: number
    ratingAwait?: number
    ratingAwaitCount?: number
    ratingRfCritics?: number
    ratingRfCriticsVoteCount?: number
    webUrl?: string
    year?: number
    filmLength?: number
    slogan?: string
    description?: string
    shortDescription?: string
    editorAnnotation?: string
    isTicketsAvailable?: boolean
    productionStatus?: string
    type?: string
    ratingMpaa?: string
    ratingAgeLimits?: string
    hasImax?: boolean
    has3D?: boolean
    lastSync?: string
    countries?: Array<{ country: string }>
    genres?: Array<{ genre: string }>
    startYear?: number
    endYear?: number
    serial?: boolean
    shortFilm?: boolean
    completed?: boolean
}

export interface VideoData {
  total: number
  items: Array<{
    url: string
    name: string
    site: string
  }>
}

export interface StaffPerson {
    staffId: number;
    nameRu: string;
    nameEn: string;
    description: string;
    posterUrl: string;
    professionText: string;
    professionKey: string;
}


export type Trailer = {
    url: string;
    name: string;
};

export interface SimularMovie{
  total: number;
  items: SimularMovieItem[];
}

export interface SimularMovieItem {
  filmId: number;
  nameRu: string;
  nameEn: string;
  nameOriginal: string;
  posterUrl: string;
  posterUrlPreview: string;
  relationType: string;
}