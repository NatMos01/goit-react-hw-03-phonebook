import { Component } from 'react';
import css from './ContactForm.module.css';
import { nanoid } from 'nanoid';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  onSubmitForm = event => {
    event.preventDefault();

    const form = event.currentTarget;
    const { name, number } = form.elements;

    this.props.addNewContact(name.value, number.value);
    this.resetForm();
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  resetForm = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form action="" onSubmit={this.onSubmitForm} className={css.formContact}>
        <label className={css.formContactLable} htmlFor={nanoid()}>
          Name
          <input
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
            className={css.inputFormContact}
            required
          />
        </label>
        <label className={css.formContactLable} htmlFor={nanoid()}>
          Number
          <input
            type="tel"
            name="number"
            value={number}
            onChange={this.handleChange}
            className={css.inputFormContact}
            required
          />
        </label>

        <button className={css.addContactBtn} type="submit">
          add contact
        </button>
      </form>
    );
  }
}