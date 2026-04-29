"use client";

import Link from "next/link";

import { useEffect, useState } from "react";
import SplineViewer from "@/components/SplineViewer";
import { usePathname } from "next/navigation";
import { repoBasePath } from '@/utils/pathUtils';

interface HomeClientProps {
  // Add any props if needed
}

export default function HomeClient({}: HomeClientProps) {
  const [sponsorYear, setSponsorYear] = useState(2024);
  const pathname = usePathname();
  
  // Function to get base URL that works with GitHub Pages and local development
  const getBaseUrl = () => {
    return repoBasePath;
  };

  // Sponsor data for both years
  const sponsors2024 = [
    {
      image: `${getBaseUrl()}/imagesvolante/sponsor images/abs.jpg`,
      title: "ABS (Title Sponsor)",
      description:
        "ABS, with its strong motorsports heritage, brings high-performance engineering to the track. Their support equips our go-kart racing team with the advanced technology needed to excel in competitive racing. With ABS backing us, we are better prepared to push the limits and achieve success on the track.",
    },
    {
      image: `${getBaseUrl()}/imagesvolante/sponsor images/karnatakabank.jpg`,
      title: "Karnataka Bank Ltd. (Team Sponsor)",
      description:
        "A major financial institution in India, Karnataka Bank offers a range of banking services, from personal loans and savings accounts to corporate banking services. It's well-known for its presence across India and focuses on modern banking solutions.",
    },
    {
      image: `${getBaseUrl()}/imagesvolante/sponsor images/evbattery solutions.jpg`,
      title: "EV Battery Solutions (Product Sponsor)",
      description:
        "Specializing in lithium-ion battery packs for electric vehicles, EV Battery Solutions supports sustainable and green automotive innovations. They are likely contributing their expertise to power electric vehicles efficiently.",
    },
    {
      image: `${getBaseUrl()}/imagesvolante/sponsor images/metaflex.jpg`,
      title: "METAFLEX (Product Sponsor)",
      description:
        "Metaflex is a leading name in industrial solutions, possibly in the field of manufacturing or materials technology. Their presence as a sponsor suggests involvement in advanced materials or solutions that aid automotive development.",
    },
    {
      image: `${getBaseUrl()}/imagesvolante/sponsor images/kelly.png`,
      title: "Kelly Controls LLC (Product Sponsor)",
      description:
        'Kelly Controls is known for its focus on clean energy, particularly in creating efficient motor controllers for electric vehicles. Their motto, "Lead to Clean World," reinforces their emphasis on sustainable and eco-friendly solutions.',
    },
    {
      image: `${getBaseUrl()}/imagesvolante/sponsor images/sulakshaai.jpg`,
      title: "Sulaksha Packaging (Product Sponsor)",
      description:
        "Sulaksha is involved in the packaging industry, likely providing specialized packaging solutions for various sectors, ensuring products are transported safely and efficiently.",
    },
    {
      image: `${getBaseUrl()}/imagesvolante/sponsor images/vptai.jpg`,
      title: "VPT Components (Product Sponsor)",
      description:
        "VPT Components has a strong reputation for creating high-reliability electronic parts, and they know the importance of precision and durability. Their sponsorship of our go-kart racing team shows their dedication to helping young engineers like us push the limits of technology and performance, ensuring we race with the best equipment and reliability.",
    },
    {
      image: `${getBaseUrl()}/imagesvolante/sponsor images/tours.jpg`,
      title: "Destiny Lion Tours & Travels (Accommodation Partner)",
      description:
        "A travel and tour services provider, Destiny Lion organizes trips and accommodations, possibly offering solutions for event attendees or participants.Even helping in prior lodge-booking for our members.",
    },
    {
      image: `${getBaseUrl()}/imagesvolante/sponsor images/inertia.png`,
      title: "Inertia (Apparel Partner)",
      description:
        "Inertia is involved in providing apparel, which may be specifically tailored for motorsport or team events. T-shirts,jackets racing gears,swags etc making our club luxurious.They are responsible for the team's uniforms and branded clothing for the event.",
    },
    {
      image: `${getBaseUrl()}/imagesvolante/sponsor images/Trusteddel.jpg`,
      title: "Trusted Delivery (Logistic Partner)",
      description:
        "Trusted Delivery is a leading logistics provider, known for reliable and efficient services across sectors. Focused on customer satisfaction, they ensure safe, timely deliveries and are a trusted partner for critical shipments. We are proud to have them as our sponsor, supporting innovation in our racing journey.",
    },
    {
      image: `${getBaseUrl()}/imagesvolante/sponsor images/GT&C.jpg`,
      title: "GAN Tools and Components",
      description:
        "We are proudly sponsored by GAN Tools and Components, who have generously provided us with a range of high-quality parts. Their support is instrumental in advancing our project, enabling us to build and refine our designs with precision. We are grateful for their partnership.",
    },
  ];

  const sponsors2025 = [
    {
      image: `${getBaseUrl()}/imagesvolante/sponsor images/Ananth_Technologies.jpg`,
      title: "Ananth Technologies",
      description:
        "Ananth Technologies is a leading provider of innovative technology solutions, specializing in advanced engineering systems and digital transformation. Their partnership brings cutting-edge technical expertise to our racing endeavors.",
    },
    {
      image: `${getBaseUrl()}/imagesvolante/sponsor images/starya_logo.png`,
      title: "Starya Mobility",
      description:
        "Starya Mobility is revolutionizing the transportation sector with sustainable and efficient mobility solutions. Their support helps us explore new frontiers in electric vehicle technology and sustainable racing practices.",
    },
    {
      image: `${getBaseUrl()}/imagesvolante/sponsor images/SM_Education_Consultancy.png`,
      title: "SM Education Consultancy",
      description:
        "SM Education Consultancy provides comprehensive educational services and career guidance. Their partnership supports our team's academic growth and professional development in engineering and motorsports.",
    },
    {
      image: `${getBaseUrl()}/imagesvolante/sponsor images/Industrial_furnance_control.jpg`,
      title: "Industrial Furnace and Control",
      description:
        "Industrial Furnace and Control specializes in high-temperature industrial equipment and control systems. Their expertise in precision manufacturing and thermal management contributes to our advanced engineering capabilities.",
    },
    {
      image: `${getBaseUrl()}/imagesvolante/sponsor images/AK_Alumininum.png`,
      title: "AK Aluminium",
      description:
        "AK Aluminium is a premier supplier of high-quality aluminum products and solutions. Their lightweight, durable materials are essential for our racing vehicle construction, providing the perfect balance of strength and performance.",
    },
    {
      image: `${getBaseUrl()}/imagesvolante/sponsor images/D.B.Power_Rentals.jpg`,
      title: "DB Power Rentals",
      description:
        "DB Power Rentals is a trusted provider of reliable power solutions and equipment rentals. Their high-quality power systems and generators ensure our team has uninterrupted power supply during competitions and testing phases.",
    },
    {
      image: `${getBaseUrl()}/imagesvolante/sponsor images/GT&C.jpg`,
      title: "GAN Tools and Components",
      description:
        "We are proudly sponsored by GAN Tools and Components, who have generously provided us with a range of high-quality parts. Their support is instrumental in advancing our project, enabling us to build and refine our designs with precision.",
    },
  ];

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

    // Menu functionality
    const sidemenu = document.getElementById("sidemenu");

    const openMenu = () => {
      if (sidemenu) sidemenu.style.right = "0";
    };

    const closeMenu = () => {
      if (sidemenu) sidemenu.style.right = "-100%";
    };

    // Close menu when links are clicked
    const menuLinks = sidemenu?.getElementsByTagName("a");
    if (menuLinks) {
      for (let i = 0; i < menuLinks.length; i++) {
        menuLinks[i].addEventListener("click", closeMenu);
      }
    }

    // Close menu on window resize
    const handleResize = () => {
      if (window.innerWidth > 768) {
        closeMenu();
      }
    };

    window.addEventListener("resize", handleResize);

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
      (slidesContainer as HTMLElement).style.transform = `translateX(-${
        currentSlide * 100
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

    // Progress bar
    const calScrollValue = () => {
      const scrollProgress = document.getElementsByClassName(
        "progress"
      )[0] as HTMLElement;
      const progressValue = document.getElementById("progress-value");
      if (!scrollProgress) return;

      const pos = document.documentElement.scrollTop || document.body.scrollTop;
      const calcHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollValue = Math.round((pos * 100) / calcHeight);

      if (pos > 100) {
        scrollProgress.style.display = "grid";
      } else {
        scrollProgress.style.display = "none";
      }

      scrollProgress.style.background = `conic-gradient(#ff004f ${scrollValue}%, #2c2c2c ${scrollValue}%)`;
    };

    const scrollToTop = () => {
      document.documentElement.scrollTop = 0;
    };

    window.addEventListener("scroll", calScrollValue);
    window.addEventListener("resize", calScrollValue);

    // Contact form functionality
    const scriptURL =
      "https://script.google.com/macros/s/AKfycbwD11D7WsF4Hq2IlJsVPB-uww4tVRBFYJ--4rCTJSXtQb7bDfOzlQC5N6nMbUUH_aT1/exec";
    const form = document.forms.namedItem("submit-to-google-sheet");

    if (form) {
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        fetch(scriptURL, { method: "POST", body: new FormData(form) })
          .then((response) => {
            if (
              confirm("Message sent successfully! We'll reach you out soon!.")
            ) {
              form.reset();
            } else {
              console.log("User canceled further actions.");
            }
          })
          .catch((error) => console.error("Error!", error.message));
      });
    }

    // Surprise button
