
import Navigation from '@/components/Navigation'
import { Badge } from "@/components/ui/badge"

import { 
    SiOcaml,
    SiC,
    SiTailwindcss
} from "react-icons/si";
import { FaHtml5,FaJava,FaPython, FaCss3Alt, FaReact } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { SiApache } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";

function AboutMe() {
    return (
        <div>
            <div className='z-50'>
                    <Navigation />
            </div>
            <div>
                <div className="h-[40rem] w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex justify-center">
                <div className="absolute pointer-events-none inset-0 flex dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

                    <div>
                        <div className="text-4xl text-center sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-violet-400 to-violet-900 py-8">
                            A Student, Developer, and Desginer
                        </div>
                        <div className='max-w-50 flex relative m-4 object-center items-center justify-center'>
                            <img src='https://i.ibb.co/Vg3CYXZ/287366682-1370780280064582-2591167377222962886-n.jpg'/>
                        </div>

                        <div className='mt-10 relative ml-24 mr-24'>
                            Im currently a student at Penn State University studying Computer Science.
                            My passion for programming and designing started when I was ~12 years old when I touched Roblox and Photoshop.
                            Now I expand my programming languages and tools to create new and innovative projects.
                        </div>

                        <div className='text-center'>
                            <div className='mt-5'>
                            Backend Technologies I Know:
                            </div>
                            <div className='m-2'>
                                <Badge className='m-2' variant="outline"><SiOcaml size={20}/></Badge>
                                <Badge className='m-2' variant="outline"><SiC size={20}/></Badge>
                                <Badge className='m-2' variant="outline"><FaJava size={20}/></Badge>
                                <Badge className='m-2' variant="outline"><FaPython size={20}/></Badge>
                                <Badge className='m-2' variant="outline"><IoLogoJavascript size={20}/></Badge>
                                <Badge className='m-2' variant="outline"><GrMysql size={20}/></Badge>
                                <Badge className='m-2' variant="outline"><SiApache size={20}/></Badge>
                            </div>
                            <div>
                            Frontend Technologies I Know:
                            </div>
                            <div className='m-2'>
                                <Badge className='m-2 mb-10' variant="outline"><FaReact size={20}/></Badge>
                                <Badge className='m-2 mb-10' variant="outline"><FaHtml5 size={20}/></Badge>
                                <Badge className='m-2 mb-10' variant="outline"><FaCss3Alt size={20}/></Badge>
                                <Badge className='m-2 mb-10' variant="outline"><SiTailwindcss size={20}/></Badge>
                            </div>
                        </div>
                        
                    </div>
                
                </div>
            </div>
        </div>
        
        
    )
  }
  
  export default AboutMe