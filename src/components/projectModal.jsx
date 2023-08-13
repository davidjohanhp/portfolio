import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import Slider from 'react-slick';

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
                                as="h3"
                                className="text-lg font-medium leading-6 text-gray-900"
                            >
                                {project.id}
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
                                <Slider {...project.settings} className="sm:max-w-sm max-w-[250px] mx-auto">
                                    {project.images.map((image, index) => (
                                        <div key={index} className='w-fit'>
                                            <img src={image} className="sm:h-64 h-50 w-fit object-contain" alt={`Image ${index}`} />
                                        </div>
                                    ))}
                                </Slider>
                            </div>

                            {/* <div className="mt-4">
                                <button
                                type="button"
                                className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                onClick={onClose}
                                >
                                Got it, thanks!
                                </button>
                            </div> */}
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