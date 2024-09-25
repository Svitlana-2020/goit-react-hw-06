import css from "../components/ContactList.module.css";
import Contacts from "./Contacts";
import { useSelector } from 'react-redux';

const ContactList = () => {
    const listContacts = useSelector((state) => state.contacts.contacts);
    const filter = useSelector((state) => state.filters.status); 
    
console.log(listContacts)

const filteredContact = listContacts.filter((contact) => contact.username.toLowerCase().includes(filter.toLowerCase()));

    return (
      <ul className={css.list}>
        {filteredContact.map((contact) => (
          <li key={contact.id} className={css.listItem}>
            <Contacts contact={contact}  />
          </li>
        ))}
      </ul>
    );
  };

  export default ContactList;