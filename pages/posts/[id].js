import {useRouter} from "next/router";

export default function Id() {

    const router = useRouter()

    return (
        <div>
            <h2>Posts details</h2>
            <p>Post Id: {router.query.id}</p>
        </div>
    )
}