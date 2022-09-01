import PropTypes from "prop-types";

import styles from "./Modal.module.scss";
import CardButton from "../../CardButton";

const Modal = ({ open = false, onDeleteClick, onCancelClick }) => {
  return (
    open && (
      <div className={styles.modalWrapper}>
        <div className={styles.container}>
          <div className={styles.textContainer}>
            <div className={styles.modalText}>Delete Contact</div>
            <div className={styles.modalSubText}>
              Would You Like To Delete This Contact?
            </div>
          </div>
          <div className={styles.buttonContainer}>
            <CardButton text="CANCEL" onClick={onCancelClick} />
            <CardButton
              text="DELETE"
              onClick={onDeleteClick}
              backgroundColor="#FFF3F3"
              color="red"
            />
          </div>
        </div>
      </div>
    )
  );
};

Modal.propTypes = {
  onDeleteClick: PropTypes.func.isRequired,
  onCancelClick: PropTypes.func.isRequired,
  open: PropTypes.bool,
};

export default Modal;
