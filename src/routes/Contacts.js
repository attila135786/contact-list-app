import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

import Header from "../main/Header/Header";
import Body from "../main/Body/Body";
import Cards from "../components/Cards";

import { ReactComponent as CreateNew } from "../icons/floating-action-button.svg";

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
      <div
        style={{ position: "absolute", bottom: 0, right: 0, cursor: "pointer" }}
        onClick={onClickNew}
      >
        <CreateNew />
      </div>
    </>
  );
};

export default Contacts;
