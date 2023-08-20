import React, { useEffect } from "react";
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
import Protected from "./features/auth/components/Protected";
import { fetchItemsByUserIdAsync, selectItems } from "./features/cart/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { selectLoggedInUser } from "./features/auth/authSlice";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Protected><Home></Home></Protected>,
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
    element: <Protected><CartPage></CartPage></Protected>,
  },
  {
    path: "checkout",
    element: <Protected><Checkout></Checkout></Protected>,
  },
  {
    path: "product-detail/:id",
    element: <Protected><ProductDetailPage></ProductDetailPage></Protected>,
  },
]);

function App() {
  const dispatch=useDispatch()
  const user=useSelector(selectLoggedInUser)
  useEffect(()=>{
    if(user){
    dispatch(fetchItemsByUserIdAsync(user.id))
    }
},[dispatch,user.id]);
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
