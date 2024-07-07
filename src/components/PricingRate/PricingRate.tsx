import React from 'react'
import { Check } from '@/assets/images/contacts-images/images'
import Button from '../button/Button'

function PricingRate() {
    return (
        <main className="flex justify-between items-center w-full h-full max-w-[1350px] mx-auto px-6 md:px-10 lg:px-16 xl:px-0">
            <div className="mt-24 w-full space-y-4">
                <h1 className="flex justify-center md:text-2xl text-[32px] mb-20 font-semibold leading-10">
                    Pricing Rate
                </h1>

                <div className='space-y-8 lg:grid lg:grid-cols-2 sm:gap-6 xl:gap-10 lg:space-y-0'>
                    <div className='flex flex-col p-6 mx-auto max-w-lg rounded-lg border border-gray-400 shadow dark:border-gray-600 xl:p-8 dark:text-white hover:border-8 hover:border-[#0046BF]'>
                        <h3 className='text text-[#002360] mb-1 text-2xl font-semibold'>Basic Plan</h3>
                        <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">Perfect for small business</p>
                        <div className='border border-x-8 mb-4 mt-4'></div>


                        <ul role="list" className="mb-8 space-y-4 text-left text-black">
                            <li className="flex items-center space-x-3">

                                <Check />
                                <span>Up to 10,000 impressions</span>
                            </li>
                            <li className="flex items-center space-x-3">

                                <Check />
                                <span>Basic performance metrics</span>
                            </li>
                            <li className="flex items-center space-x-3">

                                <Check />
                                <span>Email Support</span>
                            </li>
                            <li className="flex items-center space-x-3">

                                <Check />
                                <span>1 month duration</span>
                            </li>
                            <li className="flex items-center space-x-3">

                                <Check />
                                <span>Single advert</span>
                            </li>
                            <li className="flex items-center space-x-3">

                                <Check />
                                <span>Side bar placement</span>
                            </li>
                        </ul>

                        <div className='border border-x-8 mb-4 mt-4'></div>

                        <div className="flex justify-center items-baseline my-8">
                            <span className="text-[#002360] text-4xl font-extrabold"> ₦20,000</span>
                            <span className="text-gray-500 dark:text-gray-400">/month</span>
                        </div>
                        <Button overrideStyles="border-0 rounded-none w-44 sm:w-44 sm:mx-7">
                            Make Payment
                        </Button>
                    </div>

                    <div className='flex flex-col p-6 mx-auto max-w-lg  rounded-lg border border-gray-100 shadow xl:p-8 dark:text-white hover:border-8 hover:border-[#0046BF]'>

                        <h3 className='mb-1 text-[#002360] text-2xl font-semibold'>Premium Plan</h3>
                        <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">Ideal for large businesses </p>

                        <div className='border border-x-8 mb-4 mt-4'></div>

                        <ul role="list" className="mb-8 space-y-4 text-left text-black ">
                            <li className="flex items-center space-x-3">

                                <Check />
                                <span>Unlimited impressions</span>
                            </li>
                            <li className="flex items-center space-x-3">

                                <Check />
                                <span>Advanced performance metrics</span>
                            </li>
                            <li className="flex items-center space-x-3">

                                <Check />
                                <span>Dedicated account manager</span>
                            </li>
                            <li className="flex items-center space-x-3">

                                <Check />
                                <span>3 months duration</span>
                            </li>
                            <li className="flex items-center space-x-3">

                                <Check />
                                <span>Multiple advert duration</span>
                            </li>
                            <li className="flex items-center space-x-3">

                                <Check />
                                <span>Landing page and featured placement</span>
                            </li>
                        </ul>

                        <div className='border border-x-8 mb-4 mt-4'></div>

                        <div className="flex justify-center items-baseline my-8">
                            <span className="text-4xl font-extrabold text-[#002360]"> ₦50,000</span>
                            <span className="text-gray-500 dark:text-gray-400">/month</span>
                        </div>
                        <Button overrideStyles="border-0 rounded-none w-34 sm:w-34 sm:mx-7">
                            Make Payment
                        </Button>
                    </div>

                </div>
            </div>

        </main>

    )
}

export default PricingRate