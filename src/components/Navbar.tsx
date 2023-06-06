import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { CiSearch } from 'react-icons/ci'
import { AiOutlineUser } from 'react-icons/ai'
import { BsCart3 } from 'react-icons/bs'
import { BiMenuAltLeft } from 'react-icons/bi'
import { navLinks } from '@/data'
import Dropdown from './Dropdown'
import NavbarMob from './NavbarMob'
import CartModal from './CartModal'

function Navbar() {
    const [scrollValue, setScrollValue] = useState(0)
    const [isNavOpen, setNavIsOpen] = useState(false)
    const [text, setText] = useState("")
    const [isCartOpen, setIsCartOpen] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            setScrollValue(window.pageYOffset)
        })
    }, [scrollValue])

    return (
        <header className='w-full flex flex-col'>
            {/* navbar top */}
            <div className='w-full border-b border-dark-color fixed lg:sticky z-50 py-6 bg-very-dark'>
                <div className="flex flex-row justify-between max-w-6xl mx-auto px-4 lg:px-0">
                    <div onClick={() => setNavIsOpen(!isNavOpen)} className="flex lg:hidden bg-blue-color w-8 h-8 items-center justify-center rounded-full cursor-pointer">
                        <BiMenuAltLeft size={20} />
                    </div>
                    {/* logo */}
                    <div className='flex gap-8 items-center'>
                        <Link href="/" className="text-blue-color flex flex-col gap-1 items-center cursor-pointer">
                            <p className='font-bold text-xl lg:text-2xl'>bymore</p>
                            <div className='lg:w-[45px] w-[40px] h-[3px] lg:h-[4px] bg-blue-color'></div>
                        </Link>
                        <div className='border hidden border-gray-500 lg:flex w-[450px] rounded-sm'>
                            <input className="w-full px-3 py-2 outline-none bg-very-dark rounded-tl-sm rounded-bl-sm" type="text" placeholder="What are you looking for?" />
                            <div className='w-12 cursor-pointer flex items-center justify-center bg-blue-color rounded-tr-sm rounded-br-sm'>
                                <CiSearch size={20} />
                            </div>
                        </div>
                    </div>

                    <div className="flex gap-10">
                        <Link className="hidden lg:flex items-center gap-3" href="/signin">
                            <AiOutlineUser size={22} className='text-blue-color' />
                            <div className="flex flex-col">
                                <span className='text-gray-color text-sm'>Hello, Sign in</span>
                                <span>My Account</span>
                            </div>
                        </Link>
                        <div onClick={() => setIsCartOpen(!isCartOpen)} className="hidden lg:flex items-center gap-3 cursor-pointer">
                            <div className="relative">
                                <span className="absolute top-0 right-0 text-[12px] text-center rounded-full bg-red-900 h-[1.10rem] w-[1.20rem]">{0}</span>
                                <BsCart3 size={35} className="text-blue-color" />
                            </div>
                            <div className="hidden lg:flex flex-col">
                                <span className='text-gray-color text-sm'>My cart</span>
                                <span>${0}</span>
                            </div>
                        </div>
                        <Link href={"/cart"} className="relative block lg:hidden">
                            <span className="absolute top-0 right-0 text-[10px] text-center rounded-full bg-red-900 h-[1rem] w-[1rem]">{0}</span>
                            <BsCart3 size={30} className="text-blue-color" />
                        </Link>
                    </div>
                </div>
            </div>
            {/* navbar buttom */}
            <div className={`${scrollValue > 91 ? "fixed bg-very-dark top-0 z-50" : "sticky"} w-full hidden lg:block border-b border-dark-color py-6`}>
                <div className="max-w-6xl mx-auto flex gap-6 items-center">
                    <Dropdown text={text} setText={setText} />
                    {navLinks.map((navlink, i) => (
                        <Link className="font-bold duration-300 hover:text-blue-color" key={i} href={navlink.href}>{navlink.link}</Link>
                    ))}
                </div>
            </div>
            {isNavOpen && (<NavbarMob />)}
            {isCartOpen && (<CartModal setIsCartOpen={setIsCartOpen} />)}
        </header>
    )
}

export default Navbar
