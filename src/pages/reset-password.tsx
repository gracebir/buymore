import Layout from '@/components/Layout'
import TextField from '@/components/TextField'
import Link from 'next/link'
import React from 'react'

function ResetPassword() {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
    }
    return (
        <Layout>
            <div className='py-8 min-h-[60vh] flex flex-col justify-center'>
                <div className="border flex flex-col gap-6 border-dark-color rounded-md max-w-3xl w-full mx-auto p-4">
                    <div className='flex flex-col gap-2 items-center'>
                        <h1 className='text-xl font-bold'>Create a new password </h1>
                    </div>
                    <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
                        <TextField
                            label='New Password'
                            typeInput='password'
                            placeholder='Enter Your New Password' />
                        <TextField
                            label='Confirm Password'
                            typeInput='password'
                            placeholder='Confirm Your Password' />
                        <button type='submit' className='bg-blue-color py-2 rounded-md'>
                            Reset Password
                        </button>
                    </form>
                </div>
            </div>
        </Layout>
    )
}

export default ResetPassword
