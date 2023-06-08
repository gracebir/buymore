import { inputType } from '@/type'
import React from 'react'

function TextField({ label, id, placeholder, typeInput, onChange, value, className, isError = false, errorMsg }: inputType) {
    return (
        <div className={`flex flex-col gap-2 ${className}`}>
            <label htmlFor="">{label}</label>
            <input id={id} value={value} className={`outline-none py-2 px-3 bg-very-dark text-white-color border ${errorMsg ? 'border-red-800' : 'border-dark-color'} placeholder:text-gray-400`} type={typeInput} placeholder={placeholder} onChange={onChange} />
            {errorMsg && <span className='text-sm font-thin text-red-800'>{errorMsg}</span>}
        </div>
    )
}

export default TextField
