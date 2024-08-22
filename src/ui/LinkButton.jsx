import { Link, useNavigate } from "react-router-dom"

function LinkButton({ children, to }) {
    
    const navigate = useNavigate()
    if(to==='-1') return <button className="text-sm text-blue-500 
      hover:text-blue-600 hover:underline" onClick={() => navigate(-1)}>{children}</button>
    return (
        <Link target="_blank" to={to} className="text-2xl text-stone-800 text-center border-solid border-2 border-carolina-blue
      py-20 rounded-md transition-all duration-250 ease-in-out hover:text-transparent"><span className=" inline-block">{children}</span></Link>
    )
}

export default LinkButton
