import { productProps } from '@/type'
import React from 'react'
import { IoCloseOutline } from 'react-icons/io5'
import { HiPlusSm } from 'react-icons/hi'
import { BiMinus } from 'react-icons/bi'
import Image from 'next/image'

function CartMobile({ $id, title, price, image, quantity }: productProps) {
    return (
        <div className='flex justify-between py-4 border-b border-gray-500'>
            <div className='flex gap-2'>
                <div className="w-16 h-16">
                    <Image className="w-full h-full object-center" alt={title} src={image} width={200} height={300} />
                </div>
                <span className='font-bold'>{(title).substring(0, 15)}</span>
            </div>
            <div className='flex flex-col gap-3'>
                <div className='flex'>
                    <span className='border border-gray-400 px-2 py-1 text-blue-color cursor-pointer'><BiMinus size={20} /></span>
                    <span className='border border-gray-400 px-3 py-1 text-blue-color font-bold'>{quantity}</span>
                    <span className='border border-gray-400 px-2 py-1 text-blue-color cursor-pointer'><HiPlusSm size={20} /></span>
                </div>
                <div className='flex items-center justify-between'>
                    <span className=''>${price}</span>
                    <button className='w-8 h-8 bg-red-300 bg-opacity-50 rounded-full flex items-center justify-center'>
                        <IoCloseOutline className='text-white' size={20} />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CartMobile
