import React from "react";
import myPhoto from "../img/new-photo.jpg"
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaInstagram, FaLinkedin, FaRegFilePdf } from "react-icons/fa";

class Home extends React.Component {
    render() {
      return (
        <div id="home" className="flex h-[40rem] justify-center items-center">
            <div className="">
                <div className="content-center animate-in motion-safe:spin-in-90 duration-700">
                    <div className="content-center">
                        <h1 className="text-start font-semibold leading-15 text-gray-900 lg:text-8xl md:text-5xl sm:text-3xl sm:leading-15">Hello, I am <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-500">David Johan</span></h1>
                        <span className="text-start font-semibold text-gray-900 lg:text-4xl md:text-2xl sm:text-xl">
                            Based in Jakarta, a
                            <TypeAnimation
                                sequence={[
                                    ' Front End Developer', 
                                    2000, 
                                    ' Back End Developer', 
                                    2000,
                                    ' Mobile Developer', 
                                    2000,
                                ]}
                                wrapper="span"
                                cursor={true}
                                repeat={Infinity}
                            />
                        </span>
                    </div>
                    <div className="flex align-center pt-5">
                        <a className="pr-3" href="https://github.com/davidjohanhp" target="_blank" title="Github">
                            <FaGithub className="lg:text-2xl md:text-xl sm:text-l"/> 
                        </a>
                        <a className="px-3" href="https://www.linkedin.com/in/davidjh-parhusip/" target="_blank" title="LinkedIn">
                            <FaLinkedin className="lg:text-2xl md:text-xl sm:text-l"/> 
                        </a>
                        <a className="px-3" href="https://www.instagram.com/davidjohanhp/" target="_blank" title="Instagram">
                            <FaInstagram className="lg:text-2xl md:text-xl sm:text-l"/>
                        </a>
                        <a className="px-3" href="https://drive.google.com/file/d/1JayfARn-j9qJMeE81UoGAM5mD8tLMTaV/view?usp=sharing" target="_blank" title="Github">
                            <FaRegFilePdf className="lg:text-2xl md:text-xl sm:text-l"/> 
                        </a>
                    </div>
                </div>
            </div>
        </div>
      );
    }
  }
  
  export default Home;