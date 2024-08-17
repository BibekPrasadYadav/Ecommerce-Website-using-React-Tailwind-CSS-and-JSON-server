import React, { useEffect } from "react";
import Navbar from "../features/navbar/Navbar";
import ProductDetail from "../features/product-list/components/ProductDetail";
import ProductList from "../features/product-list/components/ProductList";
import Footer from "../features/common/Footer";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const isLoggedInUser = localStorage.getItem("login");
  console.log(isLoggedInUser);
  const navigate = useNavigate();

  useEffect(() => {
    const checkLogin = () => {
      console.log(
        "Effect running with isLoggedInUser:",
        localStorage.getItem("login")
      );
      const user = localStorage.getItem("login");
      if (user === "true") {
        console.log("Navigating to /");
        navigate("/");
      }
    };

    checkLogin();
  }, [navigate]);

  return (
    <div>
      <Navbar>
        <ProductList></ProductList>
      </Navbar>
      <Footer></Footer>
    </div>
  );
}
