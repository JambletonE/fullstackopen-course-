
import { useState, useEffect } from 'react';

import Person from './components/Person';
import Search from './components/Search';
import Form from './components/Form';
import Notification from './components/Notification'; 
import phoneBookServices from './services/phoneBookServices'

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [search, setSearch] = useState('');  
  const [errorMessage, setErrorMessage] = useState(null)

  const generateUniqueId = () => {
    const timestamp = Date.now().toString(12); 
    const randomString = Math.random().toString(12).substring(2, 6); 
    return `${timestamp}-${randomString}`;
  };
  const getNameById = (id) => {
    const person = persons.find(person => person.id === id);
    return person ? person.name : "Person not found";
  };

  const getIdByName = (name) => {
    const person = persons.find(person => person.name.trim().toLowerCase() === name.trim().toLowerCase());
    return person ? person.id : null;
  };

  const getPersonByName = (name) => {
    const person = persons.find(person => person.name.trim().toLowerCase() === name.trim().toLowerCase());
    return person ? person : null;
  };

  useEffect(() =>{
  phoneBookServices.getAll().then(data => {
    setPersons(data)})}, []);
 
    const addPerson = (event) => {
      event.preventDefault();
    
      const personObject = {

        id: String(generateUniqueId()),
        name: newName,
        number: newNumber,
      };
    
      if (persons.some(person => person.name.trim().toLowerCase() === personObject.name.trim().toLowerCase())) {
        if (window.confirm(personObject.name + " is already added to phonebook, update their number?")){
          const foundPerson = getPersonByName(personObject.name.trim().toLowerCase());
 
          phoneBookServices.replace(foundPerson, personObject).then(updatedPerson => {
            setPersons(persons.map(person => 
              person.id !== foundPerson.id ? person : updatedPerson
            ));
            setErrorMessage(
              `The number for entry: ${personObject.name}, has been updated`
            )
            setTimeout(() => {
              setErrorMessage(null)
            }, 2000)
          
          })
          .catch(error => {
            console.error("Error occurred while updating person:", error);
            setErrorMessage(
              `Information on ${personObject.name} has been removed from the server`
            );
            setTimeout(() => {
              setErrorMessage(null);
            }, 3000);
            setPersons(persons.filter(person => person.id !== foundPerson.id));
          });
        }
      }
      else {
    
        phoneBookServices.create(personObject)
          .then(response => {
            if (response && response.id) { 
              setPersons(persons.concat(response));
              setNewName('');
              setNewNumber('');
              console.log("Hello from add")
              setErrorMessage(
                `'${personObject.name}' has been added to the phonebook`
              )
              setTimeout(() => {
                setErrorMessage(null)
              }, 1000)
            } 
            else {
            }
          })
          .catch(error => {
            console.error("Error occurred while creating person:", error);

          });
    
      }
    };
    


  const deletePerson = (id) => {
    if (window.confirm("Delete: " + getNameById(id) + "?")) {
   phoneBookServices.removeOne(id)
    const updatedPersons = persons.filter(person => person.id !== id);
    }
    }

  const handlePersonChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const filteredPersons = search
    ? persons.filter(person => person.name.toLowerCase().includes(search.toLowerCase()))
    : persons;

  return (
    <div>
      <h1>Phonebook</h1>
      <Notification message={errorMessage} />

      <Search search={search} setSearch={setSearch} />
      <Form 
        addPerson={addPerson}
        newName={newName}
        newNumber={newNumber}
        handlePersonChange={handlePersonChange}
        handleNumberChange={handleNumberChange}
      />
      <h2>Numbers</h2>
      <ul>
        {filteredPersons.map(person => (
          <Person key={person.id} person={person} onDelete={deletePerson} />
        ))}
      </ul>
    </div>
  );
};

export default App;
