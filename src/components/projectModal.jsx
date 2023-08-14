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

export default function Modal({open, onClose, project}) {
    return (
        <>
        {project ?
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
                        >
                            <Dialog.Panel className="w-full max-w-3xl transform overflow-hidden rounded-2xl bg-white p-10 text-left align-middle shadow-xl transition-all">
                            <Dialog.Title
                                as="h2"
                                className="text-start font-semibold text-gray-900 sm:text-md pr-2"
                            >
                                {project.id}
                                <a href={project.repo} title="Github" target="_blank" className={`focus:outline-none ${project.repo === "" ? 'hidden' : ''}`}>
                                    <FaGithub className="inline-block ml-1 mb-1" size={20} />
                                </a>
                            </Dialog.Title>
                            <div className="flex flex-col sm:gap-1 gap-5">
                                <div className="mt-2">
                                    <p className="text-sm text-gray-500">
                                        {project.desc}
                                    </p>
                                    <div className="">
                                        <div className="flex mt-1">
                                            {project.stacks.map(icons => {
                                                return (
                                                    <div key={project.id}>
                                                        <img src={icons} className="max-h-8 max-w-8 sm:max-h-10 sm:max-w-10"/>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                </div>
                                <Swiper
                                    slidesPerView={1}
                                    spaceBetween={5}
                                    loop={true}
                                    pagination={{
                                    clickable: true,
                                    }}
                                    modules={[Pagination, Navigation]}
                                    className="w-full sm:h-full"
                                >
                                    {project.images.map((image, index) => (
                                    <SwiperSlide key={index}>
                                        <img
                                        src={image}
                                        className="h-64 max-w-80 w-full object-contain"
                                        alt={`Image ${index}`}
                                        />
                                    </SwiperSlide>
                                    ))}
                                </Swiper>
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