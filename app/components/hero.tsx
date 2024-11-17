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
        <div className="px-40 mt-10">
            <div className={"grid grid-cols-3 gap-10"}>
                <Image className={"w-full h-[300px] object-cover"} src={hero1avif} alt="hero1.avif"/>
                <Image className={"w-full h-[380px] object-cover"} src={hero2avif} alt="hero2.avif"/>
                <Image className={"w-full h-[460px] object-cover"} src={hero3avif} alt="hero3.avif"/>
            </div>

            <div className={"grid grid-cols-6 -mt-8"}>
                <div className={"col-span-4"}>
                    <p className={"text-lg font-Helvetica font-bold"}>HIZKIA SIHOMBING</p>
                    <div className="-mt-14 flex gap-8 ">
                    </div>
                    <h1 className={"font-Aeonik font-[700] tracking-tight text-[140px]"}>
                        <div className={"flex gap-8 items-center"}>
                            FULL
                            <span className={"font-Edwardian tracking-wide font-medium -mb-3 text-[180px]"}>stack</span>
                        </div>
                        <p className={"-mt-24"}>DEVELOPER</p>
                    </h1>
                </div>

                <div className={"col-span-2 text-[15px] flex flex-col pt-24 gap-8 font-Helvetica mt-10"}>
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