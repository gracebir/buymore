import Layout from '@/components/Layout'
import SummaryCard from '@/components/SummaryCard'
import Link from 'next/link'
import React from 'react'
import { RiShoppingBag3Line } from 'react-icons/ri'

function Cart() {
  return (
    <Layout>
      <div className="lg:py-8 py-6 flex justify-between gap-4 lg:gap-7 flex-col items-start lg:flex-row">
        <div className='flex-1 w-full flex flex-col gap-6 min-h-[70vh] justify-between'>
          <div className='flex justify-between'>
            <h3>Shopping Cart</h3>
            <button className="bg-blue-color font-semibold px-4 py-2 rounded-md">
              Clear Cart
            </button>
          </div>
          <div>
            <div className='flex flex-col gap-3 items-center'>
              <RiShoppingBag3Line className='text-gray-400' size={70} />
              <h3 className='text-xl font-bold'>Your Cart Is Empty</h3>
              <p className='text-center'>If you hesitate to buy a product,add it first in your shopping cart.</p>
              <Link className="bg-blue-color px-4 py-2 font-semibold rounded-md hover:bg-blue-400 duration-300" href={"/"}>Continue Shopping</Link>
            </div>
          </div>
          {/* go back to home page button */}
          <Link className="border border-gray-700 rounded-md hover:text-blue-color duration-300 hover:border-blue-color max-w-[180px] px-4 py-2" href={"/"}>Continue Shopping</Link>
        </div>
        <SummaryCard/>
      </div>
    </Layout>
  )
}

export default Cart
