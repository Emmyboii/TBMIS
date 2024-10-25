import { React, useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Quotes from '../Images/Quote.jpg';
import Quotes2 from '../Images/Quote2.jpg';
import { FaQuoteLeft } from "react-icons/fa";

const Quote = () => {

    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: "ease-out-cubic"
        });
    }, []);

    return (
        <div className='bg-gray-300'>
            <div className='py-[30px] mv:pl-[50px] mv:pr-[30px] mv:flex mv:flex-row flex flex-col items-center'>
                <img className='scale-95' src={Quotes2} alt="" />
                <div>
                    <p className='mx-[20px] mv:ml-[50px] lg:mt-[7.5%] ss:text-[25px] font-serif sd:text-[23px] text-[20px] font-semibold'>
                        <FaQuoteLeft className='text-blue-500' />
                        We aim at inspiring our students to dream more, learn more, do more, and become more in their respective journeys
                        of life.
                    </p>
                    <p data-aos="fade-up" data-aos-delay="200" className='aos-init pt-7 mx-[20px] ss:text-[25px] sd:text-[23px] text-[20px] mv:ml-[50px] font-normal'>
                        Ally Pascal Angel — Executive Chancellor
                    </p>
                </div>
            </div>
            <hr className='h-1 bg-black/70' />
            <div className='py-[30px] mv:pr-[50px] mv:pl-[30px] mv:flex mv:flex-row flex flex-col-reverse items-center'>
                <div>
                    <p className='mx-[20px] mv:ml-[50px] lg:mt-[7.5%] ss:text-[25px] font-serif sd:text-[23px] text-[20px] font-semibold'>
                        <FaQuoteLeft className='text-blue-500' />
                        Nigerians are some of the most gifted learners in the world. Everyday at Our Nigerian Quarters is like a blessing with
                        the active students and talented staff members around. We are always glad to have new students who push the limits of
                        academic brilliance.
                    </p>
                    <p data-aos="fade-up" data-aos-delay="200" className='aos-init pt-7 mx-[20px] ss:text-[25px] sd:text-[23px] text-[20px] mv:ml-[50px] font-normal'>
                        Vonashuchuk Doe — Team Lead Executive TMBI Switzerland
                    </p>
                </div>
                <img className='scale-95' src={Quotes} alt="" />
            </div>
        </div >
    )
}

export default Quote