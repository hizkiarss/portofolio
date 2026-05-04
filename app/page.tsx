'use client';

import React from 'react';
import Hero from "@/app/components/hero";
import Navbar from "@/app/components/navbar";
import WhyHire from "@/app/components/whyHire";
import Cta from "@/app/components/cta";
import CursorFollower from './components/cursorFollower'
import Services from './components/services'
import Hero2 from './components/aboutUs'
import ImageCarousel from '@/app/components/imageCarousel'
import NavbarMobile from "./components/navbarMobile"
import ServicesMobile from "./components/serviceMobile";
import WorksTitle from "@/app/components/worksTitle";
import Website from "@/app/components/website";
import Faq from "@/app/components/faq";

const Page = () => {

    return (
        <div className="flex justify-center">
            <div className="block xl:flex gap-10 max-w-[1280px]">

                <>
                    <Navbar/>
                    <NavbarMobile/>
                </>

                <div className="xl:max-w-[1140px] max-w-full">
                    <CursorFollower/>
                    <Hero/>

                    <Hero2/>
                    <ImageCarousel/>

                    <WhyHire/>
                    <Services/>
                    <ServicesMobile/>
                    <WorksTitle/>
                    <Website/>


                    <div style={{contain: 'paint'}}>

                        <div className="relative min-h-[160svh]">

                            <div className="sticky top-0 h-[100svh] w-full overflow-hidden z-0">
                                <video
                                    src="/video/gotap-app.mp4"
                                    className="w-full h-full object-cover"
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                />
                            </div>

                            <div className="absolute inset-0 z-10 flex flex-col pointer-events-none">
                                <div className="bg-white h-[clamp(60px,20svh,140px)]"/>
                                <div className="flex-1 bg-transparent"/>
                                <div className="bg-white h-[clamp(60px,20svh,140px)]"/>
                            </div>

                        </div>

                    </div>
                    <div className="bg-white px-4 md:px-6 xl:px-0 z-50">
                        <Faq/>
                        <Cta/>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default Page;