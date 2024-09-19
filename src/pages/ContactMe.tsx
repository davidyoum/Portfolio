
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
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

import { IconContext } from "react-icons";
import { FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";
import { Link } from 'react-router-dom'
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"

import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

function ContactMe() {
    const form = useRef(null);

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (form.current == null) return;

        emailjs
        .sendForm(
            'service_32gm9sa', 
            'template_w5bcuc7', 
            e.currentTarget, 
            'a3z4WcnMV_d7hKMQn'
        )
        .then(
            () => {
            console.log('SUCCESS!');
            },
            (error) => {
            console.log('FAILED...', error.text);
            },
        );

    };

    return (
        <div>       
            <div className='z-50'>
                <Navigation/>
            </div>
              
            <div className="h-[50rem] w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
            <div>
                <Card className = "static bg-white/10 backdrop-blur-md">
                    <CardHeader>
                        <CardTitle className='text-black'>Contact Form</CardTitle>
                        <CardDescription className='text-black'>
                        Use your email to contact me
                        </CardDescription>
                    </CardHeader>
                    <form ref={form} onSubmit={sendEmail}>
                        <CardContent>
                            <div>
                                <Input name='first_name' className='mb-5' type="name" placeholder='First Name'/>

                                <Input name='last_name' className='mb-5' type="name" placeholder='Last Name'/>
                            </div>
                            

                            <Input name='user_email' className='mb-5' type="email" placeholder='Email'/>
                            <Textarea name='message' placeholder='Message Here...'/>
                        </CardContent>
                        <CardFooter className='items-center justify-center'>
                        <AlertDialog>
                            <AlertDialogTrigger asChild>
                                <Button> Send Mail </Button>
                            </AlertDialogTrigger>
                            <AlertDialogContent>
                                <AlertDialogHeader>
                                <AlertDialogTitle>You have sent me mail!</AlertDialogTitle>
                                <AlertDialogDescription>
                                    Thank you for reaching out to me! I will get back to you as soon as possible.
                                </AlertDialogDescription>
                                </AlertDialogHeader>
                                <AlertDialogFooter>
                                <AlertDialogAction>Continue</AlertDialogAction>
                                </AlertDialogFooter>
                            </AlertDialogContent>
                        </AlertDialog>
                        
                        </CardFooter>
                    </form>
                </Card>
                <Card className = "static bg-white/10 backdrop-blur-md mt-5">
                    <CardHeader>
                        <CardTitle className='text-black'>Social Media</CardTitle>
                        <CardDescription className='text-black'>
                        All of my socials
                        </CardDescription>
                    </CardHeader>
                    <CardContent className='grid grid-cols-3 gap-3'>
                    
                        <Button className='bg-transparent hover:bg-transparent' >
                            <IconContext.Provider value={{ color: "black", className: "global-class-name" }}>
                                <div>
                                    <Link to='https://www.instagram.com/davidyoum_/' target="_blank" rel="noopener noreferrer">
                                    <FaInstagram size={30}/>
                                    </Link>
                                </div>
                            </IconContext.Provider>
                        </Button>

                        <Button className='bg-transparent hover:bg-transparent'>
                            <IconContext.Provider value={{ color: "black", className: "global-class-name" }}>
                                <div>
                                    <Link to='https://www.linkedin.com/in/davidyoum/' target="_blank" rel="noopener noreferrer">
                                    <FaLinkedin size={30}/>
                                    </Link>
                                </div>
                            </IconContext.Provider>
                        </Button>

                        <Button className='bg-transparent hover:bg-transparent'>
                            <IconContext.Provider value={{ color: "black", className: "global-class-name" }}>
                                <div>
                                    <Link to='https://www.youtube.com/@davidyoum' target="_blank" rel="noopener noreferrer">
                                    <FaYoutube size={30}/>
                                    </Link>
                                </div>
                            </IconContext.Provider>
                        </Button>
                    </CardContent>
                </Card>
            </div>
            
            </div>
        </div>
    )
  }
  
  export default ContactMe