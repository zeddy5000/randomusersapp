import React from 'react'

const SearchBar = () => {
  return (
    <div className='search_wrapper'>
          <form className='form-items'  >
        <input type='submit' value='Search' className='search-btn'></input>
          <input className='search-bar-input' placeholder='enter username' type='text'/>
        
        </form>
    </div>
  )
}

export default SearchBar