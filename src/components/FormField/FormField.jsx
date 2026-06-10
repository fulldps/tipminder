import { useId } from "react";
import * as styles from "./FormField.module.css";

export default function FormField({ children, label }) {
  const id = useId();

  return (
    <div className={styles.formFieldWrapper}>
      <label htmlFor={id}>{label}</label>
      {children(id)}
    </div>
  );
}
