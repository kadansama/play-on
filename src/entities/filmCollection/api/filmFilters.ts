import { BaseApi } from "shared/api/baseApi";
import { Country, FilmResponse, Filtered, Genre } from "../types";

export type FilmPreview = {
    kinopoiskId: number;
    posterUrl: string;
};


export class FilmFilters extends BaseApi {

    async getFilters(): Promise<{ genres: { id: number; genre: string }[], countries: { id: number; country: string }[] }> {
        try {
            return await this.fetchWithAuth('/v2.2/films/filters');
        } catch (error) {
            console.error('API Error:', error);
            throw new Error('Failed to fetch filters');
        }
    }

    async getGenreIds(): Promise<Genre[]> {
        const filters = await this.getFilters();
        return filters.genres;
    }

    async getCountryIds(): Promise<Country[]> {
        const filters = await this.getFilters();
        return filters.countries;
    }

    async getFilmsWithFilters(filters: Filtered): Promise<FilmPreview[]> {
        try {
            const params = new URLSearchParams();

            if (filters.countries) {
                params.append('countries', String(filters.countries));
            }

            if (filters.genres) {
                params.append('genres', String(filters.genres));
            }

            if (filters.order) {
                params.append('order', filters.order);
            }

            if (filters.type) {
                params.append('type', filters.type);
            }

            if (filters.ratingFrom !== undefined) {
                params.append('ratingFrom', filters.ratingFrom.toString());
            }

            if (filters.ratingTo !== undefined) {
                params.append('ratingTo', filters.ratingTo.toString());
            }

            if (filters.yearFrom !== undefined) {
                params.append('yearFrom', filters.yearFrom.toString());
            }

            if (filters.yearTo !== undefined) {
                params.append('yearTo', filters.yearTo.toString());
            }

            if (filters.imdbId) {
                params.append('imdbId', filters.imdbId.toString());
            }

            if (filters.keyword) {
                params.append('keyword', filters.keyword);
            }

            if (filters.page !== undefined) {
                params.append('page', filters.page.toString());
            }

            const url = `/v2.2/films?${params.toString()}`;
            const res: FilmResponse = await this.fetchWithAuth(url);
            return res.items.map(film => ({
                kinopoiskId: film.kinopoiskId,
                posterUrl: film.posterUrl,
            }));

        } catch (error) {
            console.error('API Error:', error);
            throw new Error('Failed to fetch films with filters');
        }
    }

    // async getGenreIdByName(genreName: string): Promise<number | null> {
    //     const filters = await this.getFilters();
    //     const genre = filters.genres.find(g =>
    //         g.genre.toLowerCase() === genreName.toLowerCase()
    //     );
    //     return genre ? genre.id : null;
    // }
}

export const filmFiltersApi = new FilmFilters();