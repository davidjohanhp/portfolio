import React, { useState, useEffect } from "react";

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import android_icon from "../img/small-tech-icons/android.png"
import bootstrap_icon from "../img/small-tech-icons/bootstrap5.png"
import django_icon from "../img/small-tech-icons/django.png"
import firebase_icon from "../img/small-tech-icons/firebase.png"
import fluttter_icon from "../img/small-tech-icons/flutter.png"
import go_icon from "../img/small-tech-icons/go.png"
import kotlin_icon from "../img/small-tech-icons/kotlin.png"
import mysql_icon from "../img/small-tech-icons/mysql.png"
import postgresql_icon from "../img/small-tech-icons/postfresql.png"
import react_icon from "../img/small-tech-icons/reactjs.png"
import spring_icon from "../img/small-tech-icons/spring.png"
import tailwind_icon from "../img/small-tech-icons/tailwind.png"
import html_icon from "../img/small-tech-icons/html5.png"
import css_icon from "../img/small-tech-icons/css3.png"
import js_icon from "../img/small-tech-icons/js.png"
import php_icon from "../img/small-tech-icons/php.png"
import rabbitmq_icon from "../img/small-tech-icons/rabbitmq.png"

import { FaBeer, FaGithub } from 'react-icons/fa';
import Modal from "./modal";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

import { Tab } from '@headlessui/react'
import Loading from "./loading";

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

