import Layout from "@/components/Layout";
import TableQuestion from "@/components/TableQuestion";
import { useEffect } from "react";
import { toast } from "sonner";

export default function AllQuestionpage({data, success}){
    useEffect(() => {
        if(success){
            toast.success(success)
        }
    }, [])
    
    return(
        <Layout>
            <TableQuestion data={data}/>
        </Layout>
    )
}
