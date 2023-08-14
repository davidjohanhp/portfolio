import React, { useState } from "react";

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

import plabs_thumbnail from "../img/projects/plabs/thumbnail.png"
import rs_thumbnail from "../img/projects/rumahsehat-mobile/thumbnail.png"
import evomo_thumbnail from "../img/projects/evomo/thumbnail.png"

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

import { FaBeer, FaGithub } from 'react-icons/fa';
import Modal from "./projectModal";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

const CustomArrow = (props) => {
    const { className, style, onClick } = props;
        return (
        <button
        className={`${className} z-10`}
            style={{ ...style, width: '90px', height: '50px', color: 'black', }}
            onClick={onClick}
        >
            Previous
        </button>
        );
};

function Projects() { 
    const settings = {
        dots: false,
        infinite: true,
        autoplay: false,
        autoplaySpeed: 4000, 
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: <CustomArrow />,
        nextArrow: <CustomArrow />
    };

    const settingsMobile = {
        dots: false,
        infinite: true,
        autoplay: false,
        autoplaySpeed: 4000, 
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: <CustomArrow />,
        nextArrow: <CustomArrow />
    };

    const settingsModal = {
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 4000, 
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: <CustomArrow />,
        nextArrow: <CustomArrow />
    };

    const settingsMobileModal = {
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 4000, 
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: <CustomArrow />,
        nextArrow: <CustomArrow />
    };

    const projects = [
        {
            id: "BeltTrackr - Evomo Manufacture Product Counter Application",
            desc: "An application for Evomo that provides feature to count the quantity of products in, out, and rejects on a conveyor belt for manufacturing purposes. \
            The main purpose is to solve the need for manufacturing companies to have highly customizable and scalable systems and sensors for object detection.",
            repo: "https://github.com/C23-CT02",
            images: [
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
            settings: settingsMobile,
            settingsModal: settingsMobileModal
        },
        {
            id: "Emplova - PLABS.ID HR Management System",
            desc: "An application for PLABS.id that provides features such as attendance management, location based absent, \
            payroll management, salary slip document generator, activity reports, and more.\
            Responsible as Lead Programmer on managing and controlling 4 teammates on development process.",
            repo: "",
            images: [
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
            settings: settings,
            settingsModal: settingsModal
        },
        {
            id: "RumahSehat Mobile",
            desc: "RumahSehat is a Flutter-based application that provides features for patients to support hospitals or clinics such as making an appointment, \
            viewing bills, viewing recipes, and viewing upcoming appointments.",
            repo: "https://gitlab.cs.ui.ac.id/david.johan/ta_a_ori_55/-/tree/main/rumahSehat_mobile",
            images: [
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
                mysql_icon
            ],
            settings: settingsMobile,
            settingsModal: settingsMobileModal
        },
        {
            id: "RumahSehat Website",
            desc: "RumahSehat is a website designated for hospital staffs that provides features to support hospitals or clinics such as maintaining appointments, \
            viewing bills, viewing recipes, and viewing upcoming appointments.",
            repo: "https://gitlab.cs.ui.ac.id/david.johan/ta_a_ori_55/-/tree/main/rumahSehat",
            images: [
                "https://raw.githubusercontent.com/davidjohanhp/portfolio/master/src/img/projects/rumahsehat-web/rumahsehatweb-login.png",
                "https://raw.githubusercontent.com/davidjohanhp/portfolio/master/src/img/projects/rumahsehat-web/rumahsehatweb-home.png",
                "https://raw.githubusercontent.com/davidjohanhp/portfolio/master/src/img/projects/rumahsehat-web/rumahsehatweb-chart.png"
            ],
            thumbnail: "https://raw.githubusercontent.com/davidjohanhp/portfolio/master/src/img/projects/rumahsehat-mobile/thumbnail.png",
            stacks: [
                bootstrap_icon,
                spring_icon,
                mysql_icon
            ],
            settings: settings,
            settingsModal: settingsModal
        },
        ];

    const [open, setOpen] = useState(false);
    const [project, setProject] = useState("");

    function onClick(selected) {
        setOpen(true)
        setProject(selected)
    }

    return (
        <div id="projects" className="flex sm:h-fit justify-center items-center sm:pt-24 pt-36 pb-16">
            <div className="sm:mx-auto sm:w-4/6 mx-8">
                <h1 className="text-center font-semibold text-gray-900 sm:text-7xl text-3xl">Projects</h1>
                <Modal open={open} onClose={() => setOpen(false)} project={project}/>
                <div className="grid sm:grid-cols-3 grid-cols-1 gap-8 sm:pt-10">
                    {projects.map(content => {
                            return (
                                <>
                                    <div onClick={() => onClick(content)} key={content.id}>
                                        <div className="sm:mt-0 mt-5">
                                            <img src={content.thumbnail} className="rounded-lg" />
                                            <div>
                                                <h2 className="text-start font-semibold text-gray-900 sm:text-sm pr-2 mt-2">
                                                    {content.id}
                                                </h2>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            );
                        })}
                </div>
            </div>
        </div>
    );
}
  
export default Projects;