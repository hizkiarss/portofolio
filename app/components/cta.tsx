import React from 'react';
import {ArrowUpRight} from "lucide-react";
import linkedinlogo from "@/public/logo/linkedinwhite.png"
import githublogo from "@/public/logo/githubwhite.png"
import gmaillogo from "@/public/logo/gmailwhite.png"
import Image from "next/image";
import Link from 'next/link';


const Cta = () => {

    const email = "hizkiarssihombing@gmail.com";
    const subject = "Hello!";
    const body = "I need to build a website.";

    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(
        subject
    )}&body=${encodeURIComponent(body)}`;

    return (
        <div className="font-Aeonik md:px-40 mt-20 md:my-20" id={"contact"}>

            <div className="bg-[url('/ctabg.jpg')] bg-cover rounded-[100px] mx-2 ">
                <div className={"backdrop-blur-sm bg-black/30 rounded-[100px] h-full 4"}>

                    <div className={"flex flex-col items-center justify-center py-20 "}>
                        <Link href="https://wa.me/6281546746059" target="_blank" rel="noopener noreferrer">
                            <div
                                className={"hover:bg-white hover:text-white hover:bg-opacity-30 p-8 rounded-xl transition-colors duration-300 ease-out"}>
                                <p className={"text-sm md:text-xl"}>
                                    The world is waiting for your <span
                                    className={"font-bold tracking-wide"}>website</span>.
                                </p>
                                <h2 className={"text-7xl md:text-8xl tracking-tight"}>
                                    Contact <br/> <span className={"flex "}>Hizkia <ArrowUpRight
                                    className={"size-20 md:size-28 "}/> </span>
                                </h2>
                            </div>
                        </Link>

                    </div>


                </div>
            </div>
            <div className={"flex md:flex-row flex-col justify-between md:gap-20 mt-10 "}>

                <Link
                    className={"border-t-2 w-full  items-center px-3 py-3 hover:bg-white hover:text-white hover:bg-opacity-30 md:hover:rounded-xl hover:rounded-t-xl  transition-all  duration-300 ease-out "}
                    href="https://github.com/hizkiarss" target="_blank" rel="noopener noreferrer">
                    <button className={"flex justify-between w-full"}>
                        <div className={"text-start"}>
                            <p className={"font-bold text-sm md:text-xl"}>Github</p>
                            <p className={"text-xs md:text-base "}>github.com/hizkiarss</p>
                        </div>
                        <Image src={githublogo} className={"h-8 md:h-12 w-fit"} alt="Github Logo"/>
                    </button>
                </Link>


                <Link
                    className={"border-t-2 w-full  items-center px-3 py-3 hover:bg-white hover:text-white hover:bg-opacity-30 md:hover:rounded-xl hover:rounded-t-xl  transition-all  duration-300 ease-out "}
                    href={mailtoLink} target="_blank" rel="noopener noreferrer">
                    <button className={"flex justify-between w-full items-center"}>
                        <div className={"text-start"}>
                            <p className={"font-bold text-sm md:text-xl"}>Gmail</p>
                            <p className={"text-xs md:text-base "}>hizkiarssihombing@gmail.com</p>
                        </div>
                        <Image src={gmaillogo} className={"h-6 md:h-10 w-fit"} alt="Gmail Logo"/>
                    </button>
                </Link>


                <Link
                    className={"border-t-2 w-full  items-center px-3 py-3 hover:bg-white hover:text-white hover:bg-opacity-30 md:hover:rounded-xl hover:rounded-t-xl  transition-all  duration-300 ease-out "}
                    href="https://www.linkedin.com/in/hizkiasihombing/" target="_blank" rel="noopener noreferrer">
                    <button className={"flex justify-between w-full items-center"}>
                        <div className={"text-start"}>
                            <p className={"font-bold text-sm md:text-xl"}>Linkedin</p>
                            <p className={"text-xs md:text-base"}>linkedin.com/in/hizkiasihombing/</p>
                        </div>
                        <Image src={linkedinlogo} className={"h-8 md:h-10 w-fit"} alt="Linkedin Logo"/>
                    </button>
                </Link>

            </div>
        </div>
    );
};

export default Cta;