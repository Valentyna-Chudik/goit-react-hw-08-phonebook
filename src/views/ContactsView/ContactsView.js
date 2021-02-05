import Section from '../../components/Section/Section';
import Form from '../../components/Form/Form';
import Filter from '../../components/Filter/Filter';
import ContactsList from '../../components/ContactsList/ContactsList';
import styles from './ContactsView.module.css';

export default function ContactsView() {
  return (
    <div className={styles.container}>
      <Section title="Phonebook">
        <Form />
      </Section>
      <Section>
        <Filter />
        <ContactsList />
      </Section>
    </div>
  );
}
