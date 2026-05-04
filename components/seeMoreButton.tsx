import React from 'react'
import { ArrowUpRight } from "lucide-react";

const seeMoreButton = () => {
    return (
            <div className="absolute bottom-4 right-4 bg-white rounded-full overflow-hidden flex items-center transition-all duration-300 w-12 h-12 group-hover:w-[120px] px-3">
                <ArrowUpRight className="size-6 shrink-0" />
                <p className="ml-2 transform translate-x-6 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 text-sm whitespace-nowrap">
                    See More
                </p>
            </div>
    )
}

export default seeMoreButton
