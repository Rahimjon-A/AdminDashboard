import React from 'react'

const Status = () => {
  return (
    <div className='bg-white grow rounded-lg border' >
        <div className='flex items-center justify-between mb-[36px] pt-[32px] px-[32px] ' >
            <div>
                <p className=' text-[19px] font-bold' >Unresolved tickets</p>
                <span className='text-[12px] text-[--grey] ' >Group: <span className='text-[12px] text-[#4B506D]' > Support</span></span>
            </div>
            <p className='text-[--blue] font-semibold  text-[14px]' >View details</p>
        </div>

        <div className=' px-[32px] mt-[20px] flex items-center justify-between pb-[18px] border-b'>
            <p className='text-[14px] font-semibold leading-4 ' >Waiting on Feature Request</p>
            <span className='text-[14px] text-[--grey] ' >4238</span>
        </div>
        <div className=' px-[32px] mt-[20px] flex items-center justify-between pb-[18px] border-b'>
            <p className='text-[14px] font-semibold leading-4 ' >Awaiting Customer Response</p>
            <span className='text-[14px] text-[--grey] ' >1005</span>
        </div>
        <div className=' px-[32px] mt-[20px] flex items-center justify-between pb-[18px] border-b'>
            <p className='text-[14px] font-semibold leading-4 ' >Awaiting Developer Fix</p>
            <span className='text-[14px] text-[--grey] ' >914</span>
        </div>
        <div className=' px-[32px] mt-[20px] flex items-center justify-between pb-[18px]'>
            <p className='text-[14px] font-semibold leading-4 ' >Pending</p>
            <span className='text-[14px] text-[--grey] ' >281</span>
        </div>
    </div>
  )
}

export default Status