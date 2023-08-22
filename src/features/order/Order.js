import React from 'react'
import { useSelector } from 'react-redux'
import { selectedOrders } from './orderSlice'

export default function order() {
    const order=useSelector(selectedOrders)
  return (
    
    <div>order</div>
  )
}
