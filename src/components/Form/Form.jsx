import Input from "../Input/Input";
import * as styles from "./Form.module.css";

const Form = () => {
  return (
    <form className={styles.form}>
      <section className={styles.section}>
        <div className={styles.inputWrapper}>
          <Input title={"company-name"} />
        </div>
        <div className={styles.inputWrapper}>
          <label htmlFor="">Personal code</label>
          <input id="personal-code" type="" name="" value="" />
        </div>
        <div className={styles.inputWrapper}>
          <label htmlFor="">Address</label>
          <input id="address" type="" name="" value="" />
        </div>
        <div className={styles.inputWrapper}>
          <label htmlFor="email">Email</label>
          <input id="email" type="" name="" value="" />
        </div>
        <div className={styles.inputWrapper}>
          <label htmlFor="contact-number">Contact number</label>
          <input id="contact-number" type="" name="" value="" />
        </div>
      </section>
      <section className={styles.section}>
        <div className={styles.inputWrapper}>
          <label htmlFor="terminal-monthly-fee">Terminal monthly fee</label>
          <input id="terminal-monthly-fee" type="" name="" value="" />
        </div>
        <div className={styles.inputWrapper}>
          <label htmlFor="telephone-number">Telephone number</label>
          <input id="telephone-number" type="" name="" value="" />
        </div>
        <div className={styles.inputWrapper}>
          <label htmlFor="bank-account-number">Bank account number</label>
          <input id="bank-account-number" type="" name="" value="" />
        </div>
        <div className={styles.inputWrapper}>
          <label htmlFor="date-from">Date from</label>
          <input id="date-from" type="" name="" value="" />
        </div>
      </section>
    </form>
  );
};

export default Form;
