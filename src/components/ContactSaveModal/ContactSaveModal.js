import { useState } from "react";

import Input from "../Input";
import Avatar from "../Avatar";

import styles from "./ContactSaveModal.module.scss";
import ModalButton from "../ModalButton";

const ContactSaveModal = ({ contact, onSaveClick, onCancelClick }) => {
  const [contactToSave, setContactToSave] = useState(contact);
  const containsEmptyInfo =
    !contactToSave?.firstName[0] || !contactToSave?.lastName[0];

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
      <form onSubmit={() => console.log("submit")}>
        <div className={styles.inputsContainer}>
          <Input
            label="First Name"
            value={contactToSave.firstName}
            onChange={(event) => {
              setContactToSave((prevContact) => ({
                ...prevContact,
                firstName: event.target.value,
              }));
            }}
          />
          <Input
            label="Last Name"
            value={contactToSave.lastName}
            onChange={(event) => {
              setContactToSave((prevContact) => ({
                ...prevContact,
                lastName: event.target.value,
              }));
            }}
          />
          <Input
            label="Phone Number"
            value={contactToSave.phoneNumber}
            onChange={(event) => {
              setContactToSave((prevContact) => ({
                ...prevContact,
                phoneNumber: event.target.value,
              }));
            }}
          />
          <Input
            label="Email Address"
            value={contactToSave.email}
            onChange={(event) => {
              setContactToSave((prevContact) => ({
                ...prevContact,
                email: event.target.value,
              }));
            }}
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

export default ContactSaveModal;
