import React from 'react'
import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import FadeInAnimation from '@/app/components/fadeInAnimation'


interface ServiceItem {
    number: string
    title: string
    description: string
    images: { src: string; width: number; height: number }[]
    layout: "split" | "stacked" | "full";
}

const SERVICES: ServiceItem[] = [
    {
        number: '01.',
        title: 'Website\nDevelopment',
        description:
            'Fast, responsive websites are built using modern tools and frameworks, with performance and scalability in mind. Every site is designed to load quickly, adapt seamlessly across devices, and grow alongside your business.',
        layout: 'split',
        images: [
            { src: '/photos/rooms-dark-cover.webp',        width: 800, height: 800 },
            { src: '/photos/rooms-showcase.webp',           width: 400, height: 200 },
            { src: '/photos/nomad-archipelago-cover.webp',  width: 400, height: 200 },
        ],
    },
    {
        number: '02.',
        title: 'API &\nBackend',
        description:
            'Solid server logic, clean database design, and well-documented APIs that your frontend and third-party tools can rely on. Built with scalability in mind so the system grows with your business, not against it.',
        layout: 'full',
        images: [
            { src: '/photos/rooms-airbnb.webp', width: 800, height: 800 },
            { src: '/photos/gotap-code.webp',   width: 800, height: 800 },
        ],
    },
    {
        number: '03.',
        title: 'AI\nIntegration',
        description:
            "Whether it's a chatbot, a smart automation flow, or LLM-powered features embedded into your product — AI gets implemented in ways that actually move the needle. No gimmicks, just practical tools that save time or create real value for your users.",
        layout: 'full',
        images: [
            { src: '/photos/ai-integration.webp', width: 800, height: 800 },
        ],
    },
]

const SeeMoreButton = () => (
    <div className="absolute bottom-4 right-4 bg-white rounded-full overflow-hidden flex items-center transition-all duration-300 w-12 h-12 group-hover:w-[120px] px-3">
        <ArrowUpRight className="size-6 shrink-0" />
        <p className="ml-2 transform translate-x-6 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 text-sm whitespace-nowrap">
            See More
        </p>
    </div>
)

const ServiceCard = ({ service }: { service: ServiceItem }) => {
    const [main, ...stack] = service.images

    return (
        <FadeInAnimation>
            <div className="w-full mx-0 px-4 md:px-6 rounded-xl">
                <div className="text-4xl bg-[#F0F0F0] p-4 rounded-xl">

                    <div className="flex gap-4 h-[200px] md:h-[408px]">
                        <div className="overflow-hidden rounded-xl md:h-fit md:w-full h-[200px] relative group">
                            <Image
                                src={main.src}
                                alt={service.title}
                                width={main.width}
                                height={main.height}
                                className="w-full h-[408px] md:w-full md:h-[408px] object-cover object-top rounded-xl transition duration-300 group-hover:scale-105 origin-center"
                            />
                            <SeeMoreButton />
                        </div>

                        {service.layout === 'split' && stack.length > 0 && (
                            <div className="flex flex-col gap-2 h-[408px]">
                                {stack.map((img) => (
                                    <div key={img.src} className="overflow-hidden rounded-xl relative group">
                                        <Image
                                            src={img.src}
                                            alt={service.title}
                                            width={img.width}
                                            height={img.height}
                                            className="w-[400px] h-[98px] md:w-[400px] md:h-[200px] object-cover object-top rounded-xl transition duration-300 hover:scale-110 origin-center"
                                        />
                                        <SeeMoreButton />
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    <div className="mt-4 flex flex-col md:flex-row md:gap-20 items-start md:items-center">
                        <div className="flex gap-2 items-center leading-[0.95] shrink-0">
                            <h3 className="tracking-tight mt-1 text-[50px] md:text-[60px]">{service.number}</h3>
                            <h3 className="tracking-tight mt-1 text-[25px] md:text-[30px]">
                                {service.title.split('\n').map((line, i, arr) => (
                                    <span key={i}>{line}{i < arr.length - 1 && <br />}</span>
                                ))}
                            </h3>
                        </div>
                        <p className="text-sm md:text-base mt-4 md:mt-2">{service.description}</p>
                    </div>

                </div>
            </div>
        </FadeInAnimation>
    )
}


const ServiceMobile = () => (
    <div className="relative mt-10 block xl:hidden tall:xl:block">
        <div className="relative w-full md:overflow-hidden flex flex-col justify-start mt-0 md:mt-20 mt:pl-10">

            <p className="text-[32px] md:text-[50px] leading-[50px] md:mb-12 lg:mb-0 lg:leading-normal tracking-tighter ml-4 md:px-2 md:mx-2">
                See what we can{' '}
                <br className="block lg:hidden" />
                <span className="font-Edwardian tracking-tight font-medium md:-mb-3 text-[62px] md:text-[80px] mr-2 md:mr-0">
          bring
        </span>{' '}
                to the{' '}
                <span className="font-Edwardian tracking-wide font-medium md:-mb-3  text-[62px] md:text-[80px]">
          table.
        </span>
            </p>

            <div className="flex flex-col w-full justify-start md:items-center gap-10 mt-6 md:mt-0">
                {SERVICES.map((service) => (
                    <ServiceCard key={service.number} service={service} />
                ))}
            </div>

        </div>
    </div>
)

export default ServiceMobile