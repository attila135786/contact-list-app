import { useCallback, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

import Header from "../main/Header/Header";
import Body from "../main/Body/Body";
import Cards from "../components/Cards";
import CreateNewButton from "../components/CreateNewButton";
import Modal from "../components/Modals/Modal";
import { AppContext } from "../store/AppContext";

const Contacts = () => {
  const { appState, setAppState } = useContext(AppContext);

  const navigate = useNavigate();
  const onClickNew = useCallback(() => {
    navigate(`add/${uuidv4()}`);
  }, []);

  const onDeleteClick = useCallback(() => {
    setAppState((prevState) => {
      const newPeople = [];
      for (let person of prevState.people) {
        if (person.id !== appState.deleteId) {
          newPeople.push(person);
        }
      }

      return {
        ...prevState,
        people: newPeople,
        modalOpen: null,
        deleteId: null,
      };
    });
  }, [appState]);

  const onCancelClick = useCallback(() => {
    setAppState((prevState) => ({
      ...prevState,
      modalOpen: null,
      deleteId: null,
    }));
  }, [appState]);

  return (
    <>
      <Header text="Contacts" />
      <Body>
        <Cards />
      </Body>
      <CreateNewButton onClick={onClickNew} />
      <Modal
        open={appState.modalOpen === "delete"}
        onCancelClick={onCancelClick}
        onDeleteClick={onDeleteClick}
      />
    </>
  );
};

export default Contacts;
