import { React, useState } from 'react'
import Logo from '../Images/TBI logo.png'
import { HiMenuAlt3 } from "react-icons/hi";
import { AiOutlineClose } from 'react-icons/ai'

const Navbar = () => {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    }

    const [fixx, setFixx] = useState(false)

    function setFixedd() {
        if (window.scrollY > 0) {
            setFixx(true)
        } else {
            setFixx(false)
        }
    }

    window.addEventListener("scroll", setFixedd)


    return (
        <div>
            <div className='sticky top-0 z-50 bg-white showdow-black shadow-md w-full flex justify-between p-[7px]'>
                <div className='flex items-center ml-8'>
                    <a href='/' ><img src={Logo} alt='' className='xl:w-[150px] lg:w-[140px] md:w-[120px] w-[100px]' /></a>
                </div>
                <ul className='hidden lg:flex xl:text-[21px] lg:text-[17px] ml-[30%] gap-[25px] items-center'>
                    <a href='/'>
                        <li className='active:scale-95 hover:text-orange-300'>
                            Home
                        </li>
                    </a>
                    <a href='#about'>
                        <li className='active:scale-95 hover:text-orange-300'>
                            About Us
                        </li>
                    </a>
                    <a href='#programs'>
                        <li className='active:scale-95 hover:text-orange-300'>
                            Programs
                        </li>
                    </a>
                    <a href='#accreditation'>
                        <li className='active:scale-95 hover:text-orange-300'>
                            Accreditation
                        </li>
                    </a>
                </ul>
                <div className='md:flex md:items-center hidden'>
                    <a href='#contact'>
                        <button className='bg-blue-400 text-white active:scale-95 mt-2 xl:text-[19px] lg:text-[16px] py-3 px-6 rounded-lg outline-none active:bg-blue-800'>
                            Contact Us
                        </button>
                    </a>
                </div>
                <div onClick={handleNav}>
                    <HiMenuAlt3 className='md:flex lg:hidden text-[30px] mt-[12px] md:mt-[20px] mr-7 cursor-pointer' />
                </div>
            </div>

            <div className={fixx ? 'top-0 bg-blue-800 text-white fixed w-full z-50 xl:hidden st:flex py-3 md:pl-[50px] sm:pl-[40px] sd:px-[27px] px-[13.5px] md:pr-[70px] sm:pr-[40px] text-center items-center justify-between' : 'bg-blue-800 text-white fixed w-full z-50 xl:hidden st:flex py-3 md:pl-[50px] sm:pl-[40px] sd:px-[27px] px-[13.5px] md:pr-[70px] sm:pr-[40px] text-center items-center justify-between'}>
                <p className='md:text-[30px] sm:text-[25.5px] sd:text-[21px] st:text-[16.6px] sl:text-[22px] text-[18px] font-semibold'>READY TO GET STARTED?</p>
                <a href="#apply">
                    <button className='bg-orange-400 sm:px-5 sd:px-3 px-[8.6px] st:mt-0 mt-2 py-3 rounded-lg'>APPLY NOW</button>
                </a>
            </div>

            {nav ? <div onClick={handleNav} className='bg-black/80 lg:hidden w-full fixed h-screen z-50 top-0 left-0'></div> : ''}

            <div className={nav ? 'fixed top-0 right-0 w-[50%] lg:hidden h-screen bg-zinc-900 text-white z-50 duration-500' : 'fixed top-0 right-[-100%] w-[50%] lg:hidden h-screen z-50 duration-500'}>
                <div className='flex items-center ml-4 mt-8'>
                    <a href='/' ><img src={Logo} alt="" className='xl:w-[150px] lg:w-[140px] md:w-[120px] sb:w-[100px] w-[80px]' /></a>
                </div>
                <AiOutlineClose onClick={handleNav} size={30} className='absolute right-4 sb:top-[40px] top-[30px] cursor-pointer' />
                <nav className='lg:hidden flex flex-col'>
                    <ul className='flex flex-col p-4'>
                        <a href='/' onClick={handleNav}>
                            <li className='p-3 rounder-xl text-white active:scale-95 hover:text-orange-400'>
                                Home
                            </li>
                        </a>
                        <a href='#about' onClick={handleNav}>
                            <li className='p-3  rounded-xl text-white active:scale-95 hover:text-orange-400'>
                                About Us
                            </li>
                        </a>
                        <a href='#programs' onClick={handleNav}>
                            <li className='p-3  rounded-xl text-white active:scale-95 hover:text-orange-400'>
                                Programs
                            </li>
                        </a>
                        <a href='#accreditation' onClick={handleNav}>
                            <li className='p-3  rounded-xl text-white active:scale-95 hover:text-orange-400'>
                                Accreditation
                            </li>
                        </a>
                        <a href='#contact' onClick={handleNav}>
                            <button className='bg-blue-600 text-white active:scale-95 mt-2 w-full py-3 px-6 rounded-lg outline-none active:bg-blue-500'>
                                Contact Us
                            </button>
                        </a>
                    </ul>
                </nav>
            </div>
        </div >
    )
}

export default Navbar