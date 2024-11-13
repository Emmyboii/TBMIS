import React from 'react'
import SWL from '../Images/SWL.jpg';
import MEC from '../Images/MEC.jpg';
import CAR from '../Images/CAR.jpg';
import COA from '../Images/COA.jpg';


const Accreditation = () => {

    return (
        <div id='accreditation' className='bg-gray-300 pb-5'>
            <div className='bg-black flex text-center justify-center'>
                <h1 className='py-10 sy:text-[55px] se:text-[47px] sv:text-[40px] st:text-[30px] text-[24px] font-bold font-serif text-white'>ACCREDITATIONS</h1>
            </div>
            <div className='py-[40px] text-center grid lg:grid-cols-3 sm:grid-cols-2'>
                <div>
                    <div className='flex flex-col items-center justify-center mx-5'>
                        <img className='border-black border-4 h-[360px]' src={SWL} alt="" />
                        <div className='mt-[30px]'>
                            <h1 className='text-[30px] font-semibold text-orange-400 font-serif'>Switzerland</h1>
                            <p className='font-serif leading-8 lg:mx-0 md:mx-10'>
                                The State Secretariat for Education, Research and Innovation SERI within the Federal Department of Economic
                                Affairs, Education and Research EAER is the federal government's specialised agency for national and international
                                matters concerning education, research and innovation policy.
                            </p>
                        </div>
                    </div>
                </div>

                <div>
                    <div className='flex flex-col-reverse items-center justify-center mx-5 sm:mt-0 mt-11'>
                        <div className='mt-[30px]'>
                            <h1 className='text-[30px] font-semibold text-orange-400 font-serif'>The Republic Of Chad</h1>
                            <p className='font-serif leading-8 lg:mx-0 md:mx-10'>
                                The PIET sets out the Government of Chad's policy on education for the period 2018-2020. It covers all levels of education
                                (from pre- school to higher education).
                            </p>
                        </div>
                        <img className='border-black border-4 xl:ml-[55px] h-[360px]' src={MEC} alt="" />
                    </div>
                </div>

                <div className='flex flex-col items-center justify-center mx-5 lg:mt-0 mt-11'>
                    <img className='border-black border-4 h-[360px]' src={CAR} alt="" />
                    <div className='mt-[30px]'>
                        <h1 className='text-[30px] font-semibold text-orange-400 font-serif'>Central African Republic</h1>
                        <p className='font-serif leading-8 lg:mx-0 md:mx-10'>
                            The Ministry of Higher Education (Ministère de l'Enseignement Supérieur) is a government ministry responsible
                            for overseeing and regulating higher education institutions in the country, as well as developing policies and
                            strategies to improve the quality of education.
                        </p>
                    </div>
                </div>
            </div>
            <div className='mr:grid mr:grid-cols-3 items-center px-10 justify-center'>
                <div className='mr:col-span-1 mr:block mr:justify-start flex items-cente justify-center'>
                    <img src={COA} alt="" className='w-[200px]' />
                </div>
                <p className='mr:text-[22px] sy:text-[20px] mr:col-span-2 text-center'>
                    All our programs are recognized by the Federal Government of Nigeria with students guaranteed of NYSC certificate afterwards.
                </p>

            </div>
        </div>
    )
}

export default Accreditation