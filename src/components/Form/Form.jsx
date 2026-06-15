import { useState } from "react";
import FormField from "../FormField/FormField";
import Input from "../Input/Input";
import Select from "../Select/Select";
import * as styles from "./Form.module.css";

const OPTIONS = {
  companies: [
    "Feastly Delights",
    "AirBnb",
    "Amazon",
    "Apple",
    "Google",
    "Ebay",
  ],
  contractNumbers: [
    "02123411435",
    "01234234423",
    "12341341813",
    "01214092383",
    "13488822266",
  ],
  monthlyFees: [
    "47812818",
    "184879842",
    "84787744",
    "887294782",
    "9787483824",
    "9888283",
  ],
};

const FIELDS = [
  {
    control: "select",
    label: "Company name",
    name: "companyName",
    options: OPTIONS.companies,
  },
  {
    control: "select",
    label: "Terminal monthly fee",
    name: "terminalMonthlyFee",
    options: OPTIONS.monthlyFees,
  },
  {
    control: "input",
    label: "Personal code",
    name: "personalCode",
    type: "number",
  },
  {
    control: "input",
    label: "Telephone number",
    name: "telephoneNumber",
    type: "tel",
  },
  {
    control: "input",
    label: "Address",
    name: "address",
    type: "text",
  },
  {
    control: "input",
    label: "Bank account number",
    name: "bankAccountNumber",
    type: "text",
  },
  {
    control: "input",
    label: "Email",
    name: "email",
    type: "email",
  },
  {
    control: "input",
    label: "Date from",
    name: "dateFrom",
    type: "date",
  },
  {
    control: "select",
    label: "Contract number",
    name: "contractNumber",
    options: OPTIONS.contractNumbers,
  },
];

const INITIAL_VALUES = FIELDS.filter(
  (field) => field.control === "select",
).reduce((acc, val) => {
  acc[val.name] = val.options[0];
  return acc;
}, {});

// only fee should be number-type
const mapper = (values) => {
  return { ...values, terminalMonthlyFee: Number(values.terminalMonthlyFee) };
};

export default function Form() {
  const [values, setValues] = useState(INITIAL_VALUES);

  const handleChange = (name) => (e) => {
    setValues((prev) => ({ ...prev, [name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = mapper(values);
    return payload;
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      {FIELDS.map((field) => (
        <FormField key={field.name} label={field.label}>
          {(id) =>
            field.control === "select" ? (
              <Select
                id={id}
                options={field.options}
                name={field.name}
                value={values[field.name] ?? ""}
                onChange={handleChange(field.name)}
              />
            ) : (
              <Input
                id={id}
                type={field.type}
                name={field.name}
                value={values[field.name] ?? ""}
                onChange={handleChange(field.name)}
              />
            )
          }
        </FormField>
      ))}
      <div className={styles.buttonField}>
        <button className={styles.signContractBtn} type="submit">
          Sign contract
        </button>
        <button className={styles.backBtn} type="button">
          Back
        </button>
      </div>
    </form>
  );
}
