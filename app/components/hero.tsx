"use client"

import React from 'react';
import Image from "next/image";
import hero1avif from "@/public/hero1.avif";
import hero2avif from "@/public/hero2.avif";
import hero3avif from "@/public/hero3.avif";
import Buttons from "@/components/buttons";
import {goToDiv} from "@/utils/goToContact";

const Hero = () => {
    return (
        <div className="px-4 lg:px-40 md:px-10 mt-10">
            <div className={"grid grid-cols-3 gap-2 md:gap-3 lg:gap-10"}>
                <Image className={"w-full h-[80px] md:h-[200px] lg:h-[300px] object-cover"} src={hero1avif} alt="hero1.avif"/>
                <Image className={"w-full h-[100px]  md:h-[280px] lg:h-[380px] object-cover"} src={hero2avif} alt="hero2.avif"/>
                <Image className={"w-full h-[120px] md:h-[360px] lg:h-[460px] object-cover"} src={hero3avif} alt="hero3.avif"/>
            </div>

            <div className={"lg:grid grid-cols-6 md:-mt-8"}>
                <div className={"col-span-4"}>
                    <p className={"text-[10px] md:text-lg font-Helvetica font-bold"}>HIZKIA SIHOMBING</p>
                    <div className="-mt-4 md:-mt-14 flex gap-8 ">
                    </div>
                    <h1 className={"font-Aeonik font-[700] tracking-tight text-[50px] lg:text-[130px] md:text-[120px]"}>
                        <div className={"flex gap-3 md:gap-8 items-center"}>
                            FULL
                            <span className={"font-Edwardian tracking-wide font-medium md:-mb-3 text-[60px] lg:text-[180px] md:text-[140px]"}>stack</span>
                        </div>
                        <p className={"-mt-9 md:-mt-24"}>DEVELOPER</p>
                    </h1>
                </div>

                <div className={"col-span-2 text-xs md:text-[15px] flex flex-col lg:pt-24 gap-8 font-Helvetica lg:mt-10 md:leading-6"}>
                    <p>I&apos;m Hizkia Sihombing, a full-stack software engineer specializing in building dynamic
                        web applications. Passionate about creating seamless user experiences across both front-end and
                        back-end development.</p>
                    <Buttons className={""} content={"Let's discuss"} onClick={()=> goToDiv("contact")}/>
                </div>
            </div>
        </div>
    );
};

export default Hero;