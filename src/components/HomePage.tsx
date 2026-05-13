"use client";

import { useEffect } from "react";
import Link from "next/link";
import SplineViewer from "@/components/SplineViewer";
import Navbar from "@/components/Navbar";
import { repoBasePath } from '@/utils/pathUtils';

export default function HomePage() {
    const getBaseUrl = () => {
        return repoBasePath;
    };

    useEffect(() => {
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

        // Surprise button
        const surpriseButton = document.getElementById("surpriseButton");

        if (surpriseButton) {
        surpriseButton.addEventListener("click", function (event) {
            event.preventDefault();
            window.open("/surprise", "_blank");
        });
        }
    }, []);

    return (
        <>
            {/* Spline Background */}
            <SplineViewer
                className="backgroundspl spline-element"
                url="https://prod.spline.design/D5E1U-xUUmM3ZrHH/scene.splinecode"
            />
            <div className="client"></div>

            {/* Header Section */}
            <div id="header">
                <div className="container">
                    <Navbar />

                    <div className="header-text">
                        <h1>
                            Welcome To <span>VOLANTE</span>
                        </h1>
                        <h3 className="typing-text">
                            <span></span>
                        </h3>

                        <div className="social-icon">
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
                </div>
            </div>

            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <a href="https://studio.tripo3d.ai/3d-model/8680ff25-6bad-4dc2-a542-a5d2a2c8b312?invite_code=S85NMR" target="_blank">
                    <button className="btn3">View our virtual buggy!</button>
                </a>
            </div>

            {/* Surprise Section */}
            <div className="game-time">
                <center>
                    <h1>
                        <b>SURPRISE AHEAD!!!</b>
                    </h1>
                    <p>
                        <b>
                            shhh!! To unravel the secret open this button in laptop/desktop/PC
                        </b>
                    </p>
                    <button id="surpriseButton" className="surprise">
                        Secret!
                    </button>
                </center>
            </div>
        </>
    );
}
