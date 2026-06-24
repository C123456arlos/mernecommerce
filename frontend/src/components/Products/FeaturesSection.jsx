import React from 'react'
import { HiArrowPathRoundedSquare, HiOutlineCreditCard, HiShoppingBag } from 'react-icons/hi2'

const FeaturesSection = () => {
    return (
        <section className='py-16 px-4 bg-white'>
            <div className='container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center'>
                <div className='flex flex-col items-center'>
                    <div className='p-4 rounded-full mb-4'>
                        <HiShoppingBag className='text-xl'></HiShoppingBag>
                    </div>
                    <h4 className='tracking-title mb-2'>
                        free shipping abroad
                    </h4>
                    <p className='text-gray-600 text-sm tracking-tighter'>
                        on all orders over $100
                    </p>
                </div>
                <div className='flex flex-col items-center'>
                    <div className='p-4 rounded-full mb-4'>
                        <HiArrowPathRoundedSquare className='text-xl'></HiArrowPathRoundedSquare>
                    </div>
                    <h4 className='tracking-title mb-2'>
                        45 days return
                    </h4>
                    <p className='text-gray-600 text-sm tracking-tighter'>
                        money back guarantee
                    </p>
                </div>
                <div className='flex flex-col items-center'>
                    <div className='p-4 rounded-full mb-4'>
                        <HiOutlineCreditCard className='text-xl'></HiOutlineCreditCard>
                    </div>
                    <h4 className='tracking-title mb-2'>
                        secure checkout
                    </h4>
                    <p className='text-gray-600 text-sm tracking-tighter'>
                        100% secure process
                    </p>
                </div>
            </div>
        </section>
    )
}

export default FeaturesSection