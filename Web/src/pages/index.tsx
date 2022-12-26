import { NextPage } from 'next';
import { useContext, useEffect } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';

const Index: NextPage = () => {

  const { signIn } = useContext(AuthContext)

  const googleLogin = useGoogleLogin({
    onSuccess: async tokenResponse => {
      const userInfo = await axios.get(
        'https://www.googleapis.com/oauth2/v3/userinfo', {
            method: 'GET',
            headers: {
              Authorization: `Bearer ${tokenResponse.access_token}`
            }
          }
      );
      signIn(userInfo.data)
    },
    onError: erroResponse => console.log(erroResponse)
})
  



  return (
    
  <button onClick={() => googleLogin()}>
    Sign in with Google 🚀{' '}
  </button>


  )
};

export default Index;