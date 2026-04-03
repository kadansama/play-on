import { BaseApi } from "shared/api/baseApi";
import { MovieFullData, VideoData, StaffPerson, Trailer, SimularMovie } from "../types"

export class FilmApi extends BaseApi {
    id: number

    constructor(id: number) {
        super()
        this.id = id
    }

    async getMovieData(): Promise<MovieFullData> {
        return await this.fetchWithAuth(`/v2.2/films/${this.id}`)

    }
    async getTrailer(): Promise<Trailer | null> {
        const data: VideoData = await this.fetchWithAuth(`/v2.2/films/${this.id}/videos`)
        // console.log(data)
        const info = data.items[0]
        if (!info) return null;
        return { url: info.url, name: info.name };
    }

    async getStaff(): Promise<StaffPerson[]> {
        return await this.fetchWithAuth(`/v1/staff?filmId=${this.id}`)
    }

    async getSimularMovie(): Promise<SimularMovie> {
        const data = await this.fetchWithAuth(`/v2.2/films/${this.id}/similars`)
        // console.log(data)
        return data
    }
}

