"use client";

import {
    BadgeCheck,
    Bell,
    ChevronsUpDown,
    CreditCard,
    LogOut,
    Sparkles,
    UserIcon,
} from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    useSidebar,
} from "@/components/ui/sidebar";
import { usePage, Link } from "@inertiajs/react";
export function NavUser({ isNavbar }) {
    const { isMobile } = useSidebar();

    const { auth } = usePage().props;

    // Pastikan Anda memeriksa apakah objek user ada (belum login = null)
    const userName = auth.user ? auth.user.name : "Guest";
    const userEmail = auth.user ? auth.user.email : "No Email";

    const user = {
        name: userName,
        email: userEmail,
        avatar: "/avatars/shadcn.jpg",
    };

    return (
        <SidebarMenu>
            <SidebarMenuItem>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <SidebarMenuButton
                            size="lg"
                            className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
                        >
                            <Avatar className="h-8 w-8 rounded-lg">
                                <AvatarImage
                                    src={user.avatar}
                                    alt={user.name}
                                />
                                <AvatarFallback className="rounded-lg">
                                    CN
                                </AvatarFallback>
                            </Avatar>
                            <div className="grid flex-1 text-left text-sm leading-tight">
                                <span className="truncate font-semibold">
                                    {user.name}
                                </span>
                                <span className="truncate text-xs">
                                    {user.email}
                                </span>
                            </div>
                            <ChevronsUpDown className="ml-auto size-4" />
                        </SidebarMenuButton>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                        className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg bg-white"
                        side={isMobile || isNavbar ? "bottom" : "right"}
                        align="end"
                        sideOffset={4}
                    >
                        {!isNavbar && (
                            <DropdownMenuLabel className="p-0 font-normal">
                                <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                                    <Avatar className="h-8 w-8 rounded-lg">
                                        <AvatarImage
                                            src={user.avatar}
                                            alt={user.name}
                                        />
                                        <AvatarFallback className="rounded-lg">
                                            CN
                                        </AvatarFallback>
                                    </Avatar>
                                    <div className="grid flex-1 text-left text-sm leading-tight">
                                        <span className="truncate font-semibold">
                                            {user.name}
                                        </span>
                                        <span className="truncate text-xs">
                                            {user.email}
                                        </span>
                                    </div>
                                </div>
                            </DropdownMenuLabel>
                        )}
                        <DropdownMenuItem asChild>
                            {/* Link Inertia yang merender dirinya sebagai item menu */}
                            <Link href={route("profiles")}>
                                <UserIcon className="mr-2 h-4 w-4" />
                                <span>Profile</span>
                            </Link>
                        </DropdownMenuItem>
                        {/* <DropdownMenuSeparator /> */}
                        {/* <DropdownMenuGroup>
              <DropdownMenuItem>
                <Sparkles />
                Upgrade to Pro
              </DropdownMenuItem>
            </DropdownMenuGroup> */}
                        {/* <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <BadgeCheck />
                Account
              </DropdownMenuItem>
              <DropdownMenuItem>
                <CreditCard />
                Billing
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Bell />
                Notifications
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator /> */}
                        <DropdownMenuItem asChild>
                            {/* Link Inertia yang merender dirinya sebagai item menu */}
                            <Link href={route("logout")} method="post">
                                <LogOut className="mr-2 h-4 w-4" />
                                <span>Log out</span>
                            </Link>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </SidebarMenuItem>
        </SidebarMenu>
    );
}
