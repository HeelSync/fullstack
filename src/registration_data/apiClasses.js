import supabase from "./supabase"
export async function getClasses() {
    
        const { data, error } = await supabase
        .from('benClasses')
        .select('*')
        if(error) throw new Error("HELLO!!! Class data could not be retrieved!");
    
        return data;
    
    
}   


