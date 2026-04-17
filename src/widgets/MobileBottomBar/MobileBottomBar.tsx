import { memo } from 'react';
import { Box, useMediaQuery } from '@mui/material';
import { Container } from 'shared/ui/Container';
import { MobileNav } from 'shared/ui/MobileNav';
import { MobileProfile } from 'features/MobileProfile';
import { routesConfig } from 'app/routing/routesConfig';
import homeIcon from '@assets/images/home.svg?url';
import moviesIcon from '@assets/images/selectNav/movies.svg?url';
import seriesIcon from '@assets/images/selectNav/series.svg?url';
import topIcon from '@assets/images/selectNav/top.svg?url';
import styles from './styles.module.css';

const navIcons: Record<string, string> = {
  '/': homeIcon,
  '/movies': moviesIcon,
  '/series': seriesIcon,
  '/top': topIcon,
};

export const MobileBottomBar = memo(() => {
  const isMobile = useMediaQuery('(max-width: 1024px)');

  if (!isMobile) {
    return null;
  }

  return (
    <Box component="footer" className={styles.mobileBottomBar}>
      <Container>
        <Box className={styles.mobileBottomBar__wrapper}>
          <MobileNav routes={routesConfig} icons={navIcons} />
        </Box>
      </Container>
    </Box>
  );
});

MobileBottomBar.displayName = 'MobileBottomBar';
