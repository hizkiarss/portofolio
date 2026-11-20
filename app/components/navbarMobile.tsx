"use client"
import React, {useState} from 'react'
import {
    Drawer,
    DrawerContent,
    DrawerTitle,

} from "@/components/ui/drawer"
import Image from 'next/image'
import DenpasarClock from '@/utils/denpasarClock';
import {ArrowRight} from 'lucide-react';
import scrollTo, {SectionId} from '@/utils/scrollTo';

const MENU_LINKS: { id: SectionId; label: string }[] = [
    {id: 'top', label: 'Home'},
    {id: 'about', label: 'About'},
    {id: 'works', label: 'Our Work'},
    {id: 'faq', label: 'FAQ'},
    {id: 'contact', label: 'Contact'},
]

const email = "hizkiarssihombing@gmail.com";
const mailtoLink = `mailto:${email}?subject=${encodeURIComponent("Hello!")}&body=${encodeURIComponent("Hello, I’m interested in working together on a project.")}`;

const SOCIAL_LINKS = [
    {href: "https://www.linkedin.com/in/hizkiasihombing/", src: "/logo/linkedinwhite.png", label: "LinkedIn"},
    {href: "https://github.com/hizkiarss", src: "/logo/githubwhite.png", label: "GitHub"},
    {href: mailtoLink, src: "/logo/gmailwhite.png", label: "Email"},
]


const NavbarMobile = () => {
    const [isMenuOpen, setMenuOpen] = useState(false)

    // Close the drawer first (it locks page scrolling while open), then scroll to the section.
    const go = (e: React.MouseEvent, id: SectionId) => {
        e.preventDefault();
        if (!isMenuOpen) {
            scrollTo(id);
            return;
        }
        setMenuOpen(false);
        setTimeout(() => scrollTo(id), 500);
    };

    return (
        <div data-mobile-nav className='
  xl:hidden
  mb-2
  flex justify-between items-center 
  w-screen pl-0 px-2 py-6
  sticky top-0 z-40
  bg-gradient-to-t from-white/0 via-white/80 to-white/100
'>
            <a href="#top" onClick={(e) => go(e, 'top')} aria-label="Back to top">
                {/* Tablet */}
                <Image
                    src="/logo/logo.svg"
                    width={100}
                    height={100}
                    alt=""
                    className="hidden md:block relative z-20 border-black rounded-full w-24"
                />

                {/* Mobile */}
                <Image
                    src="/photos/pp.png"
                    width={100}
                    height={100}
                    alt=""
                    className="block md:hidden relative z-20 border-black rounded-full w-16"
                />
            </a>

            <button
                aria-label='burgermenu'
                onClick={() => setMenuOpen(true)}
                className='z-50  rounded-full  flex items-center justify-center h-fit'
            >
                <div className='size-10 space-y-1.5 relative flex flex-col justify-center items-center'>
                    <div
                        className={`w-6 h-[2px] bg-black transition duration-500 ease-in-out ${isMenuOpen && "-rotate-45 translate-y-1.5"}`}
                    ></div>
                    <div
                        className={`w-6 h-[2px] bg-black transition duration-500 ease-in-out ${isMenuOpen && "rotate-45 -translate-y-0.5"}`}
                    ></div>
                </div>
            </button>

            {/* Drawer */}
            <Drawer open={isMenuOpen} onOpenChange={setMenuOpen}>
                <DrawerContent className='pt-5 px-4 pb-3' aria-describedby={undefined}>
                    <DrawerTitle className="sr-only">Menu</DrawerTitle>
                    <div className="text-gray-500 mt-4 text-xs flex justify-between">
                        <p>Denpasar</p>
                        <DenpasarClock/>
                    </div>


                    <div className=''>
                        <div className='gap-3 flex flex-col w-full items-start   mt-6'>
                            {MENU_LINKS.map(({id, label}) => (
                                <a key={id} href={`#${id}`} onClick={(e) => go(e, id)}
                                   className='text-4xl tracking-tighter flex gap-2 items-center'>
                                    {label}
                                    <ArrowRight className='-mb-1'/>
                                </a>
                            ))}
                        </div>


                        <div className='flex gap-2 justify-end mt-6'>
                            {SOCIAL_LINKS.map(({href, src, label}) => (
                                <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
                                    <Image src={src} alt={label} width={20} height={20}
                                           className='invert w-7 h-fit'/>
                                </a>
                            ))}
                        </div>
                    </div>


                </DrawerContent>
            </Drawer>
        </div>
    )
}

export default NavbarMobile
