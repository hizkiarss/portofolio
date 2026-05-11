'use client'

import React, {useRef, useEffect} from 'react'
import Image from 'next/image'
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from '@/components/ui/tooltip'
import {clsx} from "clsx";


interface Project {
    title: string
    subtitle: string
    description: string
    src: string
    tools: string[]
}

const PROJECTS: Project[] = [
    {
        title: 'Nomad Archipelago',
        subtitle: 'A Travel & Cruise Company Website',
        description:
            'We built the Nomad Archipelago website to present a premium, eco-focused travel experience, showcasing liveaboard cruises and remote Indonesian destinations through clean layouts and immersive visuals. Our focus was on clean layouts, responsive design, and intuitive content flow—while keeping the site fast, scalable, and easy for the client to update and manage.',
        src: '/photos/nomad-archipelago.webp',
        tools: ['WordPress'],
    },
    {
        title: 'Rooms',
        subtitle: 'A Smarter Way to Find Short-Term Stays',
        description:
            'Rooms is a modern accommodation platform that allows users to browse, compare, and book short-term rentals with ease. The website focuses on clear property listings, intuitive navigation, and a smooth booking flow, creating a familiar and user-friendly experience similar to popular rental platforms.',
        src: '/photos/rooms-showcase.webp',
        tools: ['Next.js', 'SpringBoot', 'PostgreSQL'],
    },
    {
        title: 'One-lifestyle',
        subtitle: 'Exclusive Travel & Curated Experiences',
        description:
            "We built the One Lifestyle website to highlight bespoke travel experiences and carefully selected destinations, emphasizing exclusivity, inspiration, and refined journeys. The site is designed with clean layouts, rich visuals, and intuitive navigation to create an engaging browsing experience while clearly communicating the brand's lifestyle-driven approach to travel.",
        src: '/photos/works-onelifestyle.svg',
        tools: ['WordPress'],
    },
    {
        title: 'TS Residence',
        subtitle: 'Modern Residence & Short-Stay Accommodation',
        description:
            'The aim is to showcase a contemporary living and short-stay experience, presenting rooms, facilities, and location details in a clear and approachable way. The site emphasizes simplicity and visual clarity, making it easy for visitors to explore the property, understand its offerings, and feel confident about their stay.',
        src: '/photos/works-tsmockup.svg',
        tools: ['WordPress'],
    },
    {
        title: 'GOTAP Reputation Management',
        subtitle: 'Digital Reputation & Brand Presence',
        description:
            "The website is designed to present GOTAP's reputation management services in a professional and approachable way. It highlights the company's expertise, service offerings, and client-focused solutions through a clean and modern interface, making it easy for visitors to understand how GOTAP helps businesses strengthen and maintain their online presence.",
        src: '/photos/works-tsmockup.svg',
        tools: ['MySQL', 'Next.js'],
    },
]


const TOOL_ICONS: Record<string, string> = {
    'WordPress': '/logo/wordpress.png',
    'Next.js': '/logo/nextjs.png',
    'SpringBoot': '/logo/springboot.png',
    'PostgreSQL': '/logo/postgre.png',
    'MySQL': '/logo/mysql.png',
}

const ToolBadges = ({tools}: { tools: string[] }) => (
    <TooltipProvider delayDuration={100}>
        <div className="flex items-center justify-between gap-2 mt-4 border border-gray-200 rounded-md px-4 py-2 ">


            <p className={"text-sm text-gray-500 font-Aeonik"}>Tools used:</p>
            <div className={"flex items-end gap-2"}>
                {tools.map((tool) => (
                    <Tooltip key={tool}>
                        <TooltipTrigger asChild>
                            <div className={clsx(
                                "relative rounded-md overflow-hidden w-8 h-8 bg-white p-1 cursor-default",
                            )}>
                                <Image
                                    src={TOOL_ICONS[tool] ?? '/icons/tools/default.svg'}
                                    alt={tool}
                                    fill
                                    className="object-contain p-0.5"
                                />
                            </div>
                        </TooltipTrigger>
                        <TooltipContent side="bottom">
                            <p>{tool}</p>
                        </TooltipContent>
                    </Tooltip>
                ))}

            </div>
        </div>
    </TooltipProvider>
)


