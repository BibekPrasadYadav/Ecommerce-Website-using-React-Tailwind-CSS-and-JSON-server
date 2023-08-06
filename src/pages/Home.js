import React from 'react'
import ProductList from '../features/product-list/ProductList'
import Navbar from '../features/navbar/Navbar'

export default function Home() {
  return (
    <div>
        <Navbar>
        <ProductList></ProductList>
        </Navbar>
    </div>
  )
}
