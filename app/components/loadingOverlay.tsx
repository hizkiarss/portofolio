'use client';

import { useEffect, useState } from 'react';
import clsx from 'clsx';
import Image from 'next/image';

const LoadingOverlay = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [animateOut, setAnimateOut] = useState(false);

    useEffect(() => {
        const triggerExit = () => {
            setAnimateOut(true);
            setTimeout(() => setIsVisible(false), 1000);
        };

        const checkProgress = () => {
            const resources = performance.getEntriesByType('resource');
            if (resources.length === 0) return false;

            const loaded = resources.filter(r => r.duration > 0).length;
            const progress = loaded / resources.length;

            return progress >= 0.6;
        };

        // Poll until 60% of resources are loaded
        const interval = setInterval(() => {
            if (checkProgress()) {
                clearInterval(interval);
                triggerExit();
            }
        }, 100);

        // Fallback: clear on full load regardless
        const handleLoad = () => {
            clearInterval(interval);
            triggerExit();
        };
        window.addEventListener('load', handleLoad);

        return () => {
            clearInterval(interval);
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