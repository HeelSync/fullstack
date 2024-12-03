import Search from "./Search";
import { useState } from "react";
import Results from "./Results";
import Loader from "./Loader";
import useSupabaseData from "./useSupabaseData";

function SearchBar() {
    const [query, setQuery] = useState("")
    const { data: classes, isLoading, error } = useSupabaseData(query);
    return (
        <div>
            <Search query={query} setQuery={setQuery} />
            {isLoading && <Loader />}
            {error && <p>{error}</p>}
            <Results classes={classes} />
        </div>
    )
}

export default SearchBar
