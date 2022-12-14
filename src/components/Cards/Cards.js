import { useCallback, useContext } from "react";
import { useNavigate } from "react-router-dom";

import Card from "../Card";
import Modal from "../Modals/Modal";
import { AppContext } from "../../store/AppContext";

import styles from "./Cards.module.scss";

const Cards = () => {
  const { appState, setAppState } = useContext(AppContext);
  const navigate = useNavigate();
  const { people, openCard } = appState;

  const setOpenCard = useCallback(
    (cardId) => () => {
      setAppState((prevState) => {
        return {
          ...prevState,
          openCard: openCard === cardId ? null : cardId,
        };
      });
    },
    [openCard]
  );

  const onEditClick = useCallback(
    (id) => () => {
      navigate(`/edit/${id}`);
    },
    []
  );

  const onDeleteClick = useCallback(
    (id) => () => {
      setAppState((prevState) => {
        return { ...prevState, modalOpen: "delete", deleteId: id };
      });
    },
    []
  );

  return (
    <div className={styles.container}>
      {people.map((person) => (
        <Card
          firstName={person.firstName}
          lastName={person.lastName}
          phoneNumber={person.phoneNumber}
          email={person.email}
          open={openCard === person.id}
          setOpenCardWithId={setOpenCard(person.id)}
          key={person.id}
          onDeleteClick={onDeleteClick(person.id)}
          onEditClick={onEditClick(person.id)}
        />
      ))}
    </div>
  );
};

export default Cards;
