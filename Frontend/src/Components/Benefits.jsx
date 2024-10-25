import { React, useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

import Girl from '../Images/Benefit1.jpg';
import { FaCircleHalfStroke } from "react-icons/fa6"

const Benefits = () => {

    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: "ease-out-cubic"
        });
    }, []);

    return (
        <div className='bg-gray-300 w-full py-[90px]'>
            <div className='ss:grid ss:grid-cols-2 px-7'>
                <img className='md:mt-[50px] ss:mt-[80px] rounded-xl mt-[-50px]' src={Girl} alt="" />
                <div className='flex flex-col se:pl-[50px] st:pl-[px]'>
                    <h1 data-aos="zoom-out" data-aos-delay="300" className='aos-init text-center mm:text-[40px] md:text-[30px] ss:text-[25px] se:text-[30px] st:text-[26px] text-[23px] font-serif ss:mt-0 mt-9'>
                        Our Learning Benefits
                    </h1>
                    <div data-aos="zoom-in-up" data-aos-delay="400" className='aos-init flex mr:pt-4 se:pt-4 st:pt-5 pt-4 items-center'>
                        <FaCircleHalfStroke className='text-orange-400 mr:text-[30px] st:text-[23px] text-[20px] ss:text-[25px] se:text-[25px]' />
                        <p className='pl-5 mr:text-[25px] ss:text-[21px] se:text-[26px] st:text-[23px] text-[20px] se:text-left font-serif'>Self Paced Programs</p>
                    </div><br />
                    <p data-aos="zoom-in-up" data-aos-delay="300" className='aos-init pl-[49px] md:text-[17px] ss:text-[16px] se:mt-0 st:mt-[-9px] se:text-[19px]'>We know how busy you are and we would not want to add to it, this is why our programs are made
                        at your own speed not ours
                    </p>
                    <br />
                    <div data-aos="zoom-in-up" data-aos-delay="300" className='aos-init flex mr:pt-4 sm:pt-1 items-center'>
                        <FaCircleHalfStroke className='text-orange-400 st:text-[23px] text-[20px] mr:text-[30px] se:text-[25px] ss:text-[25px]' />
                        <p className='pl-5 mr:text-[25px] ss:text-[21px] st:text-[23px] text-[20px] se:text-left st:text-center se:text-[26px] font-serif'>100% Online</p>
                    </div><br />
                    <p data-aos="zoom-in-up" data-aos-delay="300" className='aos-init pl-[49px] md:text-[17px] ss:text-[16px] se:mt-0 st:mt-[-9px] se:text-[19px]'>All programs are incorporated on an online platform which means you get to learn from the comfort of your
                        social media platform
                    </p>
                    <br />
                    <div data-aos="zoom-in-up" data-aos-delay="300" className='aos-init flex mr:pt-4 sm:pt-1 items-center'>
                        <FaCircleHalfStroke className='text-orange-400 st:text-[23px] text-[20px] mr:text-[30px] se:text-[25px] ss:text-[25px]' />
                        <p className='pl-5 mr:text-[25px] ss:text-[21px] st:text-[23px] text-[20px] se:text-left st:text-center se:text-[26px] font-serif'>Adaptable Duration</p>
                    </div><br />
                    <p data-aos="zoom-in-up" data-aos-delay="300" className='aos-init pl-[49px] md:text-[17px] ss:text-[16px] se:mt-0 st:mt-[-9px] se:text-[19px]'>With professionals on board, we take pride in making our students finish early so that they can move on to becoming better
                    </p>
                    <br />
                </div>
            </div>
        </div>
    )
}

export default Benefits