import React from 'react'
import TextField from './TextField'
import Link from 'next/link'

function SignInForm() {
  return (
    <form className='col-span-1 flex flex-col gap-9'>
      <div className='text-center flex flex-col gap-4'>
        <h1 className='text-xl font-bold'>Welcome Back</h1>
        <span>Enter your credentials to access your account</span>
      </div>
      <div className='flex flex-col gap-4'>
        <TextField
         label='E-mail Address' 
         typeInput='email'
         placeholder='Email Address'/>
         <TextField
         label='Password' 
         typeInput='password'
         placeholder='Enter Your Password'/>
         <div className='flex justify-end'>
            <Link className='hover:text-blue-color text-gray-300' href={"/forget"}>Forgot password</Link>
         </div>
         <button className='bg-blue-color py-2 rounded-md'>
            Sign In
        </button>
        <div className='flex justify-center'>
            <p>Don't have an account ? <Link className='text-blue-400 font-bold hover:text-blue-color' href={"/signup"}>Sign Up</Link></p>
         </div>
      </div>
    </form>
  )
}

export default SignInForm
