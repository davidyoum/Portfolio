"use client";

import { Button } from "@/components/ui/button"
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function Navigation() {
    const navigate = useNavigate();
    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false)
    const toggleNavbar = () => {
        setMobileDrawerOpen(!mobileDrawerOpen);
    };

    return (
        <nav className="sticky top-0 z-50 py-3 bg-white/10 backdrop-blur-md border-b
         border-neutral-700/80">
            <div className='container px-4 mx-auto relative test-sm'>
                <div className='flex justify-between items-center'>
                    <div className='flex items-center flex-shrink-0'>
                        <a className='m-2' href='/'>David Youm</a>
                    </div>
                    <ul className='hidden sm:flex ml-14 space-x-12'>
                        <li>
                            <a className='m-2' href='/work'>Work</a>
                            <a className='m-2' href='/about'>About Me</a>
                        </li>
                    </ul>
                    <div className='hidden sm:flex justify-center space-x-12 items-center'>
                        <Button onClick={() => {navigate("/contact")}}>Contact</Button>
                    </div>
                    <div className='sm:hidden flex-col justify-end'>
                        <button onClick={toggleNavbar}> 
                            {mobileDrawerOpen ? <MenuIcon/> : <MenuIcon/>} 
                        </button>
                    </div>
                </div>
                {mobileDrawerOpen && (
                    <div className='fixed right-0 z-20 bg-slate-200 w-full p-12 
                    flex flex-col justify-center items-center lg:hidden'>
                        <ul>
                            <li className='py-4'>
                                <a className='m-2' href='/work'>Work</a>
                            </li>
                            <li>
                                <a className='m-2' href='/about'>About Me</a>
                            </li>
                        </ul>
                        <div className='flex space-x-6 mt-5'>
                            <a>
                                <Button onClick={() => {navigate("/contact")}}>Contact</Button>
                            </a>
                        </div>
                    </div>   
                )}
            </div>
        </nav>
    )
  }
  
  export default Navigation