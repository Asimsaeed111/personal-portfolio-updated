export default function MobileEducation() {
  const education = [{
    uniname: "Sindh Medressatul Islam University Karachi",
    date: "2017",
    field: "Master In Business Administration",
    details: "Main campus Karachi",
  },
  {
    uniname: "University of Karachi",
    date: "2013",
    field: "Bachelor in Commerce (B.Com)",
    details: "Main campus Karachi",
  },
  {
    uniname: "S.M Govt. Arts & Commmerce College",
    date: "2011",
    field: "Intermediate (I.Com)",
    details: "Karachi",
  },
  {
    uniname: "Y.M.C.A Secondary School",
    date: "2009",
    field: "Matriculation",
    details: "Karachi",
  }]
  return (
    <div className="w-full p-5">
      <h2 className="scroll-m-20 border-b border-blue-500 pb-2 text-3xl 
             font-semibold tracking-tight first:mt-0">
        Education
      </h2>
      <div className="mt-4 divide-y-2 divide-blue-200">
        {education.map((item, i) => (
          <div key={i} className="py-4 flex flex-wrap md:flex-nowrap">
            <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
              <span className="font-semibold title-font text-gray-700">
                {item.field}
              </span>
              <span className="mt-1 text-blue-500 text-sm"> {item.date}</span>
            </div>
            <div className="md:flex-grow">
              <h2 className="text-xl font-medium text-gray-900 title-font mb-2 uppercase">
                {item.uniname}
              </h2>
              <p className="leading-relaxed">
                {item.details}
              </p>
            </div>
          </div>
        ))}

      </div>
    </div>
  )
}