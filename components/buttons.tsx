
import React from 'react';
import {ArrowUpRight} from "lucide-react";

interface Props {
    content: string;
    className?: string;
    noArrow?: boolean;
    onClick?: () => void;
    arrowSmall?: boolean;
    arrowMobile?: boolean;
}

const Buttons: React.FC<Props> = ({content, className, noArrow, onClick, arrowSmall, arrowMobile}) => {
    const defaultStyle = `
    flex gap-1 md:gap-2 border-2 rounded-3xl py-1 md:py-2 px-4 md:px-6 transition-colors duration-300 ease-out border-2
 w-fit hover:text-black hover:bg-white  hover:border-black h-fit items-center 
  `;
    const style = className ? `${defaultStyle} ${className}` : defaultStyle;
    return (
        <button className={style} onClick={onClick}>
            {content}
            {noArrow ? null : <ArrowUpRight className={`${arrowSmall ? "size-4 " : ""  } ${arrowMobile ? "hidden md:block " : ""  }`}/>}
        </button>
    );
};

export default Buttons;