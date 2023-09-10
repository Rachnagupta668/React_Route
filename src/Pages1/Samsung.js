import React from 'react'


import Products from '../Components/Products';
let productsData = [
  {
    id: 2, name: "Samsung", description: " Samsung", price: "$1000", img: "https://images.livemint.com/img/2023/03/26/1140x641/GB3_PR_dl6_1679845797289_1679845876892_1679845876892.jpg"

  },
  {
    id: 2, name: "Samsung", description: " Samsung", price: "$1000", img: "https://images.livemint.com/img/2023/03/26/1140x641/GB3_PR_dl6_1679845797289_1679845876892_1679845876892.jpg"

  },
  {
    id: 2, name: "Samsung", description: " Samsung", price: "$1000", img: "https://images.livemint.com/img/2023/03/26/1140x641/GB3_PR_dl6_1679845797289_1679845876892_1679845876892.jpg"

  }
]
const Samsung = () => {
  return (
    <div className='apple'>{
      productsData.map((item) => (
        <Products name={item.name} img={item.img} des={item.description} price={item.price} />


      ))
    }
    </div>
  )
}



export default Samsung