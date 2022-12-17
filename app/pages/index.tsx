import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'
import AllPosts from '../components/AllPosts'
const dd = require('../data/dummy.json')

/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
const products = [
  {
    id: 0,
    name : "KNY Unisex T-Shirt",
    imageSrc : "https://teeruto.com/wp-content/uploads/2021/10/tanjiro-demon-slayer-kimetsu-anime-unisex-tshirt22489.jpg",
    price : "$20.00",
    imageAlt: "",
    href: '',
    color: 'Black'
},
{
    id: 1,
    name : "Haikyu Long Sleeve Shirt",
    imageSrc: "https://res.cloudinary.com/teepublic/image/private/s--uJFPD-R---/t_Resized%20Artwork/c_crop,x_10,y_10/c_fit,h_647/c_crop,g_north_west,h_588,w_441,x_77,y_0/g_north_west,u_upload:v1446840633:production:blanks:ibs7cls1uuxnuwgy7pev,x_-409,y_-299/b_rgb:eeeeee/c_limit,f_auto,h_630,q_90,w_630/v1609350006/production/designs/18044448_0.jpg",
    price : "$17.00",
    imageAlt: "",
    href: '',
    color: 'White'
},
{
  id: 2,
  name : "HXH Long Sleeve Shirt",
  imageSrc: "https://res.cloudinary.com/teepublic/image/private/s--oFg59hnV--/t_Resized%20Artwork/c_crop,x_10,y_10/c_fit,h_541/c_crop,g_north_west,h_588,w_441,x_-47,y_-24/g_north_west,u_upload:v1446840601:production:blanks:wahaid4l0xhexez2gwtn,x_-456,y_-323/b_rgb:eeeeee/c_limit,f_auto,h_630,q_90,w_630/v1574344099/production/designs/6826690_0.jpg",
  price : "$22.00",
  imageAlt: "",
  href: '',
  color: 'Black'
},
{
  id: 3,
  name : "Black Clover Asta Tee Shirt",
  imageSrc: "https://res.cloudinary.com/teepublic/image/private/s--V3p5qLmu--/t_Resized%20Artwork/c_crop,x_10,y_10/c_fit,h_626/c_crop,g_north_west,h_626,w_470,x_-11,y_0/g_north_west,u_upload:v1462829024:production:blanks:a59x1cgomgu5lprfjlmi,x_-406,y_-325/b_rgb:eeeeee/c_limit,f_auto,h_630,q_90,w_630/v1583614463/production/designs/8423188_0.jpg",
  price : "$15.00",
  imageAlt: "",
  href: '',
  color: 'White'
}
  // More products...
]

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="bg-white">
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h1 className="text-6xl font-bold tracking-tight text-gray-900">Welcome</h1>

        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  )
}


