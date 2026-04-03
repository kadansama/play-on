import styles from "./styles.module.css";

type ButtonProps = React.ComponentProps<"button">;

export const Button: React.FC<ButtonProps> = ({ className, ...props }) => {
  return <button className={`${styles.button} ${className ?? ""}`} {...props} />;
};
