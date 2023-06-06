import Layout from '@/components/Layout'
import SignupForm from '@/components/SignupForm'
import React from 'react'

function SignUp() {
  return (
    <Layout>
      <div className='py-8'>
        <div className='border border-dark-color max-w-3xl grid lg:grid-cols-2 sm:grid-cols-1 p-4 mx-auto'>
          <SignupForm/>
        </div>
      </div>
    </Layout>
  )
}

export default SignUp
