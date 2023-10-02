import React from 'react'

const SearchResults = ({searchResult}) => {
  return (
    <ul>
      {searchResult ? 
      searchResult.data.map((definition, idx)=>{
        return(
          <li key={idx}>{definition.word}</li>
        )
      }): null
    }
    </ul>
  )
}

export default SearchResults