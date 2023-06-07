import Layout from '@/components/Layout'
import Skeleton from 'react-loading-skeleton'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { BsCart3, BsArrowLeftShort } from 'react-icons/bs'
import { databases } from '@/appwrite'
import { productsDocumentProps } from '@/type'

function ProductDetails() {
  const router = useRouter()
  let id = router.query.id!
  const [isLoading, setIsLoading] = useState(true)
  const [product, setProduct] = useState<productsDocumentProps>({
    title: '',
    price: 0,
    description: '',
    image: '',
    catergory: '',
  })

  // fetching a single product
  useEffect(() => {
    const fetchProduct = async () => {
      if (id) {
        // const response = await fetch(`https://fakestoreapi.com/products/${router.query.id}`)
        // const data: productProps = await response.json()
        const response = databases.getDocument(
          process.env.NEXT_PUBLIC_DATABASE as string,
          process.env.NEXT_PUBLIC_PRODUCT_COLLECTION as string,
          id as string
        )
        response.then((res) => {
          console.log(res)
          setIsLoading(false)
          setProduct(res as productsDocumentProps)
        })
      }
    }
    fetchProduct()
  }, [])
  return (
    <Layout>
      <div className='py-4 lg:py-6 flex flex-col gap-6'>
        <h1 className='text-xl font-bold'>See Details</h1>
        <div className='grid lg:grid-cols-8 gap-6'>
          <div className="lg:w-full lg:col-span-5 sm:col-span-8 flex-1 border border-dark-color lg:h-[600px] h-[400px] bg-white lg:rounded-xl rounded-xl w-full">
            {isLoading ?
              <Skeleton className='w-full h-full lg:rounded-xl rounded-xl' /> :
              <Image
                className="w-full h-full lg:object-contain object-contain lg:rounded-xl rounded-xl"
                width={300}
                height={200}
                src={!product.image ? "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" : product.image}
                alt="image" />
            }
          </div>
          <div className="px-7 flex flex-col gap-4 lg:col-span-3 sm:col-span-8 lg:gap-8">
            <p className="uppercase text-[.9rem] font-medium lg:font-semibold">{product.catergory || <Skeleton />}</p>
            <h1 className="text-[1.5rem] lg:text-2xl leading-8 lg:leading-[30px] font-bold">{product.title || <Skeleton />}</h1>
            <p className="text-gray-300 text-[1rem] lg:text-[1rem] leading-[25px] lg:leading-[30px]">
              {product.description || <Skeleton count={4} />}
            </p>
            <div className="flex flex-col gap-4 lg:gap-4">
              <div className="flex justify-between lg:flex-col lg:gap-2">
                <div className="flex gap-4 items-center">
                  <h1 className="font-medium text-base lg:text-xl lg:font-bold">${product.price || <Skeleton />}</h1>
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
        <Link className="border border-gray-700 flex items-center gap-2 rounded-md hover:text-blue-color duration-300 hover:border-blue-color max-w-[210px] px-4 py-2" href={"/"}>
          <BsArrowLeftShort size={18} />
          <span>Continue Shopping</span>
        </Link>
      </div>
    </Layout>
  )
}

export default ProductDetails
