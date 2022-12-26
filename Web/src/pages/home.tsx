import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext"; 
import { parseCookies } from 'nookies'
import Layout from "../components/Layout";
import { GetServerSideProps } from "next";
import { getAPIClient } from "../services/axios";

export interface User {
    id: string;
    owner: string;
    value: number;
    picture: string
}

interface Props {
    user: User;
}

export default function Home() {
    const {user} = useContext(AuthContext)

    return <Layout user={user}> 
        
    </Layout>
}



export const getServerSideProps: GetServerSideProps = async (ctx) => {


    const apiClient = getAPIClient(ctx);
    
    const { ['daily.token']: token } = parseCookies(ctx)

    if(!token) {
        return {
            redirect : {
                destination: '/',
                permanent: false
            }
        }
    }

    return {
        props:{
          
        }
    }
}