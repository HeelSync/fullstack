import { NavLink } from "react-router-dom"
import LogoImg from "../assets/Logo-NoBG.png"
function Logo() {
    return (
        <NavLink to="/dashboard" className="px-1">
            <div className="text-center">
                <img src={LogoImg} alt="HeelSync Logo" 
                className="h-10 w-48"/>
            </div>  
        </NavLink>
        
    )
}

export default Logo
