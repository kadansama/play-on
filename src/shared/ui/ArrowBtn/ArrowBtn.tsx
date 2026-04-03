import { ReactComponent as SmallArrow } from '@assets/images/carousel/smallArrow.svg';
import { Button } from "shared/ui";
import styles from './styles.module.css';

type ArrowButtonProps = {
  direction: "left" | "right";
  onClick?: () => void;
};

export const ArrowBtn = ({ direction, onClick }: ArrowButtonProps) => {
  return (
    <Button
      className={`${styles.arrowBtn} ${direction === "left" ? styles.left : styles.right}`}
      onClick={onClick}
    >
      <SmallArrow className={styles.arrowBtn__img} />
    </Button>
  );
};
