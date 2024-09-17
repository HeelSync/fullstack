import { useState, useEffect } from "react"
import supabase from "../registration_data/supabase"

function useSupabaseData() {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    return (
        <div>
            
        </div>
    )
}

export default useSupabaseData
