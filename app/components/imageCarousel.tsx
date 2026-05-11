"use client"

import React from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
// import SeeMoreButton from '@/components/seeMoreButton'
import Image from 'next/image'
import {Badge} from "@/components/ui/badge"
import Autoplay from "embla-carousel-autoplay"
import {getLenis} from "@/hooks/useLenis";

const ImageCarousel = () => {
    const plugin = React.useRef(
        Autoplay({delay: 3000})
    )

    // Portfolio data array
    const portfolioItems = [
        {
            id: 1,
            image: "/photos/Social Media Creative Porto 1.png",
            alt: 'GOTAP Reputation',
            badges: ['GOTAP Reputation', 'Review Management App']
        },
        {
            id: 2,
            image: "/photos/nomad-showcase.webp",
            alt: 'Nomad Archipelago Portfolio',
            badges: ['Nomad Archipelago', 'Company Profile Website']
        },
        {
            id: 3,
            image: "/photos/rooms-showcase.webp",
            alt: 'Rooms',
            badges: ['Rooms', 'Booking Management App']
        }
    ]

    return (
        <div className={"px-4 md:px-6 xl:px-0 mt-8 md:mt-0"}>
            <Carousel
                className='relative'
                plugins={[plugin.current]}
                onMouseEnter={() => plugin.current.stop()}
                onMouseLeave={() => plugin.current.play()}

            >
                <CarouselContent>
                    {portfolioItems.map((item) => (
                        <CarouselItem
                            key={item.id}
                            className='relative group h-[350px] md:h-[550px] w-full overflow-hidden rounded-tr-[40px] md:rounded-xl'
                        >
                            <Image
                                width={2000}
                                height={2000}
                                src={item.image}
                                alt={item.alt}
                                className="w-full h-full object-cover object-top transform transition duration-300 group-hover:scale-105 origin-center overflow-hidden"
                            />

                            {item.badges.map((badge, badgeIndex) => (
                                <Badge
                                    key={badgeIndex}
                                    className={`absolute left-8 rounded-2xl py-2 px-3 font-Aeonik text-xs font-normal opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-500`}
                                    style={{top: `${16 + (badgeIndex * 40)}px`}}
                                    variant="secondary"
                                >
                                    {badge}
                                </Badge>
                            ))}

                            {/*<SeeMoreButton/>*/}
                        </CarouselItem>
                    ))}
                </CarouselContent>

                <CarouselPrevious
                    className="!right-12 md:!right-12 -top-8 md:top-auto md:-bottom-[60px] lg:-top-10 -translate-y-1/2 bg-black text-white  "
                /> <CarouselNext
                className='!right-2 md:!right-2 -top-8 md:top-auto md:-bottom-[60px] lg:-top-10 -translate-y-1/2 bg-black text-white'/>
            </Carousel>
        </div>
    )
}

export default ImageCarousel