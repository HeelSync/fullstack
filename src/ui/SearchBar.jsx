import Search from "./Search";
import { useState } from "react";

function SearchBar() {
    const [query, setQuery] = useState("")
    return (
        <div>
            <Search query={query} setQuery={setQuery} />
            <Results classes={classes} />
        </div>
    )
}

export default SearchBar
