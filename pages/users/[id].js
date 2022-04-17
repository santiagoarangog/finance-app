import {useRouter} from "next/router";
import Navbar from "../../components/navbar";
import Title from "../../components/title";

export default function Id() {

    const router = useRouter()

    return (
        <div>
            <Navbar/>
            <Title>User details</Title>
            <p>User ID: {router.query.id}</p>
        </div>
    )
}