import React from 'react'
import { useContext } from 'react'
import {ShopContext} from '../context/ShopContext'
import { useSearchParams } from 'react-router-dom'
import { useEffect } from 'react'
import { useState } from 'react'
const Verify = () => {
 const {navigate,token,setCartItems,backendUrl}=useContext(ShopContext)
 const [searchParams,setSearchParams] =useStateParams()

 const success=searchParams.get('success')
 const orderId =searchParams.get('orderId')

 const verifyPayment=async()=>{
    try{
      if(!token){
        return null;
      }
    }
    catch(error){

    }
 }
    return (
    <div>
      
    </div>
  )
}

export default Verify
