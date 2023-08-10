import React from 'react'
import Navbar from '../features/navbar/Navbar'
import ProductDetail from '../features/product-list/components/ProductDetail'
import ProductList from '../features/product-list/components/ProductList'

export default function Home() {
  return (
    <div>
        <Navbar>
        <ProductList></ProductList>
        
        </Navbar>
    </div>
  )
}
