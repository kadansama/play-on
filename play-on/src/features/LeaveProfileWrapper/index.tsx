import { useMatch } from 'react-router-dom';
import { LeaveProfile} from 'features/LeaveProfile';

export const LeaveProfileWrapper = () => {
  const isBaseProfile = useMatch({ path: '/profile', end: true });

  if (!isBaseProfile) return null;

  return <LeaveProfile/>;
};
