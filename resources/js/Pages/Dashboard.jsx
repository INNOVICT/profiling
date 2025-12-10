import Layout from "@/Components/Layout";
import { Activity, icons } from "lucide-react";
const summaryData = [
    { title: "Total Revenue", icon: Activity, value: "200000" },
    { title: "Total Revenue", icon: Activity, value: "200000" },
    { title: "Total Revenue", icon: Activity, value: "200000" },
    { title: "Total Revenue", icon: Activity, value: "200000" },
];

import SummaryCard from "@/Components/SummaryCard";
export default function Page() {
    return (
        <Layout>
            <div className="flex item-end justify-between mb-7">
                <h1 className="3xl font-bold">Dashboard</h1>
            </div>
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
        </Layout>
    );
}