const surpriseButton = document.getElementById("surpriseButton");

    if (surpriseButton) {
      surpriseButton.addEventListener("click", function (event) {
        event.preventDefault();
        window.open("/surprise", "_blank");
      });
    }

    // Progress click handler
    const progressEl = document.getElementsByClassName("progress")[0];
    if (progressEl) {
      progressEl.addEventListener("click", scrollToTop);
    }

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

    const menuToggle = document.querySelector(".fas.fa-bars");
    const menuClose = document.querySelector(".fas.fa-times");

    if (menuToggle) {
      menuToggle.addEventListener("click", openMenu);
    }
    if (menuClose) {
      menuClose.addEventListener("click", closeMenu);
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

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", calScrollValue);
      window.removeEventListener("resize", calScrollValue);
    };
  }, []);

  return (
    <>
      {/* Spline Background */}
      <SplineViewer
        className="backgroundspl spline-element"
        url="https://prod.spline.design/D5E1U-xUUmM3ZrHH/scene.splinecode"
      />
      <div className="client"></div>

      {/* Progress Bar */}
      <div className="progress">
        <span id="progress-value">
          <i className="fa-solid fa-angles-up"></i>
        </span>
      </div>

      {/* Header Section */}
      <div id="header">
        <div className="container">
          <nav>
            <img
              src={`${getBaseUrl()}/imagesvolante/logotrial1.webp`}
              className="logo"
              alt="Team Volante Logo"
            />
              <ul id="sidemenu">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/team">Our Team</Link></li>
                <li><Link href="/achievements">Timeline</Link></li>
                <li><Link href="/sponsors">Sponsors</Link></li>
                <li><Link href="/contact">Contact</Link></li>
              </ul>

              <i className="fas fa-times"></i>   {/* CLOSE ICON */}

              <i className="fas fa-bars"></i>    {/* MENU ICON */}

              <ul id="desktop-menu">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/team">Our Team</Link></li>
                <li><Link href="/achievements">Timeline</Link></li>
                <li><Link href="/sponsors">Sponsors</Link></li>
                <li><Link href="/contact">Contact</Link></li>
              </ul>
          </nav>

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
              {/* Replaced GitHub with WhatsApp group link per request */}
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
                  <img src={`${getBaseUrl()}/imagesvolante/classof25.jpg`} alt="Class of 25" />
                  <div className="carousel-content">
                    <h3>CLASS OF '26</h3>
                    <p>Our current amazing team from 2025</p>
                  </div>
                </div>
                <div className="carousel-slide">
                  <img src={`${getBaseUrl()}/imagesvolante/Grouppic2.jpg`} alt="Class of 24" />
                  <div className="carousel-content">
                    <h3>CLASS OF '24</h3>
                    <p>Our talented team from 2024</p>
                  </div>
                </div>
                <div className="carousel-slide">
                  <img src={`${getBaseUrl()}/imagesvolante/Grouppic.jpg`} alt="Class of 23" />
                  <div className="carousel-content">
                    <h3>CLASS OF '23</h3>
                    <p>Our amazing team from 2023</p>
                  </div>
                </div>
                <div className="carousel-slide">
                  <img src={`${getBaseUrl()}/imagesvolante/grouppic4.jpg`} alt="Team Achievements" />
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
                    src={`${getBaseUrl()}/imagesvolante/profile_imgs/Prajwal_baretto.jpeg`}
                    alt="Prajwal Baretto"
                  />
                </div>
                <div className="content">
                  <h3>Prajwal Baretto</h3>
                  <span className="role-badge captain">Team Captain</span>
                  <div className="social-media">
                    <a href="mailto:prajwalbaretto261@gmail.com">
                      <i className="fa-solid fa-paper-plane"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/prajwal-baretto-9235711b1?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app">
                      <i className="fa-brands fa-linkedin"></i>
                    </a>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="profile-img">
                  <img
                    src={`${getBaseUrl()}/imagesvolante/profile_imgs/shriya_iyer.jpg`}
                    alt="Shriya Iyer"
                  />
                </div>
                <div className="content">
                  <h3>Shriya Iyer</h3>
                  <span className="role-badge vice-captain">Vice Captain</span>
                  <div className="social-media">
                    <a href="mailto:shriyaiyer18@gmail.com">
                      <i className="fa-solid fa-paper-plane"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/shriya-s-iyer-63257627a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                      <i className="fa-brands fa-linkedin"></i>
                    </a>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="profile-img">
                  <img
                    src={`${getBaseUrl()}/imagesvolante/profile_imgs/ninnad.jpg`}
                    alt="Ninnad P"
                  />
                </div>
                <div className="content">
                  <h3>Ninnad P</h3>
                  <span className="role-badge lead">Brakes Lead</span>
                  <div className="social-media">
                    <a href="mailto:ninnadpgangurde333@gmail.com">
                      <i className="fa-solid fa-paper-plane"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/ninnad-pradeep-gangurde-937b99263?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app">
                      <i className="fa-brands fa-linkedin"></i>
                    </a>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="profile-img">
                  <img
                    src={`${getBaseUrl()}/imagesvolante/profile_imgs/Samuel.jpg`}
                    alt="Samuel Jabez"
                  />
                </div>
                <div className="content">
                  <h3>Samuel Jabez</h3>
                  <span className="role-badge lead">Design Lead</span>
                  <div className="social-media">
                    <a href="mailto:">
                      <i className="fa-solid fa-paper-plane"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/prajwal-baretto-9235711b1?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app">
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
                    src={`${getBaseUrl()}/imagesvolante/profile_imgs/Harshini.jpg`}
                    alt="Harshini"
                  />
                </div>
                <div className="content">
                  <h3 className="fixing">Harshini</h3>
                  <span className="role-badge lead">
                    Management & Media Lead
                  </span>
                  <div className="social-media">
                    <a href="mailto:">
                      <i className="fa-solid fa-paper-plane"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/shriya-s-iyer-63257627a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                      <i className="fa-brands fa-linkedin"></i>
                    </a>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="profile-img">
                  <img
                    src={`${getBaseUrl()}/imagesvolante/profile_imgs/suraj.jpg`}
                    alt="Suraj Am"
                  />
                </div>
                <div className="content">
                  <h3>Suraj Am</h3>
                  <span className="role-badge lead">Manufacturing Lead</span>
                  <div className="social-media">
                    <a href="mailto:">
                      <i className="fa-solid fa-paper-plane"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/surajam29?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app">
                      <i className="fa-brands fa-linkedin"></i>
                    </a>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="profile-img">
                  <img
                    src={`${getBaseUrl()}/imagesvolante/profile_imgs/sudishwaran.jpg`}
                    alt="Sudishwaran"
                  />
                </div>
                <div className="content">
                  <h3>Sudishwaran</h3>
                  <span className="role-badge lead">Electrical Lead</span>
                  <div className="social-media">
                    <a href="mailto:">
                      <i className="fa-solid fa-paper-plane"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/sudishwaaran-p-872408268">
                      <i className="fa-brands fa-linkedin"></i>
                    </a>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="profile-img">
                  <img
                    src={`${getBaseUrl()}/imagesvolante/profile_imgs/Samiksh.jpg`}
                    alt="Samiksh Shetty"
                  />
                </div>
                <div className="content">
                  <h3>Samiksh Shetty</h3>
                  <span className="role-badge lead">Drivetrain Lead</span>
                  <div className="social-media">
                    <a href="mailto:">
                      <i className="fa-solid fa-paper-plane"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/samiksh-shetty-428b5b265?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app">
                      <i className="fa-brands fa-linkedin"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Timeline Section */}
      <h1 className="headingtimeline" id="timeline">
        TIMELINE
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
          (sponsor, index) => (
            <div
              key={`${sponsorYear}-${index}`}
              className="card-sponsors"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img src={sponsor.image} alt={sponsor.title} />
              <div className="card-sponsor-content">
                <h3>{sponsor.title}</h3>
                <p>{sponsor.description}</p>
              </div>
            </div>
          )
        )}
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

      {/* Contact Section */}
      <div className="contact" id="contact" data-aos="fade-left">
        <div className="contact-container">
          <div className="row">
            <div className="contact-left">
              <h1 className="contact-subtitle">CONTACT US</h1>
              <p>
                <i className="fa-solid fa-paper-plane"></i>Volante@msrit.edu
              </p>
              <p>
                <i className="fa-solid fa-square-phone"></i>+91 9148557490
              </p>
              <p>
                <i className="fa-solid fa-square-phone"></i>+91 7892560251
              </p>
              <p style={{ lineHeight: "1.8" }}>
                <i className="fa-solid fa-location-dot"></i>ESB 119, Ramaiah
                Institute of Technology, MSR Nagar, Bengaluru-560054
              </p>
              <div className="socialicons-contact">
                <a href="https://www.linkedin.com/company/Volante-Motorsports-official/about/" target="_blank">
                  <i className="fa-brands fa-linkedin"></i>
                </a>
                {/* WhatsApp group link */}
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
            <div className="contact-right">
              <form className="contact-form" name="submit-to-google-sheet">
                <input
                  type="text"
                  name="Name"
                  placeholder="Your Name"
                  required
                />
                <input
                  type="email"
                  name="Email"
                  placeholder="Your Email"
                  required
                />
                <textarea
                  name="Message"
                  rows={6}
                  placeholder="Your Message"
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
    </>
  );
}
