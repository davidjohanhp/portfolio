import React from "react";
import myPhoto from "../img/new-photo.jpg"
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaInstagram, FaLinkedin, FaRegFilePdf } from "react-icons/fa";

class Home extends React.Component {
    render() {
      return (
        <div id="home" className="flex sm:h-[40rem] justify-center items-center">
            <div className="px-10 sm:mt-0 mt-36">
                <div className="content-center xs:mx-10">
                    <div className="mx-auto">
                        <h1 className="text-start font-semibold leading-15 text-gray-900 lg:text-8xl md:text-5xl text-3xl sm:leading-15">Hello, I am <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-500">David Johan</span></h1>
                        <span className="text-start font-semibold text-gray-900 lg:text-4xl text-3xl">
                            Based in Jakarta, a
                            <span className="hidden sm:inline">
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
                            <span className="sm:hidden xs:visible">
                                &nbsp;Software Engineer
                            </span>
                        </span>
                    </div>
                    <div className="flex align-center pt-5">
                        <a className="hover:text-gray-600 pr-3" href="https://github.com/davidjohanhp" target="_blank" title="Github">
                            <FaGithub className="lg:text-2xl text-xl"/> 
                        </a>
                        <a className="hover:text-gray-600 px-3" href="https://www.linkedin.com/in/davidjh-parhusip/" target="_blank" title="LinkedIn">
                            <FaLinkedin className="lg:text-2xl text-xl"/> 
                        </a>
                        <a className="hover:text-gray-600 px-3" href="https://www.instagram.com/davidjohanhp/" target="_blank" title="Instagram">
                            <FaInstagram className="lg:text-2xl text-xl"/>
                        </a>
                        <a className="hover:text-gray-600 px-3" href="https://drive.google.com/file/d/1qgclhUeF2NeUw2DEmD2XgXcDVrdDDbwI/view?usp=sharing" target="_blank" title="CV">
                            <FaRegFilePdf className="lg:text-2xl text-xl"/> 
                        </a>
                    </div>
                </div>
            </div>
        </div>
      );
    }
  }
  
  export default Home;