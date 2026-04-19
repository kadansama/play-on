import { UseQueryResult } from "@tanstack/react-query";
import { CollectionType } from "entities/collections/types";
import { FilmPreview } from "entities/filmCollection/types";
import { useCatastrophe, useTopFamily, useKids, useTopComics, useTopLove, useTopMovies, useTopReleases, useTopTvShows, useTopVampire, useTopZombie } from "entities/queries";
import { IInfo } from "shared/ui/InfoPanel/ui";

export type HookMapItem = {
    title: string,
    slug: string,
    info: IInfo,
    hook: ()=>UseQueryResult<FilmPreview[], Error>
}

export const INFO: IInfo = {
  title: 'Топ',
  paragraph: 'Подборки популярных фильмов и сериалов для любого настроения'
}

export const hookMap: Partial<Record<CollectionType, HookMapItem>> = {
  'TOP_250_TV_SHOWS': {
    title: 'Лучшие сериалы',
    slug: 'best-series',
    info: {
      title: 'Лучшие сериалы',
      paragraph: 'Рейтинговые сериалы, которые стоит добавить в список просмотра'
    },
    hook: useTopTvShows
  },
  'TOP_250_MOVIES': {
    title: 'Лучшие фильмы',
    slug: 'best-movies',
    info: {
      title: 'Лучшие фильмы',
      paragraph: 'Фильмы с высоким рейтингом для просмотра сегодня'
    },
    hook: useTopMovies
  },
  'VAMPIRE_THEME': {
    title: 'Вампиры',
    slug: 'vampires',
    info: {
      title: 'Вампиры',
      paragraph: 'Мистические истории о вампирах, тайнах и ночных приключениях'
    },
    hook: useTopVampire
  },
  'COMICS_THEME': {
    title: 'Комиксы',
    slug: 'comics',
    info: {
      title: 'Комиксы',
      paragraph: 'Экранизации комиксов, супергеройские истории и яркие приключения'
    },
    hook: useTopComics
  },
  'CLOSES_RELEASES': {
    title: 'Скоро в прокате',
    slug: 'coming-releases',
    info: {
      title: 'Скоро в прокате',
      paragraph: 'Ближайшие премьеры и ожидаемые релизы'
    },
    hook: useTopReleases
  },
  'LOVE_THEME': {
    title: 'Мелодрамы',
    slug: 'love',
    info: {
      title: 'Мелодрамы',
      paragraph: 'Истории о любви, чувствах и важных встречах'
    },
    hook: useTopLove
  },
  'ZOMBIE_THEME': {
    title: 'Зомби',
    slug: 'zombie',
    info: {
      title: 'Зомби',
      paragraph: 'Напряженные фильмы и сериалы о выживании среди зомби'
    },
    hook: useTopZombie
  },
  'CATASTROPHE_THEME': {
    title: 'Катастрофы',
    slug: 'catastrophe',
    info: {
      title: 'Катастрофы',
      paragraph: 'Масштабные истории о стихиях, авариях и борьбе за жизнь'
    },
    hook: useCatastrophe
  },
  'KIDS_ANIMATION_THEME': {
    title: 'Детям и анимация',
    slug: 'kids-animation',
    info: {
      title: 'Детям и анимация',
      paragraph: 'Добрые мультфильмы и семейные истории для детей'
    },
    hook: useKids
  },
  'FAMILY': {
    title: 'Для семейного просмотра',
    slug: 'family',
    info: {
      title: 'Для семейного просмотра',
      paragraph: 'Фильмы и мультфильмы, которые удобно смотреть всей семьей'
    },
    hook: useTopFamily
  },
};
