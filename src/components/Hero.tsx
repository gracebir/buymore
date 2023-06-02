import { categories } from '@/data'
import React from 'react'
import { BsChevronRight } from 'react-icons/bs'

function Hero() {
    return (
        <section className="flex py-5 h-[50vh] flex-row gap-6">
            <div className='bg-dark-color hidden lg:flex flex-col rounded-md shadow-lg w-[300px]'>
                <div className="border-b border-gray-600 px-4 py-4">
                    <span className="font-bold">Categories</span>
                </div>
                <div className='flex flex-col gap-6 px-4 py-4'>
                    {categories.map((cat, key) => (
                        <div key={key} className='flex items-center cursor-pointer justify-between'>
                            <div className='flex items-center gap-4 text-gray-400'>
                                <cat.Icon />
                                <span className='font-bold text-base'>{cat.text}</span>
                            </div>
                            <BsChevronRight size={13} className="text-gray-400" />
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex-1 relative rounded-md h-[50vh] w-full overflow-hidden">
                <div className="bg-banner bg-cover w-full rounded-md h-full">
                    <div className='bg-black bg-opacity-30 w-full h-full'></div>
                </div>
            </div>
        </section>
    )
}

export default Hero
