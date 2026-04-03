import { Link } from "react-router-dom"
import styles from './styles.module.css'
import { memo, useRef } from "react"
import { Skeleton } from "@mui/material"

export type Card = {
    id: number,
    src: string,
    isNormal?: boolean
}

export const MovieCard = memo(({ id, src, isNormal = true }: Card) => {
    const skeletonRef = useRef<HTMLDivElement>(null)
    const imgRef = useRef<HTMLImageElement>(null)
    
    const handleLoad = () => {
        if (skeletonRef.current) {
            skeletonRef.current.style.display = 'none'
        }
    }

    return (
        <div className={`${styles["movie-card"]} ${isNormal ? "" : styles["movie-card__big"]}`}>
            <div ref={skeletonRef}>
                <Skeleton 
                    variant="rectangular" 
                    width={"100%"} 
                    height={"100%"} 
                    style={{
                        position: 'absolute',
                        zIndex: 2,
                        backgroundColor: 'rgba(255, 255, 255, 0.2)',
                        borderRadius: "12px",
                    }} 
                />
            </div>
            <Link to={`/filmAbout/${id}`} className={styles.link}>
                <img 
                    ref={imgRef}
                    className={styles["movie-card__img"]}
                    src={src} 
                    alt="poster" 
                    onLoad={handleLoad}
                    loading="lazy"
                />
            </Link>
        </div>
    )
})