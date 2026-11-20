"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import scrollTo from "@/utils/scrollTo";

gsap.registerPlugin(ScrollTrigger);

interface PanelImage {
    src: string;
    width: number;
    height: number;
    className: string;
}

interface PanelData {
    number: string;
    title: string;
    description: string;
    images: PanelImage[];
    layout: "split" | "stacked" | "full";
}


const PANELS: PanelData[] = [
    {
        number: "01.",
        title: "Website\nDevelopment",
        description:
            "Fast, responsive websites are built using modern tools and frameworks, with performance and scalability in mind. Every site is designed to load quickly, adapt seamlessly across devices, and grow alongside your business.",
        layout: "split",
        images: [
            {
                src: "/photos/rooms-dark-cover.webp",
                width: 800,
                height: 800,
                className:
                    "w-[25rem] h-[12.5rem] md:w-[50rem] md:h-[25rem] object-cover object-top rounded-xl transform transition duration-300 group-hover:scale-105 origin-center",
            },
            {
                src: "/photos/rooms-showcase.webp",
                width: 400,
                height: 200,
                className:
                    "w-[25rem] h-[6.125rem] md:w-[25rem] md:h-[12.5rem] object-cover object-top rounded-xl transform transition duration-300 hover:scale-110 origin-center",
            },
            {
                src: "/photos/nomad-archipelago-cover.webp",
                width: 400,
                height: 200,
                className:
                    "w-[25rem] h-[6.125rem] md:w-[25rem] md:h-[12.5rem] object-cover object-top rounded-xl transform transition duration-300 hover:scale-110 origin-center",
            },
        ],
    },
    {
        number: "02.",
        title: "API &\nBackend",
        description:
            "Solid server logic, clean database design, and well-documented APIs that your frontend and third-party tools can rely on. Built with scalability in mind so the system grows with your business, not against it.",
        layout: "stacked",
        images: [
            {
                src: "/photos/rooms-airbnb.webp",
                width: 800,
                height: 800,
                className:
                    "w-[25rem] h-[12.5rem] md:w-[50rem] md:h-full object-cover object-top rounded-xl transform transition duration-300 group-hover:scale-105 origin-center",
            },
            {
                src: "/photos/gotap-code.webp",
                width: 800,
                height: 800,
                className:
                    "w-[25rem] h-[12.5rem] md:w-[50rem] md:h-full object-cover object-top rounded-xl transform transition duration-300 group-hover:scale-105 origin-center",
            },
        ],
    },
    {
        number: "03.",
        title: "AI\nIntegration",
        description:
            "Whether it's a chatbot, a smart automation flow, or LLM-powered features embedded into your product — AI gets implemented in ways that actually move the needle. No gimmicks, just practical tools that save time or create real value for your users.",
        layout: "full",
        images: [
            {
                src: "/photos/ai-integration.webp",
                width: 800,
                height: 800,
                className:
                    "w-[25rem] h-[12.5rem] md:w-full md:h-[25rem] object-cover object-top rounded-xl transform transition duration-300 group-hover:scale-105 origin-center",
            },
        ],
    },
];


const SeeMoreButton = () => (
    <div className="absolute bottom-4 right-4 bg-white rounded-full overflow-hidden flex items-center transition-all duration-300 w-12 h-12 group-hover:w-[7.5rem] px-3">
        <ArrowUpRight className="size-6 shrink-0" />
        <p className="ml-2 transform translate-x-6 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 text-sm whitespace-nowrap">
            See More
        </p>
    </div>
);

const PanelImageWrapper = ({ img }: { img: PanelImage }) => (
    <div className="overflow-hidden rounded-xl relative group">
        <Image src={img.src} alt="slide" width={img.width} height={img.height} className={img.className} />
        <SeeMoreButton />
    </div>
);

const PanelImages = ({ images, layout }: { images: PanelImage[]; layout: PanelData["layout"] }) => {
    if (layout === "split") {
        const [main, ...rest] = images;
        return (
            <div className="flex gap-4 h-[12.5rem] md:h-[25.5rem]">
                <div className="overflow-hidden rounded-xl md:h-fit h-[12.5rem] relative group">
                    <Image src={main.src} alt="slide" width={main.width} height={main.height} className={main.className} />
                    <SeeMoreButton />
                </div>
                <div className="flex flex-col gap-2 h-[25.5rem]">
                    {rest.map((img) => (
                        <PanelImageWrapper key={img.src} img={img} />
                    ))}
                </div>
            </div>
        );
    }

    if (layout === "stacked") {
        return (
            <div className="flex gap-4 h-[12.5rem] md:h-[25.5rem]">
                {images.map((img) => (
                    <div key={img.src} className="overflow-hidden rounded-xl md:h-full h-[12.5rem] relative group">
                        <Image src={img.src} alt="slide" width={img.width} height={img.height} className={img.className} />
                        <SeeMoreButton />
                    </div>
                ))}
            </div>
        );
    }

    return (
        <div className="flex gap-4 h-[12.5rem] md:h-[25.5rem]">
            <div className="overflow-hidden rounded-xl md:h-fit w-full h-full relative group">
                <Image src={images[0].src} alt="slide" width={images[0].width} height={images[0].height} className={images[0].className} />
                <SeeMoreButton />
            </div>
        </div>
    );
};

