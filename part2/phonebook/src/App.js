import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'

const Filter = (props)=>{
  const { handleSearchCountries, searchCountries } = props

  return(<div>
          <label>filter shown with:
          <input name="search" onBlur={handleSearchCountries} />
          </label>
          <p>resultado:  {searchCountries}</p>
        </div>
      )
}


const App = (props) => {
  const [ searchCountries, setSearchCountries ] = useState('brasil')
  const [countries, setCountries] = useState('')
  useEffect(() => {
  console.log('effect')
  axios
    .get(`v3.1/name/${searchCountries}`)
    .then(response => {
      setCountries(response.data)
      // const { name } = countries;
      console.log('response: ', response.data);
    })
}, [])

  //Pesquisa de nomes
  const handleSearchCountries = (event) => {
    const search = event.target.value;
    setCountries(search)
    console.log('handleSearchCountries: ', search);
    let searchResult = countries.find(city => city.commom === search);
    if (searchResult) {
      let result = `Nome: ${searchResult.name}.`
      setSearchCountries(result)
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <h3>Search</h3>
      <Filter searchCountries={searchCountries}
        handleSearchCountries={handleSearchCountries}
         />
    </div>
  )
}

export default App;
