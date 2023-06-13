import React from "react";

class About extends React.Component {
    render() {
      return (
        <div id="about" className="flex h-screen justify-center items-center">
            <div className="mx-auto w-3/5">
                <h1 className="text-center font-semibold text-gray-900 sm:text-7xl">About Me</h1>
                <div className="grid grid-cols-2 gap-4 pt-10">
                    <div>
                        <h2 className="text-start font-semibold text-gray-900 sm:text-9xl">3rd<span className="sm:text-3xl">Year</span></h2>
                        <h2 className="text-start font-semibold text-gray-900 sm:text-3xl">Information Systems Student,</h2>
                        <h2 className="text-start font-semibold text-gray-900 sm:text-3xl">Universitas Indonesia</h2>
                    </div>
                    <div>
                        <h2 className="text-start font-semibold text-gray-900 sm:text-3xl">Experienced in</h2>
                    </div>
                </div>
            </div>
        </div>
      );
    }
  }
  
  export default About;