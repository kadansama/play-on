import { RouteConfig } from 'shared/types';
import { routesMasks } from '../../shared/config/routesMasks';


export const routesConfig: RouteConfig[] = [
  {
    mask: routesMasks.main.mask,
    label: 'Главная',
  },
  {
    mask: routesMasks.movies.mask,
    label: 'Фильмы',
  },
  {
    mask: routesMasks.series.mask,
    label: 'Сериалы',
  },
  {
    mask: routesMasks.top.mask,
    label: 'Подборки',
  },
  
];
