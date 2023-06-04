import { productProps } from '@/type'
import Image from 'next/image'
import React from 'react'
import { BsCart3 } from 'react-icons/bs'

function Product({ title, category, price, image }: productProps) {
    return (
        <div className="w-[310px] md:w-[350px] rounded-[20px] flex flex-col gap-4 shadow-lg bg-dark-color p-4">
            <div className='w-[140px] md:w-[150px] mx-auto md:h-[200px] h-[190px] py-2'>
                <Image className='w-full h-full object-fit' width={200} height={300} src={image} alt={title}/>
            </div>
            <div className="flex flex-col gap-4 bg-blue-500 bg-opacity-30 w-full rounded-[20px] p-5">
                <div className='flex flex-col'>
                    <span className="text-blue-color text-xl font-bold">{title.length < 15 ? title: `${(title).substring(0, 15)}...`}</span>
                    <span className='text-blue-400'>{category}</span>
                </div>
                <div className="flex justify-between items-center flex-row">
                    <span className="text-blue-color font-bold text-[1.1rem]">
                        ${price}
                    </span>
                    <span className="h-12 border cursor-pointer border-blue-color w-12 flex text-blue-color items-center hover:text-white hover:bg-blue-color justify-center rounded-full">
                        <BsCart3 size={20}/>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Product
