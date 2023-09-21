import axios from "axios"

export const fetchSearchDefinition = (word)=>{
    const response = axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
    return response;
}