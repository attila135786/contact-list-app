import Header from "../main/Header/Header";
import Body from "../main/Body/Body";
import EditAddContact from "../components/EditAddContact";

const EditContact = () => {
  return (
    <>
      <Header text="Edit Contact" />
      <Body>
        <EditAddContact />
      </Body>
    </>
  );
};
export default EditContact;
