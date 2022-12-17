import React, { useContext } from 'react'

import { UserContext } from '../../UserContext'

const index = () => {
  const {user,setUser}:any=useContext(UserContext)

  return (
   <>
  <title>Mangadana</title>
  <meta charSet="utf-8" />
  <meta
    name="viewport"
    content="width=device-width, initial-scale=1, shrink-to-fit=no"
  />
  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css?family=Mukta:300,400,700"
  />
  <link rel="stylesheet" href="fonts/icomoon/style.css" />
  <link rel="stylesheet" href="css/bootstrap.min.css" />
  <link rel="stylesheet" href="css/magnific-popup.css" />
  <link rel="stylesheet" href="css/jquery-ui.css" />
  <link rel="stylesheet" href="css/owl.carousel.min.css" />
  <link rel="stylesheet" href="css/owl.theme.default.min.css" />
  <link rel="stylesheet" href="css/aos.css" />
  <link rel="stylesheet" href="css/style.css" />
  <div className="site-wrap">
    
    <div className="bg-light py-3">
      <div className="container">
        <div className="row">
          <div className="col-md-12 mb-0">
            <a href="index.html">Home</a> <span className="mx-2 mb-0">/</span>{" "}
            <strong className="text-black">Shop</strong>
          </div>
        </div>
      </div>
    </div>
    <div className="site-section">
      <div className="container">
        <div className="row mb-5">
          <div className="col-md-9 order-2">
            <div className="row">
              <div className="col-md-12 mb-5">
                <div className="float-md-left mb-4">
                  <h2 className="text-black h5">Shop All</h2>
                </div>
                
              </div>
            </div>
            <div className="row mb-5">
             
              
              {['','','','','',''].map(e=>( <><div className="col-sm-6 col-lg-4 mb-4" >
                <div className="block-4 text-center border">
                  <figure className="block-4-image">
                    <a href="shop-single.html">
                      <img
                        src="images/cloth_1.jpg"
                        alt="Image placeholder"
                        className="img-fluid"
                      />
                    </a>
                  </figure>
                  <div className="block-4-text p-4">
                    <h3>
                      <a href="shop-single.html">Tank Top</a>
                    </h3>
                    <p className="mb-0">Finding perfect t-shirt</p>
                    <p className="text-primary font-weight-bold">$50</p>
                  </div>
                </div>
              </div></>))}
            </div>
                      </div>
          <div className="col-md-3 order-1 mb-5 mb-md-0">
            <div className="border p-4 rounded mb-4">
              <h3 className="mb-3 h6 text-uppercase text-black d-block">
                Categories
              </h3>
              <ul className="list-unstyled mb-0">
                <li className="mb-1">
                  <a href="#" className="d-flex">
                    <span>Men</span>{" "}
                   
                  </a>
                </li>
                <li className="mb-1">
                  <a href="#" className="d-flex">
                    <span>Women</span>{" "}
                   
                  </a>
                </li>
                <li className="mb-1">
                  <a href="#" className="d-flex">
                    <span>Children</span>{" "}
                   
                  </a>
                </li>
              </ul>
            </div>
            <div className="border p-4 rounded mb-4">
              <div className="mb-4">
                <h3 className="mb-3 h6 text-uppercase text-black d-block">
                  Filter by Price
                </h3>
                 <div className="shop__sidebar__price">
                          <ul>
                            <li  className='btn'>
                              0.00 dt - 50.00 dt
                            </li>
                            <li  className='btn'>
                              50.00 dt - 100.00 dt
                            </li>
                            <li  className='btn'>
                              100.00 dt - 150.00 dt
                            </li>
                            <li  className='btn'>
                              150.00 dt - 200.00 dt
                            </li>
                            <li  className='btn'>
                              200.00 dt - 250.00 dt
                            </li>
                            <li  className='btn'>
                              250.00 dt +
                            </li>
                          </ul>
                        </div>
              </div>
              <div className="mb-4">
                <h3 className="mb-3 h6 text-uppercase text-black d-block">
                  Size
                </h3>
                <label htmlFor="s_sm" className="d-flex">
                  <input type="checkbox" id="s_sm" className="mr-2 mt-1" />{" "}
                 Small
                </label>
                <label htmlFor="s_md" className="d-flex">
                  <input type="checkbox" id="s_md" className="mr-2 mt-1" />{" "}
                 Medium 
                </label>
                <label htmlFor="s_lg" className="d-flex">
                  <input type="checkbox" id="s_lg" className="mr-2 mt-1" />{" "}
                 Large
                </label>
              </div>
              <div className="mb-4">
                <h3 className="mb-3 h6 text-uppercase text-black d-block">
                  Color
                </h3>
                <a href="#" className="d-flex color-item align-items-center">
                  <span className="bg-danger color d-inline-block rounded-circle mr-2" />{" "}
                  <span className="text-black">Red </span>
                </a>
                <a href="#" className="d-flex color-item align-items-center">
                  <span className="bg-success color d-inline-block rounded-circle mr-2" />{" "}
                  <span className="text-black">Green </span>
                </a>
                <a href="#" className="d-flex color-item align-items-center">
                  <span className="bg-info color d-inline-block rounded-circle mr-2" />{" "}
                  <span className="text-black">Blue </span>
                </a>
                <a href="#" className="d-flex color-item align-items-center">
                  <span className="bg-primary color d-inline-block rounded-circle mr-2" />{" "}
                  <span className="text-black">Purple </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  </div>
</>

  )
}

export default index