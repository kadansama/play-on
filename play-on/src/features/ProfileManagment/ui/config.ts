import type { LinkCardProps } from './LinkCard/LinkCard';
import { ReactComponent as WalletIcon } from '@assets/images/profile/wallet.svg';
import { ReactComponent as Notification } from '@assets/images/profile/notifications.svg';
import { ReactComponent as Download } from '@assets/images/profile/download.svg';
import { ReactComponent as Watched } from '@assets/images/profile/watched.svg';
import { ReactComponent as Like } from '@assets/images/profile/like.svg';
import { ReactComponent as Desktop } from '@assets/images/profile/desktop.svg';
import { ReactComponent as Headphones } from '@assets/images/profile/headphones.svg';
import { ReactComponent as Settings } from '@assets/images/profile/settings.svg';

export const profileData: LinkCardProps[] = [
  { icon: WalletIcon, title: 'Subscription Management', to: '/profile/subscription' },
  { icon: Notification, title: 'Notice', to: '/profile/notice' },
  { icon: Download, title: 'Downloaded', to: '/profile/downloaded' },
  { icon: Watched, title: 'Already watched', to: '/alreadyWatched' },
  { icon: Like, title: 'Like', to: '/like' },
  { icon: Desktop, title: 'Connected Devices', to: '/profile/devices' },
  { icon: Headphones, title: 'Help', to: '/profile/help' },
  { icon: Settings, title: 'Settings', to: '/profile/settings' },
];
