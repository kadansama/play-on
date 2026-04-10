import { MovieFullData } from "entities/film/types";
import { BaseApi } from "shared/api/baseApi";

export type KeyFilmData = Pick<MovieFullData, 'nameRu' | 'nameEn' | 'type' | 'year' | 'description' | 'filmLength' | 'countries' | 'genres' | 'ratingKinopoisk' | 'posterUrl' | 'posterUrlPreview'> & {
    id: number
}

export type ShortKeyFilm = Pick<KeyFilmData, 'id' | 'nameRu' | 'nameEn' | 'posterUrl' | 'posterUrlPreview'>

export type KeyWord = {
    keyword: string,
    pagesCount: number,
    searchFilmsCountResult: number,
    films: ShortKeyFilm[]
}

export class KeyWordSeach extends BaseApi {
    async searchByKeyword(keyword: string, page: number = 1, limit: number = 20): Promise<KeyWord> {
        const params = new URLSearchParams({
            keyword: keyword,
            page: page.toString(),
        });

        const data = await this.fetchWithAuth(
            `/v2.1/films/search-by-keyword?${params.toString()}`
        );

        // Маппинг данных
        return {
            keyword: data.keyword ?? keyword,
            pagesCount: data.pagesCount ?? 0,
            searchFilmsCountResult: data.searchFilmsCountResult ?? 0,
            films: data.films?.slice(0, limit).map((film: any) => ({
                id: film.filmId ?? film.kinopoiskId ?? 0,
                nameRu: film.nameRu ?? film.name ?? 'Без названия',
                nameEn: film.nameEn ?? '',
                posterUrl: film.posterUrl ?? '',
                posterUrlPreview: film.posterUrlPreview ?? film.posterUrl ?? '',
            })) ?? [],
        };
    }
}
