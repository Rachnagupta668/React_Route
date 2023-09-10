import React from 'react';
import Home from "./Pages/Home";
import About from "./Pages/About";
import Blog from "./Pages/Blog";
import Contacts from "./Pages/Contacts";
import Navbar from './Pages/Navbar';

//pages1 
import Products from './Components/Products';
import { Routes,Route } from 'react-router-dom';
import Brand from "./Pages1/Brand"
import Apple from './Pages1/Apple';
import Nokia from './Pages1/Nokia';
import Samsung from './Pages1/Samsung';
const App  = () => {
  return (
    <div>

      <Routes>       
        
         <Route path="/brand" element={<Brand/>}>

        {/* <Route path="/products" element={<Products/>}/> */}
        <Route path="" element={<Apple/>}/>
        <Route path="nokia" element={<Nokia/>}/>
        <Route path="samsung" element={<Samsung/>}/>
</Route>

      </Routes>
            
    </div>
  )
}

export default App




//basics1
 {/* <Navbar/>

      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/contacts' element={<Contacts/>}/>


      </Routes> */}
