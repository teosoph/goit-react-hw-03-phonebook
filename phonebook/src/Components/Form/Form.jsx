import React, { Component } from "react";
import styles from "../../App.css";

class Form extends Component {
  state = {
    name: "",
    number: "",
  };

  // Input handler function
  inputHandler = (event) => {
    this.setState({ [event.target.name]: event.target.value });
    // console.log(event.target.name, event.target.value);
    // console.log(this.state);
  };

  //Submit handler function
  submitHandler = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state);
    // console.log(this.state);

    this.cleanInput();
  };

  // Cleaning input function
  cleanInput = () => {
    this.setState({
      name: "",
      number: "",
    });
  };

  render() {
    const { name, number } = this.state;
    // console.log(name, number);

    return (
      <form className={styles.form} onSubmit={this.submitHandler}>
        <label>
          Name
          <input
            name="name"
            value={name}
            onChange={this.inputHandler}
            type="text"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
          />
        </label>
        <label>
          Number
          <input
            name="number"
            value={number}
            onChange={this.inputHandler}
            type="tel"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
          />
        </label>

        <button type="submit">Add contact</button>
      </form>
    );
  }
}

export default Form;
