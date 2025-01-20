"use client"

import React from 'react'
import { BsFillChatRightDotsFill } from 'react-icons/bs';
import { BsGlobeAmericas } from 'react-icons/bs';
import { IoIosCall } from 'react-icons/io';
import ContactPageForm from '@/components/ContactPageForm';
import { useInView } from 'react-intersection-observer';

const ContactPage = () => {
    const [ref, inView] = useInView();
    const contactData = [
        {
            title:"Email Us",
            desc:"Reach me via contact form given on the right side",
            address:"rahul.2002.dey@gmail.com"
        },
        {
            title:"Visit us",
            desc:"We can do wonders if you want to meet personally",
            address:"Hall-1, NIT Durgapur, Mahatma Gandhi Road, A-zone, PinCode-394510"
        },
        {
            title:"Call us",
            desc:"Mon - Fri From 8am to 5pm",
            address:"+91 89671 05804"
        },
    ]
  return (
    <div className='setBackground'>
        <div className='mx-auto py-20 flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-white lg:flex-row'>
            <div className='lg:w-[40%]'>
                <div className='flex flex-col gap-6 rounded-xl bg-[#1a1a1a] p-4 lg:p-6 border-2 border-[#8e8d8d]'>
                    {contactData.map((data,index)=>(
                        <div className='flex flex-col gap-[2px] p-3 text-sm text-richblack-200' key={index}>
                            <div  className='flex flex-row items-center gap-3'>
                                {(index===0 && <BsFillChatRightDotsFill className=' h-6 w-6'/>)}
                                {(index===1 && <BsGlobeAmericas className=' h-6 w-6'/>)}
                                {(index===2 && <IoIosCall className=' h-6 w-6'/>)}
                                <h1 className="text-lg font-semibold text-richblack-5">{data.title}</h1>
                            </div>
                                <p className="font-medium">{data.desc}</p>
                                <p className="font-semibold">{data.address}</p>
                            
                        </div>
                    ))}
                </div>
            </div>

            <div className='lg:w-[60%] bg-[#1a1a1a] rounded-xl'>
                <div className='border-2 border-[#8e8d8d] text-richblack-300 rounded-xl p-7 lg:p-14 flex gap-3 flex-col'>
                    <h1 ref={ref} className={`text-4xl leading-10 font-semibold text-richblack-5 text-heading3-bold
                    ${inView ? 'animate-button' : 'opacity-0'}`}>Got a Idea? We've got the skills. Let's team up</h1>
                    <p className="">Tell us more about yourself and what you're got in mind.</p>
                    <div className='mt-7'>
                        <ContactPageForm/> 
                    </div>
                </div>

            </div>
        </div>
        
    </div>
  )
}

export default ContactPage;