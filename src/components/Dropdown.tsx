import { categories } from '@/data'
import { dropdownProps } from '@/type'
import React, { useState } from 'react'
import { BsChevronDown, BsChevronUp, BsChevronRight } from 'react-icons/bs'
import { LuLayoutGrid } from 'react-icons/lu'


function Dropdown({ setText, text }: dropdownProps) {
    const [open, setOpen] = useState(false)
    const handleDropdownText = (i: number) => {
        setText(categories[i].text)
        setOpen(false)
    }
    return (
        <div className="relative flex w-[300px]">
            <div onClick={() => setOpen(!open)} className="bg-blue-color px-3 py-2 cursor-pointer flex items-center w-full justify-between rounded-sm">
                <div className='flex gap-2 items-center'>
                    <LuLayoutGrid size={23} />
                    <span className='font-semibold'>{text ? text : "Trending Categories"}</span>
                </div>
                {open ? <BsChevronUp /> : <BsChevronDown />}
            </div>
            {open && (
                <div className='absolute top-12 right-0 bg-dark-color flex flex-col w-full z-50 rounded-sm shadow-lg'>
                    <div className="border-b border-gray-600 px-4 py-4">
                        <span className="font-bold">Categories</span>
                    </div>
                    <div className='flex flex-col gap-6 px-4 py-4'>
                        {categories.map((cat, key) => (
                            <div onClick={() => handleDropdownText(key)} key={key} className='flex items-center cursor-pointer justify-between'>
                                <div className='flex items-center gap-4 text-gray-400'>
                                    <cat.Icon />
                                    <span className='font-bold text-base'>{cat.text}</span>
                                </div>
                                <BsChevronRight size={13} className="text-gray-400" />
                            </div>
                        ))}
                    </div>
                </div>
            )}

        </div>
    )
}

export default Dropdown
