import { useState } from "react";
import { Link } from "react-router-dom";
function Header() {
    const [username, setUsername] = useState("Max")
    return (
        <header className="flex items-center justify-between bg-gradient-to-r from-sidebar-apurwa1 to-sidebar-apurwa2
         uppercase px-4 py-3 
         shadow-header sm:px-6 font-pizza">
            <Link to="/" className="tracking-wider">UNC Chapel Hill</Link>  
            <p className="tracking-wider">Welcome, {username}!</p>
        </header>

        
    )
}

export default Header
