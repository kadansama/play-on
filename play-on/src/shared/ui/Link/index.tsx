import { Link as RouterLink } from 'react-router-dom';
import { routesMasks, type RouteKeys } from '../../config/routesMasks';

interface AppLinkProps {
  to: RouteKeys | string;
  children?: React.ReactNode;
  className?: string;
}

export const Link = ({ to, children, ...props }: AppLinkProps) => {
  const href = typeof to === 'string' && to in routesMasks 
    ? routesMasks[to as RouteKeys].create() 
    : to;
  return (
    <RouterLink to={href} {...props} >
      {children}
    </RouterLink>
  );
};