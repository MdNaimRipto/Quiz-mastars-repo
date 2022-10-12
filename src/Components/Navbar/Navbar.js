import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import Links from '../Links/Links';

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const routes = [
        { id: 1, name: "Home", path: "/home" },
        { id: 2, name: "Topics", path: "/topics" },
        { id: 3, name: "Statistics", path: "/statistics" },
        { id: 4, name: "Blog", path: "/blog" },
    ]
    return (
        <>
            <div className=' flex md:hidden justify-between items-center container mx-auto pt-6 px-9'>
                <div className='block md:hidden'>
                    <h2 className='text-3xl font-semibold cursor-pointer'>Quiz
                        <span className=' text-sky-600 ml-2'>Masters</span>
                    </h2>
                </div>
                <div onClick={() => { setOpen(!open) }} className="block md:hidden text-xl">
                    {
                        open ? <FontAwesomeIcon icon={faXmark}></FontAwesomeIcon>
                            : <FontAwesomeIcon icon={faBars}> </FontAwesomeIcon>
                    }
                </div>
            </div>
            <div className=' flex justify-between items-center container mx-auto py-6 border-b-0 md:border-b-2'>
                <div className='hidden md:block'>
                    <h2 className=' text-4xl font-semibold cursor-pointer'>
                        Quiz
                        <span className=' text-sky-600 ml-2'>Masters</span>
                    </h2>
                </div>
                <nav className={` duration-200 md:h-6 ${open ? "h-48 pt-4 bg-sky-200 w-full" : " h-0 pt-0"}`}>
                    <div className={`absolute md:static duration-150 
                                        ${open ? "left-[12%]" : "left-[-30%]"}`}>
                        <u className='flex flex-col md:flex-row justify-between items-baseline md:items-center gap-5 md:gap-9 mb-5 md:mb-0 no-underline'>
                            {
                                routes.map(route => <Links key={route.id} route={route}></Links>)
                            }
                        </u>
                    </div>
                </nav>
            </div>
        </>
    );
};

export default Navbar;