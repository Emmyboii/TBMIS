import React from 'react'
// import img1 from '../Images/Testimonial/Img1.JPG';
import img2 from '../Images/Testimonial/Img2.JPG';
import img3 from '../Images/Testimonial/Img3.JPG';
import img4 from '../Images/Testimonial/Img4.JPG';
import img5 from '../Images/Testimonial/Img5.JPG';
import img6 from '../Images/Testimonial/Img6.JPG';
import img7 from '../Images/Testimonial/Img7.JPG';
import img8 from '../Images/Testimonial/Img8.JPG';
import img9 from '../Images/Testimonial/Img9.JPG';
import img10 from '../Images/Testimonial/Img10.JPG';
import { FaLinkedin } from "react-icons/fa6";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Testimonial = () => {

  var settings = {
    infinite: true,
    dots: true,
    speed: 700,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplaySpeed: 4000,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          autoplaySpeed: 4000,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <div className='py-10 px-8'>
      <h1 className='text-center sm:text-[40px] sx:text-[30px] text-[25px] font-bold pb-5'>OUR NIGERIAN GRADUATES LEAD THEIR PEERS</h1>
      <div>
        <Slider {...settings} >
          <div className='h-[320px] md:h-[290px] border-[3px] border-black rounded-[20px]'>
            <div className='items-center rounded-t-[15px] justify-center flex py-2'>
              <img src={img2} alt="" className='h-[74px] w-[70px] rounded-full' />
            </div>
            <div className='flex flex-col text-center justify-center items-center gap-1 p-3'>
              <a href="https://www.linkedin.com/in/susan-utomi-9465371a3?" rel='noreferrer' target='_blank'>
                <FaLinkedin className='text-[26px] text-blue-800' />
              </a>
              <p className='font-semibold'>SUSAN UTOMI.</p>
              <p className='font-semibold'>ENTERPRISE AMBASSADORS CONSULT INT'L.</p>
              <p className='font-semibold'>PROJECT MANAGEMENT COORDINATOR.</p>
            </div>
          </div>

          <div className='h-[320px] md:h-[290px] border-[3px] border-black rounded-[20px]'>
            <div className='items-center rounded-t-[15px] justify-center flex py-2'>
              <img src={img3} alt="" className='h-[74px] w-[70px] rounded-full' />
            </div>
            <div className='flex flex-col text-center justify-center items-center gap-1 p-3'>
              <a href="https://www.linkedin.com/in/emmanuel-okechukwu-mba?" rel='noreferrer' target='_blank'>
                <FaLinkedin className='text-[26px] text-blue-800' />
              </a>
              <p className='font-semibold'>EMMANUEL OKECHUKWU.</p>
              <p className='font-semibold'>LEDROUP GROUP.</p>
              <p className='font-semibold'>BRAND MANAGER.</p>
            </div>
          </div>

          <div className='h-[320px] md:h-[290px] border-[3px] border-black rounded-[20px]'>
            <div className='items-center rounded-t-[15px] justify-center flex py-2'>
              <img src={img4} alt="" className='h-[74px] w-[70px] rounded-full' />
            </div>
            <div className='flex flex-col text-center justify-center items-center gap-1 p-3'>
              <a href="https://www.linkedin.com/in/chukwunyere-emenike-3312421b2?" rel='noreferrer' target='_blank'>
                <FaLinkedin className='text-[26px] text-blue-800' />
              </a>
              <p className='font-semibold'>CHUKWUNYERE EMENIKE.</p>
              <p className='font-semibold'>CHERT SYSTEM SOLUTIONS NIG.</p>
              <p className='font-semibold'>SENIOR SALES I.T CONSULTANT.</p>
            </div>
          </div>

          <div className='h-[320px] md:h-[290px] border-[3px] border-black rounded-[20px]'>
            <div className='items-center rounded-t-[15px] justify-center flex py-2'>
              <img src={img5} alt="" className='h-[74px] w-[70px] rounded-full' />
            </div>
            <div className='flex flex-col text-center justify-center items-center gap-1 p-3'>
              <a href="https://www.linkedin.com/in/kazeem-ayobami-olaniyan-mba-fipma-46a2059a?" className='text-blue-800' rel='noreferrer' target='_blank'>
                <FaLinkedin className='text-[26px]' />
              </a>
              <p className='font-semibold'>KAZEEM AYOBAMI.</p>
              <p className='font-semibold'>CHI LIMITED.</p>
              <p className='font-semibold'>REGIONAL SALES MANAGER.</p>
            </div>
          </div>

          <div className='h-[320px] md:h-[290px] border-[3px] border-black rounded-[20px]'>
            <div className='items-center rounded-t-[15px] justify-center flex py-2'>
              <img src={img6} alt="" className='h-[74px] w-[70px] rounded-full' />
            </div>
            <div className='flex flex-col text-center justify-center items-center gap-1 p-3'>
              <a href="https://www.linkedin.com/in/francis-suebi?" rel='noreferrer' target='_blank'>
                <FaLinkedin className='text-[26px] text-blue-800' />
              </a>
              <p className='font-semibold'>FRANCIS SUEBI.</p>
              <p className='font-semibold'>ATHEL ENERGY LIMITED.</p>
              <p className='font-semibold'>HEAD OF OPERATIONS.</p>
            </div>
          </div>

          <div className='h-[320px] md:h-[290px] border-[3px] border-black rounded-[20px]'>
            <div className='items-center rounded-t-[15px] justify-center flex py-2'>
              <img src={img7} alt="" className='h-[74px] w-[70px] rounded-full' />
            </div>
            <div className='flex flex-col text-center justify-center items-center gap-1 p-3'>
              <a href="https://www.linkedin.com/in/emmanuel-oguike?" rel='noreferrer' target='_blank'>
                <FaLinkedin className='text-[26px] text-blue-800' />
              </a>
              <p className='font-semibold'>EMMANUEL OGUIKE.</p>
              <p className='font-semibold'>UNITRUST INSURANCE CO. LTD.</p>
              <p className='font-semibold'>ASSISTANT MANAGER.</p>
            </div>
          </div>

          <div className='h-[320px] md:h-[290px] border-[3px] border-black rounded-[20px]'>
            <div className='items-center rounded-t-[15px] justify-center flex py-2'>
              <img src={img8} alt="" className='h-[74px] w-[70px] rounded-full' />
            </div>
            <div className='flex flex-col text-center justify-center items-center gap-1 p-3'>
              <a href="https://www.linkedin.com/in/abraham-eze-34863a139?" rel='noreferrer' target='_blank'>
                <FaLinkedin className='text-[26px] text-blue-800' />
              </a>
              <p className='font-semibold'>ABRAHAM EZE.</p>
              <p className='font-semibold'>DATAVILLE RESEARCH LLC.</p>
              <p className='font-semibold'>PROJECT MANAGER.</p>
            </div>
          </div>

          <div className='h-[320px] md:h-[290px] border-[3px] border-black rounded-[20px]'>
            <div className='items-center rounded-t-[15px] justify-center flex py-2'>
              <img src={img9} alt="" className='h-[74px] w-[70px] rounded-full' />
            </div>
            <div className='flex flex-col text-center justify-center items-center gap-1 p-3'>
              <a href="https://www.linkedin.com/in/oluwatosin-oyenekan-a60980b8?" rel='noreferrer' target='_blank'>
                <FaLinkedin className='text-[26px] text-blue-800' />
              </a>
              <p className='font-semibold'>OLUWATOSIN OYENEKAN.</p>
              <p className='font-semibold'>PREMIER CARE DIAGNOSTICS.</p>
              <p className='font-semibold'>SALES TEAM LEAD.</p>
            </div>
          </div>

          <div className='h-[320px] md:h-[290px] border-[3px] border-black rounded-[20px]'>
            <div className='items-center rounded-t-[15px] justify-center flex py-2'>
              <img src={img10} alt="" className='h-[74px] w-[70px] rounded-full' />
            </div>
            <div className='flex flex-col text-center justify-center items-center gap-1 p-3'>
              <a href="https://www.linkedin.com/in/juliet-nwalozie-cscmp-fcilscm-0908a52b?" rel='noreferrer' target='_blank'>
                <FaLinkedin className='text-[26px] text-blue-800' />
              </a>
              <p className='font-semibold'>JULIET NWALOZIE.</p>
              <p className='font-semibold'>BAOBAB NIGERIA.</p>
              <p className='font-semibold'>PROCUREMENT MANAGER.</p>
            </div>
          </div>
        </Slider>

      </div>
    </div>
  )
}

export default Testimonial