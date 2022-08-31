import { useCallback, useContext, useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";

import Header from "../main/Header/Header";
import Body from "../main/Body/Body";
import { AppContext, getEmptyContact } from "../store/AppContext";
import ContactSaveModal from "../components/ContactSaveModal";

const EditContact = () => {
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
    <>
      <Header text="Edit Contact" />
      <Body>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
            width: "100%",
          }}
        >
          <ContactSaveModal
            contact={contactBeingEdited}
            onSaveClick={onSaveClick}
            onCancelClick={onCancelClick}
          />
        </div>
      </Body>
    </>
  );
};
export default EditContact;
