"use client"
import React from "react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { ChevronDown } from "lucide-react";
import FadeInAnimation from "@/app/components/fadeInAnimation";

const faqs = [

    {
        question: "I’m just starting my business—can you help?",
        answer:
            "Absolutely. We excel at guiding early‑stage businesses through the digital maze. We begin with a discovery consultation to understand your vision, target market, and budget. From there, we craft a phased roadmap that prioritizes essential assets—such as a conversion‑focused website and foundational brand visuals—so you can establish credibility quickly without overextending resources. As your business grows, we seamlessly layer on advanced features and marketing initiatives.",
    },
    {
        question: "How much do your services cost?",
        answer:
            "Pricing is tailored to the scope and complexity of each project. After our initial consultation, we produce a clear, line‑item proposal that breaks down deliverables, timelines, and investment. We also offer tiered packages for common needs—such as starter websites, rebranding campaigns, or monthly social media management—so you can choose a solution that aligns with both your objectives and budget. No hidden fees, and every engagement includes a mutually agreed‑upon revision window.",
    },
    {
        question: "How long does it take to build a website?",
        answer:
            "A straightforward five‑to‑seven‑page website typically takes 2–4 weeks from kickoff to launch, assuming timely feedback and content approval. More complex builds—such as e‑commerce sites, membership portals, or custom integrations—may extend to 6–10 weeks. We provide a detailed project timeline at the outset and maintain weekly status updates so you always know where things stand.",
    },
    {
        question: "Can I request design or content revisions?",
        answer:
            "Yes, collaboration is central to our process. All package tiers include at least two formal revision rounds, allowing you to refine layouts, imagery, and copy. Additional tweaks are welcome and billed transparently at our hourly support rate. We also schedule interim check‑ins to capture feedback early, which minimizes last‑minute surprises and keeps the project on track.",
    },
    {
        question: "Do I need to provide the content and photos?",
        answer:
            "If you have brand assets, we’ll leverage them. If not, our team can develop everything in‑house—copywriting, product photography, stock image curation, and even short‑form video snippets. We follow brand‑discovery workshops and competitive audits to ensure every word and image matches your unique voice and market positioning.",
    },
    {
        question: "What platforms do you work with?",
        answer:
            "We are platform‑agnostic, choosing the technology that best fits your objectives. For content‑centric sites, we often recommend WordPress for their user‑friendly CMS capabilities. For e‑commerce, Shopify and WooCommerce remain go‑to solutions. Need something more specialized? We also build fully custom, framework‑based sites (Java Springboot, Next.js) when scalability and performance are paramount.",
    },

    {
        question: "Will my website be mobile-friendly?",
        answer:
            "Absolutely. Every site we deliver is designed with a mobile‑first philosophy, ensuring fast load times, intuitive navigation, and a seamless user experience across smartphones, tablets, and desktops. Before launch, we conduct multi‑device and cross‑browser testing so your customers enjoy a polished experience no matter how they access your site.",
    },
    {
        question: "How do we get started?",
        answer:
            "Simply reach out via our contact form, email, or phone. We’ll schedule a complimentary discovery call to discuss your goals, challenges, and timeline. After that, you’ll receive a customized proposal and project timeline. Once approved, we kick off with an onboarding session, establish communication channels, and set milestones to keep everything transparent and on schedule.",
    },
];



const Faq = () => {
    return (
        <section className="w-full  flex flex-col  py-10 mb-20">

            <div className='text-[50px] tracking-tighter mb-10 px-2 lg:px-2 xl:px-0'>
                <FadeInAnimation scroll={true} vertical={true} delay={0.5}>
                    <p className='gap-6'><span className='font-Edwardian tracking-wide text-[90px]'>ask</span> away&mdash;
                    </p></FadeInAnimation>
                <FadeInAnimation scroll={true} vertical={true} delay={0.8}>
                    <p className='-mt-9 lg:-mt-10 leading-[50px] '>we &apos; re here <span className={'-mt-12'}>to<span className='font-Edwardian tracking-wide text-[90px] ml-3'>help</span></span>.</p>
                </FadeInAnimation>
            </div>

            <Accordion type="single" collapsible className="w-full ">
                {faqs.map(({ question, answer }, idx) => (
                    <AccordionItem
                        key={idx}
                        value={`item-${idx + 1}`}
                        className="group border-b last:border-none"
                    >
                        <AccordionTrigger className="bg-white relative overflow-hidden group  ">
                            <span
                                className="absolute inset-0 bg-black origin-bottom scale-y-0 group-hover:scale-y-100 group-data-[state=open]:scale-y-100 transition-transform duration-1000 ease-in-out z-0"
                            />

                            <div className="text-lg md:text-base flex ml-4 tracking-tight  gap-2 z-20 transition-colors duration-1000 text-black group-hover:text-white group-data-[state=open]:text-white">
                                <p>0{idx + 1}.</p>
                                <p>{question}</p>
                            </div>

                            <ChevronDown
                                className="size-6 md:size-8 mr-4 shrink-0 border rounded-full p-1 transition-all duration-1000 z-20 text-black group-data-[state=open]:text-white group-data-[state=open]:border-white group-hover:text-white group-hover:border-white"
                            />
                        </AccordionTrigger>

                        <AccordionContent className="px-4 pb-6 pt-2 bg-white/70 backdrop-blur-sm ">
                            <p className="text-base tracking-tight my-8 w-full lg:w-2/3">
                                {answer}
                            </p>
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </section>
    );
};

export default Faq;