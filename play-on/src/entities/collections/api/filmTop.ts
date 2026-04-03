import { BaseApi } from "shared/api/baseApi";
import { CollectionParams, CollectionResponse, FilmPreview } from "../types";

export class FilmTop extends BaseApi {
  async getCollections(params: CollectionParams): Promise<FilmPreview[]> {
    try {
      const { type = 'TOP_POPULAR_ALL', page = 1 } = params;
      
      const url = `/v2.2/films/collections?type=${type}&page=${page}`;
      const res: CollectionResponse = await this.fetchWithAuth(url);
      
      return res.items.map(film => ({
        kinopoiskId: film.kinopoiskId,
        posterUrl: film.posterUrl,
      }));

    } catch (error) {
      console.error('API Error:', error);
      throw new Error(`Failed to fetch ${params.type} collection`);
    }
  }
}