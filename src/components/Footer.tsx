import React from 'react'
import { FiFacebook, FiInstagram } from 'react-icons/fi'
import { TfiTwitter } from 'react-icons/tfi'

function Footer() {
  return (
    <footer className="w-full py-6 border-t border-dark-color">
      <div className="flex max-w-6xl gap-8 mx-auto lg:justify-between lg:flex-row flex-col items-center">
      <p className='text-gray-400 text-center lg:text-start font-semibold'>Copyright &copy; 2023. All Rights Reserved. Developed by <a className="hover:text-gray-200 duration-300" href="https://github.com/gracebir">Grace</a></p>
      <div className="flex gap-6 text-gray-400">
        <a className='hover:text-gray-200 duration-300' href="https://facebook.com/buymore">
            <FiFacebook size={20}/>
        </a>
        <a className='hover:text-gray-200 duration-300' href="https://twitter.com/buymore">
            <TfiTwitter size={20}/>
        </a>
        <a className='hover:text-gray-200 duration-300' href="https://www.instagram.com/buymore">
            <FiInstagram size={20}/>
        </a>
      </div>
      </div>
    </footer>
  )
}

export default Footer
