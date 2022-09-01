import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

import Header from "../main/Header/Header";
import Body from "../main/Body/Body";
import Cards from "../components/Cards";
import CreateNewButton from "../components/CreateNewButton";

const Contacts = () => {
  const navigate = useNavigate();
  const onClickNew = useCallback(() => {
    navigate(`add/${uuidv4()}`);
  }, []);

  return (
    <>
      <Header text="Contacts" />
      <Body>
        <Cards />
      </Body>
      <CreateNewButton onClick={onClickNew} />
    </>
  );
};

export default Contacts;
