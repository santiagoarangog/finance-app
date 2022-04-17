import Title from "../components/title";
import Layout from "../components/layout";

export default function Home() {
    return (
        <Layout>
            <Title>Home Page</Title>
            <p>Nuestra página de inicio</p>
            <style jsx>
                {`
                  p {
                    color: darkgray;
                  }

                  p:hover {
                    color: darkred;
                  }
                `}
            </style>
        </Layout>
    )
}