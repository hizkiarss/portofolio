'use client'

import Buttons from '@/components/buttons';
import React, {useRef, useEffect} from 'react';

const WorksTitle = () => {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        const timer = setTimeout(() => {
            videoRef.current?.play();
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div id={"works"}
             className=' md:h-fit xl:min-h-[560px] xl:max-h-[900px] xl:h-screen  xl:justify-start  xl:pt-0  relative flex flex-col px-4 md:px-6 xl:px-0 mt-20'>
            <div className='items-center justify-between z-10 px-2'>
                <h2 className="relative tracking-tighter text-[40px] md:text-[50px] mt-0 lg:mt-8 font-Aeonik">
            <span
                className="flex gap-4 items-center relative inline-block h-[60px] md:h-[70px] overflow-hidden align-bottom">
        Craft{" "}
                <span className="inline-block w-full h-fit">
            {["online presence", "websites", "creatives", "brand"].map((w, i) => (
                <span
                    key={i}
                    className="block text-left overflow-hidden animate-roll font-Edwardian tracking-tight font-medium text-[70px] md:text-[90px] leading-[60px] md:leading-[70px]"
                >
                    {w}
                </span>
            ))}
        </span>
    </span>
                    <span className="-mt-6 md:-mt-8 block">people remember</span>
                </h2>

                <div>
                    <p className='w-full md:w-3/4 xl:w-[250px] mt-4 lg:mt-6 tracking-tight'>
                        We provide end‑to‑end digital services that elevate brand perception and drive tangible results
                        for
                        small and growing businesses.
                    </p>
                    <Buttons content='Explore more' className='mt-4 lg:mt-10'></Buttons>
                </div>

            </div>


            <video
                ref={videoRef}
                src='/video/serviceHero.mp4'
                loop
                muted
                playsInline
                className='relative xl:absolute bottom-0  xl:right-0 h-[300px] md:h-fit  md:w-screen xl:h-fit xl:w-[60vw] z-0 object-cover'
            />

        </div>
    );
};

export default WorksTitle;