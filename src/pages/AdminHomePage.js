import React from 'react'
import ProductList from '../features/product-list/components/ProductList'
import Navbar from '../features/navbar/Navbar'
import AdminProductList from '../features/admin/components/AdminProductList'

export default function AdminHomePage() {
  return (
    <div>
        <Navbar>
        <AdminProductList></AdminProductList>
        
        </Navbar>
    </div>
  )
}
