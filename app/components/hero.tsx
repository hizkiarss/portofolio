"use client"

import React, {useState} from 'react';
import Buttons from "@/components/buttons";
import {goToDiv} from "@/utils/goToContact";
import FadeInAnimation from "@/app/components/fadeInAnimation";
import HeroCarouselMobile from "@/app/components/heroCarouselMobile";
import HoverVideo from "@/app/components/hover-video";
import Image from "next/image";

const Hero = () => {
    const videos = [
        {
            src: "/video/gotap-app.mp4",
            title: "Instagram Post Design",
            poster: "photos/gotap-app-cover.webp"
        },
        {
            src: "/video/gotap-reputation-video.mp4",
            title: "Campaign Visuals",
            poster: "photos/gotap-reputation-cover.webp"
        },
        {
            src: "/video/monte-carlo-property-website-video.mp4",
            title: "Story Highlight",
            poster: "photos/monte-carlo-property-website-cover.webp"
        },
        {
            src: "/video/nomad-archipelago.mp4",
            title: "Client Brand Pack",
            poster: "photos/nomad-archipelago-cover.webp"
        },
        {
            src: "/video/rooms-dark.mp4",
            title: "Minimal Layout Set",
            poster: "photos/rooms-dark-cover.webp"
        },
    ];

    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);


    return (
        <div
            className="mt-[20px] md:mb-0 md:mt-10  md:h-[80vh] xl:min-h-[560px] xl:max-h-[900px] xl:h-screen flex flex-col justify-start  mx-4 relative   ">
            <FadeInAnimation scroll={false} delay={0.7}>
                <div className={"items-center lg:grid grid-cols-6"}>
                    <div className={"col-span-4"}>
                        <div className={"flex flex-col md:flex-row items-start md:items-center gap-6"}>
                            <div className="hidden md:block group relative">
                                <Image src="/photos/Kia.webp" width={100} height={100} alt=""
                                       className={`relative z-20 border-black rounded-full w-24 md:w-32 xl:w-44 md:mt-0  ${hoveredIndex != null ? "filter blur-sm" : "opacity-100"}`}/>
                            </div>


                            <h1
                                className={`tracking-tighter leading-[80px] text-[80px] md:text-[100px] font-Aeonik md:-ml-3 ${
                                    hoveredIndex != null ? "filter blur-sm" : "opacity-100"
                                }`}
                            >
                                full-
                                <span
                                    className={"font-Edwardian font-medium text-[130px] lg:text-[165px] md:text-[185px]"}>stack</span>
                                <br/> developer
                            </h1>
                        </div>

                    </div>

                    <div
                        className={"col-span-2 mt-4   text-xs md:text-[15px] flex flex-col md:flex-row md:gap-14 lg:gap-1 md:items-center lg:items-start lg:flex-col  gap-4 font-Helvetica md:leading-6"}>
                        <p className={`${
                            hoveredIndex != null ? "filter blur-sm" : "opacity-100"
                        }`}>I'm Hizkia Sihombing, a full-stack software engineer specializing in building dynamic web
                            applications. Passionate about creating seamless user experiences across both front-end and
                            back-end development.
                        </p>
                        <Buttons
                            className={`md:mt-4 w-fit \`${hoveredIndex != null ? "filter blur-sm" : "opacity-100"}`}
                            content={"Let's discuss"}
                            onClick={() => goToDiv("contact")}/>
                    </div>
                </div>
            </FadeInAnimation>


            <div className="hidden absolute bottom-20 left-0 right-0 xl:flex justify-between items-end z-30">
                {videos.map((video, idx) => (
                    <HoverVideo
                        key={idx}
                        src={video.src}
                        title={video.title}
                        idx={idx}
                        hoveredIndex={hoveredIndex}
                        setHoveredIndex={setHoveredIndex}
                        poster={video.poster}
                    />
                ))}
            </div>

            <HeroCarouselMobile/>

        </div>
    );
};

export default Hero;