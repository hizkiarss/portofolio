'use client';

import { useEffect, useState } from 'react';
import clsx from 'clsx';
import Image from 'next/image';

const LoadingOverlay = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [animateOut, setAnimateOut] = useState(false);

    useEffect(() => {
        const handleLoad = () => {
            setAnimateOut(true);
            setTimeout(() => setIsVisible(false), 1000);
        };

        if (document.readyState === 'complete') {
            handleLoad(); // If already loaded
        } else {
            window.addEventListener('load', handleLoad);
        }

        return () => {
            window.removeEventListener('load', handleLoad);
        };
    }, []);

    if (!isVisible) return null;

    return (
        <div
            className={clsx(
                'fixed inset-0 z-50 bg-white text-white flex items-center justify-center transition-transform duration-1000',
                animateOut ? '-translate-y-full' : 'translate-y-0'
            )}
        >
            <Image
                width={0}
                height={0}
                src="/logo/logo.svg"
                alt="logo"
                className="w-60"
                priority
            />
        </div>
    );
};

export default LoadingOverlay;
