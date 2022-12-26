import axios from 'axios'
import { parseCookies } from 'nookies'
const url = process.env.API_URL

export function getAPIClient(ctx?: any){
    const { 'daily.token': token } = parseCookies(ctx)

    const api = axios.create({
        baseURL: url
    })

    if(token){
        api.defaults.headers['authorization'] = `Bearer ${token}`;
    }

    return api;
}