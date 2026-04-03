import { ReactNode } from 'react';
import { Box } from '@mui/material';
import styles from './container.module.css'

type ContainerProps = {
  children: ReactNode;
};

export const Container = ({ children}: ContainerProps) => {
  return (
    <Box className={styles.container}>
      {children}
    </Box>
  );
};
