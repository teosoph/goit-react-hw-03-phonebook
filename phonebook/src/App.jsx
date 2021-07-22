import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";

import Section from "./Components/Section/Section";
import Form from "./Components/Form/Form";
import FilterInput from "./Components/FilterInput/FilterInput";
import ContactsList from "./Components/ContactsList/ContactsList";

import primaryContacts from "./Data/primaryContacts.json";

export default class App extends Component {
  state = {
    contacts: primaryContacts,
    filter: "",
    name: "",
    number: "",
  };

  // Add contact function
  addContact = ({ name, number }) => {
    const { contacts } = this.state;
    const contact = {
      id: uuidv4(),
      name,
      number,
    };
    // console.log(contact);

    contacts.some(
      ({ name }) => name.toLowerCase() === contact.name.toLowerCase()
    )
      ? alert(`${name} is already in contacts`)
      : contacts.some(({ number }) => number === contact.number)
      ? alert(`${number} is already in contacts`)
      : this.setState(({ contacts }) => ({ contacts: [...contacts, contact] }));
  };

  // Filtering input function
  filteringInput = (event) => {
    this.setState({ filter: event.target.value });
    console.log({ filter: event.target.value });
  };

  // Change contact list by filter function
  changeContactsByFilter = () => {
    const { contacts, filter } = this.state;
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  // Function of Delete contact by clicking on button
  deleteOnClickButton = (id) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((contact) => contact.id !== id),
    }));
  };

  render() {
    const { filter } = this.state;
    const contacts = this.changeContactsByFilter();

    return (
      <section>
        <Section title={"Phonebook"}>
          <Form onSubmit={this.addContact} />
        </Section>

        <Section title={"Filter contacts by name"}>
          <FilterInput value={filter} onChange={this.filteringInput} />
        </Section>

        <Section title={"Contacts"}>
          <ContactsList
            contacts={contacts}
            deleteOnClickButton={this.deleteOnClickButton}
          />
        </Section>
      </section>
    );
  }
}
