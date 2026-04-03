
import { data } from "./config"
import { NavLink } from "./ui/NavLink/NavLink"
import styles from './styles.module.css'

export const SelectNav = () => {
    return (
        <nav className={styles.nav}>
            {data.map((elem) => {
                const {title, road, imgPath} = elem
                return <NavLink key={road} imgPath={imgPath} title={title} road={road}></NavLink>
            })}
        </nav >
    )
}