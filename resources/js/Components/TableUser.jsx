"use client";

import * as React from "react";
import {
    CaretSortIcon,
    ChevronDownIcon,
    DotsHorizontalIcon,
} from "@radix-ui/react-icons";
import {
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    useReactTable,
} from "@tanstack/react-table";
import { Link } from "@inertiajs/react"; // Import Link Inertia

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

// 1. DATA SIMULASI
// Harap ganti dengan data actual yang dikirim dari Laravel
const dummyData = [
    {
        id: "m5gr84i9",
        name: "Ahmad Riyadi",
        email: "ahmad@example.com",
        role: "admin",
        status: "active",
    },
    {
        id: "3u1reggf",
        name: "Budi Santoso",
        email: "budi@example.com",
        role: "user",
        status: "inactive",
    },
    {
        id: "d9e8g7c6",
        name: "Citra Dewi",
        email: "citra@example.com",
        role: "user",
        status: "active",
    },
    {
        id: "b1a2c3d4",
        name: "Dewi Puspita",
        email: "dewi@example.com",
        role: "editor",
        status: "active",
    },
    {
        id: "e5f6g7h8",
        name: "Eka Kurniawan",
        email: "eka@example.com",
        role: "user",
        status: "active",
    },
    {
        id: "i9j0k1l2",
        name: "Fajar Maulana",
        email: "fajar@example.com",
        role: "user",
        status: "active",
    },
    {
        id: "m3n4o5p6",
        name: "Gilang Ramadhan",
        email: "gilang@example.com",
        role: "admin",
        status: "inactive",
    },
    {
        id: "q7r8s9t0",
        name: "Hana Silvia",
        email: "hana@example.com",
        role: "user",
        status: "active",
    },
    {
        id: "u1v2w3x4",
        name: "Indra Wijaya",
        email: "indra@example.com",
        role: "editor",
        status: "active",
    },
    {
        id: "y5z6a7b8",
        name: "Joko Susilo",
        email: "joko@example.com",
        role: "user",
        status: "inactive",
    },
];

// 2. DEFINISI KOLOM
export const columns = [
    // Kolom Checkbox
    {
        id: "select",
        header: ({ table }) => (
            <Checkbox
                checked={
                    table.getIsAllPageRowsSelected() ||
                    (table.getIsSomePageRowsSelected() && "indeterminate")
                }
                onCheckedChange={(value) =>
                    table.toggleAllPageRowsSelected(!!value)
                }
                aria-label="Select all"
            />
        ),
        cell: ({ row }) => (
            <Checkbox
                checked={row.getIsSelected()}
                onCheckedChange={(value) => row.toggleIsSelected(!!value)}
                aria-label="Select row"
            />
        ),
        enableSorting: false,
        enableHiding: false,
    },
    // Kolom Nama
    {
        accessorKey: "name",
        header: ({ column }) => (
            <Button
                variant="ghost"
                onClick={() =>
                    column.toggleSorting(column.getIsSorted() === "asc")
                }
            >
                Nama
                <CaretSortIcon className="ml-2 h-4 w-4" />
            </Button>
        ),
        cell: ({ row }) => (
            <div className="capitalize">{row.getValue("name")}</div>
        ),
    },
    // Kolom Email
    {
        accessorKey: "email",
        header: ({ column }) => (
            <Button
                variant="ghost"
                onClick={() =>
                    column.toggleSorting(column.getIsSorted() === "asc")
                }
            >
                Email
                <CaretSortIcon className="ml-2 h-4 w-4" />
            </Button>
        ),
        cell: ({ row }) => (
            <div className="lowercase">{row.getValue("email")}</div>
        ),
    },
    // Kolom Role
    {
        accessorKey: "role",
        header: "Role",
        cell: ({ row }) => (
            <div className="capitalize">{row.getValue("role")}</div>
        ),
        filterFn: (row, id, value) => value.includes(row.getValue(id)),
    },
    // Kolom Status
    {
        accessorKey: "status",
        header: "Status",
        cell: ({ row }) => (
            <div
                className={`capitalize font-medium ${
                    row.getValue("status") === "active"
                        ? "text-green-600"
                        : "text-red-600"
                }`}
            >
                {row.getValue("status")}
            </div>
        ),
    },
    // Kolom Aksi
    {
        id: "actions",
        enableHiding: false,
        cell: ({ row }) => {
            const user = row.original;

            return (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                            <span className="sr-only">Open menu</span>
                            <DotsHorizontalIcon className="h-4 w-4" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Aksi</DropdownMenuLabel>
                        <DropdownMenuItem
                            onClick={() =>
                                navigator.clipboard.writeText(user.email)
                            }
                        >
                            Copy Email
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem asChild>
                            {/* Menggunakan Inertia Link untuk Edit */}
                            {/* <Link href={route("usersData.edit", user.id)}>
                                Edit User
                            </Link> */}
                        </DropdownMenuItem>
                        <DropdownMenuItem className="text-red-600" asChild>
                            {/* Menggunakan Inertia Link untuk Delete (Method DELETE) */}
                            {/* <Link
                                href={route("usersData.destroy", user.id)}
                                method="delete"
                            >
                                Delete User
                            </Link> */}
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            );
        },
    },
];

