'use client';

import Link from 'next/link';
import ImageTrail from '@/app/components/animation/ImageTrail';
import React, {useState, useEffect} from "react";
import Image from "next/image";
import Buttons from "@/components/buttons";

export default function NotFound() {
    const [isVisible, setIsVisible] = useState(false);
    const email = "hizkiarssihombing@gmail.com";
    const subject = "Hello!";
    const body = "I need to build a website.";

    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="min-h-screen h-screen flex items-center justify-center relative bg-transparent overflow-hidden">
            <ImageTrail
                items={[
                    'https://picsum.photos/id/287/300/300',
                    'https://picsum.photos/id/1001/300/300',
                    'https://picsum.photos/id/1025/300/300',
                    'https://picsum.photos/id/1026/300/300',
                    'https://picsum.photos/id/1027/300/300',
                    'https://picsum.photos/id/1028/300/300',
                    'https://picsum.photos/id/1029/300/300',
                    'https://picsum.photos/id/1030/300/300',
                ]}
                variant={1}
            />

            <div
                className="font-Aeonik w-full max-w-[100%] sm:max-w-[600px] md:max-w-[800px] lg:max-w-[1100px] mt-[4%] pointer-events-auto text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-transparent px-4"
                id="contact"
            >
                <div className='relative flex flex-col items-center justify-end min-h-[500px] sm:min-h-[550px] md:h-[600px]'>
                    <div
                        className={`w-full max-w-[350px] sm:max-w-[500px] md:max-w-[700px] lg:max-w-[1140px] bg-transparent transform flex justify-center transition-all duration-1000 absolute
                        ${isVisible ? "bottom-[320px] sm:bottom-56 md:bottom-64 lg:bottom-72 opacity-100" : "-bottom-32 opacity-0"}`}
                    >
                        <Image
                            src={"/photos/GalihClear.png"}
                            width={600}
                            height={500}
                            alt={""}
                            className={`rounded-full scale-x-[-1] md:scale-x-100 w-[70px] sm:w-[150px] md:w-[180px] lg:w-[200px] rotate-3 md:rotate-12 lg:rotate-18 transition-all duration-1000 absolute top-40 sm:top-12 md:top-32 lg:top-48 -left-0 sm:left-8 md:left-12 lg:left-16 ${isVisible ? "opacity-100" : "opacity-0"}`}
                        />
                        <Image
                            width={600}
                            height={500}
                            src="/photos/404c.png"
                            className='w-full max-w-[300px] sm:max-w-[400px] md:max-w-[550px] lg:max-w-[700px] object-contain'
                            alt='404 Error'
                        />
                        <Image
                            src={"/photos/KiaClear.png"}
                            width={600}
                            height={500}
                            alt={""}
                            className={`w-[70px] scale-x-[-1] md:scale-x-100  sm:w-[130px] md:w-[160px] lg:w-[180px] rounded-full rotate-0 md:rotate-6 lg:rotate-10 transition-all duration-1000 tracking-tighter absolute top-[165px] sm:top-24 md:top-16 lg:top-12 -right-0 sm:right-8 md:right-12 lg:right-20 ${isVisible ? "opacity-100" : "opacity-0"}`}
                        />

                        <ImageTrail
                            z={"z-20"}
                            items={[
                                'https://picsum.photos/id/287/300/300',
                                'https://picsum.photos/id/1001/300/300',
                                'https://picsum.photos/id/1025/300/300',
                                'https://picsum.photos/id/1026/300/300',
                                'https://picsum.photos/id/1027/300/300',
                                'https://picsum.photos/id/1028/300/300',
                                'https://picsum.photos/id/1029/300/300',
                                'https://picsum.photos/id/1030/300/300',
                            ]}
                            variant={1}
                        />
                    </div>

                    <div
                        className={`text-base sm:text-lg md:text-xl flex flex-col items-center gap-3 sm:gap-4 transition-all mt-2 md:mt-8 duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`}>
                        <p>
                            We couldn&apos;t find the page <br/>     you&apos;re looking for.
                        </p>
                        <Link className="hidden sm:block" href="/">
                            <Buttons
                                content="Back to home"
                                className="text-sm md:text-base mt-2 md:mt-4"
                            />
                        </Link>
                    </div>

                    <div
                        className={`flex flex-col md:flex-row justify-between gap-2 md:gap-6 lg:gap-10 w-full mb-6 sm:mb-8 md:mb-10 mt-4 sm:mt-5 md:mt-6 transition-all duration-1000 
                        ${isVisible ? "opacity-100" : "opacity-0"}`}
                    >
                        <Link
                            className="border-t-2 w-full items-center px-3 py-3 hover:bg-opacity-30 hover:rounded-t-xl md:hover:rounded-xl transition-all duration-300 ease-out"
                            href="https://github.com/hizkiarss"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <button className="flex justify-between w-full items-center">
                                <div className="text-start">
                                    <p className="font-bold text-base sm:text-lg md:text-xl">Github</p>
                                    <p className="text-xs sm:text-sm md:text-base break-all">github.com/hizkiarss</p>
                                </div>
                                <Image
                                    width={100}
                                    height={100}
                                    src="/logo/githubwhite.png"
                                    className="h-8 sm:h-10 md:h-12 w-auto invert flex-shrink-0 ml-2"
                                    alt="Github Logo"
                                />
                            </button>
                        </Link>

                        <Link
                            className="border-t-2 w-full items-center px-3 py-3 hover:bg-opacity-30 hover:rounded-t-xl md:hover:rounded-xl transition-all duration-300 ease-out"
                            href={mailtoLink}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <button className="flex justify-between w-full items-center">
                                <div className="text-start overflow-hidden">
                                    <p className="font-bold text-base sm:text-lg md:text-xl">Gmail</p>
                                    <p className="text-xs sm:text-sm md:text-base break-all">hizkiarssihombing@gmail.com</p>
                                </div>
                                <Image
                                    src="/logo/gmailwhite.png"
                                    width={100}
                                    height={100}
                                    className="h-7 sm:h-8 md:h-10 w-auto invert flex-shrink-0 ml-2"
                                    alt="Gmail Logo"
                                />
                            </button>
                        </Link>

                        <Link
                            className="border-t-2 w-full items-center px-3 py-3 hover:bg-opacity-30 hover:rounded-t-xl md:hover:rounded-xl transition-all duration-300 ease-out"
                            href="https://www.linkedin.com/in/hizkiasihombing/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <button className="flex justify-between w-full items-center">
                                <div className="text-start overflow-hidden">
                                    <p className="font-bold text-base sm:text-lg md:text-xl">Linkedin</p>
                                    <p className="text-xs sm:text-sm md:text-base break-all">linkedin.com/in/hizkiasihombing/</p>
                                </div>
                                <Image
                                    src="/logo/linkedinwhite.png"
                                    width={100}
                                    height={100}
                                    className="h-8 sm:h-9 md:h-10 w-auto invert flex-shrink-0 ml-2"
                                    alt="Linkedin Logo"
                                />
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}