import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import axios from "axios";
import React,{useState} from "react"
import { info } from "console";
export const getStaticPaths: GetStaticPaths = async () => {
  const res = await axios.get("http://localhost:5000/products");
  const data = await res.data;


  // map data to an array of path objects with params (id)
  const paths = data.map((product:any) => {
    return {
      params: { name: product.name.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context: any) => {
  const name = context.params.name;
  

  const res = await axios.get("http://localhost:5000/products/" + name);
  const result: any = await res.data;

  return {
    props: { product: result },
  };
};
const name: NextPage<{ product: any }> = ({ product }) => {

  const [quantity,setQuantity]= useState(1)

const addToCart = (body: any) => {
  axios.post("http://localhost:5000/cart/add",body).then((response) => {
    alert('add to cart')
  }).catch(err=>console.log(err))
};
  return (
    <>
      <div className="site-wrap">
        <div className="bg-light py-3">
          <div className="container">
            <div className="row">
              <div className="col-md-12 mb-0">
                <a href="index.html">Home</a>{" "}
                <span className="mx-2 mb-0">/</span>{" "}
                <strong className="text-black">{product && product.name}</strong>
              </div>
            </div>
          </div>
        </div>
        <div className="site-section">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <img src={product.image} alt="Image" className="img-fluid" />
              </div>
              <div className="col-md-6">
                <h2 className="text-black">{product.name}</h2>
                <h4>{product.anime}</h4>
                <p className="mb-4">{product.description}</p>
                <p>
                  <strong className="text-primary h4">{product.price}</strong>
                </p>
                <div className="mb-1 d-flex">
                  <label htmlFor="option-sm" className="d-flex mr-3 mb-3">
                    <span
                      className="d-inline-block mr-2"
                      style={{ top: "-2px", position: "relative" }}
                    >
                      <input type="radio" id="option-sm" name="shop-sizes" />
                    </span>{" "}
                    <span className="d-inline-block text-black">Small</span>
                  </label>
                  <label htmlFor="option-md" className="d-flex mr-3 mb-3">
                    <span
                      className="d-inline-block mr-2"
                      style={{ top: "-2px", position: "relative" }}
                    >
                      <input type="radio" id="option-md" name="shop-sizes" />
                    </span>{" "}
                    <span className="d-inline-block text-black">Medium</span>
                  </label>
                  <label htmlFor="option-lg" className="d-flex mr-3 mb-3">
                    <span
                      className="d-inline-block mr-2"
                      style={{ top: "-2px", position: "relative" }}
                    >
                      <input type="radio" id="option-lg" name="shop-sizes" />
                    </span>{" "}
                    <span className="d-inline-block text-black">Large</span>
                  </label>
                  <label htmlFor="option-xl" className="d-flex mr-3 mb-3">
                    <span
                      className="d-inline-block mr-2"
                      style={{ top: "-2px", position: "relative" }}
                    >
                      <input type="radio" id="option-xl" name="shop-sizes" />
                    </span>{" "}
                    <span className="d-inline-block text-black">
                      {" "}
                      Extra Large
                    </span>
                  </label>
                </div>
                <div className="mb-5">
                  <div className="input-group mb-3" style={{ maxWidth: 120 }}>
                    <div className="input-group-prepend">
                      <button
                        onClick={() => {
                          let quan = quantity;
                          if(quan>1){setQuantity(quan -1);}
                          
                        }}
                        className="btn btn-outline-primary js-btn-minus"
                        type="button"
                      >
                        −
                      </button>
                    </div>
                    <input
                    onChange={(e)=>{
                      let value:any = Number(e.target.value);
                      if(value<=product.stock){setQuantity(value);}
                      else alert("not engoh stock")
                      }}
                      type="text"
                      className="form-control text-center"
                      defaultValue={quantity}
                      placeholder=""
                      aria-label="Example text with button addon"
                      aria-describedby="button-addon1"
                    />
                    <div className="input-group-append">
                      <button
                        onClick={() => {
                          let quan = quantity;
                      if (quan+1 <= product.stock) {
                        setQuantity(quan + 1);
                      } else alert("not engoh stock");

                          
                        }}
                        className="btn btn-outline-primary js-btn-plus"
                        type="button"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
                <p 
                onClick={()=>{addToCart({name: product.name, Quantity: quantity,price:product.price,image:product.image})}}
                className="buy-now btn btn-sm btn-outline-black">
                  
                  
                    
                  
                    Add To Cart
                  
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default name;
