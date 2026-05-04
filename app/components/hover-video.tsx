import React, {useEffect, useRef} from "react";
import Buttons from "@/components/buttons";

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
            video.play().catch((err) => {
                console.error("Video play failed:", err);
            });
        } else {
            video.pause();
            video.currentTime = 0;
            video.load(); // Force reload to show poster again
        }
    }, [hoveredIndex, idx]);

    return (
        <div
            key={idx}
            className={`
        transition-all duration-500 ease-out relative flex-shrink-0
        ${hoveredIndex === null ? "w-[220px]" :
                hoveredIndex === idx
                    ? "w-[400px]"
                    : "w-[175px]"
            }
      `}
            style={{
                transformOrigin: 'bottom left',
                zIndex: hoveredIndex === idx ? 50 : 10
            }}
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
        >

            <div className="flex justify-between items-end">
                <p className='font-Aeonik text-lg'>0{idx + 1}. </p>
                <div className={`
        transition-all duration-300 ease-out relative flex-shrink-0 object-cover flex justify-end
        ${hoveredIndex === idx ? "opacity-100" : "opacity-0"}
      `}>

                    <Buttons content={title} className='bg-black text-white font-Aeonik'/>
                </div>
            </div>

            <video
                ref={videoRef}
                src={src}
                muted
                loop
                poster={poster}
                playsInline
                className={`
          transition-all duration-500 ease-out relative flex-shrink-0 object-cover mt-2 w-full
          ${hoveredIndex === null ? "w-full h-[50vh] mon:h-[50vh]" :
                    hoveredIndex === idx
                        ? "h-[50vh] mon:h-[60vh]"
                        : "h-[40vh]"
                }
        `}
            />
        </div>
    );
};

export default HoverVideo
