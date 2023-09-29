import React, { useState, useEffect } from 'react'
import {useQuery} from '@tanstack/react-query'
import { fetchSearchDefinition } from '../utilities/apiHelper';

const SearchBar = () => {
    const [searchText, setSearchText] = useState('');
    const [triggerSearch, setTriggerSearch] = useState(false);
    
    const {data, isFetching, isError} = useQuery({
        queryKey: ["definition"],
        queryFn: () => fetchSearchDefinition(searchText),
        enabled: !!triggerSearch
    })
    
    const handleInputChange = (event)=>{
            setTriggerSearch(false);
            setSearchText(event.target.value);
            console.log('initial', event.target.value);
    }

    const handleSubmit = (event)=>{
        if(event.key === "Enter"){
            console.log(event.target.value)
            setSearchText(event.target.value)
            setTriggerSearch(true);
        }
    }
    useEffect(() => {
        console.log(data, isFetching, triggerSearch)
        if(data){
            setTriggerSearch(false);
        }

    }, [data, isFetching, triggerSearch]);
    return (
        <div className='flex w-full bg-search rounded-3xl flex-grow px-5 h-16 items-center justify-between'>
            <input type="text" className='bg-search w-full dark:bg-dark border-none focus:ring-0 focus:outline-none text-primary dark:text-white' placeholder='Search for any word...' onChange={(e)=>handleInputChange(e)} onKeyDown={(e) =>handleSubmit(e)} />
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18"><path fill="none" stroke="#A445ED" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m12.663 12.663 3.887 3.887M1 7.664a6.665 6.665 0 1 0 13.33 0 6.665 6.665 0 0 0-13.33 0Z"/></svg>
        </div>
  )
}

export default SearchBar