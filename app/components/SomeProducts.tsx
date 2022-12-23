import axios from 'axios'
import React, { useContext, useEffect } from 'react'
import { UserContext } from "../UserContext";
import Link from 'next/link';
const SomeProducts = () => {
  const { allProducts, setAllProducts, setOneProduct }: any =
    useContext(UserContext);
   console.log(allProducts);
   const on=(id:any)=>{
    let prod=allProducts.filter((e:any,i:any)=>i!== id)
    setAllProducts(prod)
   }
  return (
    <div className="row">
      {allProducts.map((e: any,i:any) => (
        <div className="col-4 p-2" key={e._id}>
          <div className="">
            <div className="block-4 text-center border">
              <figure className="block-4-image">
                <Link href={"/shop/" + e.name}>
                  <img
                    style={{ height: "400px" }}
                    src={e.image}
                    alt="Image placeholder"
                    className="img-fluid"
                  />
                </Link>
              </figure>
              <div className="block-4-text p-4">
                <h3>
                  <Link href={"/shop/" + e.name}>{e.name}</Link>
                </h3>
                <p className="mb-0">{e.anime}</p>
                <p className="text-primary font-weight-bold">{e.price}</p>
              </div>
              <div
                className="btn btn-outline-primary"
                onClick={() => {
                  
                  on(i)
                  axios.delete("http://localhost:3000/api/product/"+e.name).then(res=>console.log("delete")
                  ).catch(err=>console.log(err))}}
              >
                delete
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SomeProducts