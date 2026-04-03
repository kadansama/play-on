import { RouteConfig } from 'shared/types';
import { routesMasks } from '../../shared/config/routesMasks';


export const routesConfig: RouteConfig[] = [
  {
    mask: routesMasks.main.mask,
    label: 'Home',
  },
  {
    mask: routesMasks.movies.mask,
    label: 'Movies',
  },
  {
    mask: routesMasks.series.mask,
    label: 'Series',
  },
  {
    mask: routesMasks.top.mask,
    label: 'Top',
  },
  
];
