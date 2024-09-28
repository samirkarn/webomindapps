import React from 'react';
import { Button } from "./ui/button";
import { IoIosArrowForward } from "react-icons/io";

const ImageSlider = () => {
    return (
        <>
            <div className='mt-32 relative'>
                <div className='absolute right-20 top-12'>
                    <p className='text-2xl md:text-[42px] font-semibold leading-8 md:leading-[60px] text-right'>Distribute and manage insurance</p>
                    <p className='text-2xl md:text-[42px] font-semibold leading-8 md:leading-[60px] text-right'>business in <span className='text-[#EE1B30]'>one platform</span></p>
                </div>
                <div className='image-container'>
                    <img src="/images/1.png" alt="Image 1" className="image image-1" />
                    <img src="/images/2.png" alt="Image 2" className="image image-2" />
                    <img src="/images/3.png" alt="Image 3" className="image image-3" />
                    <img src="/images/4.png" alt="Image 4" className="image image-4" />
                    <img src="/images/5.png" alt="Image 5" className="image image-5" />
                    <img src="/images/6.png" alt="Image 6" className="image image-6" />
                    <img src="/images/7.png" alt="Image 7" className="image image-7" />
                    <img src="/images/8.png" alt="Image 8" className="image image-8" />
                    <img src="/images/9.png" alt="Image 9" className="image image-9" />
                    <img src="/images/10.png" alt="Image 10" className="image image-10" />
                </div>
            </div>
            <div className='max-w-10x2 mx-auto px-4 md:px-20 pt-24 mb-56'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
                    <div className='relative'>
                        <div>
                            <img src="/images/image-11.png" alt="" className='px-28' />
                        </div>
                        <div>
                            <img src="/images/mask-1.png" alt="" className='absolute bottom-10' />
                        </div>
                        <div>
                            <img src="/images/mask-2.png" alt="" className='absolute right-0 -bottom-24' />
                        </div>
                    </div>
                    <div>
                        <div>
                            <p className='text-2xl md:text-[42px] font-semibold leading-8 md:leading-[60px] text-right'>Distribute and manage </p>
                            <p className='text-2xl md:text-[42px] font-semibold leading-8 md:leading-[60px] text-right'>insurance business in </p>
                            <p className='text-2xl md:text-[42px] font-semibold leading-8 md:leading-[60px] text-right text-[#EE1B30]'>one platform</p>
                        </div>
                        <div className='my-4'>
                            <p className='font-normal text-[13px] leading-4 justify text-right'>Manage your insurance business seamlessly using Riskcovry's </p>
                            <p className='font-normal text-[13px] leading-4 justify  text-right'>assurance platform. Increase revenue, expand product </p>
                            <p className='font-normal text-[13px] leading-4 justify  text-right'>offerings.</p>
                        </div>
                        <div className='mt-8 flex justify-end'>
                            <Button className="h-10 rounded-full px-4 backdrop-blur-lg">
                                <span>Schedule Demo</span><IoIosArrowForward className="text-lg"/>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
};

export default ImageSlider;
