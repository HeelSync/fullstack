import { useEffect, useRef } from "react";
import { useKey } from "./useKey";
function Search({ query, setQuery }) {
    const inputEl = useRef(null);

    useKey('Enter', function () {
        if (document.activeElement === inputEl.current) return;
        if (inputEl.current) {
          inputEl.current.focus();  // Ensure inputEl.current is defined before focusing
          setQuery("");
        }
      });

    useEffect(function() {
        function callback(e) {
            if(document.activeElement === inputEl.current) return;
            if(e.code === "Enter" && inputEl.current) {
                inputEl.current.focus();
                setQuery("");
            }
        }
        document.addEventListener('keydown', callback);
        return () => document.removeEventListener('keydown', callback);
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
