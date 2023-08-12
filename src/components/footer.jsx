import React from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

class Footer extends React.Component {
    render() {
      return (
        <>
        <footer className="bg-cyan-600 text-white py-4">
            <div className="container mx-auto text-center items-center">
                <p>David Johan Hasiholan Parhusip</p>
                <p>Undergraduate Information Systems Student</p>
                <div className="flex items-center justify-center pt-2">
                    <a className="px-2" href="https://github.com/davidjohanhp" target="_blank" title="Github">
                        <FaGithub size={20}/> 
                    </a>
                    <a className="px-2" href="https://www.linkedin.com/in/davidjh-parhusip/" target="_blank" title="LinkedIn">
                        <FaLinkedin size={20}/> 
                    </a>
                    <a className="px-2" href="https://www.instagram.com/davidjohanhp/" target="_blank" title="Instagram">
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