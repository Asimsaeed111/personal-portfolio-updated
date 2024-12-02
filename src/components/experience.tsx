
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  
  
  
  export default function Experience(){
    // my experience here
  const experience = [
    {
      companyname: "ANCO ENGINEERING SERVICES",
      datestart: " Jan-2020",
      dateend: "Cont.",
      Position: "Accounts Executive",
      details: "Accounts & finance Division",
      work: ["Invoices Management","Supervise the import cycle","Submit monthly sales tax returns to FBR Portal",
              "Analysis of Receivables"]
    },
  {
    companyname: "AZCORP ENGINEERING SERVICES",
    datestart: " May-2016",
    dateend: "2019",
    Position: "Accounts Officer",
    details: "Accounts & finance Division",
    work: ["Manage ledger entries","Bank reconciliation", "Oversee payments", "Handle fund management"]
  }
  
]
  
      return(
          <Card data-aos="zoom-in" className="h-[85vh] overflow-y-auto">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold tracking-tight uppercase">Experience</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
           <div className="-my-8 divide-y-2 divide-gray-100">
            {experience.map((item,i)=>(
             <div  key={i} className="py-8 flex flex-wrap md:flex-nowrap">
             <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
               <span className="font-semibold title-font text-gray-700">
                 {item.Position}
               </span>
               <span className="mt-1 text-gray-500 text-sm"> {`${item.datestart} - ${item.dateend}`}</span>
             </div>
             <div className="md:flex-grow">
               <h2 className="text-xl font-medium text-gray-900 title-font mb-2 uppercase">
                 {item.companyname}
               </h2>
               <p className="leading-relaxed">Work Done Here</p>
               <ul className=" ml-4 list-disc mr-1">
                {item.work.map((workitem,i)=>(
                <li key={i}>{workitem}</li>
                ))}
                
               </ul>
             </div>
             </div>   
            ))}
       
      </div>
    </CardContent>
   </Card>
   )
  }
  
  
  