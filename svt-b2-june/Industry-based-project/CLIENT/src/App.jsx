import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Navbardata from './components/Navbardata'
import Home from './pages/Home'
import Adddustbin from './pages/Adddustbin'
import Register from './pages/Register'
import Login from './pages/Login'
import Privateroute from './utils/Privateroute'
import Dashboard from './pages/Dashboard'

const App = () => {

  return <>
  <BrowserRouter>
  <Navbardata/>
    <Routes>
     <Route path='/' element={<Register/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route element={<Privateroute/>}>
      <Route path='/home' element={<Home/>}></Route>
      <Route path='/add' element={<Adddustbin/>}></Route>
      <Route path='/dashboard' element={<Dashboard/>}></Route>
      </Route>
    </Routes>
  </BrowserRouter>

  </>
}

export default App