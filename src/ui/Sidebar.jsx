import Logo from "./Logo"
import MainNav from "./MainNav"

function Sidebar() {
    return (
        <div className="bg-gradient-to-t from-sidebar-apurwa2 to-sidebar-apurwa1 px-10 py-8 flex flex-col
         row-span-full gap-16 shadow-bar">
            <Logo />
            <MainNav className=""/>
        </div>
    )
}

export default Sidebar
