import { Button } from './ui/button'
import {
    Card,
    CardContent,
} from "@/components/ui/card"
import { IoIosArrowForward } from "react-icons/io";
import { CiTwitter } from "react-icons/ci";
import { RiLinkedinLine } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import { Input } from "@/components/ui/input"

const Footer = () => {
    return (
        <>
            <div className='bg-[#011740] mt-10'>
                <div className='max-w-10x2 mx-auto px-4 md:px-20 pt-24'>
                    <div className='footer-bg'>
                        <div className='text-center'>
                            <p className='text-white text-[39px] font-semibold'>
                                Leverage technology to streamline
                            </p>
                            <p className='text-white text-[39px] font-semibold'> credit-linked insurance</p>
                            <p className='lato-regular text-lg text-white mt-2'>Share a few quick details to understand how we can best help.</p>
                            <Button className='rounded-full text-[#003DB8] bg-white font-bold text-base lato-regular mt-6 mb-16'>Lets Talk <IoIosArrowForward />
                            </Button>
                        </div>
                        <Card className=''>
                            <CardContent className='px-10 md:px-16 pt-10 pb-7'>
                                <div className='flex flex-col md:flex-row justify-between gap-5'>
                                    <div>
                                        <img src="/images/logo.png" alt="" />
                                    </div>
                                    <div className='flex flex-row gap-2'>
                                        <a href="#" aria-label="Twitter">
                                            <div className='rounded-full border border-gray-400 p-2 w-10 h-10 flex justify-center items-center'>
                                                <CiTwitter className='text-xl text-gray-400' />
                                            </div>
                                        </a>
                                        <a href="#" aria-label="Linkedin">
                                            <div className='rounded-full border border-gray-400 p-2 w-10 h-10 flex justify-center items-center'>
                                                <RiLinkedinLine className='text-xl text-gray-400' />
                                            </div>
                                        </a>
                                        <a href="#" aria-label="Instagram">
                                            <div className='rounded-full border border-gray-400 p-2 w-10 h-10 flex justify-center items-center'>
                                                <FaInstagram className='text-xl text-gray-400' />
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <hr className='my-5 h-0.5 bg-gray-500 border-xl' />
                                <div className="grid grid-col-1 md:grid-cols-5 gap-4">
                                    <div className='flex flex-col gap-3'>
                                        <p className='font-semibold text-black text-[15px]'>Products</p>
                                        <p className='lato-regular text-[15px]'>Retail Insurance</p>
                                        <p className='lato-regular text-[15px]'>LendPro</p>
                                        <p className='lato-regular text-[15px]'>EmbedPro</p>
                                        <p className='lato-regular text-[15px]'>Console</p>
                                    </div>
                                    <div className='flex flex-col gap-3'>
                                        <p className='font-semibold text-black text-[15px]'>Industries</p>
                                        <p className='lato-regular text-[15px]'>Insurance Brokers</p>
                                        <p className='lato-regular text-[15px]'>Banks</p>
                                        <p className='lato-regular text-[15px]'>NBFCS</p>
                                        <p className='lato-regular text-[15px]'>Fintech</p>
                                        <p className='lato-regular text-[15px]'>Embedded Insurance</p>
                                    </div>
                                    <div className='flex flex-col gap-3'>
                                        <p className='font-semibold text-black text-[15px]'>Other links</p>
                                        <p className='lato-regular text-[15px]'>About us</p>
                                        <p className='lato-regular text-[15px]'>Careers</p>
                                        <p className='lato-regular text-[15px]'>News & Media</p>
                                        <p className='lato-regular text-[15px]'>APIs</p>
                                        <p className='lato-regular text-[15px]'>Case studies</p>
                                        <p className='lato-regular text-[15px]'>Blogs</p>
                                        <p className='lato-regular text-[15px]'>FAQs</p>
                                    </div>
                                    <div className='md:col-span-2 flex flex-col gap-3'>
                                        <p className='font-semibold text-black text-[15px]'>Get in touch</p>
                                        <div className='flex items-center border-b border-gray-400 pb-4'>
                                            <img src='/images/email.png' alt="Email" className='w-5 h-5 mr-2' />
                                            <Input className='border-0 outline-none placeholder-gray-400' placeholder='info@youremailid' />
                                        </div>
                                        <div className='flex items-center border-b border-gray-400 pb-4'>
                                            <img src='/images/phone.png' alt="Phone" className='w-5 h-5 mr-2' />
                                            <Input className='border-0 outline-none placeholder-gray-400' placeholder='Phone no' />
                                        </div>
                                        <Button className='rounded-full text-white bg-[#003DB8] w-fit px-10 font-bold text-base lato-regular mt-6 mb-16'>Continue <IoIosArrowForward />
                                        </Button>
                                    </div>
                                </div>
                                <hr className='my-5 h-0.5 bg-gray-500 border-xl' />
                                <p className='lato-regular text-[18px]'>© 2024 Webomindapps. Privacy Policy</p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;
