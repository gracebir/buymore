import Layout from '@/components/Layout'
import TextField from '@/components/TextField'
import Link from 'next/link'
import React from 'react'

function ForgetPassword() {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
    }
    return (
        <Layout>
            <div className='py-8 min-h-[60vh] flex flex-col justify-center'>
                <div className="border flex flex-col gap-6 border-dark-color rounded-md max-w-3xl w-full mx-auto p-4">
                    <div className='flex flex-col gap-2 items-center'>
                        <h1 className='text-xl font-bold'>Forgot your password?</h1>
                        <p>Enter your email address to send you a reset link</p>
                    </div>
                    <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
                        <TextField
                            label='E-mail Address'
                            typeInput='email'
                            placeholder='Email Address' />
                        <button type='submit' className='bg-blue-color py-2 rounded-md'>
                            Send Link
                        </button>
                        <div className='flex justify-center'>
                            <p>Remembered the password ? <Link className='text-blue-400 font-bold hover:text-blue-color' href={"/signin"}>Login</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </Layout>
    )
}

export default ForgetPassword
