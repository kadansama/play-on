import { FilmCarousel } from 'widgets/FilmCarousel';
import { InfoPanel } from 'shared/ui/InfoPanel';
import { routesMasks } from 'shared/config/routesMasks';
import { HookMapItem, INFO, hookMap } from '../config'
import styles from './styles.module.css'

type TopCarouselProps = Pick<HookMapItem, 'title' | 'slug' | 'hook'>

const TopCarousel = ({ title, slug, hook: useHook }: TopCarouselProps) => {
    const filmsQuery = useHook();

    return (
        <FilmCarousel
            films={filmsQuery.data ?? []}
            title={title}
            titleLink={routesMasks.topCollection.create(slug)}
        />
    )
}

export const TopPage = () => {
    return (
        <section className={styles.topPage}>
            <InfoPanel title={INFO.title} paragraph={INFO.paragraph} />
            <div className={styles.topPage__carousels}>
                {Object.entries(hookMap).map(([query, { title, slug, hook: useHook }]) => {
                    return (
                        <TopCarousel
                            key={query}
                            title={title}
                            slug={slug}
                            hook={useHook}
                        />
                    );
                })}
            </div>
        </section>
    )
}
