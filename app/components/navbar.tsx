"use client"
import React from 'react';
import Buttons from "@/components/buttons";
import {goToDiv} from "@/utils/goToContact";
import Image from "next/image";
import pp from "@/public/pp.png"

const Navbar = () => {
    return (
        <nav className="px-4 lg:px-40 md:px-10 mt-0 md:mt-10 text-xs md:text-base">
            <div className={"mt-6 md:mt-10 mb-3 flex justify-between items-center"}>
                <div
                    className={"rounded-full w-fit hover:bg-white hover:text-black  transition-colors duration-300 ease-out border-2"}>
                   <Image src={pp} alt={"pp.png"} className={"w-12 md:w-14 rounded-full"}/>
                </div>
                <div className={"flex gap-8"}>
                    <button onClick={()=>goToDiv("projects")} className={""}> Projects</button>
                    <Buttons content={"Contact"} onClick={()=>goToDiv("contact")}/>
                </div>
            </div>
        </nav>
    )
        ;
};

export default Navbar;