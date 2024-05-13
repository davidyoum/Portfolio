
import Navigation from '@/components/Navigation'

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import { Button } from "@/components/ui/button"
import { Link } from 'react-router-dom'

import { 
    SiTailwindcss,
    SiTypescript
} from "react-icons/si";
import { FaHtml5,FaJava,FaPython, FaReact } from "react-icons/fa";
import { SiApache } from "react-icons/si";
import { DiPhotoshop} from "react-icons/di";
import { FaDiscord } from "react-icons/fa";

import { Badge } from "@/components/ui/badge"

function Work() {
    return (
        <div>
        <div className='z-50'>
                <Navigation />
        </div>
        <div>
            <div className="h-[40rem] w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex justify-center">
            <div className="absolute pointer-events-none inset-0 flex dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
                <div>
                    <div className='grid grid-cols-1 gap-8 m-8 md:grid md:m-5 md:grid-cols-3 relative'>
                    
                        <Card className='flex flex-col justify-between'>
                            <CardHeader>
                                <CardTitle>Chat Bot</CardTitle>
                                <CardDescription>
                                    <Badge className='m-1' variant="outline"><FaPython size={20}/></Badge>
                                    <Badge className='m-1' variant="outline"><FaDiscord size={20}/></Badge>
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p>
                                    Using the Discord.py API, I created a bot that can kick, ban,
                                    clear messages and have logs. All of this is integrated into Discord servers
                                    to help moderate and manage the servers.
                                </p>
                            </CardContent>
                            <CardFooter>
                                <Button>
                                    <Link to='https://github.com/davidyoum/CelestialBot' target="_blank" rel="noopener noreferrer">
                                        View Here
                                    </Link>
                                </Button>
                            </CardFooter>
                        </Card>

                        <Card className='flex flex-col justify-between'>
                            <CardHeader>
                                <CardTitle>Course Scheduler</CardTitle>
                                <CardDescription>
                                    <Badge className='m-1' variant="outline"><FaJava size={20}/></Badge>
                                    <Badge className='m-1' variant="outline"><SiApache size={20}/></Badge>
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p>A Course Scheduler utilizing JavaFX and Apache Derby Database.
                                    Comes with features like adding semesters, courses, and viewing your schedule.</p>
                            </CardContent>
                            <CardFooter>
                                <Button>
                                    <Link to='https://github.com/davidyoum/CourseScheduler' target="_blank" rel="noopener noreferrer">
                                        View Here
                                    </Link>
                                </Button>
                            </CardFooter>
                        </Card>

                        <Card className='flex flex-col justify-between'>
                            <CardHeader>
                                <CardTitle>Machinery Solutions Website</CardTitle>
                                <CardDescription>
                                    <Badge className='m-1' variant="outline"><FaReact size={20}/></Badge>
                                    <Badge className='m-1' variant="outline"><FaHtml5 size={20}/></Badge>
                                    <Badge className='m-1' variant="outline"><SiTailwindcss size={20}/></Badge>
                                    <Badge className='m-1' variant="outline"><SiTypescript size={20}/></Badge>
                                    <Badge className='m-1' variant="outline"><DiPhotoshop size={20}/></Badge>
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p>
                                    Using mutiple UI libraries and the lastest technologies, I desgined
                                    a website for a logisitcs company. Using Photoshop for the logo and 
                                    Figma for web desgining.
                                </p>
                            </CardContent>
                            <CardFooter>
                                <Button>In Progress</Button>
                            </CardFooter>
                        </Card>

                        <Card className='flex flex-col justify-between'>
                            <CardHeader>
                                <CardTitle>Personal Website</CardTitle>
                                <CardDescription>
                                    <Badge className='m-1' variant="outline"><FaReact size={20}/></Badge>
                                    <Badge className='m-1' variant="outline"><FaHtml5 size={20}/></Badge>
                                    <Badge className='m-1' variant="outline"><SiTailwindcss size={20}/></Badge>
                                    <Badge className='m-1' variant="outline"><SiTypescript size={20}/></Badge>
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p>
                                    Using UI libraries like AceternityUI and shadcn/UI I created my Personal
                                    website to showcase my projects and skills. I also included scripts for 
                                    a functional email messanger using EmailJS.
                                </p>
                            </CardContent>
                            <CardFooter>
                                <Button>
                                    <Link to='https://github.com/davidyoum/davidyoum.github.io' target="_blank" rel="noopener noreferrer">
                                        View Here
                                    </Link>
                                </Button>  
                            </CardFooter>
                        </Card>             
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
  }
  
  export default Work