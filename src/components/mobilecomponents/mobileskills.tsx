import { FaCheckSquare } from "react-icons/fa";

export default function MobileSkills() {
  // Array of skills
  const skills = [
    { name: "Honest and Dependable with Excellent Interpersonal skills", percentage: 100 },
    { name: "Team oriented, Organized and Manage time well", percentage: 90 },
    { name: "Problem Analysis and Ability to solve", percentage: 80 },
    { name: "Web Development-Typescript & Next.Js", percentage: 30 },
    { name: "Leadership and Team Management", percentage: 80 },
    { name: "Communication Skills", percentage: 80 },
  ];

  return (
    <div className="w-full p-5">
      <h2 className="scroll-m-20 border-b border-blue-500 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        Skills
      </h2>
      <div className="mt-4 flex flex-wrap -m-4">
        {skills.map((skill, index) => (
          <div key={index} className="p-4 w-full md:w-1/3">
            <div className="flex items-center mb-3">
              <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                <FaCheckSquare className="text-white text-lg" />
              </div>
              <h2 className="text-lg font-semibold tracking-tight">{skill.name}</h2>
            </div>
            <div className="w-full h-1 rounded-lg bg-gray-500">
              <div
                className="h-1 bg-blue-500 rounded-lg"
                style={{ width: `${skill.percentage}%` }}
              />
            </div>
            <h3 className="text-blue-500 text-sm text-right font-semibold tracking-tight">
              {skill.percentage}%
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}
