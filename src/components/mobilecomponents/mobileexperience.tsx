export default function MobileExperience() {
  let experience = [{
    companyname: "ANCO ENGINEERING SERVICES",
    datestart: "Jan-2020",
    dateend: "Cont.",
    Position: "Accounts Executive",
    details: "Accounts & finance Division",
    work: ["Invoices Management", "Supervise the import cycle", "Submit monthly sales tax returns to FBR Portal",
      "Analysis of Receivables"]
  },
  {
    companyname: "AZCORP ENGINEERING SERVICES",
    datestart: " May-2016",
    dateend: "2019",
    Position: "Accounts Officer",
    details: "Accounts & finance Division",
    work: ["Manage ledger entries", "Bank reconciliation", "Oversee payments", "Handle fund management"]
  }
  ]
  return (
    <div className="w-full p-5">
      <h2 className="scroll-m-20 border-b border-blue-500 pb-2 text-3xl 
             font-semibold tracking-tight first:mt-0">
        Experience
      </h2>
      <div className="mt-4 divide-y-2 divide-blue-200">
        {experience.map((item, i) => (
          <div key={i} className="py-4 flex flex-wrap md:flex-nowrap">
            <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
              <span className="font-semibold title-font text-gray-700">
                {item.Position}
              </span>
              <span className="mt-1 text-blue-500 text-sm"> {`${item.datestart} - ${item.dateend}`}</span>
            </div>
            <div className="md:flex-grow">
              <h2 className="text-xl font-medium text-gray-900 title-font mb-2 uppercase">
                {item.companyname}
              </h2>
              <p className="leading-relaxed">Work Done Here</p>
              <ul className=" ml-4 list-disc text-gray-600 mr-1">
                {item.work.map((workitem, i) => (
                  <li key={i}>{workitem}</li>
                ))}

              </ul>
            </div>
          </div>
        ))}

      </div>
    </div>
  )
}