import React from 'react'
import Navbar from '../features/navbar/Navbar'
import ProductDetail from '../features/product-list/components/ProductDetail'
import ProductList from '../features/product-list/components/ProductList'
import Footer from '../features/common/Footer'

export default function Home() {
  return (
    <div>
        <Navbar>
        <ProductList></ProductList>
        
        </Navbar>
        <Footer></Footer>
    </div>
  )
}
