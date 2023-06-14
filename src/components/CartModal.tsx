import Link from 'next/link'
import React, { useContext } from 'react'
import { IoCloseOutline } from 'react-icons/io5'
import { BsArrowRightShort } from 'react-icons/bs'
import { RiShoppingBag3Line } from 'react-icons/ri'
import { AppContext } from '@/context/productContext'
import Image from 'next/image'

function CartModal({ setIsCartOpen }: { setIsCartOpen: React.Dispatch<React.SetStateAction<boolean>> }) {
    const { subTotal, cart, removeToBasket } = useContext(AppContext)
    return (
        <div onClick={() => setIsCartOpen(false)} className="fixed hidden bottom-0 lg:flex justify-end w-full h-screen inset-0 top-0 right-0 left-0 backdrop-blur-sm z-50">
            <div onClick={(e) => e.stopPropagation()} className='w-[30%] flex flex-col justify-between bg-dark-color h-full py-4'>
                <div className='flex justify-between items-center px-5 py-4'>
                    <h3 className='font-semibold'>Shopping Cart</h3>
                    <IoCloseOutline onClick={() => setIsCartOpen(false)} className='cursor-pointer' size={20} />
                </div>
                {cart ? (
                    <div className='flex-1 px-5 flex flex-col'>
                        {cart.map((pro, _) => (
                            <div key={pro.$id} className='flex flex-row gap-4 py-4 border-b border-gray-500'>
                                <div className='w-[70px] h-[90px] rounded-md border border-dark-color'>
                                    <Image className='w-full h-full object-contain rounded-md' src={pro.image} alt='' width={60} height={50} />
                                </div>
                                <div className="flex flex-col justify-between  flex-1">
                                    <span className='uppercase text-xs'>{pro.category}</span>
                                    <span className='text-sm font-bold'>{(pro.title).substring(0, 15)}</span>
                                    <div className='flex justify-between'>
                                        <div className='flex gap-3 items-center'>
                                            <span className='bg-blue-400 px-3 text-sm py-1 font-semibold rounded-full'>
                                                ${pro.price}
                                            </span>
                                            <span className='text-sm'>x {pro.quantity}</span>
                                        </div>
                                        <button onClick={()=> removeToBasket?.(pro.$id!)} className='px-2 py-2 rounded-full bg-red-400'>
                                            <IoCloseOutline/>
                                        </button>
                                    </div>
                                    
                                </div>
                            </div>
                        ))}

                        <Link className='mt-5 mx-auto px-5 py-2 bg-very-dark rounded-3xl' href={"/cart"}>Go to Cart</Link>
                    </div>
                ) : (
                    <div className='flex-1 px-5 flex flex-col justify-center'>
                        <div className='flex flex-col gap-3 items-center'>
                            <RiShoppingBag3Line className='text-gray-400' size={70} />
                            <h3 className='text-xl font-bold'>Your Cart Is Empty</h3>
                            <p className='text-center'>If you hesitate to buy a product,add it first in your shopping cart.</p>
                        </div>
                    </div>
                )}

                <div className='flex flex-col gap-4 py-2 border-t border-gray-700 px-5'>
                    <div className='flex justify-between items-center'>
                        <h3 className='font-semibold'>SubTotal</h3>
                        <span>${subTotal}</span>
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
