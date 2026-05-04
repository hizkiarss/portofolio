// components/CursorFollower.tsx
'use client';

import { useEffect, useRef } from 'react';

const CursorFollower = () => {
  const followerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let mouseX = 0;
    let mouseY = 0;
    let currentX = 0;
    let currentY = 20;
    const delay = 0.1;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const animate = () => {
      if (followerRef.current) {
        currentX += (mouseX - currentX) * delay;
        currentY += (mouseY - currentY) * delay;
        followerRef.current.style.transform = `translate(${currentX}px, ${currentY}px)`;
      }
      requestAnimationFrame(animate);
    };

    document.addEventListener('mousemove', handleMouseMove);
    animate();

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={followerRef}
      className="w-10 h-10 bg-white rounded-full fixed top-4 left-2 pointer-events-none z-50 mix-blend-difference"
    />
  );
};

export default CursorFollower;
