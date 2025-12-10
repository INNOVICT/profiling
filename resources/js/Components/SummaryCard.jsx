import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
const SummaryCard = ({ title, Icon, value }) => {
    return (
        <Card>
            <CardHeader className="flex flex-row item-center justify-between space-y-0 pb-2">
                <CardTitle>{title}</CardTitle>
                <Icon />
            </CardHeader>
            <CardContent>
                <div>{value}</div>
                <p className="text-xs text-muted-foreground">
                    +20.1% from last month
                </p>
            </CardContent>
        </Card>
    );
};

export default SummaryCard;
