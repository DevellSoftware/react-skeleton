import styles from "./Input.module.scss";

export interface InputProps {
  label: string;
  name: string;
  required?: boolean;
}

export const Input = (props: InputProps) => {
  const label = props.label + (props.required ? " *" : "");
  return (
    <div className={styles.Input}>
      <input className={styles.input} name={props.name} />
      <label className={styles.label}>{label}</label>
    </div>
  );
};
