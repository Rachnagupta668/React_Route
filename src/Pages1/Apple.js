import React from 'react'
import Products from '../Components/Products';
let productsData = [
  {
    
    id: 1, name: "MackBook", description: "Apple MackBook", price: "$1000", img:"https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1452&q=80"
  },
  {
    id: 2, name: "MackBook", description: "Apple MackBook", price: "$1000", img:"https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1452&q=80"

  },
  {
    id: 3, name: "MackBook", description: "Apple MackBook", price: "$1000", img:"https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1452&q=80"

  }
]
const Apple = () => {
  return (
    <div className='apple'>{
      productsData.map((item) => (
          <Products name={item.name} img={item.img} des={item.description} price={item.price}/>


      ))
      }
    </div>
  )
}

export default Apple