interface ProjectRowProps {
    project: Project
    onWrapperMount: (el: HTMLDivElement | null) => void
}

const ProjectRow = ({project, onWrapperMount}: ProjectRowProps) => {
    const {title, subtitle, description, src, tools} = project

    const sharedImage = (
        <Image
            src={src}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover object-top transition-all duration-300 ease-out"
            alt={title}
        />
    )

    return (
        <div className="mt-10 first:mt-0 flex flex-col md:flex-row xl:gap-10 ">
            <div className="flex flex-col justify-start xl:justify-between w-full xl:w-1/2">
                <div>
                    <h3 className="flex-1 tracking-tighter leading-7 text-3xl text-gray-500">
                        <span className="text-black">{title}:</span>
                        <br/>
                        {subtitle}
                    </h3>

                </div>


                {/* Tablet image (md only) */}
                <div
                    ref={onWrapperMount}
                    className="relative mt-4 hidden md:block xl:hidden overflow-hidden w-full h-[500px]"
                >
                    {sharedImage}
                </div>


                <div>

                    <p className="text-sm tracking-tight mt-6 mb-2 md:mb-0 xl:mt-4">
                        {description}
                    </p>
                    <div className={"hidden md:block xl:hidden"}>
                        <ToolBadges tools={tools}/>

                    </div>

                </div>


            </div>


            <div className={"w-full flex md:hidden xl:flex xl:w-1/2  flex-col"}>
                <div
                    ref={onWrapperMount}
                    className="order-2 lg:order-1 relative block md:hidden xl:block overflow-hidden w-full h-[500px] min-h-[200px]"
                >
                    {sharedImage}
                </div>

                <div className={"order-1 mb-6 lg:mb-0 lg:order-2"}>
                    <ToolBadges tools={tools}/>
                </div>
            </div>
        </div>
    )
}


const Website = () => {
    const wrappersRef = useRef<HTMLDivElement[]>([])

    const collectRef = (el: HTMLDivElement | null) => {
        if (el && !wrappersRef.current.includes(el)) {
            wrappersRef.current.push(el)
        }
    }

    useEffect(() => {
        const handleScroll = () => {
            const windowHeight = window.innerHeight

            wrappersRef.current.forEach((wrapper) => {
                const rect = wrapper.getBoundingClientRect()
                const progress = Math.max(
                    0,
                    Math.min(1, (windowHeight - rect.top) / (windowHeight * 0.8))
                )

                wrapper.style.clipPath = `inset(${100 - progress * 100}% 0 0 0)`
                wrapper.style.transform = `scale(${0.95 + progress * 0.05})`
            })
        }

        window.addEventListener('scroll', handleScroll, {passive: true})
        handleScroll()

        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <div id={"works"}
             className="flex flex-col md:flex-row justify-between mt-20 gap-10 md:gap-20 px-4 md:px-6 xl:px-0 xl:gap-16 relative">
            {/* Sticky sidebar */}
            <div className="md:sticky md:top-36 xl:top-12 self-start h-fit max-w-[200px]">
                <p className="tracking-tighter text-[40px] md:text-[50px] -mt-6">see the</p>
                <p className="font-Edwardian tracking-tight font-medium text-[70px] md:text-[90px] mr-3 relative inline-block transition-all duration-400 -mt-14">
                    work
                </p>
                <p className="text-base tracking-tight mt-2 mb-6 md:mb-0 xl:mt-0 w-fit">
                    It ain't my first rodeo.
                    <br/>
                    I made these and I'd do it even better the second time.
                </p>
            </div>

            {/* Project list */}
            <div className="flex flex-col gap-24 flex-1">
                {PROJECTS.map((project) => (
                    <ProjectRow
                        key={project.title}
                        project={project}
                        onWrapperMount={collectRef}
                    />
                ))}
            </div>
        </div>
    )
}

export default Website