function Projects() { 
    const projects = [
        {
            id: "BeltTrackr",
            title: "BeltTrackr - Evomo Manufacture Product Counter Application",
            desc: "An application for Evomo that provides feature to count the quantity of products in, out, and rejects on a conveyor belt for manufacturing purposes. \
            The main purpose is to solve the need for manufacturing companies to have highly customizable and scalable systems and sensors for object detection.",
            position: "Mobile Developer",
            date: "May - Jun, 2023",
            repo: "https://github.com/C23-CT02",
            images: [
                "https://raw.githubusercontent.com/davidjohanhp/portfolio/master/src/img/projects/evomo/thumbnail.png",
                "https://raw.githubusercontent.com/davidjohanhp/portfolio/master/src/img/projects/evomo/login.jpg",
                "https://raw.githubusercontent.com/davidjohanhp/portfolio/master/src/img/projects/evomo/google.jpg",
                "https://raw.githubusercontent.com/davidjohanhp/portfolio/master/src/img/projects/evomo/home.jpg",
                "https://raw.githubusercontent.com/davidjohanhp/portfolio/master/src/img/projects/evomo/home_2.jpg",
                "https://raw.githubusercontent.com/davidjohanhp/portfolio/master/src/img/projects/evomo/home_3.jpg",
                "https://raw.githubusercontent.com/davidjohanhp/portfolio/master/src/img/projects/evomo/camera.jpg",
                "https://raw.githubusercontent.com/davidjohanhp/portfolio/master/src/img/projects/evomo/camera_2.jpg",
                "https://raw.githubusercontent.com/davidjohanhp/portfolio/master/src/img/projects/evomo/camera_3.jpg",
                "https://raw.githubusercontent.com/davidjohanhp/portfolio/master/src/img/projects/evomo/camera_4.jpg",
                "https://raw.githubusercontent.com/davidjohanhp/portfolio/master/src/img/projects/evomo/camera_5.jpg",
                "https://raw.githubusercontent.com/davidjohanhp/portfolio/master/src/img/projects/evomo/camera_6.jpg",
                "https://raw.githubusercontent.com/davidjohanhp/portfolio/master/src/img/projects/evomo/history.jpg",
                "https://raw.githubusercontent.com/davidjohanhp/portfolio/master/src/img/projects/evomo/profile.jpg",
                "https://raw.githubusercontent.com/davidjohanhp/portfolio/master/src/img/projects/evomo/logout.jpg"
            ],
            thumbnail: "https://raw.githubusercontent.com/davidjohanhp/portfolio/master/src/img/projects/evomo/thumbnail.png",
            stacks: [
                android_icon,
                firebase_icon,
                kotlin_icon
            ],
        },
        {
            id: "Emplova",
            title: "Emplova - PLABS.ID HR Management System",
            desc: "An application for PLABS.id that provides features such as attendance management, location based absent, \
            payroll management, salary slip document generator, activity reports, and more.\
            Responsible as Lead Programmer on managing and controlling 4 teammates on development process.",
            position: "Full Stack Developer",
            date: "Feb - Jun, 2023",
            repo: "",
            images: [
                "https://raw.githubusercontent.com/davidjohanhp/portfolio/master/src/img/projects/plabs/thumbnail.png",
                "https://raw.githubusercontent.com/davidjohanhp/portfolio/master/src/img/projects/plabs/login.png",
                "https://raw.githubusercontent.com/davidjohanhp/portfolio/master/src/img/projects/plabs/dashboard_admin.png",
                "https://raw.githubusercontent.com/davidjohanhp/portfolio/master/src/img/projects/plabs/dashboard_admin_2.png",
                "https://raw.githubusercontent.com/davidjohanhp/portfolio/master/src/img/projects/plabs/dashboard_staff.png",
                "https://raw.githubusercontent.com/davidjohanhp/portfolio/master/src/img/projects/plabs/ac_staff.png",
                "https://raw.githubusercontent.com/davidjohanhp/portfolio/master/src/img/projects/plabs/attendance_admin.png",
                "https://raw.githubusercontent.com/davidjohanhp/portfolio/master/src/img/projects/plabs/attendance_admin_2.png",
                "https://raw.githubusercontent.com/davidjohanhp/portfolio/master/src/img/projects/plabs/employee_admin.png",
                "https://raw.githubusercontent.com/davidjohanhp/portfolio/master/src/img/projects/plabs/leave_admin.png",
            ],
            thumbnail: "https://raw.githubusercontent.com/davidjohanhp/portfolio/master/src/img/projects/plabs/thumbnail.png",
            stacks: [
                react_icon,
                tailwind_icon,
                go_icon,
                postgresql_icon
            ],
        },
        {
            id: "RumahSehat",
            desc: "RumahSehat is a Flutter-based application that provides features for patients to support hospitals or clinics such as making an appointment, \
            viewing bills, viewing recipes, and viewing upcoming appointments.",
            position: "Full Stack Developer",
            date: "Nov - Dec, 2023",
            repo: "https://gitlab.cs.ui.ac.id/david.johan/ta_a_ori_55/-/tree/main/rumahSehat_mobile",
            images: [
                "https://raw.githubusercontent.com/davidjohanhp/portfolio/master/src/img/projects/rumahsehat-mobile/thumbnail.png",
                "https://raw.githubusercontent.com/davidjohanhp/portfolio/master/src/img/projects/rumahsehat-web/rumahsehatweb-login.png",
                "https://raw.githubusercontent.com/davidjohanhp/portfolio/master/src/img/projects/rumahsehat-web/rumahsehatweb-home.png",
                "https://raw.githubusercontent.com/davidjohanhp/portfolio/master/src/img/projects/rumahsehat-web/rumahsehatweb-chart.png",
                "https://raw.githubusercontent.com/davidjohanhp/portfolio/master/src/img/projects/rumahsehat-mobile/login.png",
                "https://raw.githubusercontent.com/davidjohanhp/portfolio/master/src/img/projects/rumahsehat-mobile/home.png",
                "https://raw.githubusercontent.com/davidjohanhp/portfolio/master/src/img/projects/rumahsehat-mobile/profile.png",
                "https://raw.githubusercontent.com/davidjohanhp/portfolio/master/src/img/projects/rumahsehat-mobile/topup.png",
                "https://raw.githubusercontent.com/davidjohanhp/portfolio/master/src/img/projects/rumahsehat-mobile/makeappointment.png",
                "https://raw.githubusercontent.com/davidjohanhp/portfolio/master/src/img/projects/rumahsehat-mobile/appointmentsuccess.png",
                "https://raw.githubusercontent.com/davidjohanhp/portfolio/master/src/img/projects/rumahsehat-mobile/detailappointment.png",
                "https://raw.githubusercontent.com/davidjohanhp/portfolio/master/src/img/projects/rumahsehat-mobile/logout.png",
            ],
            thumbnail: "https://raw.githubusercontent.com/davidjohanhp/portfolio/master/src/img/projects/rumahsehat-mobile/thumbnail.png",
            stacks: [
                fluttter_icon,
                spring_icon,
                bootstrap_icon,
                mysql_icon
            ],
        },
    ];
    
    const works = [
            {
                id: "Paragon Corp",
                desc: "Developed Transportation Management System (TMS), focusing on optimizing and managing company logistic processes, including goods loading and delivery route recommendation. \
                Responsible as Lead Programmer on actively managing project tasks and timelines using Jira, ensuring clear communication and effective tracking of project milestones.",
                position: "Fullstack Developer",
                date: "Sep, 2023 - Feb, 2024",
                images: ["https://raw.githubusercontent.com/davidjohanhp/portfolio/master/src/img/works/paragon/thumbnail.png"],
                thumbnail: "https://raw.githubusercontent.com/davidjohanhp/portfolio/master/src/img/works/paragon/thumbnail.png",
                stacks: [
                    react_icon,
                    tailwind_icon,
                    django_icon,
                    postgresql_icon,
                ],
                repo: "",
            },
            {
                id: "CrescentRating & HalalTrip",
                desc: "CrescentRating is the world's leading authority on halal-friendly travel. Responsible as Frontend Developer on maintaining the CrescentRating & HalalTrip website. Worked closely with the UI/UX designer and other stakeholders.",
                position: "Frontend Developer",
                date: "Jul, 2023 - Nov, 2023",
                images: ["https://raw.githubusercontent.com/davidjohanhp/portfolio/master/src/img/works/crescent/thumbnail.png"],
                thumbnail: "https://raw.githubusercontent.com/davidjohanhp/portfolio/master/src/img/works/crescent/thumbnail.png",
                stacks: [
                    html_icon,
                    css_icon,
                    js_icon,
                    php_icon
                ],
                repo: "",
            },
            {
                id: "Telkom Indonesia",
                desc: "Developed Overall Equipment Effectiveness (OEE) Android application with Kotlin, RabbitMQ, and WebSocket. \
                Assist bug fixing on Computerized Maintenance Management System (CMMS) mobile application with Flutter. \
                Worked closely with the UI/UX designer and other stakeholders.",
                position: "Mobile Developer",
                date: "Jul, 2023 - Sep, 2023",
                images: ["https://raw.githubusercontent.com/davidjohanhp/portfolio/master/src/img/works/telkom/thumbnail.png"],
                thumbnail: "https://raw.githubusercontent.com/davidjohanhp/portfolio/master/src/img/works/telkom/thumbnail.png",
                stacks: [
                    android_icon,
                    kotlin_icon,
                    fluttter_icon,
                    rabbitmq_icon
                ],
                repo: "",
            },
            {
                id: "Bangkit Academy 2023",
                desc: "Bangkit Academy is an intensive technology and professional development program by Google, GoTo, and Traveloka that aims to equip individuals with the skills and knowledge needed to excel in the tech industry. \
                Selected as the Best Team at Bangkit Company Capstone Project in collaboration with Evomo and as the top 1000 performing students in English courses & tests.",
                position: "Mobile Developer Cohort",
                date: "Feb - Jul, 2023",
                images: ["https://raw.githubusercontent.com/davidjohanhp/portfolio/master/src/img/works/bangkit/thumbnail.png"],
                thumbnail: "https://raw.githubusercontent.com/davidjohanhp/portfolio/master/src/img/works/bangkit/thumbnail.png",
                stacks: [
                    android_icon,
                    firebase_icon,
                    kotlin_icon
                ],
                repo: "",
            },
    ];

    const organization = [
        {
            id: "BEM Fasilkom UI",
            desc: "Responsible as Head of Sports Department and initiated 15 pandemic-friendly sports programs in Fasilkom UI. Responsible for leading and managing 14 teammates to run the programs, which aims to encourage Fasilkom elements such as students to care about healthy lifestyles during the pandemics. Sucesfully initiated offline sports programs such as Dekan Cup, which is a sports tournament open for Fasilkom students and alumni.",
            position: "Head of Sports Department",
            date: "Feb, 2022 - Jan, 2023",
            images: ["https://raw.githubusercontent.com/davidjohanhp/portfolio/master/src/img/organizations/bem/thumbnail.png"],
            thumbnail: "https://raw.githubusercontent.com/davidjohanhp/portfolio/master/src/img/organizations/bem/thumbnail.png",
            stacks: "",
            repo: "",
        },
        {
            id: "Pesta Rakyat Fasilkom",
            desc: "Responsible as Project Officer on leading 14 Division Manager and 150 staff to run the whole event, which aims to build kinship among Fasilkom elements such as students, lecturers, faculty staffs, and alumni. Sucessfully approached Ecomindo and PANDI as sponsors of the event. Redesigned all the event activities and initiated offline events such as Basketball and Mini Soccer Tournament.",
            position: "Project Officer",
            date: "Jun, 2021 - Jun, 2022",
            images: ["https://raw.githubusercontent.com/davidjohanhp/portfolio/master/src/img/organizations/perak/thumbnail.png"],
            thumbnail: "https://raw.githubusercontent.com/davidjohanhp/portfolio/master/src/img/organizations/perak/thumbnail.png",
            stacks: "",
            repo: "",
        },
        {
            id: "COMPFEST 13",
            desc: "Responsible for Online Job Fair with Playground with 60+ company as exhibitors such as PwC, Deloitte, Blibli, Binar Academy, PINTU, and many more. Successfully approached CODEX, Forky,id, and Algobash to be exhibitors on Online Job Fair with Playground event. Responsible as Liason Officer for CODEX, Forky,id, and Algobash during the event period.",
            position: "Staff of Playground",
            date: "Mar - Nov, 2021",
            images: ["https://raw.githubusercontent.com/davidjohanhp/portfolio/master/src/img/organizations/compfest/thumbnail.png"],
            thumbnail: "https://raw.githubusercontent.com/davidjohanhp/portfolio/master/src/img/organizations/compfest/thumbnail.png",
            stacks: "",
            repo: "",
        },
    ];

    let [categories] = useState({
        Work: works,
        Project: projects,
        Organization: organization
        })

    const [openProject, setOpenProject] = useState(false);
    const [open, setOpen] = useState(false);
    const [exp, setExp] = useState("");

    function onClick(selected) {
        setOpen(true)
        setExp(selected)
    }
    
    const [activeTab, setActiveTab] = useState('Work');
    const [tabLoading, setTabLoading] = useState({ Work: true, Project: true, Organization: true });
    const [imagesLoaded, setImagesLoaded] = useState(0);
    const [totalImages, setTotalImages] = useState(0);

    function calculateTotalImagesForTab(tabId) {
        const tabContent = categories[tabId];
        return tabContent.length;
    }

    useEffect(() => {
        const imagesCount = calculateTotalImagesForTab(activeTab);
        setTotalImages(imagesCount);
        setImagesLoaded(0); 
        setTabLoading(prev => ({ ...prev, [activeTab]: imagesCount > 0 })); 
    }, [activeTab]);
      
    function handleImageLoaded() {
        setImagesLoaded(prev => {
          const newCount = prev + 1;
          if (newCount >= totalImages) {
            setTabLoading(prev => ({ ...prev, [activeTab]: false }));
          }
          return newCount;
        });
      }    
      
      function onTabSelect(tabIndex) {
        const tabIds = Object.keys(categories);
        const selectedTabId = tabIds[tabIndex];
        setActiveTab(selectedTabId);

        setImagesLoaded(0);
        const imagesCount = calculateTotalImagesForTab(selectedTabId);
        setTotalImages(imagesCount);
        setTabLoading(prev => ({ ...prev, [selectedTabId]: imagesCount > 0 })); 
      }      
    return (
        <>
            <div id="projects" className={`flex sm:h-fit justify-center items-center sm:pt-24 pt-36 pb-16`}>
                <div className="sm:mx-auto sm:w-4/6 mx-8">
                    <Modal open={open} onClose={() => setOpen(false)} experience={exp} />
                    <Tab.Group onChange={onTabSelect}>
                        <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
                        {Object.keys(categories).map((category) => (
                            <Tab
                            key={category}
                            className={({ selected }) =>
                                classNames(
                                'w-full rounded-lg py-2.5 sm:text-sm text-xs font-medium leading-5 text-grey',
                                'ring-white ring-opacity-60 ring-offset-0 ring-offset-black focus:outline-none focus:ring-0',
                                selected
                                    ? 'bg-white shadow'
                                    : 'text-gray-100 hover:bg-white/[0.12] hover:text-white'
                                )
                            }
                            >
                            {category}
                            </Tab>
                        ))}
                        </Tab.List>
                        <Tab.Panels className="mt-2">
                        {Object.values(categories).map((posts, idx) => (
                            <Tab.Panel
                            key={idx}
                            className={classNames(
                                'rounded-xl'
                            )}
                            >
                                <div className={`grid sm:grid-cols-3 grid-cols-1 gap-8 sm:pt-10 ${tabLoading[activeTab] ? "hidden" : null}`}>
                                    {posts.map(content => {
                                            return (
                                                <>
                                                    <div key={content.id}>
                                                        <div className="sm:mt-0 mt-5">
                                                            <img onClick={ () => onClick(content)} src={content.thumbnail} className="rounded-lg" 
                                                                onLoad={handleImageLoaded}
                                                            />
                                                            <div>
                                                                <span className={
                                                                    content.date.includes("Present") ?
                                                                    `mt-4 inline-flex items-center rounded-full bg-blue-400/10 px-2 py-1 text-xs text-blue-500 ring-1 ring-inset ring-blue-500/20` :
                                                                    `mt-4 inline-flex items-center rounded-full bg-gray-400/10 px-2 py-1 text-xs text-gray-500 ring-1 ring-inset ring-gray-500/20`
                                                            }>{content.date}</span>
                                                                <h2 className="text-start font-semibold text-gray-900 sm:text-md pr-2 mt-2">
                                                                    {content.id}
                                                                </h2>
                                                                <p className="text-start text-gray-500 text-sm"> {content.position} </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </>
                                            );
                                        })}
                                </div>

                                <div className={`${!tabLoading[activeTab] ? "hidden" : null} h-10`}>
                                    <Loading visibility={tabLoading[activeTab]} />
                                </div>
                            </Tab.Panel>
                        ))}
                        </Tab.Panels>
                    </Tab.Group>
                </div>
            </div>
        </>
    );
}
  
export default Projects;