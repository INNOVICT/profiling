"use client";

import * as React from "react";
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    ChartContainer,
    ChartLegend,
    ChartLegendContent,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { useMemo } from "react"; // Menggunakan useMemo untuk optimasi filter

// --- DATA SIMULASI ---
// Menggunakan data yang sama untuk demonstrasi tren mahasiswa
const chartData = [
    { date: "2024-04-01", fiksi: 222, teknik: 150 },
    { date: "2024-04-04", fiksi: 242, teknik: 260 },
    { date: "2024-04-07", fiksi: 245, teknik: 180 },
    { date: "2024-04-10", fiksi: 261, teknik: 190 },
    { date: "2024-04-13", fiksi: 342, teknik: 380 },
    { date: "2024-04-16", fiksi: 138, teknik: 190 },
    { date: "2024-04-19", fiksi: 243, teknik: 180 },
    { date: "2024-04-22", fiksi: 224, teknik: 170 },
    { date: "2024-04-25", fiksi: 215, teknik: 250 },
    { date: "2024-04-28", fiksi: 122, teknik: 180 },
    { date: "2024-05-01", fiksi: 165, teknik: 220 },
    { date: "2024-05-04", fiksi: 385, teknik: 420 },
    { date: "2024-05-07", fiksi: 388, teknik: 300 },
    { date: "2024-05-10", fiksi: 293, teknik: 330 },
    { date: "2024-05-13", fiksi: 197, teknik: 160 },
    { date: "2024-05-16", fiksi: 338, teknik: 400 },
    { date: "2024-05-19", fiksi: 315, teknik: 350 },
    { date: "2024-05-22", fiksi: 81, teknik: 120 },
    { date: "2024-05-25", fiksi: 201, teknik: 250 },
    { date: "2024-05-28", fiksi: 233, teknik: 190 },
    { date: "2024-05-31", fiksi: 178, teknik: 230 },
    { date: "2024-06-03", fiksi: 103, teknik: 160 },
    { date: "2024-06-06", fiksi: 294, teknik: 250 },
    { date: "2024-06-09", fiksi: 438, teknik: 480 },
    { date: "2024-06-12", fiksi: 492, teknik: 420 },
    { date: "2024-06-15", fiksi: 307, teknik: 350 },
    { date: "2024-06-18", fiksi: 107, teknik: 170 },
    { date: "2024-06-21", fiksi: 169, teknik: 210 },
    { date: "2024-06-24", fiksi: 132, teknik: 180 },
    { date: "2024-06-27", fiksi: 448, teknik: 490 },
    { date: "2024-06-30", fiksi: 446, teknik: 400 },
];

const chartConfig = {
    mahasiswa: {
        label: "Mahasiswa",
    },
    fiksi: {
        label: "Ilmu Fiksi",
        color: "var(--chart-3)", // Menggunakan chart-3 untuk warna berbeda
    },
    teknik: {
        label: "Teknik",
        color: "var(--chart-4)", // Menggunakan chart-4 untuk warna berbeda
    },
};

export function ChartAreaInteractive() {
    const [timeRange, setTimeRange] = React.useState("90d");

    // Gunakan useMemo untuk mengoptimasi filter data
    const filteredData = useMemo(() => {
        const referenceDate = new Date("2024-06-30"); // Tanggal referensi data
        let daysToSubtract = 90;

        if (timeRange === "30d") {
            daysToSubtract = 30;
        } else if (timeRange === "7d") {
            daysToSubtract = 7;
        }

        const startDate = new Date(referenceDate);
        startDate.setDate(startDate.getDate() - daysToSubtract);

        return chartData.filter((item) => {
            const date = new Date(item.date);
            return date >= startDate;
        });
    }, [timeRange]); // Rerun hanya ketika timeRange berubah

    return (
        <Card className="pt-0">
            <CardHeader className="flex items-center gap-2 space-y-0 border-b py-5 sm:flex-row">
                <div className="grid flex-1 gap-1">
                    <CardTitle>Tren Pendaftaran Mahasiswa</CardTitle>
                    <CardDescription>
                        Tren pendaftaran mahasiswa berdasarkan bidang studi
                    </CardDescription>
                </div>
                <Select value={timeRange} onValueChange={setTimeRange}>
                    <SelectTrigger
                        className="hidden w-[160px] rounded-lg sm:ml-auto sm:flex"
                        aria-label="Select a value"
                    >
                        <SelectValue placeholder="Last 3 months" />
                    </SelectTrigger>
                    <SelectContent className="rounded-xl">
                        <SelectItem value="90d" className="rounded-lg">
                            Last 3 months
                        </SelectItem>
                        <SelectItem value="30d" className="rounded-lg">
                            Last 30 days
                        </SelectItem>
                        <SelectItem value="7d" className="rounded-lg">
                            Last 7 days
                        </SelectItem>
                    </SelectContent>
                </Select>
            </CardHeader>
            <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
                <ChartContainer
                    config={chartConfig}
                    className="aspect-auto h-[300px] w-full"
                >
                    <AreaChart data={filteredData}>
                        <defs>
                            {/* GRADIENT UNTUK TEKNIK */}
                            <linearGradient
                                id="fillTeknik"
                                x1="0"
                                y1="0"
                                x2="0"
                                y2="1"
                            >
                                <stop
                                    offset="5%"
                                    stopColor="var(--color-teknik)"
                                    stopOpacity={0.8}
                                />
                                <stop
                                    offset="95%"
                                    stopColor="var(--color-teknik)"
                                    stopOpacity={0.1}
                                />
                            </linearGradient>
                            {/* GRADIENT UNTUK FIKSI */}
                            <linearGradient
                                id="fillFiksi"
                                x1="0"
                                y1="0"
                                x2="0"
                                y2="1"
                            >
                                <stop
                                    offset="5%"
                                    stopColor="var(--color-fiksi)"
                                    stopOpacity={0.8}
                                />
                                <stop
                                    offset="95%"
                                    stopColor="var(--color-fiksi)"
                                    stopOpacity={0.1}
                                />
                            </linearGradient>
                        </defs>
                        <CartesianGrid vertical={false} />
                        <XAxis
                            dataKey="date"
                            tickLine={false}
                            axisLine={false}
                            tickMargin={8}
                            minTickGap={32}
                            tickFormatter={(value) => {
                                const date = new Date(value);
                                return date.toLocaleDateString("id-ID", {
                                    month: "short",
                                    day: "numeric",
                                });
                            }}
                        />
                        <YAxis />
                        <ChartTooltip
                            cursor={false}
                            content={
                                <ChartTooltipContent
                                    labelFormatter={(value) => {
                                        return new Date(
                                            value
                                        ).toLocaleDateString("id-ID", {
                                            month: "short",
                                            day: "numeric",
                                            year: "numeric",
                                        });
                                    }}
                                    indicator="dot"
                                />
                            }
                        />

                        {/* Area Teknik */}
                        <Area
                            dataKey="teknik"
                            type="natural"
                            fill="url(#fillTeknik)"
                            stroke="var(--color-teknik)"
                            stackId="a"
                        />
                        {/* Area Fiksi */}
                        <Area
                            dataKey="fiksi"
                            type="natural"
                            fill="url(#fillFiksi)"
                            stroke="var(--color-fiksi)"
                            stackId="a"
                        />
                        <ChartLegend content={<ChartLegendContent />} />
                    </AreaChart>
                </ChartContainer>
            </CardContent>
        </Card>
    );
}
