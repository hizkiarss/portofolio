import React, {useState, useRef, useEffect} from 'react'
import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious,} from "@/components/ui/carousel"
import {EmblaCarouselType} from "embla-carousel";

const videos = [
    {
        src: "/video/sosmed1.mp4",
        title: "Instagram Post Design",
        poster: "photos/Social%20Media%20Creative%20Porto%201.png"
    },
    {
        src: "/video/sosmed2.mp4",
        title: "Campaign Visuals",
        poster: "photos/Social%20Media%20Creative%20Porto%202.png"
    },
    {
        src: "/video/sosmed3.mp4",
        title: "Story Highlight",
        poster: "photos/Social%20Media%20Creative%20Porto%203.png"
    },
    {
        src: "/video/website1.mp4",
        title: "Client Brand Pack",
        poster: "photos/Social%20Media%20Creative%20Porto%201.png"
    },
    {
        src: "/video/website2.mp4",
        title: "Minimal Layout Set",
        poster: "photos/Social%20Media%20Creative%20Porto%202.png"
    },
];

const HeroCarouselMobile = () => {
    const [currentSlide, setCurrentSlide] = useState(0)
    const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
    const carouselApi = useRef<EmblaCarouselType | null | undefined>(null);

    useEffect(() => {
        videoRefs.current.forEach((video, index) => {
            if (video) {
                if (index === currentSlide) {
                    video.play()
                } else {
                    video.pause()
                    video.currentTime = 0 // Reset to beginning
                }
            }
        })
    }, [currentSlide])

    const handleSlideChange = (api: EmblaCarouselType) => {
        if (api) {
            setCurrentSlide(api.selectedScrollSnap())
        }
    }

    return (
        <Carousel
            opts={{
                align: "center",
            }}
            className="w-full mt-14 block xl:hidden"
            setApi={(api) => {
                carouselApi.current = api
                if (api) {
                    api.on('select', () => handleSlideChange(api))
                    setCurrentSlide(api.selectedScrollSnap())
                }
            }}

        >
            <CarouselContent className="-ml-1 ">
                {videos.map((video, idx) => (
                    <CarouselItem key={idx} className="pl-1 basis-2/3 h-[50vh]">
                        <video
                            ref={(el) => {
                                videoRefs.current[idx] = el;
                            }}
                            src={video.src}
                            poster={video.poster}
                            title={video.title}
                            muted
                            loop
                            playsInline
                            className="w-full h-full rounded-lg object-cover"
                        />

                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious className='-top-6 right-10'/>
            <CarouselNext className='-top-6 right-0'/>
        </Carousel>
    )
}

export default HeroCarouselMobile