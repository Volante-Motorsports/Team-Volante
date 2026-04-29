"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { repoBasePath } from '@/utils/pathUtils';

export default function SponsorsPage() {
    const [sponsorYear, setSponsorYear] = useState(2024);

    const getBaseUrl = () => {
        return repoBasePath;
    };

    // Sponsor data for both years with website links
    const sponsors2024 = [
        {
            image: `${getBaseUrl()}/imagesvolante/sponsor images/abs.jpg`,
            title: "ABS (Title Sponsor)",
            description:
                "ABS, with its strong motorsports heritage, brings high-performance engineering to the track. Their support equips our go-kart racing team with the advanced technology needed to excel in competitive racing. With ABS backing us, we are better prepared to push the limits and achieve success on the track.",
            website: "https://www.abs-brake.com/",
        },
        {
            image: `${getBaseUrl()}/imagesvolante/sponsor images/karnatakabank.jpg`,
            title: "Karnataka Bank Ltd. (Team Sponsor)",
            description:
                "A major financial institution in India, Karnataka Bank offers a range of banking services, from personal loans and savings accounts to corporate banking services. It's well-known for its presence across India and focuses on modern banking solutions.",
            website: "https://www.karnatakabank.com/",
        },
        {
            image: `${getBaseUrl()}/imagesvolante/sponsor images/evbattery solutions.jpg`,
            title: "EV Battery Solutions (Product Sponsor)",
            description:
                "Specializing in lithium-ion battery packs for electric vehicles, EV Battery Solutions supports sustainable and green automotive innovations. They are likely contributing their expertise to power electric vehicles efficiently.",
            website: "https://www.evbatterysolutions.in/",
        },
        {
            image: `${getBaseUrl()}/imagesvolante/sponsor images/metaflex.jpg`,
            title: "METAFLEX (Product Sponsor)",
            description:
                "Metaflex is a leading name in industrial solutions, possibly in the field of manufacturing or materials technology. Their presence as a sponsor suggests involvement in advanced materials or solutions that aid automotive development.",
            website: "https://www.metaflexdoors.com/",
        },
        {
            image: `${getBaseUrl()}/imagesvolante/sponsor images/kelly.png`,
            title: "Kelly Controls LLC (Product Sponsor)",
            description:
                'Kelly Controls is known for its focus on clean energy, particularly in creating efficient motor controllers for electric vehicles. Their motto, "Lead to Clean World," reinforces their emphasis on sustainable and eco-friendly solutions.',
            website: "https://kellycontroller.com/",
        },
        {
            image: `${getBaseUrl()}/imagesvolante/sponsor images/sulakshaai.jpg`,
            title: "Sulaksha Packaging (Product Sponsor)",
            description:
                "Sulaksha is involved in the packaging industry, likely providing specialized packaging solutions for various sectors, ensuring products are transported safely and efficiently.",
            website: null,
        },
        {
            image: `${getBaseUrl()}/imagesvolante/sponsor images/vptai.jpg`,
            title: "VPT Components (Product Sponsor)",
            description:
                "VPT Components has a strong reputation for creating high-reliability electronic parts, and they know the importance of precision and durability. Their sponsorship of our go-kart racing team shows their dedication to helping young engineers like us push the limits of technology and performance, ensuring we race with the best equipment and reliability.",
            website: "https://www.vpt-inc.com/",
        },
        {
            image: `${getBaseUrl()}/imagesvolante/sponsor images/tours.jpg`,
            title: "Destiny Lion Tours & Travels (Accommodation Partner)",
            description:
                "A travel and tour services provider, Destiny Lion organizes trips and accommodations, possibly offering solutions for event attendees or participants.Even helping in prior lodge-booking for our members.",
            website: null,
        },
        {
            image: `${getBaseUrl()}/imagesvolante/sponsor images/inertia.png`,
            title: "Inertia (Apparel Partner)",
            description:
                "Inertia is involved in providing apparel, which may be specifically tailored for motorsport or team events. T-shirts,jackets racing gears,swags etc making our club luxurious.They are responsible for the team's uniforms and branded clothing for the event.",
            website: null,
        },
        {
            image: `${getBaseUrl()}/imagesvolante/sponsor images/Trusteddel.jpg`,
            title: "Trusted Delivery (Logistic Partner)",
            description:
                "Trusted Delivery is a leading logistics provider, known for reliable and efficient services across sectors. Focused on customer satisfaction, they ensure safe, timely deliveries and are a trusted partner for critical shipments. We are proud to have them as our sponsor, supporting innovation in our racing journey.",
            website: "https://www.trusteddelivery.in/",
        },
        {
            image: `${getBaseUrl()}/imagesvolante/sponsor images/GT&C.jpg`,
            title: "GAN Tools and Components",
            description:
                "We are proudly sponsored by GAN Tools and Components, who have generously provided us with a range of high-quality parts. Their support is instrumental in advancing our project, enabling us to build and refine our designs with precision. We are grateful for their partnership.",
            website: null,
        },
    ];

    const sponsors2025 = [
        {
            image: `${getBaseUrl()}/imagesvolante/sponsor images/Ananth_Technologies.jpg`,
            title: "Ananth Technologies",
            description:
                "Ananth Technologies is a leading provider of innovative technology solutions, specializing in advanced engineering systems and digital transformation. Their partnership brings cutting-edge technical expertise to our racing endeavors.",
            website: "https://www.ananthtech.com/",
        },
        {
            image: `${getBaseUrl()}/imagesvolante/sponsor images/starya_logo.png`,
            title: "Starya Mobility",
            description:
                "Starya Mobility is revolutionizing the transportation sector with sustainable and efficient mobility solutions. Their support helps us explore new frontiers in electric vehicle technology and sustainable racing practices.",
            website: "https://www.starya.in/",
        },
        {
            image: `${getBaseUrl()}/imagesvolante/sponsor images/SM_Education_Consultancy.png`,
            title: "SM Education Consultancy",
            description:
                "SM Education Consultancy provides comprehensive educational services and career guidance. Their partnership supports our team's academic growth and professional development in engineering and motorsports.",
            website: null,
        },
        {
            image: `${getBaseUrl()}/imagesvolante/sponsor images/Industrial_furnance_control.jpg`,
            title: "Industrial Furnace and Control",
            description:
                "Industrial Furnace and Control specializes in high-temperature industrial equipment and control systems. Their expertise in precision manufacturing and thermal management contributes to our advanced engineering capabilities.",
            website: "https://industrialfurnaceandcontrols.com/",
        },
        {
            image: `${getBaseUrl()}/imagesvolante/sponsor images/AK_Alumininum.png`,
            title: "AK Aluminium",
            description:
                "AK Aluminium is a premier supplier of high-quality aluminum products and solutions. Their lightweight, durable materials are essential for our racing vehicle construction, providing the perfect balance of strength and performance.",
            website: null,
        },
        {
            image: `${getBaseUrl()}/imagesvolante/sponsor images/D.B.Power_Rentals.jpg`,
            title: "DB Power Rentals",
            description:
                "DB Power Rentals is a trusted provider of reliable power solutions and equipment rentals. Their high-quality power systems and generators ensure our team has uninterrupted power supply during competitions and testing phases.",
            website: null,
        },
        {
            image: `${getBaseUrl()}/imagesvolante/sponsor images/GT&C.jpg`,
            title: "GAN Tools and Components",
            description:
                "We are proudly sponsored by GAN Tools and Components, who have generously provided us with a range of high-quality parts. Their support is instrumental in advancing our project, enabling us to build and refine our designs with precision.",
            website: null,
        },
    ];

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

    const renderSponsorCard = (sponsor: any, index: number) => {
        const cardContent = (
            <>
                <img src={sponsor.image} alt={sponsor.title} />
                <div className="card-sponsor-content">
                    <h3>
                        {sponsor.title}
                        {sponsor.website && (
                            <i className="fas fa-external-link-alt" style={{ marginLeft: '8px', fontSize: '0.7em', opacity: 0.7 }}></i>
                        )}
                    </h3>
                    <p>{sponsor.description}</p>
                </div>
            </>
        );

        if (sponsor.website) {
            return (
                <a
                    key={`${sponsorYear}-${index}`}
                    href={sponsor.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card-sponsors card-sponsors-link"
                    style={{ animationDelay: `${index * 0.1}s`, textDecoration: 'none', color: 'inherit' }}
                >
                    {cardContent}
                </a>
            );
        }

        return (
            <div
                key={`${sponsorYear}-${index}`}
                className="card-sponsors"
                style={{ animationDelay: `${index * 0.1}s` }}
            >
                {cardContent}
            </div>
        );
    };

    return (
        <>
            <div className="client"></div>

            {/* Navigation */}
            <div className="page-header">
                <div className="container">
                    <Navbar />
                </div>
            </div>

            {/* Sponsors Section */}
            <div className="sponsors-heading" id="sponsors">
                <h1>OUR SPONSORS</h1>
                <div className="sponsor-year-toggle">
                    <button
                        className={`toggle-btn ${sponsorYear === 2024 ? "active" : ""}`}
                        onClick={() => setSponsorYear(2024)}
                    >
                        2024
                    </button>
                    <button
                        className={`toggle-btn ${sponsorYear === 2025 ? "active" : ""}`}
                        onClick={() => setSponsorYear(2025)}
                    >
                        2025
                    </button>
                </div>
            </div>
            <div
                className="sponsors-container"
                data-aos="fade-right"
                key={sponsorYear}
            >
                {(sponsorYear === 2024 ? sponsors2024 : sponsors2025).map(
                    (sponsor, index) => renderSponsorCard(sponsor, index)
                )}
            </div>

            <Footer />
        </>
    );
}
