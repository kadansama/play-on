
import { FilmPreview } from "entities/filmCollection/types";
import { MovieCard } from "../MovieCard/MovieCard";
import styles from "./styles.module.css"
import { CircularProgress } from "@mui/material";

type FilmListType = {
    list: FilmPreview[],
}

export const FilmList = ({list}: FilmListType) => {
    return (
        <>
            <div className={styles.filmList}>
                {list.map(({ kinopoiskId: id, posterUrl: src }) => {
                    return <MovieCard key={id} id={id} src={src} />
                })}

            </div>
        </>
    )
}