import React from 'react'
import SearchBar from '../components/SearchBar'
import SearchResults from './SearchResults'

const SearchContainer = () => {
  return (
    <div className='flex flex-col w-full'>
        <SearchBar />
        <SearchResults />
    </div>
  )
}

export default SearchContainer