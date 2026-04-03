import { ArrowBtn } from 'shared/ui/ArrowBtn';
import styles from './styles.module.css';

type OrdinaryArrowProps = {
  direction: "left" | "right";
  onClick?: () => void;
  className?: string;
};

export const OrdinaryArrow = ({ direction, onClick, className = '' }: OrdinaryArrowProps) => {
  return (
    <div className={`${styles.ordinaryArrow} ${direction === "left" ? styles.left : styles.right} ${className}`}>
      <ArrowBtn direction={direction} onClick={onClick} />
    </div>
  );
};