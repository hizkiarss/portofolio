
import React from 'react';
import {ArrowUpRight} from "lucide-react";

interface Props {
    content: string;
    className?: string;
    noArrow?: boolean;
    onClick?: () => void;
}

const Buttons: React.FC<Props> = ({content, className, noArrow, onClick}) => {
    const defaultStyle = `
    flex gap-2 border-2 rounded-3xl py-2 px-6  transition-colors duration-300 ease-out border-2
 w-fit hover:text-black hover:bg-white hover:border-2 hover:border-black h-fit items-center

  `;
    const style = className ? `${defaultStyle} ${className}` : defaultStyle;
    return (
        <button className={style} onClick={onClick}>
            {content}
            {noArrow ? null : <ArrowUpRight/>}
        </button>
    );
};

export default Buttons;