// 3. KOMPONEN UTAMA
const TableUser = ({ users = dummyData }) => {
    const [sorting, setSorting] = React.useState([]);
    const [columnFilters, setColumnFilters] = React.useState([]);
    const [columnVisibility, setColumnVisibility] = React.useState({});
    const [rowSelection, setRowSelection] = React.useState({});

    const table = useReactTable({
        data: users,
        columns,
        onSortingChange: setSorting,
        onColumnFiltersChange: setColumnFilters,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),

        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        onColumnVisibilityChange: setColumnVisibility,
        onRowSelectionChange: setRowSelection,
        state: {
            sorting,
            columnFilters,
            columnVisibility,
            rowSelection,
        },
    });

    return (
        <div className="w-full">
            {/* <h1 className="text-2xl font-bold mb-4">Data Pengguna</h1> */}
            <div className="flex items-center pb-4">
                {/* Input Pencarian Global */}
                <Input
                    placeholder="Cari nama atau email..."
                    value={table.getColumn("email")?.getFilterValue() ?? ""}
                    onChange={(event) =>
                        table
                            .getColumn("email")
                            ?.setFilterValue(event.target.value)
                    }
                    className="max-w-sm mr-4"
                />

                {/* Dropdown Visibility Kolom */}
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline" className="ml-auto">
                            Kolom <ChevronDownIcon className="ml-2 h-4 w-4" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        {table
                            .getAllColumns()
                            .filter((column) => column.getCanHide())
                            .map((column) => (
                                <DropdownMenuItem
                                    key={column.id}
                                    className="p-2"
                                >
                                    <Checkbox
                                        id={column.id}
                                        checked={column.getIsVisible()}
                                        onCheckedChange={(value) =>
                                            column.toggleVisibility(!!value)
                                        }
                                        className="mr-2"
                                    />
                                    <label
                                        htmlFor={column.id}
                                        className="cursor-pointer"
                                    >
                                        {/* Menghilangkan .toString() dan replace yang rumit untuk header sederhana */}
                                        {column.id.charAt(0).toUpperCase() +
                                            column.id.slice(1)}
                                    </label>
                                </DropdownMenuItem>
                            ))}
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>

            {/* Table Utama */}
            <div className="rounded-md border">
                <Table>
                    <TableHeader>
                        {table.getHeaderGroups().map((headerGroup) => (
                            <TableRow key={headerGroup.id}>
                                {headerGroup.headers.map((header) => (
                                    <TableHead key={header.id}>
                                        {header.isPlaceholder
                                            ? null
                                            : flexRender(
                                                  header.column.columnDef
                                                      .header,
                                                  header.getContext()
                                              )}
                                    </TableHead>
                                ))}
                            </TableRow>
                        ))}
                    </TableHeader>
                    <TableBody>
                        {table.getRowModel().rows?.length ? (
                            table.getRowModel().rows.map((row) => (
                                <TableRow
                                    key={row.id}
                                    data-state={
                                        row.getIsSelected() && "selected"
                                    }
                                >
                                    {row.getVisibleCells().map((cell) => (
                                        <TableCell key={cell.id}>
                                            {flexRender(
                                                cell.column.columnDef.cell,
                                                cell.getContext()
                                            )}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell
                                    colSpan={columns.length}
                                    className="h-24 text-center"
                                >
                                    Tidak ada data.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>

            {/* Pagination dan Status Seleksi */}
            <div className="flex items-center justify-end space-x-2 py-4">
                <div className="flex-1 text-sm text-muted-foreground">
                    {table.getFilteredSelectedRowModel().rows.length} dari{" "}
                    {table.getFilteredRowModel().rows.length} baris dipilih.
                </div>
                <div className="space-x-2">
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => table.previousPage()}
                        disabled={!table.getCanPreviousPage()}
                    >
                        Sebelumnya
                    </Button>
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => table.nextPage()}
                        disabled={!table.getCanNextPage()}
                    >
                        Berikutnya
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default TableUser;
