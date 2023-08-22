import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectLoggedInUser } from '../../auth/authSlice'
import { fetchLoggedInUserAsync, fetchLoggedInUserOrderAsync, selectUserOrder } from '../userSlice'
import { fetchLoggedInUserOrder } from '../userAPI'

export default function Order() {
    const users=useSelector(selectLoggedInUser)
    const dispatch=useDispatch()
    const orders=useSelector(selectUserOrder)

    useEffect(()=>{
       
        dispatch(fetchLoggedInUserAsync(users?.id))
    },[])
  return (
    <>
    {orders?.map((order)=>(
        <div>{order.id}</div>
  ))}
   </>
  )
  
}
