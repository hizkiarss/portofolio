import React from 'react';
import Image, {StaticImageData} from 'next/image';

interface LogoProps {
    img: StaticImageData;
    name: string;
}

const Logo: React.FC<LogoProps> = ({ img, name }) => {
    return (
        <div className={"bg-white w-fit h-6 md:h-8 text-black flex gap-[2px] md:gap-1 items-center rounded-md md:rounded-xl px-2 md:px-3 py-[1px] md:py-2   md:mt-4 "}>
            <Image
                src={img}
                alt={`${name} logo`}
                className={"w-4 md:w-6"}
            />
            <p className={"font-Helvetica text-[8px] md:text-xs font-semibold"}>{name}</p>
        </div>
    );
};

export default Logo;