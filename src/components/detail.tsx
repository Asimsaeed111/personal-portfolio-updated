import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import Education from "./education"
import Experience from "./experience"
import Skills from "./skills"
import Projects from "./projects"
import Contact from "./contact"

export function Detail() {
  return (
    <Tabs defaultValue="education" className="w-full p-3">
      <TabsList className="grid w-full grid-cols-5">
        {/* tabs triger contents */}
        <TabsTrigger value="education">Education</TabsTrigger>
        <TabsTrigger value="experience">Experience</TabsTrigger>
        <TabsTrigger value="skills">Skills</TabsTrigger>
        <TabsTrigger value="projects">Projects</TabsTrigger>
        <TabsTrigger value="contact">Contact</TabsTrigger>
      </TabsList>
      {/* tabs contents here */}
      {/* Education */}
      <TabsContent value="education">
        <Education />
      </TabsContent>
      {/* Experience */}
      <TabsContent value="experience">
        <Experience />
      </TabsContent>
      {/* Skills */}
      <TabsContent value="skills">
        <Skills />
      </TabsContent>
      {/* Projects */}
      <TabsContent value="projects">
        <Projects />
      </TabsContent>

      {/* contact */}
      <TabsContent value="contact">
        <Contact />
      </TabsContent>

    </Tabs>
  )
}
