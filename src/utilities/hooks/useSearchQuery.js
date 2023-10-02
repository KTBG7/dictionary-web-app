import { useQuery, useQueryClient} from "@tanstack/react-query";
import { fetchSearchDefinition } from "../apiHelper";

export const useSearchQuery = (word) =>{
    const queryClient = useQueryClient();
    if(!word){
        queryClient.getQueryData(['dictionary']);
    }
    return useQuery(['dictionary', word], fetchSearchDefinition);
}