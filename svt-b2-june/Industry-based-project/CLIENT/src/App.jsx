import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Navbardata from './components/Navbardata'
import Home from './pages/Home'
import Adddustbin from './pages/Adddustbin'

const App = () => {

  return <>
  <BrowserRouter>
  <Navbardata/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/add' element={<Adddustbin/>}></Route>
    </Routes>
  </BrowserRouter>

  </>
}

export default App