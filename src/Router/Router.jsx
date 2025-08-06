import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "../Components/Home/Home"
import Layout from "../Components/Layout/Layout"
import Cart from "../Components/Cart/Cart"
import Impresiones from "../Components/Impresiones/Impresiones"
import Libreria from "../Components/Libreria/Libreria"

const Router = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/impresiones" element={<Impresiones />} />
          <Route path="/libreria" element={<Libreria />} />
          <Route path="/cart" element={<Cart />} />
        </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default Router