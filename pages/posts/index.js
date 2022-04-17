import React from "react";
import Link from "next/link";

import Title from "../../components/title";
import Layout from "../../components/layout";

export default function Posts({posts}) {

    return (
        <Layout>
            <Title>Posts Page</Title>
            <div>
                {
                    posts.map(post => {
                        return (
                            <Link href={'/posts/[id]'} as={`/posts/${post.id}`}>
                                <a>
                                    <h3>{post.title}</h3>
                                    <p>{post.body}</p>
                                </a>
                            </Link>
                        )
                    })
                }
            </div>
            <p>Nuestra página de posts</p>
        </Layout>
    )
}

export async function getServerSideProps() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const posts = await res.json()
    return {
        props: {
            posts
        }
    };
}