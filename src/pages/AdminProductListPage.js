import React from 'react'
import AdminProductList from '../features/admin/components/AdminProductList'
import Navbar from '../features/navbar/Navbar'

export default function AdminProductListPage() {
  return (
    <>
    <Navbar>
    <AdminProductList></AdminProductList>
    </Navbar>
    </>
  )
}
