const Search = ({ search, setSearch }) => {
 
      return(

        <div>
        <h2>Search</h2>
        <input
          type="text"
          value={search}
          onChange={({ target }) => setSearch(target.value)}
          placeholder="Search by name"
        />
      </div>


      )   
}

export default Search