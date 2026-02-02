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
import { RadioGroup } from "@headlessui/react";
import { RadioGroupComponent } from "./RadioGroup";
import { Badge } from "./ui/badge";
import { Label } from "./ui/label";
import { AlertDialogComponent } from "./AlertDialog";

// 1. DATA SIMULASI
// Harap ganti dengan data actual yang dikirim dari Laravel
const dummyData = [
    {
        id: "m5gr84i9",
        no_soal: 1,
        question: "lorem ipsum dolor sit amet constctur",
        option: ['lorem', 'ipsum', 'dolor', 'sit amet']
    },
    {
        id: "3u1reggf",
        no_soal: 1,
        question: "Nyawit lu bro?",
        option: ['lorem', 'ipsum', 'dolor', 'sit amet']
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
    {
        accessorKey: "no_soal",
        header: ({ column }) => (
            <Button
                variant="ghost"
                onClick={() =>
                    column.toggleSorting(column.getIsSorted() === "asc")
                }
            >
                No Soal
                <CaretSortIcon className="ml-2 h-4 w-4" />
            </Button>
        ),
        cell: ({ row }) => (
            <div className="capitalize">{row.getValue("no_soal")}</div>
        ),
    },
    // Kolom Question
    {
        accessorKey: "question_text",
        header: ({ column }) => (
            <Button
                variant="ghost"
                onClick={() =>
                    column.toggleSorting(column.getIsSorted() === "asc")
                }
            >
                Question
                <CaretSortIcon className="ml-2 h-4 w-4" />
            </Button>
        ),
        cell: ({ row }) => (
            <div className="capitalize">{row.getValue("question_text")}</div>
        ),
    },

    // Kolom Option
    {
        accessorKey: "options",
        header: ({ column }) => (
            <Button
                variant="ghost"
                onClick={() =>
                    column.toggleSorting(column.getIsSorted() === "asc")
                }
            >
                Option
                <CaretSortIcon className="ml-2 h-4 w-4" />
            </Button>
        ),
        cell: ({ row }) => (
            <div className="lowercase">
                {
                    console.log(row)
                }
                {
                    row.original.options.length != 0 ?
                    row.original.options.map((item) =>
                        <Badge className={'bg-blue-600 mx-2 px-4 py-2 rounded-xl'}>{item.option_text}</Badge>
                    )
                    :
                    <Label>No option yet</Label>
                }

                {/* {row.getValue("options")} */}
                </div>
        ),
    },
    // Kolom Aksi
    {
        id: "actions",
        enableHiding: false,
        cell: ({ row }) => {
            const question = row.original;

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
                        <DropdownMenuSeparator />
                        <DropdownMenuItem asChild  className='mb-4 '>
                            {/* Menggunakan Inertia Link untuk Edit */}
                            <Button className='bg-blue-500 rounded-md'>
                                <Link href={route("question.edit", question.id)}>
                                    Edit Question
                                </Link>
                            </Button>
                        </DropdownMenuItem>
                        <DropdownMenuItem className="text-red-600 cursor-pointer" asChild>
                            {/* Menggunakan Inertia Link untuk Delete (Method DELETE) */}
                            <AlertDialogComponent question={question}/>
                           {/*  <Link
                                href={route("question.destroy", question.id)}
                                method="delete"
                            >
                                Delete Question
                            </Link> */}
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            );
        },
    },
];

// 3. KOMPONEN UTAMA
const TableQuestion = ({ data }) => {
    const [sorting, setSorting] = React.useState([]);
    const [columnFilters, setColumnFilters] = React.useState([]);
    const [columnVisibility, setColumnVisibility] = React.useState({});
    const [rowSelection, setRowSelection] = React.useState({});


    const table = useReactTable({
        data: data,
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
                    placeholder="Search Question or Option..."
                    value={table.getColumn("question_text")?.getFilterValue() ?? ""}
                    onChange={(event) =>
                        table
                            .getColumn("question_text")
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

export default TableQuestion;
