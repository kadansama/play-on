import styles from './styles.module.css'
import { SocialMedia } from "shared/ui/SocialMedia"
import { Container } from 'shared/ui/Container'
import { FooterLinks } from "./ui/FooterLinks/FooterLinks"
import { StoreButton } from "./ui/StoreButton/StoreButton"
import { HelpPanel } from "./ui/HeplPanel"

export const Footer = () => {
    // film.getActors()
    // film.getDirectors()
    // film.getTrailer()
    // film.getMovieInfo()
    return (
        <footer >
            <Container>
                <div className={styles.wrapper}>
                    <SocialMedia />
                    <FooterLinks />
                    <StoreButton />
                    <HelpPanel />
                </div>
            </Container>
        </footer>
    )
}