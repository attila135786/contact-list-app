import Header from "../main/Header/Header";
import Body from "../main/Body/Body";
import EditAddContact from "../components/EditAddContact";

const AddContact = () => {
  return (
    <>
      <Header text="Add Contact" />
      <Body>
        <EditAddContact />
      </Body>
    </>
  );
};
export default AddContact;
