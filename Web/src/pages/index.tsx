import Layout from "../components/Layout";

function Index(raffles = []) {
    return <Layout> 
        <Feed raffles={raffles}></Feed>
    </Layout>
}

export default Index;