import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import s from './Form.module.css';
import contactsOperations from '../../redux/contacts/contacts-operations';

class Form extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name, number } = this.state;
    const newObj = { name: name, number: number };
    this.props.onSubmit(newObj);
    this.resetForm();
    console.log('newObj= ', newObj);
  };

  resetForm = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className={s.input__thumb}>
        Name
        <input
          type="text"
          name="name"
          value={this.state.name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={this.handleChange}
          className={s.input}
        />
        Phone number
        <input
          type="tel"
          name="number"
          value={this.state.number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={this.handleChange}
          className={s.input}
        />
        <button type="submit" className={s.btn}>
          Add contact
        </button>
      </form>
    );
  }
}

Form.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
};

const mapDispatchToProps = dispatch => ({
  onSubmit: ({ name, number }) =>
    dispatch(contactsOperations.addContact({ name, number })),
});

export default connect(null, mapDispatchToProps)(Form);
