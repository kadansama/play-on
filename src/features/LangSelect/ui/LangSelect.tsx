import { Button } from 'shared/ui';
import { ReactComponent as WorldIcon } from '@assets/images/world.svg';
import { ReactComponent as ArrowDownIcon } from '@assets/images/arrowDown.svg';

import styles from './styles.module.css';
import { memo } from 'react';

interface LangSelectProps {
  useText?: boolean; 
}

export const LangSelect = ({ useText = false }: LangSelectProps) => {
  return (
    <Button className={styles.language}>
      <div className={styles.language__icon}>
        <WorldIcon />
      </div>
      {useText && <span className={styles.language__text}>English</span>}
      <div className={styles.language__arrow}>
        <ArrowDownIcon />
      </div>
    </Button>
  );
};