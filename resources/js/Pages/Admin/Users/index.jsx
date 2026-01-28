import React, { useEffect } from "react";
import Layout from "@/components/Layout";
import TableUser from "@/components/TableUser";

const index = ({users}) => {

    useEffect(() => {
        console.log({users});
    }, [])

    return (
        <Layout>
            <TableUser
                user={users}
            />
            <p></p>
        </Layout>
    );
};

export default index;
