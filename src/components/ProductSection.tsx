import { productProps, productsProp } from '@/type'
import React, { useEffect, useState } from 'react'
import Product from './Product'
import LoadingProduct from './LoadingProduct'
const categories = ["All", "Fashion", "Furniture", "Electronic", "Gaming"]

function ProductSection({products}: productsProp) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isLoading, setLoading] = useState(true)

  const toggleCategories = (i: number) => {
    setActiveIndex(i)
  }

  useEffect(()=> {
    if(products){
      setLoading(false)
    } else {
      setLoading(true)
    }
  }, [])


  return (
    <section className='mt-10 lg:mt-14 flex flex-col gap-8'>
      <div className='flex flex-col gap-7 items-center'>
        <h1 className="text-xl font-bold text-center">Explore Popular Producs</h1>
        <div className='lg:flex flex-row gap-5 hidden'>
          {categories.map((item, i) => (
            <button 
            onClick={() => toggleCategories(i)} 
            key={i} 
            className={`border px-5 py-2 rounded-3xl hover:bg-dark-color hover:border-blue-color ${activeIndex === i ? 'border-blue-color bg-dark-color' : 'border-dark-color'}`}>
              {item}
            </button>
          ))}
        </div>
      </div>
      <div className='py-8 grid mx-auto md:mx-0 gap-6 md:gap-7 sm:grid-cols-2 grid-flow-row-dense grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3'>
        {/* products */}
        {isLoading ?
          Array(8).fill(0).map((_, i) => (
            <LoadingProduct key={i} />
          ))
          : products.map((product, _)=> (
              <Product
                title={product.title}
                category={product.category}
                price={product.price}
                image={product.image}
                id={product.id}
                key={product.id}
              />
            )
          )}
      </div>
    </section>
  )
}

export default ProductSection
