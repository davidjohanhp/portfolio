import React from "react";
import { Link } from "react-scroll";
// import $ from "jquery";

class Navbar extends React.Component {

//     downloadCV = () => {
//       fetch('CV_David Johan Hasiholan Parhusip.pdf').then(response => {
//           response.blob().then(blob => {
//               const fileURL = window.URL.createObjectURL(blob);
//               let alink = document.createElement('a');
//               alink.href = fileURL;
//               alink.download = 'CV_David Johan Hasiholan Parhusip.pdf';
//               alink.click();
//           })
//       })
//   }

  componentDidMount() {

  }

  render() {
    return (
        <>
        <nav class="bg-white sticky top-0 z-50">
            <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div class="flex h-16 items-center justify-end">
                    <div class="flex items-center">
                        <div class="hidden md:block">
                            <div class="mr-10 flex items-baseline space-x-1">
                                {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
                                {/* <a href="#" class="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium" aria-current="page">Home</a> */}
                                <a href="" class="text-gray hover:text-cyan-600 rounded-md px-3 py-2 text-xl">
                                    <Link
                                        activeClass="text-cyan-600"
                                        to="home"
                                        spy={true}
                                        smooth={true}
                                        duration={500}
                                    >
                                        Home
                                    </Link>
                                </a>
                                <a href="" class="text-gray hover:text-cyan-600 rounded-md px-3 py-2 text-xl">
                                    <Link
                                        activeClass="text-cyan-600"
                                        to="about"
                                        spy={true}
                                        smooth={true}
                                        duration={500}
                                    >
                                        About
                                    </Link>
                                </a>
                                {/* <a href="" class="text-gray hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-xl">
                                    <Link
                                        activeClass="text-cyan-600"
                                        to="skills"
                                        spy={true}
                                        smooth={true}
                                        duration={500}
                                    >
                                        Skills
                                    </Link>
                                </a> */}
                                <a href="" class="text-gray hover:text-cyan-600 rounded-md px-3 py-2 text-xl">
                                    <Link
                                        activeClass="text-cyan-600"
                                        to="projects"
                                        spy={true}
                                        smooth={true}
                                        duration={500}
                                    >
                                        Projects
                                    </Link>
                                </a>
                                <a href="" class="text-gray hover:text-cyan-600 rounded-md px-3 py-2 text-xl">
                                    <Link
                                        activeClass="text-cyan-600"
                                        to="contact"
                                        spy={true}
                                        smooth={true}
                                        duration={500}
                                    >
                                        Contact
                                    </Link>
                                </a>
                            </div>
                        </div>
                        {/* <div class="flex-shrink-0">
                            <img class="h-8 w-8" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company"/>
                        </div> */}
                    </div>
                </div>
            </div>
        </nav>
        </>
    );
  }
}

export default Navbar;