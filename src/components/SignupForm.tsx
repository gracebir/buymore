import React, { useState } from 'react'
import TextField from './TextField'
import Link from 'next/link'
import ComboBoxInput from './ComboBoxInput'
import { functUser } from '@/data'

function SignupForm() {
    const [funct, setFunct] = useState("")
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
    }
    return (
        <form onSubmit={handleSubmit} className='sm:col-span-1 lg:col-span-2 flex flex-col gap-9'>
            <div className='text-center flex flex-col gap-4'>
                <h1 className='text-xl font-bold'>Create your Free Account</h1>
                <span>Enter your information to continue</span>
            </div>
            <div className='grid lg:grid-cols-2 sm:grid-cols-1 gap-4'>
                <TextField
                    label='First Name'
                    typeInput='text'
                    placeholder='First Name' />
                <TextField
                    label='Last Name'
                    typeInput='text'
                    placeholder='Last Name' />
                <TextField
                    label='E-mail Address'
                    typeInput='email'
                    placeholder='Email Address' />
                <TextField
                    label='Password'
                    typeInput='password'
                    placeholder='Enter Your Password' />
                <TextField
                    label='Confirm Password'
                    typeInput='password'
                    placeholder='Confirm Your Password' />
                <TextField
                    label='Physical Address'
                    typeInput='text'
                    placeholder='Address' />
                <TextField
                    label='Phone Number'
                    typeInput='text'
                    placeholder='Phone Number' />
                <ComboBoxInput
                    data={functUser}
                    label='Function (Buyer or Seller)'
                    placeholder='Are you Buyer/Seller'
                    text={funct}
                    setText={setFunct}
                />
                <button type='submit' className='bg-blue-color lg:col-span-2 sm:col-span-1 py-2 rounded-md'>
                    Sign Up
                </button>
                <div className='flex justify-center lg:col-span-2 sm:col-span-1'>
                    <p>Do you have an account ? <Link className='text-blue-400 font-bold hover:text-blue-color' href={"/signin"}>Sign In</Link></p>
                </div>
            </div>
        </form>
    )
}

export default SignupForm
