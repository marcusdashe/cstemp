import React from 'react'
import {IoIosArrowForward} from 'react-icons/io'
const Services = () => {
    const service=[
        {
            img:'/assets/ux.svg',
            title:'Training Artisans',
            sub:'Providing training for skilled labor to construction companies, organizations and developers on a temporary or permanent basis. Providing training to up-skill builders, developers and supervisors.'
        },
        {
            img:'/assets/web.svg',
            title:'Labor Outsourcing',
            sub:'In line with our core objectives, we have a pool of trained and competent artisans in the major construction trades (Masonry, Carpentry, Plumbing, Electrical, Tiling, Painting and Steel Fabrication) to be supplied to construction companies and other estate developers who would require their services.'
        },
        {
            img:'/assets/market.svg',
            title:'Marketing',
            sub:'Lessons on design that cover then most recent developments.'
        }
    ]
  return (
    <div className='container mx-auto items-center py-10'>
        <p className='text-lg text-[#8D161A] text-center font-medium'>Our services</p>
        <p className='text-3xl font-semibold text-center py-3'>We provide assessment and certification<br /> services 
        to experienced artisans, job placements, <br />labor outsourcing and artisans awards programs.

        </p>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-16 pt-10">
{service.map((ser,i)=>{
    return(
        <div className='px-6 py-8 rounded-xl bg-gray-50 hover:bg-purple-600 group border border-gray-300' key={i}>
            <div className="flex gap-3 items-center">
            {/* <img src={ser.img} alt="services" /> */}
            <p className='text-2xl group-hover:text-white font-semibold '>{ser.title}</p>
            </div>
           
            <p className='text-base group-hover:text-white pr-6 py-2'>{ser.sub}</p>
            <button className='flex gap-2 items-center text-purple-600 group-hover:text-white'>Learn More <IoIosArrowForward/> </button>
        </div>
    )
})}
</div>
    </div>
  )
}

export default Services