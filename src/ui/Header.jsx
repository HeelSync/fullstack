import { Link } from "react-router-dom";
function Header() {
    return (
        <header className="flex items-center justify-between bg-carolina-tarheelblue uppercase px-4 py-3 border-b
         border-stone-200 sm:px-6 font-pizza">
            <Link to="/" className="tracking-widest">HeelSync</Link>  

        </header>

        
    )
}

export default Header
