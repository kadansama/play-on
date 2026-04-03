import { ArrowBtn } from 'shared/ui/ArrowBtn';
import styles from './styles.module.css';

type CustomArrowProps = {
  direction: "left" | "right";
  onClick?: () => void;
  className?: string;
};

export const CustomArrow = ({ direction, onClick, className = ''}: CustomArrowProps) => {
  return (
    <div 
      className={`${styles.customArrow} ${direction === "left" ? styles.left : styles.right} ${className}`}
      onClick={onClick}
    >
      <ArrowBtn direction={direction} onClick={onClick} />
    </div>
  );
};