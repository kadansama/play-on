import { Link as RouterLink } from 'react-router-dom';
import { routesMasks } from '../../config/routesMasks';

type RouteKey = keyof typeof routesMasks;

interface AppLinkProps {
  to: string | RouteKey;
  children?: React.ReactNode;
  className?: string;
}

const isRouteKey = (key: string): key is RouteKey => {
  return key in routesMasks;
};

export const Link = ({ to, children, ...props }: AppLinkProps) => {
  const href =
    typeof to === 'string' && isRouteKey(to)
      ? (routesMasks[to] as any).create()
      : to;

  return (
    <RouterLink to={href} {...props}>
      {children}
    </RouterLink>
  );
};