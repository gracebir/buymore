import React from 'react'
import Skeleton from 'react-loading-skeleton'

function LoadingProduct() {
  return (
    <div className="w-[310px] md:w-[350px] rounded-[20px] flex flex-col gap-4 shadow-lg bg-dark-color p-4">
      <div className='w-[140px] md:w-[150px] mx-auto md:h-[200px] h-[190px] py-2'>
        <Skeleton width={140} height={200}/>
      </div>
      <div className="flex flex-col gap-4 bg-blue-500 bg-opacity-30 w-full rounded-[20px] p-5">
        <div className='flex flex-col'>
          <Skeleton />
          <Skeleton width={200}/>
        </div>
        <div className="flex justify-between items-center flex-row">
          <Skeleton width={40}/>
          <Skeleton circle width={48} height={48} />
        </div>
      </div>
    </div>
  )
}

export default LoadingProduct
