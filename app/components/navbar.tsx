'use client';
import React from 'react';
import Image from "next/image";
import DenpasarClock from '@/utils/denpasarClock';
import Link from "next/link";
import scrollTo, {SectionId} from "@/utils/scrollTo";


const Navbar = () => {
    // Real #hash links (work without JS, open-in-new-tab, etc.), upgraded to smooth scroll.
    const go = (e: React.MouseEvent, id: SectionId) => {
        e.preventDefault();
        scrollTo(id);
    };

    const email = "hizkiarssihombing@gmail.com";
    const subject = "Hello!";
    const body = "Hello, I’m interested in working together on a project.";
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    return (
        <nav
            className="mt-0 hidden xl:flex md:py-10 text-xs md:text-base  h-screen flex-col justify-between !sticky top-0 !w-[5.375rem] z-10 bg-white ">
            <div className={"flex flex-col items-start"}>
                <a href="#top" onClick={(e) => go(e, 'top')} aria-label="Back to top">
                    <Image src="/logo/logo.svg" alt="logo" width={0} height={0} className="w-[4.25rem]"/>
                </a>

                <div className="mt-4 flex flex-col gap-1 items-start">
                    <a href="#works" onClick={(e) => go(e, 'works')}
                       className="text-gray-400 hover:text-black transition-all duration-300">
                        Our works
                    </a>
                    <a href="#faq" onClick={(e) => go(e, 'faq')}
                       className="text-gray-400 hover:text-black transition-all duration-300">
                        FAQ
                    </a>


                    <button onClick={() => scrollTo("contact")}
                            className="-ml-1 mt-1 group border border-black bg-black text-white  transition-all duration-300 w-[4.75rem] hover:w-[5.375rem] h-4 rounded-xl p-3 relative">
                        <p className="absolute top-0 left-2 group-hover:left-4 transition-all duration-500">Contact</p>
                        <div className='absolute group-hover:left-[0.375rem] -left-2 top-[0.625rem] transition-all duration-500'>
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
