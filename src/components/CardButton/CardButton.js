import { useMemo } from "react";
import PropTypes from "prop-types";

import styles from "./CardButton.module.scss";

const CardButton = ({
  backgroundColor = "#F3F5FF",
  color = "black",
  icon,
  text,
  onClick,
}) => {
  const overrideStyles = useMemo(() => {
    return { backgroundColor, color };
  }, [backgroundColor, color]);

  return (
    <button className={styles.button} style={overrideStyles} onClick={onClick}>
      <div className={styles.iconContainer}>{icon}</div>
      <div>{text}</div>
    </button>
  );
};

CardButton.propTypes = {
  icon: PropTypes.element.isRequired,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  backgroundColor: PropTypes.string,
  color: PropTypes.string,
};

export default CardButton;
