import Image from "next/image";
import Link from "next/link";

export default function MobileProjects() {
  const projects = [{
    name: " Facebook Login Page Clone",
    detail: "This is my first mini project",
    link: "https://fb-clone-liard.vercel.app/",
    image: "fb-clone-miniproject.png"
  },
  {
    name: "Technical Analysis Report Paper ID: I0101319",
    detail: "Research Publication- IJSER Volume 12, Issue 11, November 2021 Edition",
    link: "/Technical-Analysis-Report.pdf",
    image: "publication.jpg"
  }
  ]
  return (
    <div className="w-full p-5">
      <h2 className="scroll-m-20 border-b border-blue-500 pb-2 text-3xl 
             font-semibold tracking-tight first:mt-0">
        Project
      </h2>
      <div className="mt-4 flex flex-wrap -m-4">
        {/* my projects here */}
        {projects.map((item, i) => (
          <div key={i} className="lg:w-1/3 sm:w-1/2 p-4">
            <div className="flex relative h-64">
              <Image
                alt="gallery"
                width={1000}
                height={1000}
                className="absolute inset-0 w-full h-full object-cover object-center"
                src={`/${item.image}`}
              />
              <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200
           bg-white opacity-0 hover:opacity-100 cursor-pointer duration-300">
                <h2 className="text-lg font-semibold tracking-tight">
                  {item.name}
                </h2>
                <p className="mt-3 leading-relaxed line-clamp-3 ">
                  {item.detail}
                </p>
                <Link href={item.link} target="_blank" className="text-sm font-medium tracking-tight
             hover:text-blue-500 hover: underline">
                  <p className="mt-3"> View Porject </p></Link>
              </div>
            </div>
          </div>
        ))
        }



      </div>
    </div>
  )
}