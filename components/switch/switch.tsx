import { ChangeEventHandler, MouseEventHandler } from "react";
import styles from "./switch.module.css";
import { SwitchProps } from "@/types";

export const Switch = ({ handleChange, isChecked }: SwitchProps) => {

  return <button
    className={styles.button}
    type="button"
    onClick={handleChange}
  >
    {!isChecked ? 'Dark Mode' : 'Light Mode'}
  </button>
};
