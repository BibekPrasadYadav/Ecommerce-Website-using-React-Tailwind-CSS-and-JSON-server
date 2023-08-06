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
