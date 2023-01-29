import Contact from './';
import axios from 'axios';
import { useState } from 'react';

const [contacts, setContacts] = useState([]);
 function ContactList() {
  
    useEffect(() => {
      axios.get('https://my-api.com/contacts')
        .then(response => {
          setContacts(response.data);
        })
        .catch(error => {
          console.error(error);
        });
    }, []);
    
    return (
        <ul>
          {contacts.map((contact) => (
            <Contact key={contact.id} contact={contact} />
          ))}
        </ul>
      );

}



export default ContactList