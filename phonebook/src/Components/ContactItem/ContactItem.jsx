const ContactItem = ({ contacts, deleteOnClickButton }) =>
  contacts.map(({ id, name, number }) => {
    return (
      <li key={id}>
        {name}: {number}
        <button type="button" onClick={() => deleteOnClickButton(id)}>
          Delete
        </button>
      </li>
    );
  });

export default ContactItem;
