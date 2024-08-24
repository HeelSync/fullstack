import LogoImg from "../assets/Logo-NoBG.png"
function Logo() {
    return (
        <div className="text-center">
            <img src={LogoImg} alt="HeelSync Logo" 
            className="h-10 w-48"/>
        </div>
    )
}

export default Logo
