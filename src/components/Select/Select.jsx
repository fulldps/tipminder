import * as styles from "./Select.module.css";

export default function Select({ options, name, id, value, onChange }) {
  return (
    <>
      <select
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        className={styles.select}
      >
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </>
  );
}
