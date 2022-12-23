import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import jwt from 'jwt-decode'
import cloudDinary from '../utils/cloudinary'
import type { AppProps } from 'next/app'
import { UserContext } from "../UserContext";
import { useEffect, useMemo, useState } from 'react';
import axios from 'axios';
import Layout from '../components/Layout';
import { log } from 'console';
export default  function App({ Component, pageProps, ...appProps }: AppProps) {
  const [user, setUser] = useState();
  const [allProducts, setAllProducts] = useState([]);
  const [OneProduct, setOneProduct] = useState({})
  const [allCart,setAllCart] = useState([])
 
   





  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const user = jwt(token);

      if (!user) {
        localStorage.removeItem("token");
      } else {
        axios
          .get(`http://localhost:3000/api/user/${user.email}`)
          .then((res) => {
            setUser(res.data);
          })
          .catch((err) => console.log(err));
      }
    }
    axios
      .get(`http://localhost:3000/api/product`)
      .then((res) => {
        setAllProducts(res.data);
      })
      .catch((err) => console.log(err));
         axios
           .get(`http://localhost:3000/api/cart`)
           .then((res) => {
             setAllCart(res.data);
           })
           .catch((err) => console.log(err));
  }, []);
console.log(OneProduct);

  // const getContent = () => {
  //   if (
  //     !user &&
  //     (["/"].includes(appProps.router.pathname) ||
  //       ["/register"].includes(appProps.router.pathname))
  //   ) {
  //     return (
  //       <UserContext.Provider
  //         value={{
  //           user,
  //           setUser,
  //           allProducts,
  //           setAllProducts,
  //           OneProduct,
  //           setOneProduct,
  //         }}
  //       >
  //         <Layout>
  //           <Component {...pageProps} />
  //         </Layout>
  //       </UserContext.Provider>
  //     );
  //   } else if (
  //     user.admin == true &&
  //     ["/dashboard"].includes(appProps.router.pathname)
  //   ) {
  //     return (
  //       <UserContext.Provider
  //         value={{
  //           user,
  //           setUser,
  //           allProducts,
  //           setAllProducts,
  //           OneProduct,
  //           setOneProduct,
  //         }}
  //       >
  //         <Layout>
  //           <Component {...pageProps} />
  //         </Layout>
  //       </UserContext.Provider>
  //     );
  //   } else if (
  //     user.admin == false &&
  //     (["/shop"].includes(appProps.router.pathname) ||
  //       ["/shop/[name]"].includes(appProps.router.pathname) ||
  //       ["/cart"].includes(appProps.router.pathname) ||
  //       ["/home"].includes(appProps.router.pathname) ||
  //       ["/checkOut"].includes(appProps.router.pathname))
  //   )
  //     return (
  //       <UserContext.Provider
  //         value={{
  //           user,
  //           setUser,
  //           allProducts,
  //           setAllProducts,
  //           OneProduct,
  //           setOneProduct,
  //         }}
  //       >
  //         <Layout>
  //           <Component {...pageProps} />
  //         </Layout>
  //       </UserContext.Provider>
  //     );
  // };

  // return getContent();
  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        allProducts,
        setAllProducts,
        OneProduct,
        setOneProduct,
        allCart,setAllCart
      }}
    >
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </UserContext.Provider>
  );
}
