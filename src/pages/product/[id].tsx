import Layout from '@/components/Layout'
import Link from 'next/link'
import React, { useEffect } from 'react'
import { BsCart3 } from 'react-icons/bs'

function ProductDetails() {
  useEffect(() => { }, [])
  return (
    <Layout>
      <div className='py-4 lg:py-6 flex flex-col gap-6'>
        <h1 className='text-xl font-bold'>See Details</h1>
        <div className='grid lg:grid-cols-8 gap-6'>
          <div className="lg:w-full lg:col-span-5 sm:col-span-8 flex-1 lg:h-[500px] h-[350px] lg:rounded-xl rounded-xl w-full">
            <img className="w-full h-full cursor-pointer lg:object-fill object-cover lg:rounded-xl rounded-xl" src="" alt="" />
          </div>
          <div className="px-7 flex flex-col gap-4 lg:col-span-3 sm:col-span-8 lg:gap-8">
            <p className="text-orange-color uppercase text-[.9rem] font-medium lg:font-semibold">sneaker company</p>
            <h1 className="text-[1.7rem] lg:text-3xl leading-8 lg:leading-[30px] font-bold">Fall Limited Edition Sneakers</h1>
            <p className="text-dark-grayish-blue text-[1rem] lg:text-[1.2rem] leading-[25px] lg:leading-[30px]">These low-profile sneakers are your perfect casual wear companion.
              Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.
            </p>
            <div className="flex flex-col gap-4 lg:gap-4">
              <div className="flex justify-between lg:flex-col lg:gap-2">
                <div className="flex gap-4 items-center">
                  <h1 className="font-medium text-xl lg:text-2xl lg:font-semibold">$125.00</h1>
                </div>
              </div>
              <div className="flex flex-col gap-3 lg:flex-row lg:gap-4">
                <button className="bg-blue-color flex-1 py-3 rounded-xl font-bold cursor-pointer flex justify-center gap-2">
                  <BsCart3 size={20} />
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
        <Link className="border border-gray-700 rounded-md hover:text-blue-color duration-300 hover:border-blue-color max-w-[180px] px-4 py-2" href={"/"}>Continue Shopping</Link>
      </div>
    </Layout>
  )
}

export default ProductDetails
