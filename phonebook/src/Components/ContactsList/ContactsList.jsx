import ContactItem from "../ContactItem/ContactItem";

const ContactsList = ({ contacts, deleteOnClickButton }) => (
  <ol type="1">
    <ContactItem
      contacts={contacts}
      deleteOnClickButton={deleteOnClickButton}
    />
  </ol>
);

export default ContactsList;
