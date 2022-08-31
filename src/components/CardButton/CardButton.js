import { useMemo } from "react";

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

export default CardButton;
