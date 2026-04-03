import { Link } from "shared/ui/Link"
import styles from './styles.module.css'
import { Road } from "features/SelectNav/types"

export const NavLink = ({road, imgPath: Icon, title}: Road)=>{
    return(
        <Link to={road}>
            <div className={styles.wrapper}>
                <Icon className={styles.icon}></Icon>
                <h4 className={styles.heading}>{title}</h4>
            </div>
        </Link>
    )
}