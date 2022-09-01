import { useCallback, useState } from "react";
import PropTypes from "prop-types";

import Input from "../Input";
import Avatar from "../Avatar";
import ModalButton from "../ModalButton";

import styles from "./ContactSaveModal.module.scss";

const ContactSaveModal = ({ contact, onSaveClick, onCancelClick }) => {
  const [contactToSave, setContactToSave] = useState(contact);
  const containsEmptyInfo =
    !contactToSave?.firstName[0] || !contactToSave?.lastName[0];

  const onChangeFirstName = useCallback((event) => {
    setContactToSave((prevContact) => ({
      ...prevContact,
      firstName: event.target.value,
    }));
  }, []);

  const onChangeLastName = useCallback((event) => {
    setContactToSave((prevContact) => ({
      ...prevContact,
      lastName: event.target.value,
    }));
  }, []);

  const onChangePhoneNumber = useCallback((event) => {
    setContactToSave((prevContact) => ({
      ...prevContact,
      phoneNumber: event.target.value,
    }));
  }, []);

  const onChangeEmail = useCallback((event) => {
    setContactToSave((prevContact) => ({
      ...prevContact,
      email: event.target.value,
    }));
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.avatarContainer}>
        <Avatar
          text={
            containsEmptyInfo
              ? null
              : `${contactToSave.firstName[0]} ${contactToSave.lastName[0]}`
          }
          diameter={75}
        />
      </div>
      <form>
        <div className={styles.inputsContainer}>
          <Input
            label="First Name"
            value={contactToSave.firstName}
            onChange={onChangeFirstName}
          />
          <Input
            label="Last Name"
            value={contactToSave.lastName}
            onChange={onChangeLastName}
          />
          <Input
            label="Phone Number"
            value={contactToSave.phoneNumber}
            onChange={onChangePhoneNumber}
          />
          <Input
            label="Email Address"
            value={contactToSave.email}
            onChange={onChangeEmail}
          />
        </div>
        <div className={styles.buttonsContainer}>
          <ModalButton onClick={onSaveClick(contactToSave)} text="SAVE" />
          <ModalButton
            onClick={onCancelClick}
            text="CANCEL"
            backgroundColor="white"
            color="#1D1D20"
          />
        </div>
      </form>
    </div>
  );
};

ContactSaveModal.propTypes = {
  contact: PropTypes.object.isRequired,
  onSaveClick: PropTypes.func.isRequired,
  onCancelClick: PropTypes.func.isRequired,
};

export default ContactSaveModal;
