import { BaseApi } from "shared/api/baseApi";
import { Movie, SimularMovieItem, StaffPerson, Trailer } from "../types";
import { FilmApi } from "../api/film";

export class FilmWrap {
    private api: FilmApi;
    private staffCache?: StaffPerson[];

    constructor(id: number) {
        this.api = new FilmApi(id);
    }
    async getMovieInfo(): Promise<Movie> {

        const movieData = await this.api.getMovieData();

        return {
            kinopoiskId: movieData.kinopoiskId,
            nameRu: movieData.nameRu,
            nameEn: movieData.nameEn,
            ratingKinopoisk: movieData.ratingKinopoisk,
            year: movieData.year,
            genres: movieData.genres,
            filmLength: movieData.filmLength,
            ratingAgeLimits: movieData.ratingAgeLimits?.replace("age", "") + "+",
            description: movieData.description,
            posterUrl: movieData.posterUrl,
            logoUrl: movieData.logoUrl,
        };
    }
    async getDirectors(): Promise<{ nameEn: string; nameRu: string }[]> {
        return this.getStaffByRole("DIRECTOR", 3);
    }

    async getActors(): Promise<{ nameEn: string; nameRu: string }[]> {
        return this.getStaffByRole("ACTOR", 6);
    }
    async getStaff(): Promise<StaffPerson[]> {
        if (!this.staffCache) {
            this.staffCache = await this.api.getStaff();
        }
        return this.staffCache;
    }

    async getStaffByRole(
        role: string,
        limit: number
    ): Promise<{ nameEn: string; nameRu: string }[]> {
        const staff = await this.getStaff();

        return staff
            .filter((person) => person.professionKey === role)
            .slice(0, limit)
            .map((person) => ({
                nameEn: person.nameEn,
                nameRu: person.nameRu,
            }));
    }
    async getTrailer(): Promise<Trailer | null> {
        return this.api.getTrailer();
    }
    async getSimularMovies(): Promise<SimularMovieItem[]> {
        const data = await this.api.getSimularMovie();
        return data.items?.slice(0, 5) || [];
    }
}