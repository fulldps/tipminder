import * as styles from "./Input.module.css";

const Input = ({ title }) => {
  return (
    <>
      <label htmlFor={title}>Company name</label>
      <input id={title} className={styles.input} type="" name="" value="" />
    </>
  );
};

export default Input;
