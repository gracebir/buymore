import React from 'react'

function ContactForm() {
    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
    }
    return (
        <form onSubmit={handleSubmit} className=" grid lg:grid-cols-2 gap-4 sm:grid-cols-1">
            <div className="flex flex-col col-span-1 gap-2">
                <label>First Name</label>
                <input placeholder='First Name' className="outline-none py-2 px-3 bg-very-dark text-white-color border border-dark-color placeholder:text-gray-400" type="text" />
            </div>
            <div className="flex flex-col gap-2 col-span-1">
                <label>Last Name</label>
                <input placeholder='Last Name' className="outline-none py-2 px-3 bg-very-dark text-white-color border border-dark-color placeholder:text-gray-400" type="text" />
            </div>
            <div className="flex flex-col gap-2 col-span-1">
                <label>Email Address</label>
                <input placeholder='Email Address' className="outline-none py-2 px-3 bg-very-dark text-white-color border border-dark-color placeholder:text-gray-400" type="text" />
            </div>
            <div className="flex flex-col gap-2 col-span-1">
                <label>Phone(optional)</label>
                <input placeholder='Phone Number' className="outline-none py-2 px-3 bg-very-dark text-white-color border border-dark-color placeholder:text-gray-400" type="text" />
            </div>
            <div className="flex flex-col gap-2 lg:col-span-2 sm:col-span-1">
                <label>Your Message</label>
                <textarea placeholder='Your Message...' className='outline-none py-2 px-3 bg-very-dark text-white-color border border-dark-color placeholder:text-gray-400' name="" cols={20} rows={10}></textarea>
            </div>
            <div className='col-span-1'>
                <button className='bg-blue-color py-2 rounded-md lg:w-1/2 w-full'>
                    Send Message
                </button>
            </div>
        </form>
    )
}

export default ContactForm
