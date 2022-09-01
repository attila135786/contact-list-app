import PropTypes from "prop-types";

import styles from "./ModalButton.module.scss";

const ModalButton = ({
  text,
  backgroundColor = "#009706",
  color = "white",
  onClick,
}) => {
  return (
    <button
      className={styles.button}
      onClick={onClick}
      style={{ backgroundColor, color }}
    >
      {text}
    </button>
  );
};

ModalButton.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  backgroundColor: PropTypes.string,
  color: PropTypes.string,
};

export default ModalButton;
