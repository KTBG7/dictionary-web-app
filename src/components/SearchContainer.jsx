import React, { useState, useEffect } from 'react'
import {useQuery} from '@tanstack/react-query'
import { fetchSearchDefinition } from '../utilities/apiHelper';
import SearchResults from './SearchResults'

const SearchContainer = () => {
  const [searchText, setSearchText] = useState('');
  const [triggerSearch, setTriggerSearch] = useState(false)
  const [submissionError, setSubmissionError] = useState(false);
  const [searchResult, setSearchResult] = useState({data: []});
  
  const {data} = useQuery({
      queryKey: ["definition"],
      queryFn: () => fetchSearchDefinition(searchText),
      enabled: !!triggerSearch
  })
  
  const handleInputChange = (event)=>{
          setTriggerSearch(false);
          if(event.target.value.length>0){
              setSubmissionError(false);
          }
          setSearchText(event.target.value);
  }

  const handleSubmit = (event)=>{
      if(searchText.length <1){
          setSubmissionError(true);
      }
      if(event.key === "Enter"){
          setSearchText(event.target.value)
          setTriggerSearch(true);
      }
  }
  useEffect(() => {
      if(data){
        console.log(data)
          setSearchResult(data);
          setTriggerSearch(false);
      }

  }, [data]);

  return (
    <div className='flex flex-col w-full gap-11'> 
        <div className='flex w-full bg-search rounded-3xl dark:bg-darkSearch flex-grow px-5 h-16 items-center justify-between'>
            <input type="text" className='bg-search w-full dark:bg-darkSearch font-bold border-none focus:ring-0 focus:outline-none text-primary dark:text-light' placeholder='Search for any word...' onChange={(e)=>handleInputChange(e)} onKeyDown={(e) =>handleSubmit(e)} />
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18"><path fill="none" stroke="#A445ED" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m12.663 12.663 3.887 3.887M1 7.664a6.665 6.665 0 1 0 13.33 0 6.665 6.665 0 0 0-13.33 0Z"/></svg>
        </div>
        <SearchResults searchResult={searchResult} />
    </div>
  )
}

export default SearchContainer