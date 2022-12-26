import { createContext, use, useEffect, useState} from "react"
import { setCookie, parseCookies } from "nookies";
import Router from "next/router";



import axios from 'axios';
import { api } from "../services/api";
const url = process.env.API_URL

type User = {
    account: string;
	owner: string;
	value: Number;
    picture: string;
}

type SignInData = {
    email: string;
    name: string;
    picture: string;
}

type AuthContextType = {
    isAuthenticated: boolean;
    user: User | null;
    signIn: (data: SignInData) => Promise<void>
}

export const AuthContext = createContext({} as AuthContextType)

export function AuthProvider( { children } ) {
    const [user, setUser] = useState<User | null>(null)

    const isAuthenticated = !!user

    async function getUser() {
        const { data } = await api.post('auth/me')
        return data
    }

    useEffect(() => {
        const { 'daily.token': token } = parseCookies()

        if (token) {
            getUser().then(response => {
                setUser(response.user)
            })
        }
    }, [])

    async function signIn(userData : SignInData) {
        

        const { data }  = await axios.post(`${url}/auth`, {
            "email": userData.email,
            "name": userData.name,
            "picture": userData.picture
        })

        console.log(data)

        setCookie(undefined, 'daily.token', data.token, {
            maxAge: 60 * 60 * 1, //1 hour
        })

        api.defaults.headers['authorization'] = `Bearer ${data.token}`;

        setUser(data.user)

        Router.push('/home');
    }

    return (
        <AuthContext.Provider value={{ user, isAuthenticated, signIn }}>
            {children}
        </AuthContext.Provider>
    )
}