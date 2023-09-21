import React, { useState } from 'react'
import {useQuery, useQueryClient} from '@tanstack/react-query'
import { fetchSearchDefinition } from '../utilities/apiHelper';

const SearchBar = () => {
    const [searchText, setSearchText] = useState('');
    const queryClient = useQueryClient();
    
    const handleInputChange = (event)=>{
        if(event.key === 'Enter'){
            event.preventDefault();
            setSearchText(searchText.trim());
            handleSearch()
        }
        setSearchText(event.target.value)
    }

    const handleSearch =()=>{
        queryClient.fetchQuery();
        const searchQuery = useQuery({
            queryKey: ["search"],
            queryFn: ()=> fetchSearchDefinition(searchText)
        })
    }
    return (
    <input type="text" placeholder='Search for any word...' onChange={(e)=>handleInputChange(e)} >
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18"><path fill="none" stroke="#A445ED" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m12.663 12.663 3.887 3.887M1 7.664a6.665 6.665 0 1 0 13.33 0 6.665 6.665 0 0 0-13.33 0Z"/></svg>
    </input>

  )
}

export default SearchBar