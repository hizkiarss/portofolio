'use client';
import React from 'react';
import {goToDiv} from "@/utils/goToContact";
import Image from "next/image";
import DenpasarClock from '@/utils/denpasarClock';
import Link from "next/link";
import { getLenis } from '@/hooks/useLenis'


const Navbar = () => {

    const email = "hizkiasihombing@gmail.com";
    const subject = "Hello!";
    const body = "Hello, I’m interested in working together on a project.";
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    const scrollTo = (id: string) => {
        const target = document.getElementById(id)
        if (target) getLenis()?.scrollTo(target, { duration: 1.6 })
    }
    return (
        <nav
            className="mt-0 hidden xl:flex md:py-10 text-xs md:text-base h-screen flex-col justify-between !sticky top-0 !w-[86px] z-10 bg-white ">
            <div className={"flex flex-col items-start"}>
                <a href={"/"}>
                    <Image src="/logo/logo.svg" alt="logo" width={0} height={0} className="w-[68px]"/>
                </a>

                <div className="mt-4 flex flex-col gap-1 items-start">
                    <a onClick={() => scrollTo('works')}>
                        <button className="text-gray-400 hover:text-black transition-all duration-300">
                            Our works
                        </button>
                    </a>
                    <a onClick={() => scrollTo('faq')}>
                        <button className="text-gray-400 hover:text-black transition-all duration-300">
                            FAQ
                        </button>
                    </a>


                    <button onClick={() => goToDiv("contact")}
                            className="-ml-1 mt-1 group border border-black bg-black text-white  transition-all duration-300 w-[76px] hover:w-[86px] h-4 rounded-xl p-3 relative">
                        <p className="absolute top-0 left-2 group-hover:left-4 transition-all duration-500">Contact</p>
                        <div className='absolute group-hover:left-[6px] -left-2 top-[10px] transition-all duration-500'>
                            <div className="w-1 h-1 bg-white rounded-full animate-pulseCircle "/>
                        </div>

                    </button>
                </div>
            </div>


            <div>
                <div className="group relative h-8 overflow-hidden">
                    <p className="transition-all absolute duration-300 group-hover:-translate-y-5">
                        @hizkias
                    </p>
                    <div
                        className="absolute bottom-0  flex items-center gap-2 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:top-0">
                        <Link
                            href="https://api.whatsapp.com/send?phone=6281546746059&text=Hello%2C%20I%E2%80%99m%20interested%20in%20working%20together%20on%20a%20project."
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Image src="/logo/whatsapp.svg"
                                   alt="whatsapp logo" width={28} height={28}
                                   className="w-7 "/>
                        </Link>


                        <Link
                            href={mailtoLink}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Image src="/logo/gmailwhite.png"
                                   alt="linkedin logo" width={28} height={28}
                                   className="w-7 invert"/>
                        </Link>


                    </div>
                </div>

                <div className="text-gray-500">
                    <p>Denpasar</p>
                    <DenpasarClock/>
                </div>
            </div>


        </nav>
    );
};

export default Navbar;
