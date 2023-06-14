import CartComponent from '@/components/Cart'
import CartMobile from '@/components/CartMobile'
import Layout from '@/components/Layout'
import SummaryCard from '@/components/SummaryCard'
import { AppContext } from '@/context/productContext'
import Link from 'next/link'
import React, { useContext } from 'react'
import { RiShoppingBag3Line } from 'react-icons/ri'

function Cart() {
  const { cart } = useContext(AppContext)
  console.log(cart?.length)
  return (
    <Layout>
      <div className="lg:py-8 py-6 flex justify-between gap-4 lg:gap-7 flex-col items-start lg:flex-row">
        <div className='flex-1 w-full flex flex-col gap-6 min-h-[70vh]'>
          <div className='flex justify-between'>
            <h3>Shopping Cart</h3>
            <button className="bg-blue-color font-semibold px-4 py-2 rounded-md">
              Clear Cart
            </button>
          </div>
          <div>
            {cart?.length! > 0 ? (
              <>
                <div className="lg:grid grid-cols-4 w-full gap-4 hidden">
                  <div className='hidden col-span-4 lg:grid grid-cols-4 border-b border-gray-600 pb-5'>
                    {["Items", "Quantity", "SubTotal", "Remove"]
                      .map((item) => (
                        <span key={item} className='col-span-1'>{item}</span>
                      ))}
                  </div>
                  <div className='col-span-4'>
                    {cart?.map((item, _) => (
                      <CartComponent
                        title={item.title}
                        description={item.description}
                        image={item.image}
                        key={item.$id}
                        quantity={item.quantity}
                        price={item.price}
                        category={item.category}
                        $id={item.$id}
                      />
                    ))}
                  </div>
                </div>
                <div className='lg:hidden grid grid-cols-1 gap-4'>
                  {cart?.map((item, _) => (
                    <CartMobile
                      title={item.title}
                      key={item.$id}
                      image={item.image}
                      description={item.description}
                      quantity={item.quantity}
                      price={item.price}
                      category={item.category}
                      $id={item.$id}
                    />
                  ))}
                </div>
              </>
            ) : (
              <div className='flex flex-col gap-3 items-center'>
                <RiShoppingBag3Line className='text-gray-400' size={70} />
                <h3 className='text-xl font-bold'>Your Cart Is Empty</h3>
                <p className='text-center'>If you hesitate to buy a product,add it first in your shopping cart.</p>
                <Link className="bg-blue-color px-4 py-2 font-semibold rounded-md hover:bg-blue-400 duration-300" href={"/"}>Continue Shopping</Link>
              </div>
            )}
          </div>
          {/* go back to home page button */}
          <Link className="border border-gray-700 rounded-md hover:text-blue-color duration-300 hover:border-blue-color max-w-[180px] px-4 py-2" href={"/"}>Continue Shopping</Link>
        </div>
        <SummaryCard />
      </div>
    </Layout>
  )
}

export default Cart
