
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"



export default function Education(){
  // my education here
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

    return(
        <Card data-aos="zoom-in" className="h-[85vh] overflow-y-auto">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold tracking-tight uppercase">Education</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
         <div className="-my-8 divide-y-2 divide-gray-100">
          {education.map((item,i)=>(
           <div  key={i} className="py-8 flex flex-wrap md:flex-nowrap">
           <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
             <span className="font-semibold title-font text-gray-700">
               {item.field}
             </span>
             <span className="mt-1 text-gray-500 text-sm"> {item.date}</span>
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
  </CardContent>
 </Card>
 )
}


