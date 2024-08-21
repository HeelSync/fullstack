import Header from "./Header";
import { Outlet, useNavigation } from "react-router-dom";
import Loader from "./Loader";
import Sidebar from "./Sidebar";

function AppLayout() {
    return (
        <div className="grid grid-cols-[18rem_1fr] grid-rows-[auto_1fr] h-screen">
            
            <Header />
            <Sidebar />
            <div className="overflow-scroll">
                <main className="max-w-3x mx-auto">
                    <Outlet />
                </main>
            </div>
            

        </div>
    )
}

export default AppLayout
