import Header from "@/components/Header";
import Sidenav from "@/components/Sidenav";
import { Outlet } from "react-router";

const MainLayout = () => {
    return (
        <div className="grid grid-rows-[auto_1fr] grid-cols-[200px_1fr] h-screen">
            <Sidenav />
            <Header />
            <main className="row-start-2 col-start-2 p-4 h-full">
                <Outlet />
            </main>
        </div>
    );
};

export default MainLayout;
