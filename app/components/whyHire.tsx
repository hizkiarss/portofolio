"use client"
import React from 'react';
import {Brush, GitCompareArrows, MonitorCheck, MonitorSmartphone} from "lucide-react";
import FadeInAnimation from "@/app/components/fadeInAnimation";
import BlurText from './blurText';


const WhyHire = () => {
    return (
        <div>
            <div className="relative mt-12 h-[400px] md:h-[1100px]  md:flex items-start md:items-center justify-center ">

                <div
                    className="bg-[url('/photos/hirebackground.svg')] bg-contain bg-no-repeat bg-center text-5xl  md:text-8xl md:h-3/5 w-full h-full relative ">
                    <BlurText text='see'
                              style='bg-opacity-70 tracking-tight font-Aeonik tracking-tighter  rounded-full mt-0 absolute top-0 xl:top-20 left-6 md:left-24 xl:left-48'/>
                    <BlurText text='all'
                              style='bg-opacity-70 tracking-tight font-Aeonik tracking-tighter rounded-full absolute top-10 md:top-[120px] xl:top-[180px] left-12 md:left-[64px] lg:left-[200px] xl:left-[255px]'/>
                    <BlurText text='the'
                              style='bg-opacity-70 tracking-tight font-Aeonik tracking-tighter rounded-full -mt-10 absolute bottom-6 md:-bottom-6 xl:bottom-40 right-14 md:right-60'/>
                    <BlurText text='benefits'
                              style='bg-opacity tracking-tight-70 font-Aeonik tracking-tighter rounded-full absolute -bottom-4 md:-bottom-24 xl:bottom-20 right-[20px]'/>
                </div>


                <div
                    className={"hidden md:block absolute top-8 left-0 md:top-12 border border-white rounded-xl px-3 w-fit max-w-40 md:max-w-sm  bg-white text-black"}>
                    <FadeInAnimation>
                        <div>
                            <div className="flex gap-2 items-center md:px-4 py-2">
                                <Brush className="size-4 md:size-7 md:mt-2"/>
                                <h2 className="text-sm md:text-[xl] md:text-3xl tracking-tight">
                                    Ownership
                                </h2>
                            </div>
                            <p className="border-t-2 border-black md:mx-4 py-2 text-[10px] md:text-base">
                                Code is readable, modular, and well-organized for easy maintenance and scalability. </p>
                        </div>
                    </FadeInAnimation>
                </div>

                <div
                    className={"hidden md:block absolute  bottom-10 left-2 md:left-2 xl:left-20  border border-white rounded-xl px-3  max-w-32 md:max-w-sm  mr:0 md:-mr-[300px] text-black"}>
                    <FadeInAnimation>
                        <div>
                            <div className={"flex gap-2 items-center md:px-4 py-2"}>
                                <MonitorSmartphone className={"size-6 md:size-7 md:mt-2"}/>
                                <h2 className={"text-sm md:text-[xl] md:text-3xl tracking-tight"}>AI Augmented
                                </h2>
                            </div>

                            <p className={"border-t-2 border-black md:mx-4 py-2 text-[10px] md:text-base"}>AI tools for
                                speed, real engineering judgment for quality.

                            </p></div>
                    </FadeInAnimation>


                </div>

                <div
                    className={"hidden md:block absolute max-w-40 top-12 md:top-32  right-6 md:right-0  rounded-xl px-3 w-fit md:max-w-sm   text-black"}>
                    <FadeInAnimation>
                        <div>
                            <div className={"flex gap-2 items-center md:px-4 py-2"}>
                                <MonitorCheck className={"size-4 md:size-7 md:mt-2"}/>
                                <h2 className={"text-sm md:text-[xl] md:text-3xl tracking-tight "}>Production-Ready
                                </h2>
                            </div>

                            <p className={"border-t-2 border-black md:mx-4 py-2 text-[10px] md:text-base"}>
                                Cloud, security, and scale baked in from day one — not bolted on later.
                            </p>
                        </div>
                    </FadeInAnimation>


                </div>

                <div
                    className={" hidden md:block absolute max-w-40 bottom-0 md:-bottom-8 xl:bottom-16 right-8 md:right-0  border border-white rounded-xl px-3 w-fit  md:max-w-sm  bg-white text-black"}>
                    <FadeInAnimation>

                        <div>
                            <div className={"flex gap-2 items-center md:px-4 py-2"}>
                                <GitCompareArrows className={"size-4 md:size-7 md:mt-2"}/>
                                <h2 className={"text-sm md:text-[xl] md:text-3xl tracking-tight"}>Clarity

                                </h2>
                            </div>

                            <p className={"border-t-2 border-black md:mx-4 py-2 text-[10px] md:text-base"}>
                                Complex technical decisions, translated into language the whole team understands.
                            </p>
                        </div>
                    </FadeInAnimation>
                </div>


            </div>


            <div className='block md:hidden mt-10 '>
                <div
                    className={"block md:hidden border border-white rounded-xl px-3 w-fit  bg-white text-black"}>
                    <FadeInAnimation>
                        <div className='max-w-52'>
                            <div className="flex gap-2 items-center md:px-4 py-2">
                                <MonitorSmartphone className="size-4 md:size-7 md:mt-2"/>
                                <h2 className="text-xl md:text-3xl tracking-tight">
                                    Platform Ready
                                </h2>
                            </div>
                            <p className="border-t-2 border-black md:mx-4 py-2 text-sm ">
                                We design and build with each platform’s quirks and limitations in mind, so your posts
                                don’t get cut off and your site passes basic audits. </p>
                        </div>
                    </FadeInAnimation>
                </div>

                <div className='flex justify-end mt-8 '>
                    <div
                        className={"block md:hidden border border-white rounded-xl px-3 w-fit   bg-white text-black"}>
                        <FadeInAnimation>
                            <div className='max-w-[220px]'>
                                <div className="flex gap-2 items-center md:px-4 py-2">
                                    <Brush className="size-4 md:size-7 md:mt-2"/>
                                    <h2 className="text-xl md:text-3xl tracking-tight">
                                        Easy Updates
                                    </h2>
                                </div>
                                <p className="border-t-2 border-black md:mx-4 py-2 text-sm ">
                                    Need to tweak your website, swap out a post, or adjust a visual? You got it. We
                                    build things so changes are quick, not messy.
                                </p>
                            </div>
                        </FadeInAnimation>
                    </div>
                </div>


                <div className='flex justify-center'>
                    <div
                        className={"mt-10 block md:hidden border border-white rounded-xl px-3 w-fit  bg-white text-black"}>
                        <FadeInAnimation>
                            <div className='max-w-52'>
                                <div className="flex gap-2 items-center md:px-4 py-2">
                                    <MonitorCheck className="size-4 md:size-7 md:mt-2"/>
                                    <h2 className="text-xl md:text-3xl tracking-tight">
                                        Full Ownership
                                    </h2>
                                </div>
                                <p className="border-t-2 border-black md:mx-4 py-2 text-sm ">
                                    No locked-down files, weird dependencies, or unclear licenses. When the project’s
                                    done, it’s all yours.
                                </p>
                            </div>
                        </FadeInAnimation>
                    </div>
                </div>

                <div
                    className={"mt-10 ml-4 block md:hidden border border-white rounded-xl px-3 w-fit  bg-white text-black"}>
                    <FadeInAnimation>
                        <div className='max-w-52'>
                            <div className="flex gap-2 items-center md:px-4 py-2">
                                <GitCompareArrows className="size-4 md:size-7 md:mt-2"/>
                                <h2 className="text-xl md:text-3xl tracking-tight">
                                    Clarity
                                </h2>
                            </div>
                            <p className="border-t-2 border-black md:mx-4 py-2 text-sm ">
                                Complex technical decisions, translated into language the whole team understands.
                            </p>
                        </div>
                    </FadeInAnimation>
                </div>

            </div>
        </div>


    );
};

export default WhyHire;