import React from "react";
import { SidebarInset, SidebarProvider } from "./ui/sidebar";
import { AppSidebar } from "./app-sidebar";
import Navbar from "./Navbar";
import { Toaster } from "./ui/sonner";

const Layout = ({ children }) => {
    return (
        <SidebarProvider>
            <AppSidebar />
            <SidebarInset>
                <Navbar />
                <main className="p-5">
                    <div className="flex item-end justify-between mb-7">
                        <h1 className="font-bold text-xl">Dashboard</h1>
                    </div>
                    {children}
                    <Toaster />
                </main>
            </SidebarInset>
        </SidebarProvider>
    );
};

export default Layout;
