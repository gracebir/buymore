import React from 'react'
import TextField from './TextField'
import Link from 'next/link'
import { account } from '@/appwrite'
import { ToastContainer, toast } from 'react-toastify'
import { useFormik } from 'formik'
import { signUpSchema } from '@/utils/validations'
import { v4 as uuid } from 'uuid';

function SignupForm() {
    // const [funct, setFunct] = useState("")
    const { values, errors, handleChange, handleSubmit } = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
            confirmPassword: '',

        },
        onSubmit: (values, actions) => {
            const response = account.create(uuid(), values.email, values.password, values.name)
            response.then(
                (res) => {
                    toast("Account create succeFully!!", {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "dark",
                    })
                    console.log(res)
                },
                (err) => {
                    console.log(err)
                })
            actions.resetForm()
        },
        validationSchema: signUpSchema
    })

    return (
        <form autoComplete="off" onSubmit={handleSubmit} className='sm:col-span-1 lg:col-span-2 flex flex-col gap-9'>
            <div className='text-center flex flex-col gap-4'>
                <h1 className='text-xl font-bold'>Create your Free Account</h1>
                <span>Enter your information to continue</span>
            </div>
            <div className='grid lg:grid-cols-2 sm:grid-cols-1 gap-4'>
                <TextField
                    label='Name'
                    id='name'
                    typeInput='text'
                    value={values.name}
                    onChange={handleChange}
                    errorMsg={errors.name}
                    placeholder='Enter Your Name' />
                <TextField
                    label='E-mail Address'
                    typeInput='email'
                    id='email'
                    value={values.email}
                    onChange={handleChange}
                    errorMsg={errors.email}
                    placeholder='Email Address' />
                <TextField
                    label='Password'
                    id='password'
                    typeInput='password'
                    value={values.password}
                    onChange={handleChange}
                    errorMsg={errors.password}
                    placeholder='Enter Your Password' />
                <TextField
                    label='Confirm Password'
                    typeInput='password'
                    id='confirmPassword'
                    value={values.confirmPassword}
                    onChange={handleChange}
                    errorMsg={errors.confirmPassword}
                    placeholder='Confirm Your Password' />
                <button type='submit' className='bg-blue-color lg:col-span-2 sm:col-span-1 py-2 rounded-md'>
                    Sign Up
                </button>
                <div className='flex justify-center lg:col-span-2 sm:col-span-1'>
                    <p>Do you have an account ? <Link className='text-blue-400 font-bold hover:text-blue-color' href={"/signin"}>Sign In</Link></p>
                </div>
            </div>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
        </form>
    )
}

export default SignupForm
