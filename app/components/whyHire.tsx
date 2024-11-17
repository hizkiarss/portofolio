import React from 'react';
import {Brush, GitCompareArrows, MonitorCheck, MonitorSmartphone} from "lucide-react";

const WhyHire = () => {
    return (
        <div className="px-40 relative mt-20">
            <div
                className="  bg-[url('/hirebackground.avif')] bg-contain bg-no-repeat bg-center justify-center items-center flex flex-col text-8xl   h-[500px]">
                <p className={"bg-opacity-70 font-bold rounded-full mt-[50px] -ml-[350px] "}>see </p>
                <p className={"bg-opacity-70 font-bold rounded-full -ml-[400px]"}>all</p>
                <p className={"bg-opacity-70 font-bold rounded-full -mr-[400px]"}>the</p>
                <p className={"bg-opacity-70 font-bold rounded-full -mr-[200px]"}>benefits</p>

            </div>


            <div className={"absolute top-32 border border-white rounded-xl px-3 w-fit max-w-sm bg-white text-black"}>
                <div className={"flex gap-2 items-center px-4 py-2"}>
                    <Brush className={"size-7 mt-2"}/>
                    <h2 className={"text-3xl font-bold font-Aeonik "}>Clean code
                    </h2>
                </div>

                <p className={"border-t-2 border-black mx-4 py-2 "}>Code is readable, modular, and
                    well-organized for easy maintenance and scalability.
                </p>
            </div>

            <div
                className={"absolute top-80 left-60 border border-white rounded-xl px-3 w-fit max-w-sm bg-white  -mr-[300px] text-black"}>
                <div className={"flex gap-2 items-center px-4 py-2"}>
                    <MonitorSmartphone className={"size-7 mt-2"}/>
                    <h2 className={"text-3xl font-bold font-Aeonik "}>Responsive Design
                    </h2>
                </div>

                <p className={"border-t-2 border-black mx-4 py-2  "}>The layout adapts seamlessly to different screen
                    sizes, ensuring a great experience on all devices.


                </p>
            </div>

            <div
                className={"absolute top-32 right-60  border border-white rounded-xl px-3 w-fit max-w-sm bg-white text-black"}>
                <div className={"flex gap-2 items-center px-4 py-2"}>
                    <MonitorCheck className={"size-7 mt-2"}/>
                    <h2 className={"text-3xl font-bold font-Aeonik "}>Maintainability
                    </h2>
                </div>

                <p className={"border-t-2 border-black mx-4 py-2  "}>The codebase is well-documented,
                    version-controlled, and easy to update or extend.


                </p>
            </div>

            <div
                className={"absolute top-72 right-24  border border-white rounded-xl px-3 w-fit max-w-sm bg-white text-black"}>
                <div className={"flex gap-2 items-center px-4 py-2"}>
                    <GitCompareArrows className={"size-7 mt-2"}/>
                    <h2 className={"text-3xl font-bold font-Aeonik "}>Flexibility
                    </h2>
                </div>

                <p className={"border-t-2 border-black mx-4 py-2  "}>Flexibility to handle both front-end and back-end
                    development for seamless solutions.
                </p>
            </div>


        </div>
    );
};

export default WhyHire;