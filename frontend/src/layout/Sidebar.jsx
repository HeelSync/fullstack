import Logo from "../ui/Logo";
import MainNav from "../ui/MainNav";

function Sidebar() {
  return (
    <div className="row-span-full flex flex-col gap-16 bg-gradient-to-t from-sidebar-apurwa2 to-sidebar-apurwa1 px-10 py-8 shadow-bar">
      <Logo />
      <MainNav className="" />
    </div>
  );
}

export default Sidebar;
