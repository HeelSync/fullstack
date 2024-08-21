import Logo from "./Logo"
import MainNav from "./MainNav"

function Sidebar() {
    return (
        <div className="bg-stone-200 px-10 py-8 flex flex-col
        border-r border-stone-400 row-span-full gap-12">
            <Logo />
            <MainNav />
        </div>
    )
}

export default Sidebar
