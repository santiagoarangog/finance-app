import {useRouter} from "next/router";
import Navbar from "../../components/navbar";
import Title from "../../components/title";

export default function Id() {

    const router = useRouter()

    return (
        <div>
            <Navbar/>
            <Title>Posts details</Title>
            <p>Post Id: {router.query.id}</p>
        </div>
    )
}