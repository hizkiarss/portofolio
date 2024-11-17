import React from 'react';
import Image, {StaticImageData} from 'next/image';

interface LogoProps {
    img: StaticImageData;
    name: string;
}

const Logo: React.FC<LogoProps> = ({ img, name }) => {
    return (
        <div className={"bg-white w-fit text-black flex gap-1 items-center rounded-xl px-3 py-2 mt-4"}>
            <Image
                src={img}
                alt={`${name} logo`}
                className={"w-6"}
            />
            <p className={"font-Helvetica text-xs font-semibold"}>{name}</p>
        </div>
    );
};

export default Logo;