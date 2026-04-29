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
                        </div>
                    </div>

                    {/* Team Members Cards */}
                    <div className="body-like">
                        <div className="wrapper" data-aos="fade-down-left">
                            <div className="card">
                                <div className="profile-img">
                                    <img
                                        src={`${getBaseUrlStatic()}/imagesvolante/profile_imgs/Prajwal_baretto.jpeg`}
                                        alt="Prajwal Baretto"
                                    />
                                </div>
                                <div className="content">
                                    <h3>Prajwal Baretto</h3>
                                    <span className="role-badge captain">Team Captain</span>
                                    <div className="social-media">
                                        <a href="mailto:prajwalbaretto261@gmail.com" target="_blank">
                                            <i className="fa-solid fa-paper-plane"></i>
                                        </a>
                                        <a href="https://www.linkedin.com/in/prajwal-baretto-9235711b1?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank">
                                            <i className="fa-brands fa-linkedin"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="card">
                                <div className="profile-img">
                                    <img
                                        src={`${getBaseUrlStatic()}/imagesvolante/profile_imgs/shriya_iyer.jpg`}
                                        alt="Shriya Iyer"
                                    />
                                </div>
                                <div className="content">
                                    <h3>Shriya Iyer</h3>
                                    <span className="role-badge vice-captain">Vice Captain</span>
                                    <div className="social-media">
                                        <a href="mailto:shriyaiyer18@gmail.com" target="_blank">
                                            <i className="fa-solid fa-paper-plane"></i>
                                        </a>
                                        <a href="https://www.linkedin.com/in/shriya-s-iyer-63257627a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank">
                                            <i className="fa-brands fa-linkedin"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="card">
                                <div className="profile-img">
                                    <img
                                        src={`${getBaseUrlStatic()}/imagesvolante/profile_imgs/ninnad.jpg`}
                                        alt="Ninnad P"
                                    />
                                </div>
                                <div className="content">
                                    <h3>Ninnad P</h3>
                                    <span className="role-badge lead">Brakes Lead</span>
                                    <div className="social-media">
                                        <a href="mailto:ninnadpgangurde333@gmail.com" target="_blank">
                                            <i className="fa-solid fa-paper-plane"></i>
                                        </a>
                                        <a href="https://www.linkedin.com/in/ninnad-pradeep-gangurde-937b99263?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank">
                                            <i className="fa-brands fa-linkedin"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="card">
                                <div className="profile-img">
                                    <img
                                        src={`${getBaseUrlStatic()}/imagesvolante/profile_imgs/Samuel.jpg`}
                                        alt="Samuel Jabez"
                                    />
                                </div>
                                <div className="content">
                                    <h3>Samuel Jabez</h3>
                                    <span className="role-badge lead">Design Lead</span>
                                    <div className="social-media">
                                        <a href="mailto:" target="_blank">
                                            <i className="fa-solid fa-paper-plane"></i>
                                        </a>
                                        <a href="https://www.linkedin.com/in/prajwal-baretto-9235711b1?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank">
                                            <i className="fa-brands fa-linkedin"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Second row - 4 more team members */}
                    <div className="body-like">
                        <div className="wrapper" data-aos="fade-down-right">
                            <div className="card">
                                <div className="profile-img">
                                    <img
                                        src={`${getBaseUrlStatic()}/imagesvolante/profile_imgs/Harshini.jpg`}
                                        alt="Harshini"
                                    />
                                </div>
                                <div className="content">
                                    <h3 className="fixing">Harshini</h3>
                                    <span className="role-badge lead">
                                        Management & Media Lead
                                    </span>
                                    <div className="social-media">
                                        <a href="mailto:" target="_blank">
                                            <i className="fa-solid fa-paper-plane"></i>
                                        </a>
                                        <a href="https://www.linkedin.com/in/shriya-s-iyer-63257627a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank">
                                            <i className="fa-brands fa-linkedin"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="card">
                                <div className="profile-img">
                                    <img
                                        src={`${getBaseUrlStatic()}/imagesvolante/profile_imgs/suraj.jpg`}
                                        alt="Suraj Am"
                                    />
                                </div>
                                <div className="content">
                                    <h3>Suraj Am</h3>
                                    <span className="role-badge lead">Manufacturing Lead</span>
                                    <div className="social-media">
                                        <a href="mailto:" target="_blank">
                                            <i className="fa-solid fa-paper-plane"></i>
                                        </a>
                                        <a href="https://www.linkedin.com/in/surajam29?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank">
                                            <i className="fa-brands fa-linkedin"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="card">
                                <div className="profile-img">
                                    <img
                                        src={`${getBaseUrlStatic()}/imagesvolante/profile_imgs/sudishwaran.jpg`}
                                        alt="Sudishwaran"
                                    />
                                </div>
                                <div className="content">
                                    <h3>Sudishwaran</h3>
                                    <span className="role-badge lead">Electrical Lead</span>
                                    <div className="social-media">
                                        <a href="mailto:" target="_blank">
                                            <i className="fa-solid fa-paper-plane"></i>
                                        </a>
                                        <a href="https://www.linkedin.com/in/sudishwaaran-p-872408268" target="_blank">
                                            <i className="fa-brands fa-linkedin"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="card">
                                <div className="profile-img">
                                    <img
                                        src={`${getBaseUrlStatic()}/imagesvolante/profile_imgs/Samiksh.jpg`}
                                        alt="Samiksh Shetty"
                                    />
                                </div>
                                <div className="content">
                                    <h3>Samiksh Shetty</h3>
                                    <span className="role-badge lead">Drivetrain Lead</span>
                                    <div className="social-media">
                                        <a href="mailto:" target="_blank">
                                            <i className="fa-solid fa-paper-plane"></i>
                                        </a>
                                        <a href="https://www.linkedin.com/in/samiksh-shetty-428b5b265?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank">
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
