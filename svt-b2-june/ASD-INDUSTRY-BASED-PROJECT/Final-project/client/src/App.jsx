import { BrowserRouter,Routes,Route } from "react-router-dom"
import Navbardata from "./components/Navbardata"
import Home from "./pages/Home"
import AddDustbin from "./pages/AddDustbin"
const App = ()=> {

  return <>
  <BrowserRouter>
  <Navbardata/>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
       <Route path="/add" element={<AddDustbin/>}></Route>
    </Routes>
  </BrowserRouter>

  </>

}
export default App