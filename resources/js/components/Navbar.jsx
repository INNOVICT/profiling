import React from "react";
import { SidebarTrigger } from "./ui/sidebar";
import { NavUser } from "./nav-user";

const Navbar = () => {
    return (
        <header className="sticky z-10 bg-background/95 supports-[backdrop-filter]:bg-background/60 backdrop-blur top-0 flex shrink-0 items-center gap-2 border-b h-16 px-3">
            <SidebarTrigger />
            <div className="ml-auto">
                <NavUser isNavbar={true} />
            </div>
        </header>
    );
};

export default Navbar;
