import React from "react";
import myPhoto from "../img/intro-photo.jpeg"

class Home extends React.Component {
    render() {
      return (
        <div id="home" className="flex h-[40rem] justify-center items-center">
            {/* <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
            <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" /> */}
            <div className="mx-auto w-3/4">
                <div className="grid grid-cols-2 gap-4 content-center">
                    <div className="grid grid-cols-1 gap-4 content-center">
                        <h1 className="text-start font-semibold leading-8 text-gray-900 sm:text-7xl sm:leading-9">Hello, I am <span className="">David</span></h1>
                        <p className="">
                            aa
                        </p>
                        <div className="">
                            <p>Check My WOrk</p>
                        </div>
                    </div>
                    <div className="grid place-items-center">
                        <img src={myPhoto} className="rounded w-4/5"></img>
                    </div>
                </div>
            </div>
        </div>
      );
    }
  }
  
  export default Home;