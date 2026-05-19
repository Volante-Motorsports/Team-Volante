"use client";

import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { repoBasePath } from '@/utils/pathUtils';

export default function TeamPage() {
    const getBaseUrl = () => {
        return repoBasePath;
    };

    useEffect(() => {
        // Modern Carousel functionality
        let currentSlide = 0;
        let carouselInterval: NodeJS.Timeout;
        const slides = [
            {
                image: `${getBaseUrl()}/imagesvolante/classof25.jpg`,
                title: "CLASS OF '26",
                description: "Our current amazing team from 2025",
            },
            {
                image: `${getBaseUrl()}/imagesvolante/Grouppic2.jpg`,
                title: "CLASS OF '24",
                description: "Our talented team from 2024",
            },
            {
                image: `${getBaseUrl()}/imagesvolante/Grouppic.jpg`,
                title: "CLASS OF '23",
                description: "Our amazing team from 2023",
            },
            {
                image: `${getBaseUrl()}/imagesvolante/grouppic4.jpg`,
                title: "TEAM ACHIEVEMENTS",
                description: "Celebrating our victories and milestones",
            },
            {
                image: `${getBaseUrl()}/imagesvolante/grouppic5.jpg`,
                title: "TEAM VOLANTE",
                description: "Team Volante - Racing Excellence",
            },
        ];

        const showSlide = (index: number) => {
            const slidesContainer = document.querySelector(".carousel-slides");
            const indicators = document.querySelectorAll(".carousel-indicator");

            if (!slidesContainer || !indicators.length) return;

            currentSlide = index;
            if (currentSlide >= slides.length) currentSlide = 0;
            if (currentSlide < 0) currentSlide = slides.length - 1;

            // Update slide position
            (slidesContainer as HTMLElement).style.transform = `translateX(-${currentSlide * 100
                }%)`;

            // Update indicators
            indicators.forEach((indicator, i) => {
                indicator.classList.toggle("active", i === currentSlide);
            });
        };

        const nextSlide = () => {
            showSlide(currentSlide + 1);
        };

        const prevSlide = () => {
            showSlide(currentSlide - 1);
        };

        const startAutoSlide = () => {
            carouselInterval = setInterval(nextSlide, 4000);
        };

        const stopAutoSlide = () => {
            if (carouselInterval) {
                clearInterval(carouselInterval);
            }
        };

        // Initialize carousel
        setTimeout(() => {
            showSlide(0);
            startAutoSlide();

            const prevBtn = document.querySelector(".carousel-btn.prev");
            const nextBtn = document.querySelector(".carousel-btn.next");
            const carousel = document.querySelector(".modern-carousel");

            if (prevBtn) prevBtn.addEventListener("click", prevSlide);
            if (nextBtn) nextBtn.addEventListener("click", nextSlide);

            if (carousel) {
                carousel.addEventListener("mouseenter", stopAutoSlide);
                carousel.addEventListener("mouseleave", startAutoSlide);
            }

            document
                .querySelectorAll(".carousel-indicator")
                .forEach((indicator, index) => {
                    indicator.addEventListener("click", () => showSlide(index));
                });
        }, 100);

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
            stopAutoSlide();
        };
    }, []);

    const getBaseUrlStatic = () => repoBasePath;

    return (
        <div className="team-page-wrapper">

            {/* Navigation */}
            <div className="page-header">
                <div className="container">
                    <Navbar />
                </div>
            </div>

            {/* Our Team Section */}
            <div id="ourteam">
                <div className="container">
                    <h1 className="sub-title">
                        <b>OUR TEAM</b>
                    </h1>

                    <div className="modern-carousel" data-aos="fade-right">
                        <div className="carousel-container">
                            <div className="carousel-slides">
                                <div className="carousel-slide active">
                                    <img src={`${getBaseUrlStatic()}/imagesvolante/classof25.jpg`} alt="Class of 25" />
                                    <div className="carousel-content">
                                        <h3>CLASS OF '26</h3>
                                        <p>Our current amazing team from 2025</p>
                                    </div>
                                </div>
                                <div className="carousel-slide">
                                    <img src={`${getBaseUrlStatic()}/imagesvolante/Grouppic2.jpg`} alt="Class of 24" />
                                    <div className="carousel-content">
                                        <h3>CLASS OF '24</h3>
                                        <p>Our talented team from 2024</p>
                                    </div>
                                </div>
                                <div className="carousel-slide">
                                    <img src={`${getBaseUrlStatic()}/imagesvolante/Grouppic.jpg`} alt="Class of 23" />
                                    <div className="carousel-content">
                                        <h3>CLASS OF '23</h3>
                                        <p>Our amazing team from 2023</p>
                                    </div>
                                </div>
                                <div className="carousel-slide">
                                    <img src={`${getBaseUrlStatic()}/imagesvolante/grouppic4.jpg`} alt="Team Achievements" />
                                    <div className="carousel-content">
                                        <h3>TEAM ACHIEVEMENTS</h3>
                                        <p>Celebrating our victories and milestones</p>
                                    </div>
                                </div>
                                <div className="carousel-slide">
                                    <img src={`${getBaseUrlStatic()}/imagesvolante/grouppic5.jpg`} alt="Team Volante" />
                                </div>
                            </div>

                            <button className="carousel-btn prev" aria-label="Previous slide">
                                <svg viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
                                </svg>
                            </button>
                            <button className="carousel-btn next" aria-label="Next slide">
                                <svg viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
                                </svg>
                            </button>
                        </div>

                        <div className="carousel-indicators">
                            <button
                                className="carousel-indicator active"
                                aria-label="Go to slide 1"
                            ></button>
                            <button
                                className="carousel-indicator"
                                aria-label="Go to slide 2"
                            ></button>
                            <button
                                className="carousel-indicator"
                                aria-label="Go to slide 3"
                            ></button>
                            <button
                                className="carousel-indicator"
                                aria-label="Go to slide 4"
                            ></button>
                            <button
                                className="carousel-indicator"
                                aria-label="Go to slide 5"
                            ></button>
                        </div>
                    </div>

                    {/* Team Members Cards */}
                    <div className="body-like">
                        <div className="wrapper" data-aos="fade-down-left">
                            <div className="card">
                                <div className="profile-img">
                                    <img
                                        src={`${getBaseUrlStatic()}/imagesvolante/profile_imgs/mohamed_tanveer.jpeg`}
                                        alt="Mohamed Tanveer"
                                        style={{ objectPosition: "80% 15%" }}
                                    />
                                </div>
                                <div className="content">
                                    <h3>Mohamed Tanveer</h3>
                                    <span className="role-badge captain">Captain & Suspension Lead</span>
                                    <div className="social-media">
                                        <a href="mailto:" target="_blank">
                                            <i className="fa-solid fa-paper-plane"></i>
                                        </a>
                                        <a href="#" target="_blank">
                                            <i className="fa-brands fa-linkedin"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="card">
                                <div className="profile-img">
                                    <img
                                        src={`${getBaseUrlStatic()}/imagesvolante/profile_imgs/manikanta_km.png`}
                                        alt="Manikanta KM"
                                    />
                                </div>
                                <div className="content">
                                    <h3>Manikanta KM</h3>
                                    <span className="role-badge vice-captain">Vice Captain</span>
                                    <div className="social-media">
                                        <a href="mailto:" target="_blank">
                                            <i className="fa-solid fa-paper-plane"></i>
                                        </a>
                                        <a href="#" target="_blank">
                                            <i className="fa-brands fa-linkedin"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="body-like">
                        <div className="wrapper" data-aos="fade-down-right">
                            <div className="card">
                                <div className="profile-img">
                                    <img
                                        src={`${getBaseUrlStatic()}/imagesvolante/profile_imgs/yash_chipkar.jpeg`}
                                        alt="Yash Chipkar"
                                    />
                                </div>
                                <div className="content">
                                    <h3>Yash Chipkar</h3>
                                    <span className="role-badge lead">Electrical Lead</span>
                                    <div className="social-media">
                                        <a href="mailto:" target="_blank">
                                            <i className="fa-solid fa-paper-plane"></i>
                                        </a>
                                        <a href="#" target="_blank">
                                            <i className="fa-brands fa-linkedin"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="card">
                                <div className="profile-img">
                                    <img
                                        src={`${getBaseUrlStatic()}/imagesvolante/profile_imgs/nahusha_gb.jpeg`}
                                        alt="Nahusha GB"
                                    />
                                </div>
                                <div className="content">
                                    <h3>Nahusha GB</h3>
                                    <span className="role-badge lead">Media Lead</span>
                                    <div className="social-media">
                                        <a href="mailto:" target="_blank">
                                            <i className="fa-solid fa-paper-plane"></i>
                                        </a>
                                        <a href="#" target="_blank">
                                            <i className="fa-brands fa-linkedin"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="card">
                                <div className="profile-img">
                                    <img
                                        src={`${getBaseUrlStatic()}/imagesvolante/profile_imgs/vinay_br.jpeg`}
                                        alt="Vinay BR"
                                    />
                                </div>
                                <div className="content">
                                    <h3>Vinay BR</h3>
                                    <span className="role-badge lead">Manufacturing Lead</span>
                                    <div className="social-media">
                                        <a href="mailto:" target="_blank">
                                            <i className="fa-solid fa-paper-plane"></i>
                                        </a>
                                        <a href="#" target="_blank">
                                            <i className="fa-brands fa-linkedin"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="body-like">
                        <div className="wrapper" data-aos="fade-down-left">
                            <div className="card">
                                <div className="profile-img">
                                    <img
                                        src={`${getBaseUrlStatic()}/imagesvolante/profile_imgs/sharath_ramesh.png`}
                                        alt="Sharath Ramesh"
                                    />
                                </div>
                                <div className="content">
                                    <h3>Sharath Ramesh</h3>
                                    <span className="role-badge lead">Design Lead</span>
                                    <div className="social-media">
                                        <a href="mailto:" target="_blank">
                                            <i className="fa-solid fa-paper-plane"></i>
                                        </a>
                                        <a href="#" target="_blank">
                                            <i className="fa-brands fa-linkedin"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="card">
                                <div className="profile-img">
                                    <img
                                        src={`${getBaseUrlStatic()}/imagesvolante/profile_imgs/jnanesh_kumar.jpeg`}
                                        alt="Jnanesh Kumar SG"
                                    />
                                </div>
                                <div className="content">
                                    <h3>Jnanesh Kumar SG</h3>
                                    <span className="role-badge lead">Brakes Lead</span>
                                    <div className="social-media">
                                        <a href="mailto:" target="_blank">
                                            <i className="fa-solid fa-paper-plane"></i>
                                        </a>
                                        <a href="#" target="_blank">
                                            <i className="fa-brands fa-linkedin"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="card">
                                <div className="profile-img">
                                    <img
                                        src={`${getBaseUrlStatic()}/imagesvolante/profile_imgs/santosh_nv.jpeg`}
                                        alt="Santosh NV"
                                    />
                                </div>
                                <div className="content">
                                    <h3>Santosh NV</h3>
                                    <span className="role-badge lead">Steering Lead</span>
                                    <div className="social-media">
                                        <a href="mailto:" target="_blank">
                                            <i className="fa-solid fa-paper-plane"></i>
                                        </a>
                                        <a href="#" target="_blank">
                                            <i className="fa-brands fa-linkedin"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="body-like">
                        <div className="wrapper" data-aos="fade-down-right">
                            <div className="card">
                                <div className="profile-img">
                                    <img
                                        src={`${getBaseUrlStatic()}/imagesvolante/profile_imgs/kiran_s.jpeg`}
                                        alt="Kiran S"
                                    />
                                </div>
                                <div className="content">
                                    <h3>Kiran S</h3>
                                    <span className="role-badge lead">Management Lead</span>
                                    <div className="social-media">
                                        <a href="mailto:" target="_blank">
                                            <i className="fa-solid fa-paper-plane"></i>
                                        </a>
                                        <a href="#" target="_blank">
                                            <i className="fa-brands fa-linkedin"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}
