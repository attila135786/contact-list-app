import PropTypes from "prop-types";
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

Input.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Input;
