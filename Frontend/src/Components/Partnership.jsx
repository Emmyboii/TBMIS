import React from 'react'
import UCC from '../Images/UCC.png';
import IICSE from '../Images/iu_logo.png';
import HIGH from '../Images/High Flyers.png';
import ESAE from '../Images/ESAE.png';
import WEST from '../Images/weuclogo2.png';

const Partnership = () => {
    return (
        <div className='py-5 px-6'>
            <p className='text-center font-bold text-[50px] mp:text-[37px] text-orange-400'>PARTNERSHIPS</p>
            <p className='text-center mp:text-[25px] text-[21.5px] font-serif ma:mx-10 mp:mx-7 mt-4 font-medium'>
                We've partnered with leading African universities to ensure your learning is not only globally relevant but deeply rooted in
                local contexts. This collaboration allows us to offer a comprehensive and culturally-sensitive learning experience.
            </p>
            <div className='grid xl:grid-cols-3 sp:grid-cols-2 sp:gap-3 gap-9 pt-[35px]'>
                <div className='flex items-center justify-center'>
                    <img src={UCC} alt="" />
                </div>
                <div className='flex items-center justify-center'>
                    <img src={IICSE} alt="" />
                </div>
                <div className='xl:flex hidden items-center justify-center'>
                    <img src={HIGH} width={160} alt="" />
                </div>
            </div>
            <div className='xl:grid hidden grid-cols-2 mt-10'>
                <div className='flex items-center justify-center'>
                    <img src={ESAE} width={220} alt="" />
                </div>
                <div className='flex items-center justify-center'>
                    <img src={WEST} alt="" />
                </div>
            </div>
            <div className='xl:hidden grid sp:grid-cols-2 mt-9 gap-9'>
                <div className='flex items-center justify-center'>
                    <img src={HIGH} width={160} alt="" />
                </div>
                <div className='flex items-center justify-center'>
                    <img src={ESAE} width={220} alt="" />
                </div>
            </div>
            <div className='xl:hidden mt-9 flex items-center justify-center'>
                <img src={WEST} alt="" />
            </div>
        </div>
    )
}

export default Partnership