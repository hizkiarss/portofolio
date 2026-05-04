'use client'

import React, { useRef, useEffect } from 'react'
import Image from 'next/image'

// ─── Data ─────────────────────────────────────────────────────────────────────

interface Project {
    title: string
    subtitle: string
    description: string
    src: string
}

const PROJECTS: Project[] = [
    {
        title: 'Nomad Archipelago',
        subtitle: 'A Travel & Cruise Company Website',
        description:
            'We built the Nomad Archipelago website to present a premium, eco-focused travel experience, showcasing liveaboard cruises and remote Indonesian destinations through clean layouts and immersive visuals. Our focus was on clean layouts, responsive design, and intuitive content flow—while keeping the site fast, scalable, and easy for the client to update and manage.',
        src: '/photos/nomad-archipelago.webp',
    },
    {
        title: 'Rooms',
        subtitle: 'A Smarter Way to Find Short-Term Stays',
        description:
            'Rooms is a modern accommodation platform that allows users to browse, compare, and book short-term rentals with ease. The website focuses on clear property listings, intuitive navigation, and a smooth booking flow, creating a familiar and user-friendly experience similar to popular rental platforms.',
        src: '/photos/rooms-showcase.webp',
    },
    {
        title: 'One-lifestyle',
        subtitle: 'Exclusive Travel & Curated Experiences',
        description:
            "We built the One Lifestyle website to highlight bespoke travel experiences and carefully selected destinations, emphasizing exclusivity, inspiration, and refined journeys. The site is designed with clean layouts, rich visuals, and intuitive navigation to create an engaging browsing experience while clearly communicating the brand's lifestyle-driven approach to travel.",
        src: '/photos/works-onelifestyle.svg',
    },
    {
        title: 'TS Residence',
        subtitle: 'Modern Residence & Short-Stay Accommodation',
        description:
            'The aim is to showcase a contemporary living and short-stay experience, presenting rooms, facilities, and location details in a clear and approachable way. The site emphasizes simplicity and visual clarity, making it easy for visitors to explore the property, understand its offerings, and feel confident about their stay.',
        src: '/photos/works-tsmockup.svg',
    },
]

// ─── Sub-component ────────────────────────────────────────────────────────────

/**
 * Each project gets two image containers (tablet + desktop/mobile).
 * We attach refs to both via the callback pattern so we can drive
 * the scroll animation on all of them from a single array.
 */
interface ProjectRowProps {
    project: Project
    /** Called for every <div> wrapper that should animate on scroll */
    onWrapperMount: (el: HTMLDivElement | null) => void
}

const ProjectRow = ({ project, onWrapperMount }: ProjectRowProps) => {
    const { title, subtitle, description, src } = project

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
        <div className="mt-20 first:mt-0 flex flex-col md:flex-row xl:gap-10">
            {/* Text column */}
            <div className="flex flex-col justify-start xl:justify-between w-full xl:w-3/5">
                <h3 className="flex-1 tracking-tighter leading-7 text-3xl text-gray-500">
                    <span className="text-black">{title}:</span>
                    <br />
                    {subtitle}
                </h3>

                {/* Tablet image (md only) */}
                <div
                    ref={onWrapperMount}
                    className="relative mt-4 hidden md:block xl:hidden overflow-hidden w-full h-[500px]"
                >
                    {sharedImage}
                </div>

                <p className="text-sm tracking-tight mt-6 mb-6 md:mb-0 xl:mt-0">
                    {description}
                </p>
            </div>

            {/* Mobile + desktop image */}
            <div
                ref={onWrapperMount}
                className="relative block md:hidden xl:block overflow-hidden w-full h-[500px]"
            >
                {sharedImage}
            </div>
        </div>
    )
}

// ─── Main component ───────────────────────────────────────────────────────────

const Website = () => {
    // One flat array holds refs to every animatable wrapper div.
    // Two entries per project (tablet + mobile/desktop).
    const wrappersRef = useRef<HTMLDivElement[]>([])

    const collectRef = (el: HTMLDivElement | null) => {
        if (el && !wrappersRef.current.includes(el)) {
            wrappersRef.current.push(el)
        }
    }

    useEffect(() => {
        const handleScroll = () => {
            // Cache once per tick, not once per element
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

        // passive: true lets the browser skip waiting for preventDefault,
        // eliminating scroll jank on mobile
        window.addEventListener('scroll', handleScroll, { passive: true })
        handleScroll()

        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <div className="flex flex-col md:flex-row justify-between mt-20 gap-10 md:gap-20 px-4 md:px-6 xl:px-0 xl:gap-16 relative">
            {/* Sticky sidebar */}
            <div className="md:sticky md:top-36 xl:top-12 self-start h-fit max-w-[200px]">
                <p className="tracking-tighter text-[40px] md:text-[50px] -mt-6">see the</p>
                <p className="font-Edwardian tracking-tight font-medium text-[70px] md:text-[90px] mr-3 relative inline-block transition-all duration-400 -mt-14">
                    work
                </p>
                <p className="text-base tracking-tight mt-2 mb-6 md:mb-0 xl:mt-0 w-fit">
                    It ain't my first rodeo.
                    <br />
                    I made these and I'd do it even better the second time.
                </p>
            </div>

            {/* Project list */}
            <div className="flex flex-col gap-10 flex-1">
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