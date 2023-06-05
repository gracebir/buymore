import { navLinks } from '@/data'
import Link from 'next/link'
import React from 'react'
import { CiSearch} from 'react-icons/ci'

function NavbarMob() {
    return (
        <div className="fixed block lg:hidden top-20 inset-0 backdrop-blur-sm right-0 left-0 w-full h-[92vh] z-50">
            <div className='h-[38vh] bg-dark-color py-4 flex flex-col gap-4'>
                <div className='flex flex-col gap-6 px-4'>
                    {navLinks.map((navlink, i) => (
                        <Link className="font-semibold duration-300 text-sm hover:text-blue-color" key={i} href={navlink.href}>{navlink.link}</Link>
                    ))}
                </div>
                <div className="border-y border-gray-600 py-2 px-4">
                    <div className='border border-gray-600 w-[90%] flex rounded-sm'>
                        <input className="w-full px-3 py-2 text-sm outline-none bg-very-dark rounded-tl-sm rounded-bl-sm" type="text" placeholder="What are you looking for?" />
                        <div className='w-12 cursor-pointer flex items-center justify-center bg-blue-color rounded-tr-sm rounded-br-sm'>
                            <CiSearch size={20} />
                        </div>
                    </div>
                </div>
                <button className="bg-blue-color hover:bg-opacity-50 duration-300 py-2 rounded-sm mx-4">
                    Sign In
                </button>
            </div>
        </div>
    )
}

export default NavbarMob
