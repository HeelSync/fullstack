import supabase from "./supabase"
export async function getClasses() {
    const { data, error } = await supabase
    .from('classes')
    .select('*')
    if(error) throw new Error("Class data could not be retrieved!");

    return data;
}   


