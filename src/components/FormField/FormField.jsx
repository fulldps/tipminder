import { useId } from "react";
import * as styles from "./FormField.module.css";

const FormField = ({ children, label }) => {
  const id = useId();

  return (
    <div className={styles.formWrapper}>
      <label htmlFor={id}>{label}</label>
      {children(id)}
    </div>
  );
};

export default FormField;
