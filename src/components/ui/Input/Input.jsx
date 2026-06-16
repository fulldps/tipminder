import * as styles from "./Input.module.css";

export default function Input({ name, id, type, value, onChange }) {
  return (
    <input
      id={id}
      className={styles.input}
      type={type}
      name={name}
      value={value}
      onChange={onChange}
    />
  );
}
