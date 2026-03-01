import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const Layout = () => {
    return (
        <div className="flex min-h-screen bg-[linear-gradient(135deg,#020617_0%,#0f172a_100%)] md:flex-row flex-col">
            <Sidebar />
            <main className="flex-1 p-6 md:p-10 overflow-y-auto bg-[linear-gradient(135deg,#020617_0%,#0f172a_100%)]">
                <Outlet />
            </main>
        </div>
    );
};

export default Layout;
