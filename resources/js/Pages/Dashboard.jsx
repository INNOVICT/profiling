import Layout from "@/components/Layout";
import { Activity, Users } from "lucide-react";
import { ChartAreaInteractive } from "@/components/ChartInteractive";
import SummaryCard from "@/components/SummaryCard";


export default function Page({jumlah_mahasiswa}) {
    const summaryData = [
        { title: "Total Mahasiswa", icon: Users, value: jumlah_mahasiswa },
        { title: "Total Revenue", icon: Activity, value: "200000" },
        { title: "Total Revenue", icon: Activity, value: "200000" },
        { title: "Total Revenue", icon: Activity, value: "200000" },
    ];

    return (
        <Layout>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                {summaryData.map((item, key) => (
                    <SummaryCard
                        key={key}
                        title={item.title}
                        Icon={item.icon}
                        value={item.value}
                    />
                ))}
            </div>
            <div className="pt-4">
                <ChartAreaInteractive />
            </div>
        </Layout>
    );
}
