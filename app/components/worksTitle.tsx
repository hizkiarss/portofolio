'use client'

import Buttons from '@/components/buttons';
import React, {useRef, useEffect} from 'react';
import scrollTo from "@/utils/scrollTo";

const WorksTitle = () => {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        const timer = setTimeout(() => {
            videoRef.current?.play();
        }, 2000);

        return () => clearTimeout(timer);
    }, []);


    return (
        <div
             className=' md:h-fit xl:min-h-[35rem] xl:max-h-[56.25rem] xl:h-screen  xl:justify-start  xl:pt-0  relative flex flex-col px-4 md:px-6 xl:px-0 mt-20'>
            <div className='items-center justify-between z-10 px-2'>
                <h2 className="relative tracking-tighter text-[2.5rem] md:text-[3.125rem] mt-0 lg:mt-8 font-Aeonik">
            <span
                className="flex gap-4 items-center relative inline-block h-[3.75rem] md:h-[4.375rem] overflow-hidden align-bottom">
        Craft{" "}
                <span className="inline-block w-full h-fit">
            {["online presence", "websites", "creatives", "brand"].map((w, i) => (
                <span
                    key={i}
                    className="block text-left overflow-hidden animate-roll font-Edwardian tracking-tight font-medium text-[4.375rem] md:text-[5.625rem] leading-[3.75rem] md:leading-[4.375rem]"
                >
                    {w}
                </span>
            ))}
        </span>
    </span>
                    <span className="-mt-6 md:-mt-8 block">people remember</span>
                </h2>

                <div>
                    <p className='w-full md:w-3/4 xl:w-[15.625rem] mt-4 lg:mt-6 tracking-tight'>
                        We provide end‑to‑end digital services that elevate brand perception and drive tangible results
                        for
                        small and growing businesses.
                    </p>
                    <Buttons onClick={() => scrollTo('contact')} content='Explore more' className='mt-4 lg:mt-10'></Buttons>
                </div>

            </div>


            <video
                ref={videoRef}
                src='/video/serviceHero.mp4'
                loop
                muted
                playsInline
                className='relative xl:absolute bottom-0  xl:right-0 h-[18.75rem] md:h-fit  md:w-screen xl:h-fit xl:w-[54rem] z-0 object-cover'
            />

        </div>
    );
};

export default WorksTitle;