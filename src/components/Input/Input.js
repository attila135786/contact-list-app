import styles from "./Input.module.scss";

const Input = ({ label, value, onChange }) => {
  return (
    <div className={styles.container}>
      <label className={styles.label}>{label}:</label>
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={label}
      />
    </div>
  );
};

export default Input;
