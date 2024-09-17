import { useEffect, useRef } from "react";
import { useKey } from "./useKey";
function Search({ query, setQuery }) {
    const inputEl = useRef(null);

    useKey('Enter', function() {
        if(document.activeElement === inputEl.current) return;
        inputEl.current.focus();
        setQuery("");
    })

    useEffect(function() {
        function callback(e) {
            if(document.activeElement === inputEl.current) return;
            if(e.code === "Enter") {
                inputEl.current.focus();
                setQuery("");
            }
        }
        return () => document.addEventListener('keydown', callback);
    }, [setQuery])

    return (
        <input  
        type="text"
        placeholder="Search classes..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        ref={inputEl}
        />
    )
}

export default Search
