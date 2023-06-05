import Link from 'next/link'
import React from 'react'
import { IoCloseOutline } from 'react-icons/io5'
import { BsArrowRightShort } from 'react-icons/bs'
import { RiShoppingBag3Line } from 'react-icons/ri'

function CartModal({ setIsCartOpen }: { setIsCartOpen: React.Dispatch<React.SetStateAction<boolean>> }) {
    return (
        <div onClick={() => setIsCartOpen(false)} className="fixed hidden bottom-0 lg:flex justify-end w-full h-screen inset-0 top-0 right-0 left-0 backdrop-blur-sm z-50">
            <div onClick={(e) => e.stopPropagation()} className='w-1/4 flex flex-col justify-between bg-dark-color h-full py-4'>
                <div className='flex justify-between items-center px-5 py-4'>
                    <h3 className='font-semibold'>Shopping Cart</h3>
                    <IoCloseOutline onClick={() => setIsCartOpen(false)} className='cursor-pointer' size={20} />
                </div>
                <div className='flex-1 px-5 flex flex-col justify-center'>
                    <div className='flex flex-col gap-3 items-center'>
                        <RiShoppingBag3Line className='text-gray-400' size={70} />
                        <h3 className='text-xl font-bold'>Your Cart Is Empty</h3>
                        <p className='text-center'>If you hesitate to buy a product,add it first in your shopping cart.</p>
                    </div>
                </div>
                <div className='flex flex-col gap-4 py-2 border-t border-gray-700 px-5'>
                    <div className='flex justify-between items-center'>
                        <h3 className='font-semibold'>SubTotal</h3>
                        <span>$0</span>
                    </div>
                    <button className='bg-blue-color flex items-center justify-center gap-3 rounded-md py-2'>
                        <span>Proceed To Checkout</span>
                        <BsArrowRightShort />
                    </button>
                    <Link className='w-full text-center py-2 duration-300 hover:text-blue-color' href={"/cart"}>
                        Go To Cart Page
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default CartModal
