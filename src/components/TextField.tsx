import { inputType } from '@/type'
import React from 'react'

function TextField({ label, placeholder, typeInput, onChange, className }: inputType) {
    return (
        <div className={`flex flex-col gap-2 ${className}`}>
            <label htmlFor="">{label}</label>
            <input className="outline-none py-2 px-3 bg-very-dark text-white-color border border-dark-color placeholder:text-gray-400" type={typeInput} placeholder={placeholder} onChange={onChange} />
        </div>
    )
}

export default TextField