const Panel = ({ panel }: { panel: PanelData }) => (
    <div className="panel w-screen md:w-[62.5rem] mx-0 md:mx-2 px-2 md:px-6 py-6 rounded-xl">
        <div onClick={() => scrollTo('works')} className="text-4xl bg-[#F0F0F0] p-4 rounded-xl">
            <PanelImages images={panel.images} layout={panel.layout} />
            <div className="mt-4 flex flex-col md:flex-row md:gap-20 items-start md:items-center">
                <div className="flex gap-2 items-center leading-[0.95]">
                    <h3 className="tracking-tight mt-1 text-[3.125rem] md:text-[3.75rem]">{panel.number}</h3>
                    <h3 className="tracking-tight mt-1 text-[1.5625rem] md:text-[1.875rem]">
                        {panel.title.split("\n").map((line, i) => (
                            <span key={i}>{line}{i < panel.title.split("\n").length - 1 && <br />}</span>
                        ))}
                    </h3>
                </div>
                <p className="text-sm md:text-base mt-4 md:mt-2">{panel.description}</p>
            </div>
        </div>
    </div>
);


// The desktop layout now scales with the screen width (see globals.css), so the
// pin starts at the same place on every desktop size; no per-width offsets needed.
const getStartPoint = (): string => "top top";

// Current size of 1rem in px (grows with the screen on desktop).
const remPx = () => parseFloat(getComputedStyle(document.documentElement).fontSize) || 16;


const HorizontalCarousel = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const sliderRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const container = containerRef.current;
        const slider = sliderRef.current;
        const panels = gsap.utils.toArray<HTMLElement>(".panel");
        const vw = window.innerWidth;

        if (!container || !slider || panels.length === 0 || vw < 1280) return;

        panels.forEach((p) => gsap.set(p, { backgroundColor: "#ffffff", color: "#000000" }));

        const halfVw = vw / 2;

        const ctx = gsap.context(() => {
            gsap.to(panels, {
                xPercent: -100 * (panels.length - 1),
                ease: "none",
                scrollTrigger: {
                    trigger: container,
                    pin: true,
                    scrub: 1,
                    start: getStartPoint(),
                    end: () => `+=${slider.scrollWidth + 18.75 * remPx()}`,
                    onUpdate() {
                        panels.forEach((panel) => {
                            const { left, width } = panel.getBoundingClientRect();
                            const isActive = Math.abs(left + width / 2 - halfVw) < width / 2;
                            gsap.to(panel, {
                                backgroundColor: isActive ? "#F0F0F0" : "#ffffff",
                                duration: 0.3,
                                ease: "power2.out",
                                overwrite: "auto",
                            });
                        });
                    },
                },
            });
        }, containerRef);

        ScrollTrigger.refresh();

        return () => ctx.revert();
    }, []);

    return (
        <div className="relative hidden xl:block tall:xl:hidden mt-10"
        >
            <div
                ref={containerRef}
                className="relative w-full md:overflow-hidden flex flex-col justify-start mt-0 md:mt-20 mt:pl-10"
            >
                <h2 className="text-[2rem] md:text-[3.125rem] leading-9 md:leading-normal tracking-tighter ml-4 md:mx-0 font-Aeonik">
                    See what I can <br className="block md:hidden" />{" "}
                    <span className="font-Edwardian tracking-tight font-medium md:-mb-3 text-[3.875rem] md:text-[5rem] mr-2">
            bring
          </span>{" "}
                    to the{" "}
                    <span className="font-Edwardian tracking-wide font-medium md:-mb-3 ml-3 text-[3.875rem] md:text-[5rem]">
            table.
          </span>
                </h2>

                <div
                    ref={sliderRef}
                    className="flex flex-col xl:flex-row w-max justify-start md:items-center gap-0 md:gap-10 mt-6 md:mt-0"
                >
                    {PANELS.map((panel) => (
                        <Panel key={panel.number} panel={panel} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HorizontalCarousel;