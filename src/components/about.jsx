import React from "react";
import { Element } from "react-scroll";
import Slider from "react-slick";

import html from "../img/tech-icons/html-logo.png";
import css from "../img/tech-icons/css-logo.png";
import js from "../img/tech-icons/js-logo.png";
import django from "../img/tech-icons/django-logo.png";
import springboot from "../img/tech-icons/springboot-logo.png";
import go from "../img/tech-icons/go-logo.png";
import react from "../img/tech-icons/react-logo.png";
import bootstrap from "../img/tech-icons/bootstrap-logo.png";
import tailwind from "../img/tech-icons/tailwind-logo.png";
import flutter from "../img/tech-icons/flutter-logo.png";
import android from "../img/tech-icons/android-logo.png";
import docker from "../img/tech-icons/docker-logo.png";
import git from "../img/tech-icons/git-logo.png";
import heroku from "../img/tech-icons/heroku-logo.png";
import postgres from "../img/tech-icons/postgres-logo.png";
import mysql from "../img/tech-icons/MySQL-logo.png";

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

class About extends React.Component {
    constructor() {
        super();
        this.state = {
          images: [
            html,
            css,
            js,
            django,
            springboot,
            go,
            react,
            bootstrap,
            tailwind,
            flutter,
            android,
            docker,
            git,
            heroku,
            postgres,
            mysql
            ],
        };
      }

    settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 500, 
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false
        // prevArrow: <CustomArrow />,
        // nextArrow: <CustomArrow />
    };

    render() {
      return (
        <div id="about" className="flex sm:h-screen justify-center items-center">
            <div className="sm:mx-auto sm:w-3/5 sm:mt-0 mt-10 mx-10">
                <h1 className="text-center font-semibold text-gray-900 sm:text-7xl hidden sm:block">About Me</h1>
                <div className="grid sm:grid-cols-2 grid-cols-1 gap-4 pt-10">
                    <div className="">
                        <div className="flex">
                            <h2 className="text-start font-semibold text-gray-900 sm:text-9xl sm:animate-bounce text-xl">3rd</h2>
                            <h2 className="text-start font-semibold text-gray-900 sm:text-3xl text-xl mt-auto">&nbsp;Year</h2>
                        </div>
                        <h2 className="text-start font-semibold text-gray-900 sm:text-3xl text-xl">Information Systems Student,</h2>
                        <h2 className="text-start font-semibold text-amber-300 sm:text-3xl text-xl">Universitas Indonesia</h2>
                    </div>
                    <div>
                        <h2 className="text-start font-semibold text-gray-900 sm:text-3xl text-xl">Experienced in</h2>
                        <div className="pt-4 mx-10 sm:mx-0">
                                <Slider {...this.settings}>
                                    {this.state.images.map(image => {
                                        return (
                                            <div className="flex">
                                                <div className="grid place-items-center sm:h-[135px] h-[50px] p-0">
                                                    <img src={image} className="sm:max-h-32 max-h-16 object-fit"/>
                                                </div>
                                            </div>
                                            );
                                        })}
                                </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      );
    }
  }
  
  export default About;