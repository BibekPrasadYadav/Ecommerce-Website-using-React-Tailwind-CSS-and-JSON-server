import React from 'react'
import Navbar from '../features/navbar/Navbar'
import ProductDetail from '../features/product-list/components/ProductDetail'
import Footer from '../features/common/Footer'

export default function ProductDetailPage() {
  return (
    <>
    <Navbar>
        <ProductDetail></ProductDetail>
    </Navbar>
    <Footer></Footer>
    </>
  )
}
