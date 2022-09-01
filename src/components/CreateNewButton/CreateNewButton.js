import PropTypes from "prop-types";

import { ReactComponent as CreateNew } from "../../icons/floating-action-button.svg";

import styles from "./CreateNewButton.module.scss";

const CreateNewButton = ({ onClick }) => {
  return (
    <div className={styles.container} onClick={onClick}>
      <CreateNew />
    </div>
  );
};

CreateNewButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default CreateNewButton;
