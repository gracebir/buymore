import { productProps } from '@/type'
import Image from 'next/image'
import React from 'react'
import { IoCloseOutline } from 'react-icons/io5'
import { HiPlusSm } from 'react-icons/hi'
import {BiMinus} from 'react-icons/bi'

function CartComponent({$id, title, price, image, quantity}:productProps) {
  return (
    <div className='grid grid-cols-4 border-b border-gray-600 py-4'>
      <div className='flex flex-row gap-4 col-span-1'>
        <div className='lg:w-20 w-16 h-14 border border-dark-color rounded-md lg:h-24'>
          <Image className="w-full h-full object-cover" alt={title} src={image} width={200} height={300}/>
        </div>
        <span className='font-bold'>{(title).substring(0, 15)}</span>
      </div>
      <div className='col-span-3 grid lg:grid-cols-3 sm:grid-cols-2 sm:gap-4'>
        <div className="col-span-1 px-2">
          <div className='flex'>
            <span className='border border-gray-400 px-2 py-1 text-blue-color cursor-pointer'><BiMinus size={20}/></span>
            <span className='border border-gray-400 px-3 py-1 text-blue-color font-bold'>{quantity}</span>
            <span className='border border-gray-400 px-2 py-1 text-blue-color cursor-pointer'><HiPlusSm size={20}/></span>
          </div> 
        </div>
        <span className='col-span-1'>${price}</span>
        <span className='col-span-1 flex justify-center lg:items-end md:items-start pl-5'>
          <button className='w-8 h-8 bg-red-300 bg-opacity-50 rounded-full flex items-center justify-center'>
          <IoCloseOutline className='text-white' size={20}/>
          </button>
        </span>
      </div>
    </div>
  )
}

export default CartComponent
