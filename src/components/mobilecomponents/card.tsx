import { FaDownload } from "react-icons/fa";
import Typewriter from 'typewriter-effect';
import { CiFacebook, CiLinkedin, } from "react-icons/ci";
import { FaFacebook, FaGithub } from "react-icons/fa";
import Link from 'next/link';
import Image from "next/image";
import { Button } from "../ui/button";

export default function Mobilecard() {
  return (
    <div className=" h-[90vh]  flex flex-col items-center justify-center">
      <div data-aos="zoom-in" className="card bg-blue-100 w-80 glass p-5 flex flex-col justify-center items-center">

        <img src="/profile.JPG" alt="Profile pic" width={150} height={100} className="rounded-md" />

        <div className="card-body">
          {/* Name here */}
          <h1 className="card-title scroll-m-20 text-2xl text-center font-bold uppercase">Asim Saeed</h1>
          <h2 className="scroll-m-20 text-lg text-center font-semibold tracking-tight  text-blue-700"><Typewriter
            options={{
              strings: ['Finance Executive', 'Accounts Officer', 'Web Designer'],
              autoStart: true,
              loop: true,
            }}
          /></h2>
          {/* social media */}

          <div className="grid grid-cols-3 gap-2">
            {/* linkedin */}
            <div className='mt-2'>
              <Link href="https://www.linkedin.com/in/asim-saeed-099503a4/" target='_blank' className=' text-blue-400 hover:text-[#0762C8]'  >
                <CiLinkedin className='text-4xl' />
              </Link>
            </div>
            {/* facebook */}
            <div className='mt-2'>
              <Link href="https://www.facebook.com/asim.saeed111" target='_blank' className=' text-blue-400 hover:text-[#316FF6]'  >
                <CiFacebook className='text-4xl' />
              </Link>
            </div>
            {/* Github */}
            <div className='mt-2'>
              <Link href="https://github.com/Asimsaeed111" target='_blank' className=' text-blue-400 hover:text-[#6e5494]'  >
                <FaGithub className='text-4xl' />
              </Link>
            </div>

          </div>
          {/* cv button */}
          <Link href={'/cv.pdf'} className="mt-4 w-full" target="_blank">
            <Button>
              <FaDownload className="mr-2 h-2 w-2" /> Download CV
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}