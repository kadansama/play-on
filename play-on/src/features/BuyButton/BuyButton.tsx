import { memo } from 'react';
import styles from './styles.module.css'
import { Button } from 'shared/ui';

export const BuyButton = memo(() => {
  return (
    <Button className={styles.button}>
      Buy for 50$
    </Button>
  );
});

