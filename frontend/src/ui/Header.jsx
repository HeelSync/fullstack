import { useState } from "react";
import { Link } from "react-router-dom";
import "../index.css"
function Header() {
    const [username, setUsername] = useState("Max")
    return (
        <>
       
        <header className="flex items-center justify-between bg-gradient-to-r from-sidebar-apurwa1 to-sidebar-apurwa2 uppercase px-4 py-3 shadow-header sm:px-6 font-pizza">
            <Link to="/" className="tracking-wider relative z-10 inline-block transition-all duration-250 ease-in-out">
                <span className="relative z-10 link-animated inline-block">UNC Chapel Hill</span>
            </Link>
            <Link to="/profile" className="tracking-wider">Welcome, {username}!</Link>
        </header>

         </>
    );

        
    
}

export default Header
