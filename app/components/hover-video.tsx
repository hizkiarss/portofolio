import React, {useEffect, useRef} from "react";
import Buttons from "@/components/buttons";
import scrollTo from "@/utils/scrollTo";

type HoverVideoProps = {
    src: string;
    title: string;
    idx: number;
    hoveredIndex: number | null;
    poster: string;
    setHoveredIndex: React.Dispatch<React.SetStateAction<number | null>>;
};

const HoverVideo: React.FC<HoverVideoProps> = ({src, title, idx, hoveredIndex, poster, setHoveredIndex}) => {
    const videoRef = useRef<HTMLVideoElement | null>(null);


    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        if (hoveredIndex === idx) {
            video.play().catch((err) => console.error("Video play failed:", err));
        } else {
            video.pause();
            video.currentTime = 0;
            video.load();
        }
    }, [hoveredIndex, idx]);

    const isHovered = hoveredIndex === idx;
    const anyHovered = hoveredIndex !== null;

    return (
        <div
            className={`
                transition-all duration-500 ease-out relative flex-shrink-0
                ${!anyHovered ? "w-1/5" : isHovered ? "w-2/6" : "w-1/6"}
            `}
            style={{
                transformOrigin: 'bottom left',
                zIndex: isHovered ? 50 : 10
            }}
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
        >
            <div className="flex justify-between items-end">
                <p className="font-Aeonik text-lg">0{idx + 1}.</p>
                    <Buttons onClick={() => scrollTo('works')}
                             className={`transition-all !bg-black text-white hover:text-white font-Aeonik duration-300 ease-out flex-shrink-0 flex justify-end ${isHovered ? "opacity-100" : "opacity-0 "}`}
                             content={title}/>
            </div>

            <video
                ref={videoRef}
                src={src}
                muted
                loop
                poster={poster}
                playsInline
                className={`
                    transition-all duration-500 ease-out w-full object-cover mt-2
                    ${!anyHovered ? "h-[50svh] max-h-[400px]" : isHovered ? "h-[60svh] max-h-[500px]" : "h-[38svh] max-h-[400px]"}
                `}
            />
        </div>
    );
};
export default HoverVideo
