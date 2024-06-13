import ContactForm from '../ContactForm/ContactForm'
import SearchBox from '../SearchBox/SearchBox'
import ContactList from '../ContactList/ContactList'
import css from './App.module.css'
// import contactsData from '../../contacts.json'
// import { useDispatch, useSelector } from 'react-redux'
// import { selectContacts } from '../../redux/contactsSlice'


export default function App() {

    // const dispatch = useDispatch()
    // const value = useSelector(selectContacts);

    return <div className={css.container}>
  <h1>Phonebook</h1>
        <ContactForm />
        <SearchBox />
        <ContactList/>
</div>
}