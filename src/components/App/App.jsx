import ContactForm from '../ContactForm/ContactForm'
import SearchBox from '../SearchBox/SearchBox'
import ContactList from '../ContactList/ContactList'
import { useState } from 'react'
import css from './App.module.css'
import contactsData from '../../contacts.json'
import { useDispatch, useSelector } from 'react-redux'
import { selectContacts } from '../../redux/contactsSlice'


export default function App() {

    const dispatch = useDispatch()
    const value = useSelector(selectContacts);

    const [contacts, setContacts] = useState(contactsData)
    const [searching, setSearching] = useState("");

    const deleteContact = (contactId) => {
        setContacts((prevContacts) => {
            return prevContacts.filter((contact) => contact.id !== contactId);
    });
    }

    const visibleContacts = contacts.filter((contact) => contact.name.toLowerCase().includes(searching.toLowerCase()))

    return <div className={css.container}>
  <h1>Phonebook</h1>
        <ContactForm />
        <SearchBox value={searching} onSearching={setSearching} />
        <ContactList contacts={visibleContacts} deleteContact={deleteContact} />
</div>
}