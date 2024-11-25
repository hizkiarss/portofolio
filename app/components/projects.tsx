"use client"
import React from 'react';
import postgreLogo from "@/public/logo/postgre.png"
import redisLogo from "@/public/logo/redis.png"
import springBootLogo from "@/public/logo/spring-boot.svg"
import typescriptLogo from "@/public/logo/typescript.png"
import roomsBg from "@/public/roomsbg.jpg"
import nextLogo from "@/public/logo/nextjs.png"
import gelitixBg from "@/public/gelitixbg.jpg"
import mscBg from "@/public/mscbg.jpg"
import Link from 'next/link';

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import Buttons from "@/components/buttons";
import Image from "next/image";
import Logo from "@/components/logo";
import {goToDiv} from "@/utils/goToContact";

const Projects = () => {
    return (
        <div className="px-4 md:px-40 mt-20 md:mt-40" id={"projects"}>
            <div className={"md:flex justify-between items-center"}>
                <div className={"w-fit"}>
                    <h2 className={"text-3xl md:text-6xl font-bold font-Aeonik flex items-center md:block gap-3 "}>FEATURED <span
                        className={"-mt-2 md:mt-0 font-Edwardian font-medium text-6xl md:text-8xl "}>projects</span>
                    </h2>
                    <div className={"bg-gradient-to-r from-[#4297AA] to-[#D67221] h-1 rounded-xl -mt-2  "}></div>
                </div>

                <Buttons content={"Let's discuss"} onClick={() => goToDiv("contact")}
                         className={"text-sm md:text-base mt-4 md:mt-0 hidden md:flex"}/>
            </div>


            <Accordion type="single" collapsible className="mt-4 md:mt-10">
                <AccordionItem value="item-1">
                    <AccordionTrigger>
                        <div className={"text-2xl md:text-5xl flex py-3 md:py-8 gap-2"}>
                            <p>01.</p>
                            <p>Rooms</p>
                        </div>
                        <div
                            className={"text-[7px] md:text-base font-bold font-Helvetica border-2 rounded-full px-2 py-1 md:px-6 md:py-3  "}>
                            ROOM RENTING WEBSITE
                        </div>
                    </AccordionTrigger>
                    <AccordionContent>
                        <Image
                            alt={"roomsBg"}
                            src={roomsBg}
                            className={"rounded-t-3xl h-48 md:h-96 w-full flex items-center justify-center  object-cover"}>
                        </Image>


                        <div className={""}>
                            <div>
                                <div className={"mt-8 md:flex justify-between items-center"}>
                                    <p className={"text-xs md:w-1/2 font-Aeonik md:text-base"}>
                                        A property rental
                                        platform that
                                        enables
                                        users
                                        to compare
                                        and book accommodations based on availability, price, and destination, while
                                        allowing
                                        tenants to manage their listings, pricing, and bookings.</p>

                                    <div className={"hidden md:flex justify-end"}>
                                        <Link href="https://rooms-hizkia-sihombings-projects.vercel.app/"
                                              target="_blank"
                                              rel="noopener noreferrer" className={"w-fit "}>
                                            <Buttons content={"Visit"}
                                                     className={"text-lg md:text-4xl px-4 py-1 rounded-xl mt-4 md:mt-0 "}
                                                     noArrow={true}/>
                                        </Link>
                                    </div>
                                </div>


                                <div className={"md:flex justify-between mt-6 w-full"}>
                                    <div className={"flex flex-wrap md:w-full gap-x-1 gap-y-1  md:flex md:gap-2 "}>
                                        <Logo img={typescriptLogo} name={"TypeScript"}/>
                                        <Logo img={nextLogo} name={"Next.js"}/>
                                        <Logo img={postgreLogo} name={"PostGreSQL"}/>
                                        <Logo img={springBootLogo} name={"Spring Boot"}/>
                                        <Logo img={redisLogo} name={"Redis"}/>
                                    </div>


                                    <div className={"gap-2 mt-4 flex items-center "}>
                                        <Link href={"https://github.com/hizkiarss/rooms_frontend"} target={"blank"}
                                              rel={"noopener noreferrer"}>
                                            <Buttons content={"Frontend repository"}
                                                     arrowMobile={true}
                                                     className={"font-Aeonik whitespace-nowrap md:border-none rounded-xl text-[10px] md:text-base px-2 "}/>
                                        </Link>
                                        <Link href={"https://github.com/hizkiarss/rooms-backend"} target={"blank"}
                                              rel={"noopener noreferrer"}>
                                            <Buttons content={"Backend repository"}
                                                     arrowMobile={true}
                                                     className={"font-Aeonik whitespace-nowrap md:border-none rounded-xl text-[10px] md:text-base px-2 "}/>
                                        </Link>

                                        <div className={"md:hidden flex justify-end items-center"}>
                                            <Link href="https://rooms-hizkia-sihombings-projects.vercel.app/"
                                                  target="_blank"
                                                  rel="noopener noreferrer" className={"w-fit "}>
                                                <Buttons content={"Visit"}
                                                         arrowSmall={true}
                                                         className={"bg-white text-black md:text-4xl px-4 py-1 rounded-xl mt-0 "}
                                                />
                                            </Link>
                                        </div>
                                    </div>

                                </div>

                            </div>
                            <div className={"w-fit"}>


                            </div>

                        </div>

                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                    <AccordionTrigger>
                        <div className={"text-2xl md:text-5xl flex py-3 md:py-8 gap-2"}>
                            <p>02.</p>
                            <p>Gelitix</p>
                        </div>
                        <div
                            className={"text-[7px] md:text-base font-bold font-Helvetica border-2 rounded-full px-2 py-1 md:px-6 md:py-3  "}>
                            TICKET WEBSITE
                        </div>
                    </AccordionTrigger>

                    <AccordionContent>
                        <Image
                            alt={"gelitixBg.jpg"}
                            src={gelitixBg}
                            className={"rounded-t-3xl h-48 md:h-96 w-full flex items-center justify-center  object-cover"}>
                        </Image>


                        <div className={""}>
                            <div>
                                <div className={"mt-8 md:flex justify-between items-center"}>
                                    <p className={"text-xs md:w-1/2 font-Aeonik md:text-base"}>
                                        An event management platform that lets
                                        users
                                        discover, organize, and join events. It features secure ticketing, promotions,
                                        referral rewards, and dashboards with stats, ensuring a seamless, responsive
                                        experience.</p>

                                    <div className={"hidden md:flex justify-end"}>
                                        <Link href="https://rooms-hizkia-sihombings-projects.vercel.app/"
                                              target="_blank"
                                              rel="noopener noreferrer" className={"w-fit "}>
                                            <Buttons content={"Visit"}
                                                     className={"text-lg md:text-4xl px-4 py-1 rounded-xl mt-4 md:mt-0 "}
                                                     noArrow={true}/>
                                        </Link>
                                    </div>
                                </div>


                                <div className={"md:flex justify-between mt-6 w-full"}>
                                    <div className={"flex flex-wrap md:w-full gap-x-1 gap-y-1  md:flex md:gap-2 "}>
                                        <Logo img={typescriptLogo} name={"TypeScript"}/>
                                        <Logo img={nextLogo} name={"Next.js"}/>
                                        <Logo img={postgreLogo} name={"PostGreSQL"}/>
                                        <Logo img={springBootLogo} name={"Spring Boot"}/>
                                    </div>


                                    <div className={"gap-2 mt-4 flex items-center "}>
                                        <Link href={"https://github.com/hizkiarss/rooms_frontend"} target={"blank"}
                                              rel={"noopener noreferrer"}>
                                            <Buttons content={"Frontend repository"}
                                                     arrowMobile={true}
                                                     className={"font-Aeonik whitespace-nowrap md:border-none rounded-xl text-[10px] md:text-base px-2 "}/>
                                        </Link>
                                        <Link href={"https://github.com/hizkiarss/rooms-backend"} target={"blank"}
                                              rel={"noopener noreferrer"}>
                                            <Buttons content={"Backend repository"}
                                                     arrowMobile={true}
                                                     className={"font-Aeonik whitespace-nowrap md:border-none rounded-xl text-[10px] md:text-base px-2 "}/>
                                        </Link>

                                        <div className={"md:hidden flex justify-end items-center"}>
                                            <Link href="https://rooms-hizkia-sihombings-projects.vercel.app/"
                                                  target="_blank"
                                                  rel="noopener noreferrer" className={"w-fit "}>
                                                <Buttons content={"Visit"}
                                                         arrowSmall={true}
                                                         className={"bg-white text-black md:text-4xl px-4 py-1 rounded-xl mt-0 "}
                                                />
                                            </Link>
                                        </div>
                                    </div>

                                </div>

                            </div>
                            <div className={"w-fit"}>


                            </div>

                        </div>

                    </AccordionContent>


                </AccordionItem>

                <AccordionItem value="item-3">


                    <AccordionTrigger>
                        <div className={"text-2xl md:text-5xl flex py-3 md:py-8 gap-2"}>
                            <p>03.</p>
                            <p className={"flex gap-3"}>MSA <span className={"md:flex hidden"}>Agency</span></p>
                        </div>
                        <div
                            className={"text-[7px] md:text-base font-bold font-Helvetica border-2 rounded-full px-2 py-1 md:px-6 md:py-3  "}>
                            COMPANY PROFILE WEBSITE
                        </div>
                    </AccordionTrigger>


                    <AccordionContent>
                        <Image
                            alt={"gelitixBg.jpg"}
                            src={mscBg}
                            className={"rounded-t-3xl h-48 md:h-96 w-full flex items-center justify-center  object-cover"}>
                        </Image>


                        <div className={""}>
                            <div>
                                <div className={"mt-8 md:flex justify-between items-center"}>
                                    <p className={"text-xs md:w-1/2 font-Aeonik md:text-base"}>
                                        A responsive company profile website that showcases the brand’s mission,
                                        services, and team. It features a homepage with key highlights, an About Us page
                                        with history and culture, a Products page with offerings and reviews, and a team
                                        members page via API.</p>

                                    <div className={"hidden md:flex justify-end"}>
                                        <Link href="https://rooms-hizkia-sihombings-projects.vercel.app/"
                                              target="_blank"
                                              rel="noopener noreferrer" className={"w-fit "}>
                                            <Buttons content={"Visit"}
                                                     className={"text-lg md:text-4xl px-4 py-1 rounded-xl mt-4 md:mt-0 "}
                                                     noArrow={true}/>
                                        </Link>
                                    </div>
                                </div>


                                <div className={"md:flex justify-between mt-6 w-full"}>
                                    <div className={"flex flex-wrap md:w-full gap-x-1 gap-y-1  md:flex md:gap-2 "}>
                                        <Logo img={typescriptLogo} name={"TypeScript"}/>
                                        <Logo img={nextLogo} name={"Next.js"}/>
                                    </div>


                                    <div className={"gap-2 mt-4 flex items-center "}>
                                        <Link href={"https://github.com/hizkiarss/MSA-Agency"} target={"blank"}
                                              rel={"noopener noreferrer"}>
                                            <Buttons content={"Repository"}
                                                     arrowMobile={true}
                                                     className={"font-Aeonik whitespace-nowrap md:border-none rounded-xl text-[10px] md:text-base px-2 "}/>
                                        </Link>


                                        <div className={"md:hidden flex justify-end items-center"}>
                                            <Link href="https://msa-agency.vercel.app/"
                                                  target="_blank"
                                                  rel="noopener noreferrer" className={"w-fit "}>
                                                <Buttons content={"Visit"}
                                                         arrowSmall={true}
                                                         className={"bg-white text-black md:text-4xl px-4 py-1 rounded-xl mt-0 "}
                                                />
                                            </Link>
                                        </div>
                                    </div>

                                </div>

                            </div>
                            <div className={"w-fit"}>


                            </div>

                        </div>

                    </AccordionContent>


                </AccordionItem>
            </Accordion>
        </div>

    );
};

export default Projects;