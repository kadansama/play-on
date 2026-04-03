import { ReactComponent as AppStoreIcon } from '@assets/images/apple.svg';
import { ReactComponent as GooglePlayIcon } from '@assets/images/gplay.svg';

export const storeButtons = [
  {
    icon: AppStoreIcon, 
    storeName: 'App Store',
    url: 'https://www.apple.com/store',
  },
  {
    icon: GooglePlayIcon, 
    storeName: 'Google Play',
    url: 'https://play.google.com/store/games',
  },
] as const;
