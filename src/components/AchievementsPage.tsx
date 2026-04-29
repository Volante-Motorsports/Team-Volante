"use client";

import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { repoBasePath } from '@/utils/pathUtils';

export default function AchievementsPage() {
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
    }, []);

    return (
        <div className="achievements-page-wrapper">
            {/* Navigation */}
            <div className="page-header">
                <div className="container">
                    <Navbar />
                </div>
            </div>

            {/* Timeline Section */}
            <h1 className="headingtimeline" id="timeline">
                ACHIEVEMENTS
            </h1>
            <div className="timeline" id="timeline2">
                <div className="containerhistory left-container">
                    <img
                        src={`${getBaseUrl()}/imagesvolante/logovolante.png`}
                        className="imgfix"
                        alt="Team Volante Logo"
                    />
                    <div className="text-box">
                        <h2>BFKCT-Bharath Formula Karting</h2>
                        <small>2018-2019</small>
                        <p>
                            BFKCT is a national level student go-karting competition to help
                            students have a platform to apply what they learned and enrich
                            their skills. Bagged the 2nd Runner up (Overall) and 1st in
                            Endurance.
                        </p>
                        <span className="left-container-arrow"></span>
                    </div>
                </div>

                <div className="containerhistory right-container">
                    <img src={`${getBaseUrl()}/imagesvolante/logovolante.png`} alt="Team Volante Logo" />
                    <div className="text-box">
                        <h2>COC-Champion Of Champions</h2>
                        <small>2019-2020</small>
                        <p>
                            COC 2020 was national-level car-racing competition conducted for 3
                            types of vehicles formula, ATV and go-karting where we
                            participated in ATV championship which was conducted and organised
                            by KL University in association with ISIE India , APSSDC and
                            Dassault systems.Bagged Best acceleration and Future award in
                            innovation category.
                        </p>
                        <span className="right-container-arrow"></span>
                    </div>
                </div>

                <div className="containerhistory left-container">
                    <img src={`${getBaseUrl()}/imagesvolante/logovolante.png`} alt="Team Volante Logo" />
                    <div className="text-box">
                        <h2>NEKC-National Electric Kart Championship</h2>
                        <small>2020</small>
                        <p>
                            NEKC is one of the best and biggest karting event in India . With
                            electrical energy shaping its way into the era of green energy, it
                            proves to be the source of newfound ideas,that can repose a
                            platform to do great innovations.Bagged AIR-7 and STATE Rank-1
                        </p>
                        <span className="left-container-arrow"></span>
                    </div>
                </div>

                <div className="containerhistory right-container">
                    <img src={`${getBaseUrl()}/imagesvolante/logovolante.png`} alt="Team Volante Logo" />
                    <div className="text-box">
                        <h2>SAE E baja</h2>
                        <small>2020</small>
                        <p>
                            Organised by SAE India it is one of the most prestigious
                            competitions a team can participate in. The evaluation criterions
                            considered are engineering design, CAD/CAE, cost and innovation.
                            AIR- 17 & State Rank - 2
                        </p>
                        <span className="right-container-arrow"></span>
                    </div>
                </div>

                <div className="containerhistory left-container">
                    <img src={`${getBaseUrl()}/imagesvolante/logovolante.png`} alt="Team Volante Logo" />
                    <div className="text-box">
                        <h2>Mega atv championship</h2>
                        <small>2021-2022</small>
                        <p>
                            This national level intercollege event is organised by Autosports
                            India and is mainly focused on the dynamic events. The
                            championship is popular for its racing format and the endurance
                            test being at night. 1st in Drag & 3rd in Flat Dirt race. AIR- 3 &
                            State Rank - 2
                        </p>
                        <span className="left-container-arrow"></span>
                    </div>
                </div>

                <div className="containerhistory right-container">
                    <img src={`${getBaseUrl()}/imagesvolante/logovolante.png`} alt="Team Volante Logo" />
                    <div className="text-box">
                        <h2>Edgeline go-kart championship</h2>
                        <small>2022-2023</small>
                        <p>
                            This is a national level student go-kart championship comprising
                            of both static and dynamic events. It&apos;s organised by
                            Wisdomatic Swarms. 1st in – Endurance, Autocross, Skidpad &
                            Business Plan. Overall Champions.
                        </p>
                        <span className="right-container-arrow"></span>
                    </div>
                </div>

                <div className="containerhistory left-container">
                    <img src={`${getBaseUrl()}/imagesvolante/logovolante.png`} alt="Team Volante Logo" />
                    <div className="text-box">
                        <h2>Edgeline go-kart championship</h2>
                        <small>2023-2024</small>
                        <p>
                            This is a national level student go-kart championship comprising
                            of both static and dynamic events. It&apos;s organised by
                            Wisdomatic Swarms. This phase of the event was held in Bengaluru.
                            1st in Business Plan.
                        </p>
                        <span className="left-container-arrow"></span>
                    </div>
                </div>

                <div className="containerhistory right-container">
                    <img src={`${getBaseUrl()}/imagesvolante/logovolante.png`} alt="Team Volante Logo" />
                    <div className="text-box">
                        <h2>Dirt Kart Design Challenge (DKDC) S2 Overall Champions</h2>
                        <small>2025</small>
                        <p>
                            Our team went to Goa and it was a go-kart championship where we
                            secured the overall championship title. This victory showcases our
                            team&apos;s dedication, innovation, and superior engineering
                            skills in the competitive racing arena.
                        </p>
                        <span className="right-container-arrow"></span>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}
