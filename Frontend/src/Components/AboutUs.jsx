import { React, useEffect, useState } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import graduate from '../Images/abt2.jpg'; import vision from '../Images/Vision1.png';
import mission from '../Images/mission1.png';
import { FaArrowRightLong } from "react-icons/fa6";

const AboutUs = () => {


    const [prog, setprog] = useState(false)

    const handleProg = () => {
        setprog(!prog)
    }

    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: "ease-out-cubic"
        });
        AOS.refresh();
    }, []);

    return (
        <div id='about' className='w-full text-white bg-[#01022e] pt-[10px] flex flex-col items-center justify-center'>
            <h1 className='text-orange-500 lg:text-[65px] md:text-[48px] st:text-[41px] text-[35px] font-bold'>
                ABOUT US
            </h1>
            <div className={prog ? 'flex flex-col-reverse' : 'md:grid md:grid-cols-2 flex flex-col-reverse'}>
                <div className=''>
                    <p data-aos="fade-down" data-aos-delay="100" className={prog ? 'hidden' : 'xl:px-[50px] md:pl-[30px] aos-init sm:text-[30px] st:text-[26px] text-[22px] text-center md:text-left mt-0 st:mt-5 lg:mt-1 font-medium'}>
                        What We Represent
                    </p>
                    <p className='xl:px-[50px] md:pl-[30px] md:pr-4 lg:text-[21px] sm:text-[18px] text-[18px] mx-6 md:mx-0 mt-4 font-medium leading-6 st:leading-7'>
                        Throne Management and Business Institute Switzerland is a pioneering Ed-Tech organization, globally accredited for its
                        rigorous academic programs. We empower students to become leaders and serve their communities through our comprehensive
                        curriculum that blends management, technology, and social programs.
                    </p>
                    <p className='xl:px-[50px] md:pl-[30px] md:pr-4 lg:text-[21px] sm:text-[18px] text-[18px] mx-6 md:mx-0 se:pt-8 pt-4 font-medium leading-6 st:leading-7'>
                        Since our arrival in Nigeria in 2018, over 20,000 students have benefited from our tuition scholarships, underscoring our
                        commitment to advancing literacy and education in the country. Our world-class faculty and globally recognized programs
                        ensure a transformative learning experience.
                    </p><br />
                    <p data-aos="fade-up" data-aos-delay="100" onClick={handleProg} className={prog ? 'hidden' : 'aos-init md:pl-0 xl:pl-[30px] pb-3 mx-6 text-orange-500 st:text-[20px] flex gap-3 cursor-pointer duration-500'}>
                        Learn More <FaArrowRightLong className='mt-[6px]' />
                    </p>
                    <div className={prog ? 'block' : 'hidden'}>
                        <p className='xl:px-[50px] md:pl-[30px] md:pr-4 lg:text-[21px] sm:text-[18px] text-[18px] pb-9 mx-6 md:mx-0  font-medium leading-6 st:leading-7'>
                            We are dedicated to serving our students, alumni, and partners with exceptional quality and support. Our alumni
                            association, talented faculty, and dedicated staff are integral to our mission. We are proud of our active and
                            supportive community of parents, well-wishers, and friends.
                        </p>
                        <p className='xl:px-[50px] md:pl-[30px] md:pr-4 lg:text-[21px] sm:text-[18px] text-[18px] pb-9 mx-6 md:mx-0  font-medium leading-6 st:leading-7'>
                            Our goal is to democratize education by offering affordable, high-quality, and flexible programs that meet the 
                            diverse needs of learners across Nigeria. We leverage technology to deliver exceptional learning experiences and 
                            bridge the gap between traditional education and the demands of the modern world. As a leading global provider of 
                            innovative educational solutions, we strive to create a world where education is accessible to all and knowledge is 
                            celebrated as a catalyst for positive change.
                        </p>
                    </div>
                    <div className={prog ? 'block bg-[#616060] w-full' : 'hidden'}>
                        <div className='bg-[#01022e]  py-[50px]'>
                            <div className='md:grid md:grid-cols-2 ml-9'>
                                <div className='border-2 rounded-lg sx:pl-5 py-10 xl:mr-[140px] lg:mr-[110px] md:mr-[60px] xl:ml-[100px] mr-[30px] sa:mx-[60px] flex'>
                                    <img className='xl:w-[18%] md:w-[20%] w-[17%] h-[30%] md:h-[50%] xl:h-[65%] mt-2 p-1 rounded-lg bg-white object-fill sx:block hidden' src={vision} alt="" />
                                    <div className='text-white mx-[20px]'>
                                        <h1 className='font-medium text-center text-[18px] sa:text-[20px]'>OUR VISION</h1>
                                        <p className='pt-3 sx:text-start text-center'>"To be the leading provider of online education in Africa."</p>
                                    </div>
                                </div>
                                <div className='border-2 rounded-lg sx:pl-5 xl:ml-[100px] md:ml-[30px] py-10 xl:mr-[120px] lg:mr-[70px] md:mr-[40px] mr-[30px] sa:mx-[60px] mt-6 flex'>
                                    <img className='xl:w-[18%] md:w-[20%] md:h-[50%] w-[18%] h-[50%] xl:h-[65%]  mt-2 rounded-lg bg-white sx:block hidden' src={mission} alt="" />
                                    <div className='text-white mx-[20px]'>
                                        <h1 className='font-medium text-center text-[18px] sa:text-[20px]'>OUR MISSION</h1>
                                        <p className='pt-3 sx:text-start text-center'>"To empower individuals with the knowledge and skills to succeed in a globalized world."</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='bg-pink-50 pt-[50px] pb-5'>
                            <h1 data-aos="fade-down" className='aos-init text-center text-[31px] sa:text-[35px] font-bold text-[#01022e] pb-7'>OUR CORE VALUES</h1>

                            <div data-aos="fade-up" data-aos-delay="200" className='mv:mr-[350px] mx-[34px] sb:mx-[50px] se:mx-[80px] mv:ml-[50px] shadow-2xl shadow-black/60 px-[20px] pt-[22px] pb-[25px] rounded-md bg-[#01022e] text-white'>
                                <h1 className='text-[27px] sv:text-[30px] mv:text-start text-center sx:text-[35px] text-[#ff9736] font-semibold'>Innovation</h1>
                                <p className='py-3'>
                                    At Throne Management & Business Institute, we embrace innovation as a cornerstone of our educational philosophy.
                                    We continuously seek out new and cutting-edge approaches to learning, ensuring our curriculum remains relevant
                                    and effective in today's rapidly evolving world.
                                </p>
                            </div>

                            <div data-aos="fade-up" data-aos-delay="200" className='mv:ml-[350px] mx-[34px] sb:mx-[50px] se:mx-[80px] mv:mr-[50px] shadow-2xl my-5 shadow-black/60 px-[20px] pt-[22px] pb-[25px] rounded-md bg-white/60 text-black'>
                                <h1 className='text-[27px] sv:text-[30px] mv:text-start text-center sx:text-[35px] text-[#fa9536] font-semibold'>Accessibility</h1>
                                <p className='py-3'>
                                    We believe that education should be accessible to all, regardless of geographical location or socioeconomic background.
                                    Our online degree programs offer flexibility and convenience, allowing students to learn at their own pace and from
                                    anywhere in the world.
                                </p>
                            </div>

                            <div data-aos="fade-up" data-aos-delay="200" className='mv:mr-[350px] mx-[34px] sb:mx-[50px] se:mx-[80px] mv:ml-[50px] shadow-2xl shadow-black/60 px-[20px] pt-[22px] pb-[25px] rounded-md bg-[#01022e] text-white'>
                                <h1 className='text-[27px] sv:text-[30px] mv:text-start text-center sx:text-[35px] text-[#fa9536] font-semibold'>Excellence</h1>
                                <p className='py-3'>
                                    Excellence is our unwavering commitment. We strive to provide the highest quality education, ensuring that our students
                                    receive the knowledge, skills, and experiences necessary to succeed in their careers and contribute positively to
                                    society.
                                </p>
                            </div>

                            <div data-aos="fade-up" data-aos-delay="200" className='mv:ml-[350px] mx-[34px] sb:mx-[50px] se:mx-[80px] mv:mr-[50px] mt-5 shadow-2xl shadow-black/60 px-[20px] pt-[22px] pb-[25px] rounded-md bg-white/60 text-black'>
                                <h1 className='text-[27px] sv:text-[30px] mv:text-start text-center sx:text-[35px] text-[#fa9536] font-semibold'>Integrity</h1>
                                <p className='py-3'>
                                    Integrity is the foundation of our institution. We uphold the highest ethical standards in all our endeavors, from our
                                    academic programs to our interactions with students and the broader community. We believe in honesty, transparency, and
                                    fairness in all our dealings, fostering a culture of trust and respect.
                                </p>
                            </div>
                            <span onClick={handleProg} className={prog ? 'text-orange-400 text-[17px] mt-10 hover:text-gray-400 bg-pink-50 cursor-pointer text-center items-center justify-center flex mx-3 active:scale-105 duration-500' : 'hidden'}>
                                show less
                            </span>
                        </div>

                    </div>
                </div>
                <div className='flex items-center justify-center'>
                    <img className={prog ? 'rounded-lg scale-75 object-cover' : 'rounded-lg scale-95 object-cover'} src={graduate} alt="" />
                </div>
            </div>
        </div>
    )
}

export default AboutUs