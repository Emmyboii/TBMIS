import { React } from 'react'
import Logo from '../Images/TBI logo.png';
import { FaLinkedin } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaPhoneVolume } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";

const Footer = () => {


    return (
        <div className='w-full bg-black/90 text-white pt-[20px] sa:pl-5 sx:px-[50px] px-[20px] pb-[20px]'>
            <div className='2ls:grid 2ls:grid-cols-3'>
                <div className='flex flex-col mr-[60px]'>
                    <a href='/'><img src={Logo} width={200} alt="" /></a>
                    <div className='flex ms:hidden ml-[50px] mt-9 text-[25px] gap-4'>
                        <a href="https://ng.linkedin.com/company/tmbis-ng-trs" rel='noreferrer' target='_blank' className='underline'>
                            <FaLinkedin />
                        </a>
                        <a href="http://surl.li/mumpei" rel='noreferrer' target='_blank' className='underline'>
                            <FaWhatsapp />
                        </a>
                    </div>
                </div>
                <div className='flex mr:flex-row items-center mr:items-start gap-4 flex-col 2ls:col-span-2 justify-between 2ls:mt-0 mt-10'>
                    <div className='flex flex-col text-center mr:text-start'>
                        <h1 className='font-bold text-[28px]'>Programs</h1>
                        <ul className='mt-4'>
                            <a href="#ABD"><li className="text-[21px] cursor-pointer font-bold">Associate Degree's (B.Sc - AD)</li></a>
                            <li className="text-[17px]" value="Social Media Management">Social Media Management</li>
                            <li className="text-[17px]" value="Customer Service">Customer Service</li>
                            <li className="text-[17px]" value="Human Resource Management">Human Resource Management</li>
                            <li className="text-[17px]" value="Project Management">Project Management</li>
                            <li className="text-[17px]" value="Risk Management">Risk Management</li>
                            <li className="text-[17px]" value="Sales Management">Sales Management</li>
                            <li className="text-[17px]" value="Information Management">Information Management</li>
                            <li className="text-[17px]" value="Supply Chain Management">Supply Chain Management</li>

                            <a href="#MBA"><li className="text-[21px] mt-3 cursor-pointer font-bold">Executive MBA Program</li></a>
                            <li className="text-[17px]" value="Business Management">Business Management</li>
                            <li className="text-[17px]" value="Marketing">Marketing</li>
                            <li className="text-[17px]" value="Human Resources">Human Resources</li>
                            <li className="text-[17px]" value="Risk Management">Risk Management</li>
                            <li className="text-[17px]" value="Supply Chain Management">Supply Chain Management</li>
                            <li className="text-[17px]" value="Project Management">Project Management</li>
                            <li className="text-[17px]" value="Information Technology">Information Technology</li>
                            <li className="text-[17px]" value="Sales Management">Sales Management</li>
                            <li className="text-[17px]" value="Accounting">Accounting</li>
                        </ul>
                    </div>
                    <div className='flex flex-col'>
                        <h1 className='font-bold text-[28px] mr:mt-0 mt-8 text-center mr:text-start'>Contact Us</h1>
                        <div className='mr:flex mr:flex-col mr:gap-3 mt-4'>
                            <p className='font-semibold mr:text-start text-center text-[21px] mb-2'>Swiss Address</p>
                            <div className='mr:flex mr:gap-3 text-center '>
                                <FaMapMarkerAlt className='mt-2 mr:block hidden' /><p className='text-[17px]'>Via Vigizzi 98, Unterlangenegg 3614, Switzerland</p>
                            </div>
                        </div>
                        <div className='mr:flex mr:gap-3 text-center items-center pt-8'>
                            <MdOutlineEmail className='mr:block hidden' />
                            <a className='text-[18px]' href='mailto:info@thronebusinessinstituteswitzerland.com' rel='noreferrer' target='_blank'>
                                info@thronebusinessinstituteswitzerland.com
                            </a>
                        </div>
                        <div className='mr:flex mr:gap-3 text-center items-center pt-8'>
                            <FaPhoneVolume className='mr:block hidden' />
                            <a className='text-[18px]' href='tel: +2349134942707' rel='noreferrer' target='_blank'>
                                +234 913 494 2707
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='text-white ms:flex items-center mt-[30px] xl:mr-0 md:mr-[50px]'>
                <p className='text-[15px]  mr:text-[16px] text-white/80 text-center ms:text-start flex'>
                    &copy; 2024 Throne Management and Business Institute Switzerland | All Nigerian operations managed by Throne Management Group (registered with CAC).
                </p>
                <div className='ms:flex hidden lg:flex-row flex-col ml-[120px] text-[25px] gap-4'>
                    <a href="https://ng.linkedin.com/company/tmbis-ng-trs" rel='noreferrer' target='_blank' className='underline'>
                        <FaLinkedin />
                    </a>
                    <a href="http://surl.li/mumpei" rel='noreferrer' target='_blank' className='underline'>
                        <FaWhatsapp />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Footer