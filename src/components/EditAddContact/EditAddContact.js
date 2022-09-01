import { useNavigate, useParams } from "react-router-dom";
import { useCallback, useContext, useMemo } from "react";

import { AppContext, getEmptyContact } from "../../store/AppContext";
import ContactSaveModal from "../ContactSaveModal";

import styles from "./EditAddContact.module.scss";

const EditAddContact = () => {
  const params = useParams();
  const navigate = useNavigate();

  const { appState, setAppState } = useContext(AppContext);

  const contactBeingEdited = useMemo(
    () =>
      appState.people.find((contact) => {
        return contact.id === params.id;
      }) || { ...getEmptyContact(), id: params.id },
    [appState.people, params.id]
  );

  const onSaveClick = useCallback(
    (contactToSave) => () => {
      setAppState((prevState) => {
        const isNewItem = !prevState.people.find(
          (contact) => contact.id === contactToSave.id
        );

        return {
          ...prevState,
          people: isNewItem
            ? [contactToSave, ...prevState.people]
            : prevState.people.map((contact) => {
                return contact.id === contactToSave.id
                  ? contactToSave
                  : contact;
              }),
        };
      });

      navigate("/");
    },
    [contactBeingEdited, setAppState]
  );

  const onCancelClick = useCallback(() => {
    navigate("/");
  }, []);

  return (
    <div className={styles.container}>
      <ContactSaveModal
        contact={contactBeingEdited}
        onSaveClick={onSaveClick}
        onCancelClick={onCancelClick}
      />
    </div>
  );
};

export default EditAddContact;
