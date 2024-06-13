import ContactForm from '../ContactForm/ContactForm'
import SearchBox from '../SearchBox/SearchBox'
import ContactList from '../ContactList/ContactList'
import { useState, useEffect } from 'react'
import { nanoid } from 'nanoid'
import css from './App.module.css'

export default function App() {
    const data = () => {
        const loadedContacts = [];
            for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            if (key.startsWith('contact-')) {
                const contact = JSON.parse(localStorage.getItem(key));
                loadedContacts.push(contact);
            }
          }
          if (loadedContacts.length !== 0) {
                return loadedContacts
          }
        return [
  {id: "id-1", name: "Rosie Simpson", number: "459-12-56"},
  {id: "id-2", name: "Hermione Kline", number: "443-89-12"},
  {id: "id-3", name: "Eden Clements", number: "645-17-79"},
  {id: "id-4", name: "Annie Copeland", number: "227-91-26"},
    ]  
    }
    const [contacts, setContacts] = useState(data)
    const [searching, setSearching] = useState("");

        useEffect(() => {
            contacts.map((contact) => {
                localStorage.setItem(`contact-${contact.id}`, JSON.stringify(contact))
        })
        }, [contacts]);
    
    
    const addContact = (newContact) => {
        setContacts((prevContacts) => {
            return [...prevContacts, {
                id: nanoid(),
                name: newContact.name,
                number: newContact.number
            }
            ]
        })   
    }
    const deleteContact = (contactId) => {
        localStorage.removeItem(`contact-${contactId}`)
        setContacts((prevContacts) => {
            return prevContacts.filter((contact) => contact.id !== contactId);
    });
    }
    const visibleContacts = contacts.filter((contact) => contact.name.toLowerCase().includes(searching.toLowerCase()))
    return <div className={css.container}>
  <h1>Phonebook</h1>
        <ContactForm addContact={addContact} />
        <SearchBox value={searching} onSearching={setSearching} />
        <ContactList contacts={visibleContacts} deleteContact={deleteContact} />
</div>
}