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

export default ModalButton;
