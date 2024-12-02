"use client"
import { useEffect } from "react";
// for animation on scroll library
import AOS from "aos"
import "aos/dist/aos.css"

import { Detail } from "./detail";
import { Sidebar } from "./sidebar";
import Mobilecard from "./mobilecomponents/card";
import MobileEducation from "./mobilecomponents/mobileeducation";
import MobileExperience from "./mobilecomponents/mobileexperience";
import MobileSkills from "./mobilecomponents/mobileskills";
import MobileProjects from "./mobilecomponents/mobileproject";
import MobileContact from "./mobilecomponents/mobilecontact";
export default function Mainpage() {
  //useeffect for main page
  useEffect(() => {
    AOS.init({
      once: false
    })
  }, [])
  return (
    <div>
      {/* Mobile view */}
      <div className="overflow-x-hidden bg-white h-screen md:hidden">
        {/* card */}
        <Mobilecard />

        {/* education */}
        <MobileEducation />


        {/* expriences */}
        <MobileExperience />

        {/* skill */}
        <MobileSkills />

        {/* project */}
        <MobileProjects />

        {/* contact */}
        <MobileContact />



      </div>


      {/* desktop view */}
      <div className="hidden md:flex md:overflow-hidden md:h-screen">
        {/* side bar */}
        <div className="w-1/5">
          <Sidebar />
        </div>

        {/* main */}
        <div className="w-full">
          <Detail />
        </div>
      </div>
    </div>
  )
}


