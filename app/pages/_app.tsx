import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import jwt from 'jwt-decode'

import type { AppProps } from 'next/app'
import { UserContext } from "../UserContext";
import { useEffect, useMemo, useState } from 'react';
import axios from 'axios';
import Layout from '../components/Layout';
export default function App({ Component, pageProps }: AppProps) {
  
   const [user, setUser] = useState(null);
console.log(user)
  useEffect (()=> { 
  const token = localStorage.getItem("token");
    if (token) {
      const user = jwt(token);


      if (!user) {
        localStorage.removeItem("token");
      } else {
        axios
          .get(`http://localhost:5000/user/${user.email}`)
          .then((res) => {
            setUser(res.data);
          }).catch(err=>console.log(err)
          )
      }
    }
  },[])


  return (
   <UserContext.Provider value={{user,setUser}}><Layout>
  <Component {...pageProps} /></Layout></UserContext.Provider>)
}
