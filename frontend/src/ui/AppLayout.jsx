import Header from "./Header";
import { Outlet } from "react-router-dom";
import Loader from "./Loader";
import Sidebar from "./Sidebar";

function AppLayout() {
  return (
    <div className="grid h-screen grid-cols-[17rem_1fr] grid-rows-[auto_1fr]">
      <Header />
      <Sidebar />
      <div className="overflow-scroll">
        <main className="max-w-3x mx-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default AppLayout;
