import { AppContext } from '@/context/productContext'
// import { loadStripe } from '@stripe/stripe-js'
import React, { useContext } from 'react'

// const stripePromise = loadStripe(process.env.public_key!)

function SummaryCard() {
  const createChekout = async () => {
    // const stripe = await stripePromise
  }
  const { subTotal} = useContext(AppContext)
  return (
    <div className="w-full lg:w-[350px] border rounded-md border-gray-700 flex flex-col gap-4 pb-3">
      <div className='px-4 flex justify-between py-3 border-b border-gray-700'>
        <h3 className='font-bold'>Summary</h3>
      </div>
      <div className='px-4 flex justify-between'>
        <h3>Sub Total</h3>
        <span>${subTotal}</span>
      </div>
      <div className='px-4 flex justify-between'>
        <h3>Shipping Fees</h3>
        <span>0</span>
      </div>
      <div className='px-4 flex border-t pt-2 border-gray-700 flex-col gap-4'>
        <div className='flex justify-between'>
          <h3 className='font-bold'>Total</h3>
          <span className='font-bold'>${subTotal}</span>
        </div>
        <button onClick={createChekout} role='link' className='bg-blue-color py-2 rounded-md'>Checkout</button>
      </div>
    </div>
  )
}

export default SummaryCard
