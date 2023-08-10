import React from "react";
import { Counter } from "./features/counter/Counter";

import "./App.css";
import Navbar from "./features/navbar/Navbar";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import Signup from "./features/auth/components/Signup";

// import { BrowserRouter,Route,Routes } from 'react-router-dom';

import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Cart from "./features/cart/Cart";
import CartPage from "./pages/CartPage";
import Checkout from "./pages/Checkout";
import ProductDetail from "./features/product-list/components/ProductDetail";
import ProductDetailPage from "./pages/ProductDetailPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "login",
    element: <LoginPage></LoginPage>,
  },
  {
    path: "signup",
    element: <Signup></Signup>,
  },
  {
    path: "cart",
    element: <CartPage></CartPage>,
  },
  {
    path: "checkout",
    element: <Checkout></Checkout>,
  },
  {
    path: "product-detail",
    element: <ProductDetailPage></ProductDetailPage>,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />

      
      {/* <BrowserRouter>
    <Routes>
    <Route path='/' element={<Home></Home>}/>
    <Route path='login' element={<LoginPage></LoginPage>}/>
    <Route path='signup' element={<Signup></Signup>}/>
    </Routes>
   </BrowserRouter> */}
    </>
  );
}

export default App;
