import React from 'react'
import call from '../Images/cc.JPG';
import { FaPhoneVolume } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";

const ContactUs = () => {


    return (
        <div id='contact' className='bg-[#01022e] w-full ms:flex flex flex-col-reverse ms:flex-row ms:pl-[30px] ms:pt-[70px] pb-10'>
            <div className='ms:ml-[70px]'>
                <div className='flex flex-col text-orange-500'>
                    <h1 className='font-bold text-[28px] se:text-[35px] sm:text-[40px] ms:text-[35px] ms:mt-0 text-center ms:text-start se:mt-8 text-orange-500 pb-1'>Contact Us</h1>
                    <h1 className='text-[20px] se:text-[23px] sm:text-[25px] ms:text-[20px] ms:mr-[50px] pt-5 text-center ms:text-start flex justify-center ms:justify-normal'>Wish to Inquire about admission, syllabus or anything else?</h1>
                    <p className='text-[24px] se:text-[26px] sm:text-[26.6px] ms:text-[30px] font-bold text-center ms:text-start mt-4 se:mt-3'>Call us or send us a mail</p><br />
                    <div className='ms:block hidden'>
                        <a href='tel: +2439012104873' rel='noreferrer' target='_blank'>
                            <div className='flex gap-3 items-center mt-3 hover:scale-95 text-[20px] font-semibold duration-500 mr-[220px]'>
                                <FaPhoneVolume className='text-[27px]' />
                                +234 913 494 2707
                            </div>
                        </a>
                        <a href='mailto:tmbi@mail.ee' rel='noreferrer' target='_blank'>
                            <div className='hover:scale-95 duration-500 ms:hidden text-[20px] gap-3 font-semibold flex items-center mt-10 mr-[220px]'>
                                <MdOutlineEmail className='text-[27px]' />
                                info@thronebusinessinstitute.com
                            </div>
                        </a>
                        <a href='mailto:tmbi@mail.ee' rel='noreferrer' target='_blank'>
                            <div className='hover:scale-95 duration-500 ms:flex hidden text-[20px] gap-3 font-semibold items-center mt-10 mr-[220px]'>
                                <MdOutlineEmail className='text-[27px]' />
                                info@thronebusinessinstituteswitzerland.com
                            </div>
                        </a>
                        <a href="https://wa.me/message/ZDO76R45EDU2K1" rel='noreferrer' target='_blank'>
                            <div className='hover:scale-95 text-[20px] mr-[220px] bg-white border-2 text-green-400 border-green-500 py-4 px-3 flex items-center gap-3 font-semibold mt-10 duration-500'>
                                <BsWhatsapp className='text-[35px] text-green-500 ' />
                                <p>Chat with an Admissions Advisor</p>
                            </div>
                        </a>
                    </div>
                    <div className='mr:grid mr:grid-cols-2 mr:mx-12 ms:hidden'>
                        <a href='tel: +2439012104873' rel='noreferrer' target='_blank' className=''>
                            <div className='flex flex-col gap-3 items-center pt-3 text-[20px] font-semibold hover:scale-90 duration-500'>
                                <FaPhoneVolume className='sv:text-[27px] text-[23.4px]' />
                                +234 913 494 2707
                            </div>
                        </a>
                        <a href='mailto:tmbi@mail.ee' rel='noreferrer' target='_blank'>
                            <div className='flex flex-col gap-3 items-center pt-3 text-[20px] font-semibold hover:scale-90 duration-500'>
                                <MdOutlineEmail className='sv:text-[27px] text-[23.4px]' />
                                info@thronebusinessinstitute.com
                            </div>
                        </a>
                    </div>
                    <a href="https://wa.me/message/ZDO76R45EDU2K1" rel='noreferrer' target='_blank'>
                        <div className='hover:scale-95 text-[20px] ms:hidden mx-5 bg-white border-2 text-green-400 border-green-500 py-4 px-3 flex flex-col sv:flex-row items-center justify-center sv:gap-3 font-semibold mt-10 duration-500'>
                            <BsWhatsapp className='text-[35px] text-green-500 ' />
                            <p className='text-center'>Chat with an Admissions Advisor</p>
                        </div>
                    </a>
                </div>
            </div>
            <div className='flex items-center justify-center ms:mr-[50px]'>
                <img className='rounded-[12px] scale-75 sm:scale-95 bg-black opacity-80' src={call} alt="" />
            </div>
        </div>
    )
}

export default ContactUs