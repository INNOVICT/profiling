import React from "react";
import Layout from "@/components/Layout";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    CardDescription,
    CardFooter,
} from "@/components/ui/card";
import {
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart";
import { Avatar } from "@/components/ui/avatar";
import { AvatarImage, AvatarFallback } from "@radix-ui/react-avatar";
import { TrendingUp } from "lucide-react";
import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts";

export const description = "A radar chart with dots";

const skillData = [
    { skill: "P. Solving", score: 85 },
    { skill: "Tech. Prof.", score: 92 },
    { skill: "Teamwork", score: 78 },
    { skill: "Comm.", score: 88 },
    { skill: "Crit. Think.", score: 80 },
    { skill: "Adapt.", score: 95 },
];

// 🎨 DEFINISI WARNA RGBA
const BLUE_SOLID = "rgba(53, 143, 255, 1)";
// Opacity 50%
const BLUE_50_PERCENT = "rgba(53, 143, 255, 0.5)";

const chartConfig = {
    score: {
        label: "Skill Score",
        color: BLUE_50_PERCENT,
    },
};

const Index = () => {
    return (
        // 1. PERBAIKAN LAYOUT GRID: Menggunakan rasio 1:2 atau 2:3 untuk memberi ruang lebih pada chart.
        // Diubah dari lg:grid-cols-5 menjadi lg:grid-cols-3
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 ">
            {/* Kartu Profil: col-span-1 dari 3 kolom */}
            <Card className=" lg:col-span-1">
                <CardContent className="p-6 flex flex-col items-center">
                    <Avatar className="h-24 w-24 mb-4">
                        <AvatarImage
                            src="https://avatars.githubusercontent.com/u/90915592?s=400&u=0d0e41f759c12b38bb622c3e6a181a59de06d82e&v=4"
                            alt="ZaldiNugraha"
                        />
                        <AvatarFallback>ZN</AvatarFallback>{" "}
                    </Avatar>
                    <h2 className="text-xl font-bold flex items-center mb-1">
                        Zaldi Nugraha
                        <span className="ml-2 px-2 py-0.5 text-xs font-medium bg-green-500 text-white rounded-full">
                            Verified
                        </span>
                    </h2>
                    <p className="text-sm text-gray-500 mb-6">
                        Mahasiswa semester 1
                    </p>

                    {/* Stats */}
                    <div className="flex justify-around w-full border-t pt-4">
                        <div className="text-center">
                            <p className="text-lg font-bold">184</p>
                            <p className="text-xs text-gray-500">Post</p>
                        </div>
                        <div className="text-center">
                            <p className="text-lg font-bold">32</p>
                            <p className="text-xs text-gray-500">Projects</p>
                        </div>
                        <div className="text-center">
                            <p className="text-lg font-bold">4.5K</p>
                            <p className="text-xs text-gray-500">Members</p>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Kartu Chart: col-span-2 dari 3 kolom */}
            <Card className=" lg:col-span-2">
                <CardHeader className="items-center">
                    <CardTitle>Peta Kompetensi Skill</CardTitle>
                    <CardDescription>
                        Visualisasi Keahlian (Skill) Berdasarkan Penilaian
                    </CardDescription>
                </CardHeader>
                <CardContent className="pb-0">
                    <ChartContainer
                        config={chartConfig}
                        // Meningkatkan ukuran maksimal chart untuk memberi ruang label
                        className="mx-auto aspect-square max-h-[400px]"
                    >
                        <RadarChart
                            data={skillData}
                            // 2. PERBAIKAN: Pindahkan Properti Dimensi ke <RadarChart>
                            cx="50%"
                            cy="50%"
                            outerRadius="65%" // Mengatur radius agar label punya ruang
                        >
                            <ChartTooltip
                                cursor={false}
                                content={<ChartTooltipContent />}
                            />
                            <PolarAngleAxis dataKey="skill" />
                            <PolarGrid />
                            <Radar
                                dataKey="score"
                                fill="var(--color-score)"
                                dot={{
                                    r: 4,
                                    fillOpacity: 1,
                                    fill: BLUE_SOLID,
                                }}
                            />
                        </RadarChart>
                    </ChartContainer>
                </CardContent>
                <CardFooter className="flex-col gap-2 text-sm">
                    <div className="flex items-center gap-2 leading-none font-medium">
                        Rata-rata Skor Kompetensi Global: 85/100
                        <TrendingUp className="h-4 w-4" />
                    </div>
                    <div className="text-muted-foreground flex items-center gap-2 leading-none">
                        Berdasarkan Penilaian Proyek & Ujian Akhir
                    </div>
                </CardFooter>
            </Card>
        </div>
    );
};

Index.layout = (page) => <Layout children={page} />;

export default Index;
