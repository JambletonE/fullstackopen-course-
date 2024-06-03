const Form = ({addPerson, newName, newNumber, handlePersonChange, handleNumberChange }) => {
 
      return(
        <div>
        <h2>Add New Person</h2>
        <form onSubmit={addPerson}>
          <div>
            name: <input value={newName} onChange={handlePersonChange} />
          </div>
          <div>
            number: <input value={newNumber} onChange={handleNumberChange} />
          </div>
          <div>
            <button type="submit">add</button>
          </div>
        </form>
        </div>

      )   
}

export default Form