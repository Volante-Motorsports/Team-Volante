"use client";

import { useEffect, useState } from "react";

export default function ScrollProgress() {
    const [isDragging, setIsDragging] = useState(false);

    useEffect(() => {
        const scrollSlider = document.querySelector(".scroll-slider") as HTMLElement;
        const scrollTrack = document.querySelector(".scroll-track") as HTMLElement;
        if (!scrollSlider || !scrollTrack) return;

        // Update slider position based on scroll
        const handleScroll = () => {
            const pos = document.documentElement.scrollTop || document.body.scrollTop;
            const calcHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrollPercent = calcHeight > 0 ? (pos / calcHeight) * 100 : 0;
            
            const trackHeight = scrollTrack.clientHeight;
            const sliderHeight = scrollSlider.clientHeight;
            const maxTrackMove = trackHeight - sliderHeight;
            const sliderPosition = (scrollPercent / 100) * maxTrackMove;
            
            scrollSlider.style.transform = `translateY(${sliderPosition}px)`;
        };

        // Handle dragging
        const handleMouseDown = () => {
            setIsDragging(true);
        };

        const handleMouseUp = () => {
            setIsDragging(false);
        };

        const handleMouseMove = (e: MouseEvent) => {
            if (!isDragging || !scrollTrack) return;

            const trackRect = scrollTrack.getBoundingClientRect();
            const sliderHeight = scrollSlider.clientHeight;
            let newPosition = e.clientY - trackRect.top - sliderHeight / 2;

            // Constrain position within track
            const maxTrackMove = trackRect.height - sliderHeight;
            newPosition = Math.max(0, Math.min(newPosition, maxTrackMove));

            // Calculate scroll position
            const scrollPercent = (newPosition / maxTrackMove) * 100;
            const calcHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrollPos = (scrollPercent / 100) * calcHeight;

            document.documentElement.scrollTop = scrollPos;
            document.body.scrollTop = scrollPos;
            scrollSlider.style.transform = `translateY(${newPosition}px)`;
        };

        window.addEventListener("scroll", handleScroll);
        scrollSlider.addEventListener("mousedown", handleMouseDown);
        window.addEventListener("mouseup", handleMouseUp);
        window.addEventListener("mousemove", handleMouseMove);

        // Initial position update
        handleScroll();

        return () => {
            window.removeEventListener("scroll", handleScroll);
            scrollSlider.removeEventListener("mousedown", handleMouseDown);
            window.removeEventListener("mouseup", handleMouseUp);
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, [isDragging]);

    return (
        <div className="scroll-track">
            <div className="scroll-slider"></div>
        </div>
    );
}
