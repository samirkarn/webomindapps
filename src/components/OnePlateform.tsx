import React from 'react'
import { Button } from "./ui/button";
import { IoIosArrowForward } from "react-icons/io";

const OnePlateform = () => {
    return (
        <>
            <div className='max-w-10x2 mx-auto px-4 md:pl-20 mt-16'>
                <div className='flex flex-col md:flex-row'>
                    <div className='order-2 md:order-1 md:w-5/12 content-center relative'>
                        <p className='text-2xl md:text-[46px] font-semibold leading-8 md:leading-[60px] whitespace-nowrap overflow-visible'>Distribute and manage</p>
                        <p className='text-2xl md:text-[46px] font-semibold leading-8 md:leading-[60px] whitespace-nowrap overflow-visible'> insurance business in</p>
                        <p className='text-2xl md:text-[46px] font-semibold leading-8 md:leading-[60px] whitespace-nowrap overflow-visible text-[#EE1B30]'> one platform</p>
                        <div className='mt-4'>
                            <p className='font-normal text-[13px] leading-4 justify md:w-[90%]'>Manage your insurance business seamlessly using Webomindapps assurance platform. Increase revenue, expand product offerings.</p>
                        </div>
                        <div className='mt-8'>
                            <Button className="h-10 rounded-full px-4 backdrop-blur-lg">
                                <span>Schedule Demo</span><IoIosArrowForward className="text-lg"/>
                            </Button>
                        </div>
                    </div>
                    <div className='order-1 md:order-2 md:w-7/12 relative'>
                        <div className='relative overflow-hidden h-[400px]'>
                            <img src="/images/one-platform.png" alt="" className='object-cover h-full md:h-[135%] w-full'/>
                            <div className='absolute bottom-0 left-0 right-0 h-[20%] bg-gradient-to-t from-white to-transparent'></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OnePlateform
