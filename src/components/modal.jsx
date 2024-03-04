import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { FaGithub } from 'react-icons/fa';
import Slider from 'react-slick';

import React, { useRef } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

export default function Modal({open, onClose, experience}) {
    return (
        <>
        {experience ?
            <Transition appear show={open} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={onClose}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black bg-opacity-50" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4 text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                            className="sm:p-20"
                        >
                            <Dialog.Panel className="w-full max-w-5xl transform overflow-hidden rounded-2xl bg-white p-10 text-left align-middle shadow-xl transition-all">
                            <Dialog.Title
                                as="h2"
                                className="text-start font-semibold text-gray-900 sm:text-2xl pr-2"
                            >
                                { experience.title !=null ? experience.title : experience.id }
                                <a href={experience.repo} title="Github" target="_blank" className={`focus:outline-none ${experience.repo === "" ? 'hidden' : ''}`}>
                                    <FaGithub className="inline-block ml-1 mb-1" size={20} />
                                </a>
                            </Dialog.Title>
                            <div className='sm:flex sm:items-center sm:pt-6 pt-3'>
                                <div className='sm:w-3/5'>
                                    {
                                        experience.images.length === 1 ?
                                        <img
                                            src={experience.images[0]}
                                            className={`max-h-64 object-contain rounded-lg shadow-xl`}
                                            alt={`Image 0`}
                                        /> :
                                        (experience.images.length > 1 && experience.images != "") ? 
                                            <Swiper
                                                slidesPerView={1}
                                                spaceBetween={5}
                                                loop={true}
                                                pagination={{
                                                clickable: true,
                                                }}
                                                modules={[Pagination, Navigation]}
                                            >
                                                {experience.images.map((image, index) => (
                                                <SwiperSlide key={index}>
                                                    <img
                                                    src={image}
                                                    className={`max-h-64  w-full object-contain`}
                                                    alt={`Screenshot ${index}`}
                                                    />
                                                </SwiperSlide>
                                                ))}
                                            </Swiper>
                                        : null
                                    }
                                </div>
                                <div className='sm:w-2/5 pl-2'>
                                    <div className="flex flex-col sm:gap-1 gap-5">
                                        <div className="sm:mt-2 sm:pt-0 pt-5">
                                            <p className="sm:text-md sm:leading-8 text-sm leading-8 text-gray-500">
                                                {experience.desc}
                                            </p>
                                            <div className="">
                                                {
                                                    experience.stacks != "" ? 
                                                        <div className="flex mt-1">
                                                            {experience.stacks.map(icons => {
                                                                return (
                                                                    <div key={experience.id}>
                                                                        <img src={icons} className="max-h-8 max-w-8 sm:max-h-10 sm:max-w-10"/>
                                                                    </div>
                                                                );
                                                            })}
                                                        </div>
                                                    : null
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
                </Dialog>
            </Transition>
            : null
        }
        </>
    )
}