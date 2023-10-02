import { useQueryClient } from '@tanstack/react-query'
import React, { useEffect, useState } from 'react'

const SearchResults = () => {
    const queryClient = useQueryClient();
    const [wordData, setWordData] = useState();

    const searchData = queryClient.getQueryData(['dictionary'])

    useEffect(()=>{
        if(queryClient.isFetching() <1 ){
            console.log(queryClient.getQueryData(['dictionary']));
        }
    },[queryClient.isFetching()])
  return (
    <div>SearchResults</div>
  )
}

export default SearchResults