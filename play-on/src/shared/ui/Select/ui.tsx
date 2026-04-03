import { FC } from "react";
import { SelectProps } from "./types";
import styles from './styles.module.css'

export const Select: FC<SelectProps> = ({ data, name, onClick, value }) => {
  return (
    <form>
      <select 
        className={styles.select} 
        name={name} 
        onChange={(e) => onClick(e.target.value)}
        value={value|| ""}
      >
        {data.map(elem => (
          <option 
            className={styles.option} 
            key={elem.id} 
            value={elem.id}
          >
            {elem.label}
          </option>
        ))}
      </select>
    </form>
  );
};