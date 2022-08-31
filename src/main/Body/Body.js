import PropTypes from "prop-types";

import styles from "./Body.module.scss";

const Body = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};

Body.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Body;
