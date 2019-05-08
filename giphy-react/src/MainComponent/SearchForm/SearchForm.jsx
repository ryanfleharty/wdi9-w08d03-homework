import React, { useState } from 'react';

function SearchForm(props){

  const [search,setSearch] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    props.createGifsArray(search)
    setSearch('')
  }

  const handleChange = (e) => {
    setSearch(e.target.value)
  }

  return(
    <form onSubmit={handleSubmit}>
      <input onChange={handleChange} type="text" value={search} placeholder="wich gif u want?" />
      <input type="submit" />
    </form>
  )
}

export default SearchForm
