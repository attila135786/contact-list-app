import { useMemo } from "react";
import PropTypes from "prop-types";

import styles from "./CardButton.module.scss";

const CardButton = ({
  backgroundColor = "#F3F5FF",
  color = "black",
  icon = null,
  text,
  onClick,
}) => {
  const overrideStyles = useMemo(() => {
    return { backgroundColor, color };
  }, [backgroundColor, color]);

  return (
    <button className={styles.button} style={overrideStyles} onClick={onClick}>
      {icon && <div className={styles.iconContainer}>{icon}</div>}
      <div>{text}</div>
    </button>
  );
};

CardButton.propTypes = {
  text: PropTypes.string.isRequired,
  icon: PropTypes.element,
  onClick: PropTypes.func.isRequired,
  backgroundColor: PropTypes.string,
  color: PropTypes.string,
};

export default CardButton;
