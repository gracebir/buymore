import ContactForm from '@/components/ContactForm'
import Layout from '@/components/Layout'
import React from 'react'
import { BsWhatsapp } from 'react-icons/bs'
import { AiOutlineMail } from 'react-icons/ai'
import { FaMapMarkerAlt } from 'react-icons/fa'
import { FiFacebook, FiInstagram } from 'react-icons/fi'
import { TfiTwitter } from 'react-icons/tfi'

function Contact() {
  return (
    <Layout>
      <div className='py-4 flex flex-col gap-6'>
        <div className='py-2 flex flex-col gap-1 text-center'>
          <h1 className='text-xl font-bold'>Contact Us</h1>
          <span className="font-medium">Let us know how we can help you.Or Any suggestion?</span>
        </div>
        <div className='border border-dark-color grid gap-8 lg:grid-cols-3 sm:grid-cols-1 rounded-md p-4 min-h-[53vh]'>
          <div className='bg-blue-color text-dark-color rounded-md h-full col-span-1 p-5 flex flex-col gap-6 lg:justify-between'>
            <div className='flex flex-col gap-1'>
              <h3 className='text-xl font-bold'>Contact informations</h3>
              <span className='font-semibold'>Let us know if have any suggestion</span>
            </div>
            <div className='flex flex-col gap-3'>
              <div className='flex flex-row gap-3'>
                <BsWhatsapp size={20} />
                <span className='font-semibold'>+000 000 000 000</span>
              </div>
              <div className='flex flex-row gap-3'>
                <AiOutlineMail size={20} />
                <span className='font-semibold'>example@gmail.com</span>
              </div>
              <div className='flex flex-row gap-3'>
                <FaMapMarkerAlt size={20} />
                <span className='font-semibold'>New York, USA</span>
              </div>
            </div>
            <div className="flex gap-4">
              <a className='hover:text-gray-200 duration-300' href="https://facebook.com/buymore">
                <FiFacebook size={20} />
              </a>
              <a className='hover:text-gray-200 duration-300' href="https://twitter.com/buymore">
                <TfiTwitter size={20} />
              </a>
              <a className='hover:text-gray-200 duration-300' href="https://www.instagram.com/buymore">
                <FiInstagram size={20} />
              </a>
            </div>
          </div>
          <div className='lg:col-span-2 sm:col-span-1'>
            <ContactForm />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Contact
