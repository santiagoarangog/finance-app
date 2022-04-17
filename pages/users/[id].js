import {useRouter} from "next/router";
import Title from "../../components/title";
import Layout from "../../components/layout";

export default function Id() {

    const router = useRouter()

    return (
        <Layout>
            <Title>User details</Title>
            <p>User ID: {router.query.id}</p>
        </Layout>
    )
}