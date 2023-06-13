import React from "react";
import myPhoto from "../img/intro-photo.jpeg"

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

import rumahsehatweb_login from "../img/projects/rumahsehat-web/rumahsehatweb-login.png";
import rumahsehatweb_home from "../img/projects/rumahsehat-web/rumahsehatweb-home.png";
import rumahsehatweb_chart from "../img/projects/rumahsehat-web/rumahsehatweb-chart.png";

import rumahsehatmob_login from "../img/projects/rumahsehat-mobile/login.png";
import rumahsehatmob_logout from "../img/projects/rumahsehat-mobile/logout.png";
import rumahsehatmob_home from "../img/projects/rumahsehat-mobile/home.png";
import rumahsehatmob_profile from "../img/projects/rumahsehat-mobile/profile.png";
import rumahsehatmob_topup from "../img/projects/rumahsehat-mobile/topup.png";
import rumahsehatmob_makeappointment from "../img/projects/rumahsehat-mobile/makeappointment.png";
import rumahsehatmob_appointmentsuccess from "../img/projects/rumahsehat-mobile/appointmentsuccess.png";
import rumahsehatmob_detailappointment from "../img/projects/rumahsehat-mobile/detailappointment.png";

import { FaBeer, FaGithub } from 'react-icons/fa';

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

class Projects extends React.Component {
    constructor() {
        super();
        this.state = {
          projects: [
            {
                id: "RumahSehat Website",
                desc: "RumahSehat is a website designated for hospital staffs that provides features to support hospitals or clinics such as maintaining appointments, \
                viewing bills, viewing recipes, and viewing upcoming appointments.",
                repo: "https://gitlab.cs.ui.ac.id/david.johan/ta_a_ori_55/-/tree/main/rumahSehat",
                images: [
                    rumahsehatweb_login,
                    rumahsehatweb_home,
                    rumahsehatweb_chart
                ],
                stacks: [
                    <FaBeer size={25}/>,
                    <FaBeer size={25}/>
                ],
                settings: this.settings
            },
            {
                id: "RumahSehat Mobile",
                desc: "RumahSehat is a Flutter-based application that provides features for patients to support hospitals or clinics such as making an appointment, \
                viewing bills, viewing recipes, and viewing upcoming appointments.",
                repo: "https://gitlab.cs.ui.ac.id/david.johan/ta_a_ori_55/-/tree/main/rumahSehat_mobile",
                images: [
                    rumahsehatmob_login,
                    rumahsehatmob_logout,
                    rumahsehatmob_home,
                    rumahsehatmob_profile,
                    rumahsehatmob_topup,
                    rumahsehatmob_makeappointment,
                    rumahsehatmob_appointmentsuccess,
                    rumahsehatmob_detailappointment
                ],
                stacks: [
                    <FaBeer size={25}/>
                ],
                settings: this.settingsMobile
            }
          ]
        };
      }

    settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: <CustomArrow />,
        nextArrow: <CustomArrow />
    };

    settingsMobile = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: <CustomArrow />,
        nextArrow: <CustomArrow />
    };

    render() {
      return (
        <div id="projects" className="flex h-screen justify-center items-center">
            <div className="mx-auto w-3/5">
                <h1 className="text-center font-semibold text-gray-900 sm:text-7xl">Projects</h1>
                <div className="grid grid-cols-2 gap-4 pt-10">
                    {this.state.projects.map(content => {
                            return (
                                <>
                                <div className="">
                                    <Slider {...content.settings}>
                                        {content.images.map(image => {
                                            return (
                                                <div>
                                                    <img src={image} className="max-h-64 max-w-80 h-full w-full object-contain"/>
                                                </div>
                                            );
                                        })}
                                    </Slider>
                                </div>
                                <div className="flex flex-col">
                                    <div className="flex-grow">
                                        <div className="flex items-center">
                                            <h2 className="text-start font-semibold text-gray-900 sm:text-xl pr-2">{content.id}</h2> 
                                            <a href={content.repo} title="Github" target="_blank">
                                                <FaGithub size={20} /> 
                                            </a>
                                        </div>
                                        <p>{content.desc}</p>
                                    </div>
                                    <div className="mt-auto">
                                        <h2 className="font-semibold text-gray-900 sm:text-lg">Technology</h2>
                                        <div className="flex pb-1">
                                            {content.stacks.map(icons => {
                                                return (
                                                    <div>
                                                        {icons}
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                </div>
                                </>
                            );
                        })}
                    {/* <div className="w-96">
                        <Slider {...this.settings}>
                            <div>
                                <img src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80" alt="Carousel Image 1" />
                            </div>
                            <div>
                                <img src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80" alt="Carousel Image 2" />
                            </div>
                            <div>
                                <img src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80" alt="Carousel Image 3" />
                            </div>
                        </Slider>
                    </div>
                    <p>aaa</p>
                    <div className="w-96">
                        <Slider {...this.settings}>
                            <div>
                                <img src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80" alt="Carousel Image 1" />
                            </div>
                            <div>
                                <img src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80" alt="Carousel Image 2" />
                            </div>
                            <div>
                                <img src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80" alt="Carousel Image 3" />
                            </div>
                        </Slider>
                    </div> */}
                </div>
            </div>
        </div>
      );
    }
  }
  
  export default Projects;