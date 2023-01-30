import person from '.';
import axios from 'axios';
import { useState } from 'react';

const [persons, setpersons] = useState([]);
 function personList() {
  
    useEffect(() => {
      axios.get('http://localhost:8091/api/person')
        .then(response => {
          setpersons(response.data);
        })
        .catch(error => {
          console.error(error);
        });
    }, []);
    
    return (
        <ul>
          {persons.map((person) => (
            <person key={person.id} person={person} />
          ))}
        </ul>
      );

}



export default personList