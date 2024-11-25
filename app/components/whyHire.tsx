import React from 'react';
import {Brush, GitCompareArrows, MonitorCheck, MonitorSmartphone} from "lucide-react";

const WhyHire = () => {
    return (
        <div className="px-4 md:px-10 lg:px-40 relative mt-10 md:mt-20">
            <div
                className="bg-[url('/hirebackground.avif')] bg-contain bg-no-repeat bg-center justify-center items-center flex flex-col text-5xl md:text-8xl h-[500px]">
                <p className={"bg-opacity-70 font-bold rounded-full mt-5 md:mt-[50px] -ml-[160px] md:-ml-[350px] "}>see </p>
                <p className={"bg-opacity-70 font-bold rounded-full -ml-[150px] md:-ml-[400px]"}>all</p>
                <p className={"bg-opacity-70 font-bold rounded-full -mt-10 -mr-[150px] md:-mr-[400px]"}>the</p>
                <p className={"bg-opacity-70 font-bold rounded-full -mr-[60px] md:-mr-[200px]"}>benefits</p>

            </div>


            <div
                className={"absolute top-16 md:top-32 border border-white rounded-xl px-3 w-fit max-w-40 md:max-w-sm  bg-white text-black"}>
                <div className={"flex gap-2 items-center md:px-4 py-2"}>
                    <Brush className={"size-4 md:size-7 md:mt-2"}/>
                    <h2 className={"text-sm md:text-[xl] md:text-3xl font-bold font-Aeonik "}>Clean code
                    </h2>
                </div>
                <p className={"border-t-2 border-black md:mx-4 py-2 text-[10px] md:text-base "}>Code is readable, modular, and
                    well-organized for easy maintenance and scalability.
                </p>
            </div>

            <div
                className={"absolute max-w-36 top-6  md:top-80 left-52 md:left-60 border border-white rounded-xl px-3 w-fit  md:max-w-sm bg-white -mr-[300px] text-black"}>
                <div className={"flex gap-2 items-center md:px-4 py-2"}>
                    <MonitorSmartphone className={"size-6 md:size-7 md:mt-2"}/>
                    <h2 className={"text-sm md:text-[xl] md:text-3xl font-bold font-Aeonik"}>Responsive Design
                    </h2>
                </div>

                <p className={"border-t-2 border-black md:mx-4 py-2 text-[10px] md:text-base"}>The layout adapts seamlessly to different screen
                    sizes, ensuring a great experience on all devices.
                </p>
            </div>

            <div
                className={"absolute max-w-40 top-[340px] md:top-32 md:right-60  border border-white rounded-xl px-3 w-fit md:max-w-sm  bg-white text-black"}>
                <div className={"flex gap-2 items-center md:px-4 py-2"}>
                    <MonitorCheck className={"size-4 md:size-7 md:mt-2"}/>
                    <h2 className={"text-sm md:text-[xl] md:text-3xl font-bold font-Aeonik "}>Maintainability
                    </h2>
                </div>

                <p className={"border-t-2 border-black md:mx-4 py-2 text-[10px] md:text-base"}>The codebase is well-documented,
                    version-controlled, and easy to update or extend.
                </p>
            </div>

            <div
                className={"absolute max-w-40 top-96  md:top-72 right-8 md:right-24  border border-white rounded-xl px-3 w-fit  md:max-w-sm  bg-white text-black"}>
                <div className={"flex gap-2 items-center md:px-4 py-2"}>
                    <GitCompareArrows className={"size-4 md:size-7 md:mt-2"}/>
                    <h2 className={"text-sm md:text-[xl] md:text-3xl font-bold font-Aeonik"}>Flexibility
                    </h2>
                </div>

                <p className={"border-t-2 border-black md:mx-4 py-2 text-[10px] md:text-base"}>Flexibility to handle both front-end and back-end
                    development for seamless solutions.
                </p>
            </div>


        </div>
    );
};

export default WhyHire;