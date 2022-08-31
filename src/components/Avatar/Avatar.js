import React from "react";
import PropTypes from "prop-types";
import { ReactComponent as PersonIcon } from "../../icons/person.svg";

import styles from "./Avatar.module.scss";

const Avatar = ({
  text,
  diameter = 40,
  renderProp = () => {
    return <PersonIcon />;
  },
}) => {
  return (
    <div
      className={styles.container}
      style={{
        width: diameter,
        height: diameter,
      }}
    >
      {text ? text : renderProp()}
    </div>
  );
};

Avatar.propTypes = {
  text: PropTypes.string,
  renderProp: PropTypes.any,
  diameter: PropTypes.number,
};

export default Avatar;
