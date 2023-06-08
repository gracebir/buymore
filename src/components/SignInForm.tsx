import React, {useContext} from 'react'
import TextField from './TextField'
import Link from 'next/link'
// import { redirect } from 'next/navigation'
import { useFormik } from 'formik'
import { account } from '@/appwrite'
import { useRouter } from 'next/router'
import { signInSchema } from '@/utils/validations'
import { AppContext } from '@/context/productContext'

function SignInForm() {
  const {setUser} = useContext(AppContext)
  const { push } = useRouter()
  const {handleSubmit, handleChange, values, errors} = useFormik({
    initialValues:{
      email:'',
      password:''
    },
    onSubmit: (values, actions) => {
      const response = account.createEmailSession(values.email, values.password);
      response.then(
        (res)=> {
          setUser(res)
          push("/")
          actions.resetForm()
        },
        (error)=> {
          console.log(error)
        }
        )

    },
    validationSchema: signInSchema
  })
  // const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault()
  // }
  return (
    <form onSubmit={handleSubmit} className='col-span-1 flex flex-col gap-9'>
      <div className='text-center flex flex-col gap-4'>
        <h1 className='text-xl font-bold'>Welcome Back</h1>
        <span>Enter your credentials to access your account</span>
      </div>
      <div className='flex flex-col gap-4'>
        <TextField
          id='email'
          value={values.email}
          errorMsg={errors.email}
          onChange={handleChange}
          label='E-mail Address'
          typeInput='email'
          placeholder='Email Address' />
        <TextField
          id='password'
          label='Password'
          value={values.password}
          errorMsg={errors.password}
          onChange={handleChange}
          typeInput='password'
          placeholder='Enter Your Password' />
        {/* <div className='flex justify-end'>
          <Link className='hover:text-blue-color text-gray-300' href={"/forget-password"}>Forgot password</Link>
        </div> */}
        <button type='submit' className='bg-blue-color py-2 rounded-md'>
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
