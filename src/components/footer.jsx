import React from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

class Footer extends React.Component {
    render() {
      return (
        <>
        <footer className="pb-4 pt-10">
            <div className="mx-auto max-w-7xl px-6 py-4 md:flex md:items-center md:justify-between lg:px-8">
                <p className="text-center text-xs leading-5 text-gray-500">© 2023 David Johan Hasiholan Parhusip</p>
                {/* <p className="text-center text-xs leading-5 text-gray-500">Undergraduate Information Systems Student</p> */}
                <div className="flex items-center justify-center pt-2">
                    <a className="text-gray-400 hover:text-gray-500 px-2" href="https://github.com/davidjohanhp" target="_blank" title="Github">
                        <FaGithub size={20}/> 
                    </a>
                    <a className="text-gray-400 hover:text-gray-500 px-2" href="https://www.linkedin.com/in/davidjh-parhusip/" target="_blank" title="LinkedIn">
                        <FaLinkedin size={20}/> 
                    </a>
                    <a className="text-gray-400 hover:text-gray-500 px-2" href="https://www.instagram.com/davidjohanhp/" target="_blank" title="Instagram">
                        <FaInstagram size={20}/>
                    </a>
                </div>
            </div>
        </footer>
        </>
      );
    }
  }
  
  export default Footer;