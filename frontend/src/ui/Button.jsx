import { Link } from "react-router-dom"
function Button({ children, disabled, to, type, onClick }) {

    const base = " text-sm bg-yellow-400 uppercase font-semibold text-stone-800 py-3 px-4 tracking-wide rounded-full hover:bg-yellow-300 transition-colors duration-300 focus:outline-non focus:ring focus:ring-yellow-300 focus:bg-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed sm:px-6 sm:py-4"
    const styles = {
        primary: base + "px-4 py-3 md:px-6 md:py06",
        small: base + "py-2 md:px-5 md:py-2.5",
        secondary: "text-sm px-4 py-3 md:px-6 md:py06bg-yellow-400 uppercase font-semibold text-stone-400 py-3 px-4 tracking-wide rounded-full hover:bg-stone-300 transition-colors duration-300 focus:outline-non focus:ring focus:ring-stone-200 focus:bg-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed ",
        round: base + "pix-25 py-1 md:px-3. md:py-2 text-sm"
        
    }
    if(to) return <Link to={to} className={styles[type]}>{children}</Link>

    if(onClick)
    return (
        <button disabled={disabled} onClick={onClick} className={styles[type]}>
            {children}
        </button>
    )

    return (
        <button disabled={disabled} onClick={onClick} className={styles[type]}>
            {children}
        </button>
    )
}

export default Button
