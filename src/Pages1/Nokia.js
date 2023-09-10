import React from 'react'
import Products from '../Components/Products';
let productsData = [
  {

    id: 1, name: "Nokia", description: " Nokia", price: "$1000", img: "https://www.gccbusinessnews.com/wp-content/uploads/2020/12/GBN_NokiaPureBookX14_14122020.jpg"
  },
  {
    id: 2, name: "Nokia", description: " Nokia", price: "$1000", img: "https://www.gccbusinessnews.com/wp-content/uploads/2020/12/GBN_NokiaPureBookX14_14122020.jpg"

  },
  {
    id: 3, name: "Nokia", description: " Nokia", price: "$1000", img: "https://www.gccbusinessnews.com/wp-content/uploads/2020/12/GBN_NokiaPureBookX14_14122020.jpg"

  }
]
const Nokia = () => {
  return (
    <div className='apple'>{
      productsData.map((item) => (
        <Products name={item.name} img={item.img} des={item.description} price={item.price} />


      ))
    }
    </div>
  )
}



export default Nokia