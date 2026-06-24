import React from 'react'
import { TbBrandMeta } from 'react-icons/tb'
import { IoLogoInstagram } from 'react-icons/io'
import { RiTwitterXLine } from 'react-icons/ri'
const Topbar = () => {
    return (
        <div className='bg-app text-white'>
            <div className='container mx-auto flex justify-between items-center py-3 px-4'>
                <div className='hidden items-center md:flex space-x-4'>
                    <a href='#' className='hover:text-gray-300'>
                        <TbBrandMeta className='h-5 w-5 '></TbBrandMeta>
                    </a>
                    <a href='#' className='hover:text-gray-300'>
                        <IoLogoInstagram className='h-5 w-5 '></IoLogoInstagram>
                    </a>
                    <a href='#' className='hover:text-gray-300'>
                        <RiTwitterXLine className='h-4 w-4 '></RiTwitterXLine>
                    </a>
                </div>
                <div className='text-sm text-center'>
                    <span>we ship worldwide ship fast</span>
                </div>
                <div className='text-sm'>
                    <a href='tel:+1234567890 hidden md:block' className='hover:text-grid-300'>
                        1234567890
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Topbar