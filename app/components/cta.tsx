"use client"
import React, {useEffect, useRef, useState} from 'react';
import Image from "next/image";
import Link from 'next/link';

const Cta = () => {
    const [isVisible, setIsVisible] = useState(false);
    const parentRef = useRef<HTMLDivElement>(null);

    const email = "hizkiasihombing@gmail.com";
    const subject = "Hello!";
    const body = "Hello, I’m interested in working together on a project.";

    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                    } else {
                        setIsVisible(false);
                    }
                });
            },
            {threshold: 0.5}
        );

        if (parentRef.current) {
            observer.observe(parentRef.current);
        }

        return () => {
            if (parentRef.current) {
                observer.unobserve(parentRef.current);
            }
        };
    }, []);

    return (
        <div
            ref={parentRef}
            className="font-Aeonik overflow-hidden"
            id="contact"
        >
            <div
                className='relative flex flex-col justify-between items-center group h-[600px] md:h-[500px] lg:h-[600px] overflow-hidden'>
                <p className='text-[20px] z-20'>Big ideas need bold support.</p>

                <p className={`text-[50px] rotate-3 md:rotate-0 transition-all duration-1000 tracking-tighter w-fit absolute top-16 md:top-48 px-4 lg:left-28 md:left-4 z-20 ${isVisible ? "opacity-100" : "opacity-0"}`}>
                    call
                </p>

                <div
                    className={`w-[450px] md:w-[700px] lg:w-[800px] xl:w-[1140px] overflow-x-hidden bg-white absolute  transform  z-10 flex justify-center transition-all duration-1000 
                    ${isVisible ? "bottom-80 md:bottom-32 lg:bottom-44 xl:bottom-40" : "-bottom-32"}`}
                >
                    <Image
                        width={250}
                        height={250}
                        src="/photos/logoBottom.png"
                        className='w-[350px] md:w-[450px] lg:w-[800px] object-cover'
                        alt=''
                    />
                </div>

                <p className={`text-[50px] -rotate-6 md:rotate-0 transition-all duration-1000 tracking-tighter absolute bottom-[260px] md:top-48 px-4 md:right-3 lg:right-28 z-20 ${isVisible ? "opacity-100" : "opacity-0"}`}>
                    now.
                </p>

                <div
                    className={`flex md:flex-row flex-col justify-between gap-2 md:gap-6 lg:gap-10 w-full md:mt-0 md:mb-10 lg:mt-10 lg:mb-10 transition-all duration-1000 
                    ${isVisible ? "opacity-100" : "opacity-0"}`}
                >
                    <Link
                        className="border-t-2 w-full items-center px-3 py-3 hover:bg-opacity-30 md:hover:rounded-xl hover:rounded-t-xl transition-all duration-300 ease-out"
                        href="https://www.linkedin.com/in/hizkiasihombing/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <button className="flex justify-between w-full items-center">
                            <div className="text-start">
                                <p className="font-bold text-lg md:text-xl">LinkedIn</p>
                                <p className="text-xs lg:text-base">linkedin.com/in/hizkiasihombing/</p>
                            </div>
                            <Image
                                width={100}
                                height={100}
                                src="/logo/linkedinwhite.png"
                                className="h-8 md:h-10 w-fit  invert"
                                alt="Github Logo"
                            />
                        </button>
                    </Link>

                    <Link
                        className="border-t-2 w-full items-center px-3 py-3 hover:bg-opacity-30 md:hover:rounded-xl hover:rounded-t-xl transition-all duration-300 ease-out"
                        href={mailtoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <button className="flex justify-between w-full items-center">
                            <div className="text-start">
                                <p className="font-bold text-lg md:text-xl">Gmail</p>
                                <p className="text-xs lg:text-base">hizkiarssihombing@gmail.com</p>
                            </div>
                            <Image
                                src="/logo/gmailwhite.png"
                                width={100}
                                height={100}
                                className="h-8 md:h-10 w-fit invert z-0"
                                alt="Gmail Logo"
                            />
                        </button>
                    </Link>

                    <Link
                        className="border-t-2 w-full items-center px-3 py-3 pb-5 hover:bg-opacity-30 md:hover:rounded-xl hover:rounded-t-xl transition-all duration-300 ease-out"
                        href="https://api.whatsapp.com/send?phone=6281546746059&text=Hello%2C%20I%E2%80%99m%20interested%20in%20working%20together%20on%20a%20project."
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <button className="flex justify-between w-full items-center">
                            <div className="text-start">
                                <p className="font-bold text-lg md:text-xl">Whatsapp</p>
                                <p className="text-xs lg:text-base">+62 815-4674-6059</p>
                            </div>
                            <Image
                                src="/logo/whatsapp.svg"
                                width={100}
                                height={100}
                                className="h-10 md:h-10 w-fit z-0"
                                alt="Linkedin Logo"
                            />
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Cta;
