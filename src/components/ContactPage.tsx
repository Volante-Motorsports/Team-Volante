"use client";

import { useEffect, useState, useRef } from "react";
import Navbar from "@/components/Navbar";

export default function ContactPage() {
    const [mounted, setMounted] = useState(false);
    const formRef = useRef<HTMLFormElement>(null);

    useEffect(() => {
        setMounted(true);

        // Contact form functionality
        const scriptURL =
            "https://script.google.com/macros/s/AKfycbwD11D7WsF4Hq2IlJsVPB-uww4tVRBFYJ--4rCTJSXtQb7bDfOzlQC5N6nMbUUH_aT1/exec";

        const handleSubmit = (e: Event) => {
            e.preventDefault();
            if (formRef.current) {
                fetch(scriptURL, { method: "POST", body: new FormData(formRef.current) })
                    .then((response) => {
                        if (
                            confirm("Message sent successfully! We'll reach you out soon!.")
                        ) {
                            formRef.current?.reset();
                        } else {
                            console.log("User canceled further actions.");
                        }
                    })
                    .catch((error) => console.error("Error!", error.message));
            }
        };

        if (formRef.current) {
            formRef.current.addEventListener("submit", handleSubmit);
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
            if (formRef.current) {
                formRef.current.removeEventListener("submit", handleSubmit);
            }
        };
    }, []);

    return (
        <div className="contact-page-wrapper">
            {/* Navigation */}
            <div className="page-header">
                <div className="container">
                    <Navbar />
                </div>
            </div>

            {/* Contact Section */}
            <div className="contact" id="contact" data-aos="fade-left">
                <div className="contact-container">
                    <div className="row">
                        <div className="contact-left" id="contact-left">
                            <h1 className="contact-subtitle sub-title">CONTACT US</h1>
                            <p>
                                <i className="fa-solid fa-paper-plane"></i>Volante@msrit.edu
                            </p>
                            <p>
                                <i className="fa-solid fa-square-phone"></i>+91 9972156939
                            </p>
                            <p>
                                <i className="fa-solid fa-square-phone"></i>+91 7483890829
                            </p>
                            <p style={{ lineHeight: "1.8" }}>
                                <i className="fa-solid fa-location-dot"></i>ESB 119, Ramaiah
                                Institute of Technology, MSR Nagar, Bengaluru-560054
                            </p>
                            <div className="socialicons-contact">
                                <a href="https://www.linkedin.com/company/Volante-Motorsports-official/about/" target="_blank">
                                    <i className="fa-brands fa-linkedin"></i>
                                </a>
                                <a href="https://chat.whatsapp.com/ECtg9BcHZBSI3E9tdcNqGu?mode=ems_copy_t" aria-label="WhatsApp group" target="_blank">
                                    <i className="fa-brands fa-whatsapp"></i>
                                </a>
                                <a href="https://youtube.com/@teamvolante2014?si=Fok2FhPoN7XDPo0k" target="_blank">
                                    <i className="fa-brands fa-youtube"></i>
                                </a>
                                <a href="https://www.instagram.com/team_volante/profilecard/?igsh=MTdyY2RrOWYxYng0Nw==" target="_blank">
                                    <i className="fa-brands fa-instagram"></i>
                                </a>
                            </div>
                        </div>
                        <div className="contact-right" id="contact-right">
                            <form
                                ref={formRef}
                                className="contact-form"
                                suppressHydrationWarning
                            >
                                <input
                                    type="text"
                                    name="Name"
                                    placeholder="Your Name"
                                    required
                                    suppressHydrationWarning
                                />
                                <input
                                    type="email"
                                    name="Email"
                                    placeholder="Your Email"
                                    required
                                    suppressHydrationWarning
                                />
                                <textarea
                                    name="Message"
                                    rows={6}
                                    placeholder="Your Message"
                                    suppressHydrationWarning
                                ></textarea>
                                <button type="submit" className="btn btn2">
                                    Submit
                                </button>
                            </form>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="copyright">
                    <p>
                        Copyright © Volante Motorsports
                    </p>
                </div>
            </div>
        </div>
    );
}
