"use client";

import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { repoBasePath } from '@/utils/pathUtils';

export default function AboutPage() {
    const getBaseUrl = () => {
        return repoBasePath;
    };

    useEffect(() => {
        // Tab functionality
        const openTab = (tabname: string, event: any) => {
            const tablinks = document.getElementsByClassName("tab-links");
            const tabcontents = document.getElementsByClassName("tab-contents");

            for (let i = 0; i < tablinks.length; i++) {
                tablinks[i].classList.remove("active-link");
            }
            for (let i = 0; i < tabcontents.length; i++) {
                tabcontents[i].classList.remove("active-tab");
            }

            event.currentTarget.classList.add("active-link");
            document.getElementById(tabname)?.classList.add("active-tab");
        };

        // About Carousel functionality
        let aboutCurrentSlide = 0;
        let aboutCarouselInterval: NodeJS.Timeout;
        const aboutSlides = document.querySelectorAll(".about-carousel-slide");
        const aboutIndicators = document.querySelectorAll(".about-indicator");

        const showAboutSlide = (index: number) => {
            aboutSlides.forEach((slide, i) => {
                slide.classList.toggle("active", i === index);
            });
            aboutIndicators.forEach((indicator, i) => {
                indicator.classList.toggle("active", i === index);
            });
        };

        const nextAboutSlide = () => {
            aboutCurrentSlide = (aboutCurrentSlide + 1) % aboutSlides.length;
            showAboutSlide(aboutCurrentSlide);
        };

        const startAboutAutoSlide = () => {
            aboutCarouselInterval = setInterval(nextAboutSlide, 3500);
        };

        const stopAboutAutoSlide = () => {
            if (aboutCarouselInterval) {
                clearInterval(aboutCarouselInterval);
            }
        };

        // Initialize about carousel
        setTimeout(() => {
            if (aboutSlides.length > 0) {
                showAboutSlide(0);
                startAboutAutoSlide();

                const aboutCarousel = document.querySelector(".about-carousel");
                if (aboutCarousel) {
                    aboutCarousel.addEventListener("mouseenter", stopAboutAutoSlide);
                    aboutCarousel.addEventListener("mouseleave", startAboutAutoSlide);
                }

                aboutIndicators.forEach((indicator, index) => {
                    indicator.addEventListener("click", () => {
                        aboutCurrentSlide = index;
                        showAboutSlide(index);
                        stopAboutAutoSlide();
                        startAboutAutoSlide();
                    });
                });
            }
        }, 150);

        // Add event listeners to interactive elements
        const tabLinks = document.getElementsByClassName("tab-links");
        for (let i = 0; i < tabLinks.length; i++) {
            tabLinks[i].addEventListener("click", function (e) {
                const tabName = (e.currentTarget as HTMLElement).getAttribute(
                    "data-tab"
                );
                if (tabName) {
                    openTab(tabName, e);
                }
            });
        }

        // AOS animation
        const loadAOS = () => {
            const script = document.createElement("script");
            script.src = "https://unpkg.com/aos@next/dist/aos.js";
            script.onload = () => {
                if ((window as any).AOS) {
                    (window as any).AOS.init({
                        offset: 300,
                        duration: 1000,
                    });
                }
            };
            document.head.appendChild(script);
        };

        loadAOS();

        return () => {
            stopAboutAutoSlide();
        };
    }, []);

    return (
        <div className="about-page-wrapper">
            {/* Navigation */}
            <div className="page-header">
                <div className="container">
                    <Navbar />
                </div>
            </div>

            {/* About Section */}
            <div id="about" data-aos="fade-up">
                <div className="container">
                    <div className="row">
                        <div className="about-col-1">
                            <div className="about-carousel">
                                <div className="about-carousel-container">
                                    <div className="about-carousel-slide active">
                                        <img
                                            src={`${getBaseUrl()}/imagesvolante/aboutus.jpg`}
                                            alt="Team Volante About Us"
                                        />
                                    </div>
                                    <div className="about-carousel-slide">
                                        <img
                                            src={`${getBaseUrl()}/imagesvolante/buggycarousel.jpg`}
                                            alt="Team Volante Buggy"
                                        />
                                    </div>
                                </div>
                                <div className="about-carousel-indicators">
                                    <span
                                        className="about-indicator active"
                                        data-slide="0"
                                    ></span>
                                    <span className="about-indicator" data-slide="1"></span>
                                </div>
                            </div>
                        </div>
                        <div className="about-col-2">
                            <h1 className="sub-title">ABOUT US</h1>
                            <p id="paraabout">
                                Team Volante is a Student Design Team involved in the design and
                                development of off road electric buggy.We pride ourselves as the
                                team to have designed and developed go karts, solar vehicles and
                                most importantly Baja buggy and constantly pushing the
                                boundaries in doing so.
                            </p>
                            <div className="tab-titles">
                                <p className="tab-links active-link" data-tab="whoarewe">
                                    <b>Who are we?</b>
                                </p>
                                <p className="tab-links" data-tab="whatdowedo">
                                    <b>What do we do?</b>
                                </p>
                                <p className="tab-links" data-tab="Moreaboutus">
                                    <b>More about us</b>
                                </p>
                            </div>
                            <div className="tab-contents active-tab" id="whoarewe">
                                <ul data-aos="fade-up">
                                    <li>
                                        <span>
                                            <h3>We Embrace Innovation</h3>
                                        </span>
                                        <br />
                                        <br />
                                        Established in 2014, Team Volante is the only student club
                                        at Ramaiah Institute of Technology dedicated to designing
                                        and developing electric buggies. Our journey thrives on
                                        creativity and collaboration, pushing boundaries in
                                        automotive technology.
                                    </li>
                                    <br />
                                    <li>
                                        <span>
                                            <h3>We Represent Excellence</h3>
                                        </span>
                                        <br />
                                        <br />
                                        As proud participants in the prestigious BAJA SAE Series, we
                                        have designed, developed, and competed with cutting-edge
                                        off-road electric buggies. Our journey includes go-karts,
                                        solar vehicles, and a special focus on Baja buggies.
                                    </li>
                                    <br />
                                    <li>
                                        <span>
                                            <h3>We Drive Passion</h3>
                                        </span>
                                        <br />
                                        <br />
                                        Our members share a passion for engineering and automotive
                                        design. Our shelves are filled with awards and records,
                                        including 2nd Runner-Up at BFKCT-2019, and we remain
                                        committed to excellence in every competition.
                                    </li>
                                </ul>
                            </div>
                            <div className="tab-contents" id="whatdowedo">
                                <ul>
                                    <li>
                                        <span>
                                            <h3>We Design</h3>
                                        </span>
                                        <br />
                                        <br />
                                        At the core of our mission is the development of off-road
                                        electric buggies for events like BAJA SAE. Our engineering
                                        team continually innovates with cutting-edge designs and
                                        technologies.
                                    </li>
                                    <br />
                                    <li>
                                        <span>
                                            <h3>We Build</h3>
                                        </span>
                                        <br />
                                        <br />
                                        We don&apos;t just plan; we build. From concept to
                                        prototype, our team works tirelessly to develop competitive,
                                        eco-friendly vehicles that showcase our skills and
                                        engineering prowess.
                                    </li>
                                    <br />
                                    <li>
                                        <span>
                                            <h3>We Compete</h3>
                                        </span>
                                        <br />
                                        <br />
                                        Our prototypes have earned national recognition in various
                                        competitions, including 2nd Runner-Up at COC 2020 and AIR-3
                                        at the Mega ATV Championship. We strive for excellence in
                                        every event we enter.
                                    </li>
                                </ul>
                            </div>
                            <div className="tab-contents" id="Moreaboutus">
                                <ul>
                                    <li>
                                        <span>
                                            <h3>We Achieve</h3>
                                        </span>
                                        <br />
                                        <br />
                                        Our shelves have filled with the awards and recognitions be
                                        it at state level or at national level we have conquered it
                                        all.Our success ratio is so high we could only include some
                                        of our achievements in timeline of our website.
                                    </li>
                                    <br />
                                    <li>
                                        <span>
                                            <h3>We Lead</h3>
                                        </span>
                                        <br />
                                        <br />
                                        Team Volante is proud to have secured the 7th spot at NEKC
                                        2020 with a State Rank of 1. We continue to lead in
                                        performance and innovation at every event.
                                    </li>
                                    <br />
                                    <li>
                                        <span>
                                            <h3>We Inspire</h3>
                                        </span>
                                        <br />
                                        <br />
                                        Based in ESB 119, Ramaiah Institute of Technology, we aim to
                                        inspire future engineers and push the limits of what&apos;s
                                        possible in automotive technology.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <video controls autoPlay muted className="video">
                    <source src={`${getBaseUrl()}/imagesvolante/video.mp4`} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>

            <Footer />
        </div>
    );
}
