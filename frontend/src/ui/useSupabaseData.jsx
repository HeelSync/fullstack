import { useState, useEffect } from "react"
import supabase from "../registration_data/supabase"


function useSupabaseData(query) {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!query) {
            setData([]);
            return;
        }
    

    async function fetchData() {
        setIsLoading(true);
        try {
            const { data, error } = await supabase.from('benClasses').select("*").ilike("class", `%${query}%`)

            if(error) {
                throw new Error(error.message);
            }
            setData(data)
        } catch (error) {
            setError(error.message)
        } finally {
            setIsLoading(false);
        }
    }
    
    }, [query])

    return { data, isLoading, error }
}


export default useSupabaseData
