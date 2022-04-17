import {useRouter} from "next/router";

export default function Id() {

    const router = useRouter()

    return (
        <div>
            <h2>User details</h2>
            <p>User ID: {router.query.id}</p>
        </div>
    )
}