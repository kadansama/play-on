import { useParams } from "react-router-dom";

import { FilmPlayer } from "../filmPlayer";
import { MovieInfo } from "../movieInfo";

import styles from './styles.module.css'
import { SimularMovies } from "../simularMovies";
export const MoviePanel = () => {
    const { id } = useParams<{ id: string }>();
    const numericId = Number(id)
    return (
        <div>
            <div className={styles.wrapper}>
                <MovieInfo id={numericId} />
                <FilmPlayer id={numericId} />
            </div>
            <SimularMovies id={numericId} />
        </div>
    )
}