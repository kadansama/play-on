export type CollectionType =
    | 'TOP_POPULAR_ALL'
    | 'TOP_POPULAR_MOVIES'
    | 'TOP_250_TV_SHOWS'
    | 'TOP_250_MOVIES'
    | 'VAMPIRE_THEME'
    | 'COMICS_THEME'
    | 'CLOSES_RELEASES'
    | 'FAMILY'
    | 'OSKAR_WINNERS_2021'
    | 'LOVE_THEME'
    | 'ZOMBIE_THEME'
    | 'CATASTROPHE_THEME'
    | 'KIDS_ANIMATION_THEME'
    | 'POPULAR_SERIES';

export type CollectionParams = {
    type: CollectionType;
    page?: number;
}

export type FilmPreview = {
    kinopoiskId: number;
    posterUrl: string;
}

export type CollectionResponse = {
    items: FilmPreview[];
    total: number;
    totalPages: number;
}