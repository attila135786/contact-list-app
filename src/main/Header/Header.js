import PropTypes from "prop-types";

import styles from "./Header.module.scss";

const Header = ({ text = "Contacts" }) => {
  return <div className={styles.container}>{text}</div>;
};

Header.propTypes = {
  text: PropTypes.string, // this could be more abstract by using a renderComponent
};

export default Header;
