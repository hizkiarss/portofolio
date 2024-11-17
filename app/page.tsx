import React from 'react';
import Hero from "@/app/components/hero";
import Navbar from "@/app/components/navbar";
import WhyHire from "@/app/components/whyHire";
import Projects from "@/app/components/projects";
import Cta from "@/app/components/cta";

const Page = () => {
    return (
        <div>
            <Navbar/>
            <Hero/>
            <WhyHire/>
            <Projects/>
            <Cta/>
        </div>
    );
};

export default Page;