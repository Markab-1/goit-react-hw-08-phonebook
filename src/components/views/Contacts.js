import { connect } from 'react-redux';
import { Component } from 'react';
import Section from '../Section/Section';
import Form from '../Form/Form';
import Filter from '../Filter/Filter';
import ContactList from '../ContactList/ContactList';
import contactOperations from 'redux/contacts/contacts-operations';

class Contacts extends Component {
  componentDidMount() {
    this.props.fetchContacts();
  }

  render() {
    return (
      <div>
        <Section title="Phonebook">
          <Form />
        </Section>
        <Section title="Contacts">
          <Filter />
          <ContactList />
        </Section>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchContacts: () => dispatch(contactOperations.fetchContacts()),
});

export default connect(null, mapDispatchToProps)(Contacts);
