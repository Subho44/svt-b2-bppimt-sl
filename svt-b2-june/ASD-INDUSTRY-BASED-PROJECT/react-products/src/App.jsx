import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Service from './components/Service'
import Navbar from './components/Navbar'
const App = () => {

  return <>
  <BrowserRouter>
  <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
       <Route path='/about' element={<About name="raj"/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
         <Route path='/service' element={<Service/>}></Route>
    </Routes>
  </BrowserRouter>

  </>
}

export default App