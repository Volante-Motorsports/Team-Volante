"use client";

import { useEffect, useState, useRef } from "react";
import Navbar from "@/components/Navbar";

export default function ContactPage() {
    const [mounted, setMounted] = useState(false);
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [errorMsg, setErrorMsg] = useState("");
    const formRef = useRef<HTMLFormElement>(null);

    useEffect(() => {
        setMounted(true);

        // FormSubmit handles the submission natively. No JS required here.

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
            // cleanup if needed
        };
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!formRef.current) return;

        const formData = new FormData(formRef.current);
        const data = {
            Name: formData.get("Name"),
            Email: formData.get("Email"),
            Message: formData.get("Message"),
        };

        setStatus("loading");
        setErrorMsg("");

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });
            const result = await res.json();
            if (result.success) {
                setStatus("success");
                formRef.current?.reset();
            } else {
                setStatus("error");
                setErrorMsg(result.error || "Something went wrong.");
            }
        } catch (err: any) {
            setStatus("error");
            setErrorMsg("Network error. Please try again.");
        }
    };

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
                                onSubmit={handleSubmit}
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
                                    required
                                    suppressHydrationWarning
                                ></textarea>

                                {status === "success" && (
                                    <p style={{ color: "#4caf50", marginBottom: "10px", fontWeight: 600 }}>
                                        ✅ Message sent! We&apos;ll get back to you soon.
                                    </p>
                                )}
                                {status === "error" && (
                                    <p style={{ color: "#ff004f", marginBottom: "10px", fontWeight: 600 }}>
                                        ❌ {errorMsg}
                                    </p>
                                )}

                                <button
                                    type="submit"
                                    className="btn btn2"
                                    disabled={status === "loading"}
                                    style={{ opacity: status === "loading" ? 0.7 : 1 }}
                                >
                                    {status === "loading" ? "Sending..." : "Submit"}
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
