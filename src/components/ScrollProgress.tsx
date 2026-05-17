"use client";

import { useEffect, useRef, useState } from "react";

export default function ScrollProgress() {
    const sliderRef = useRef<HTMLDivElement>(null);
    const trackRef = useRef<HTMLDivElement>(null);
    const [isHovered, setIsHovered] = useState(false);
    const [isDragging, setIsDragging] = useState(false);

    useEffect(() => {
        const scrollSlider = sliderRef.current;
        const scrollTrack = trackRef.current;
        if (!scrollSlider || !scrollTrack) return;

        let isDown = false;
        let startY = 0;
        let startScrollTop = 0;
        let animationFrameId: number;

        const updateSliderPosition = () => {
            if (isDown) return; // Don't update from scroll event if we are dragging
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight;
            const winHeight = window.innerHeight;
            const maxScroll = docHeight - winHeight;
            const scrollPercent = maxScroll > 0 ? scrollTop / maxScroll : 0;
            
            const trackHeight = scrollTrack.clientHeight;
            const sliderHeight = scrollSlider.clientHeight;
            const maxTrackMove = trackHeight - sliderHeight;
            const sliderPosition = scrollPercent * maxTrackMove;
            
            scrollSlider.style.transform = `translateY(${sliderPosition}px)`;
        };

        const handleScroll = () => {
            if (animationFrameId) cancelAnimationFrame(animationFrameId);
            animationFrameId = requestAnimationFrame(updateSliderPosition);
        };

        const handleMouseDown = (e: MouseEvent) => {
            e.preventDefault(); // Prevent default text selection start
            isDown = true;
            setIsDragging(true);
            startY = e.clientY;
            startScrollTop = window.scrollY;
            document.documentElement.style.scrollBehavior = 'auto'; // Disable smooth scroll temporarily
        };

        const handleMouseUp = () => {
            if (!isDown) return;
            isDown = false;
            setIsDragging(false);
            document.documentElement.style.scrollBehavior = '';
            updateSliderPosition(); // Sync position
        };

        const handleMouseMove = (e: MouseEvent) => {
            if (!isDown) return;
            e.preventDefault();

            const trackHeight = scrollTrack.clientHeight;
            const sliderHeight = scrollSlider.clientHeight;
            const maxTrackMove = trackHeight - sliderHeight;
            
            if (maxTrackMove <= 0) return;

            const docHeight = document.documentElement.scrollHeight;
            const winHeight = window.innerHeight;
            const maxScroll = docHeight - winHeight;

            const deltaY = e.clientY - startY;
            const deltaPercent = deltaY / maxTrackMove;
            const deltaScroll = deltaPercent * maxScroll;

            // Apply new scroll position
            const newScrollTop = Math.max(0, Math.min(startScrollTop + deltaScroll, maxScroll));
            
            window.scrollTo({
                top: newScrollTop,
                behavior: 'auto'
            });

            // Visually update the slider immediately for smooth feedback
            const scrollPercent = newScrollTop / maxScroll;
            const sliderPosition = scrollPercent * maxTrackMove;
            scrollSlider.style.transform = `translateY(${sliderPosition}px)`;
        };

        const handleTrackClick = (e: MouseEvent) => {
            if (e.target === scrollSlider) return;
            
            const trackRect = scrollTrack.getBoundingClientRect();
            const clickY = e.clientY - trackRect.top;
            const trackHeight = scrollTrack.clientHeight;
            const sliderHeight = scrollSlider.clientHeight;
            
            const maxTrackMove = trackHeight - sliderHeight;
            if (maxTrackMove <= 0) return;

            // Calculate percentage based on center of slider
            const clickPercent = Math.max(0, Math.min(1, (clickY - sliderHeight / 2) / maxTrackMove));
            
            const docHeight = document.documentElement.scrollHeight;
            const winHeight = window.innerHeight;
            const maxScroll = docHeight - winHeight;
            
            window.scrollTo({
                top: clickPercent * maxScroll,
                behavior: 'smooth'
            });
        };

        // Attach event listeners
        window.addEventListener("scroll", handleScroll, { passive: true });
        scrollSlider.addEventListener("mousedown", handleMouseDown);
        window.addEventListener("mouseup", handleMouseUp);
        window.addEventListener("mousemove", handleMouseMove);
        scrollTrack.addEventListener("mousedown", handleTrackClick);

        // Initial position update
        updateSliderPosition();

        return () => {
            if (animationFrameId) cancelAnimationFrame(animationFrameId);
            window.removeEventListener("scroll", handleScroll);
            scrollSlider.removeEventListener("mousedown", handleMouseDown);
            window.removeEventListener("mouseup", handleMouseUp);
            window.removeEventListener("mousemove", handleMouseMove);
            scrollTrack.removeEventListener("mousedown", handleTrackClick);
            document.documentElement.style.scrollBehavior = '';
        };
    }, []);

    return (
        <div 
            className="scroll-track" 
            ref={trackRef}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
                opacity: isHovered || isDragging ? 1 : 0.4,
                transition: 'opacity 0.3s ease, width 0.3s ease',
                width: isHovered || isDragging ? '12px' : '8px',
            }}
        >
            <div 
                className="scroll-slider" 
                ref={sliderRef}
                style={{
                    height: '60px',
                    transition: isDragging ? 'none' : 'transform 0.1s ease-out',
                }}
            ></div>
        </div>
    );
}
