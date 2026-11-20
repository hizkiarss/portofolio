"use client"
import React from 'react'
import FadeInAnimation from "@/app/components/fadeInAnimation";

const Hero = () => {
    return (
        <div id="about" className='mx-4  md:mx-2 md:px-2 xl:mx-0 mb-0 md:mb-6 mt-10 md:mt-20 '>
            <FadeInAnimation scroll={true}>
                <div>
                    <h2 className=" tracking-tighter font-Aeonik  leading-tight text-[2rem] md:text-[3.125rem]">
                        I make awesome interactive experiences with
                        <div className="-mt-5 md:-mt-8">
                            <span className="inline-block relative mr-4">
                                <span className="font-Edwardian tracking-wide font-medium text-[3.75rem] md:text-[5.625rem]">
                                    empathy
                                </span>
                                <div
                                    className="absolute bottom-4 md:bottom-7 right-0 h-[2px] w-full bg-black animate-underlineRightToLeft  "
                                    style={{animationDelay: "2000ms"}}
                                />
                            </span>
                            and attention to
                            <span className="inline-block relative ml-2 -mt-32 md:mt-0">
                                <span className="font-Edwardian tracking-wide font-medium text-[3.75rem]   md:text-[5.625rem]">
                                    detail
                                </span>
                                <div
                                    className="absolute  bottom-4 md:bottom-7 right-0 h-[2px] w-full bg-black animate-underlineRightToLeft"
                                    style={{animationDelay: "2000ms"}}
                                />
                            </span>
                        </div>
                    </h2>
                </div>
            </FadeInAnimation>
        </div>
    );
};

export default Hero;
