'use client'

import { useEffect } from 'react'
import { repoBasePath } from '@/utils/pathUtils';

export default function ClientScripts() {
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
    }

    // Menu functionality
    const sidemenu = document.getElementById("sidemenu");
    
    const openMenu = () => {
      if (sidemenu) sidemenu.style.right = "0";
    }

    const closeMenu = () => {
      if (sidemenu) sidemenu.style.right = "-100%";
    }

    // Close menu when links are clicked
    const menuLinks = sidemenu?.getElementsByTagName('a');
    if (menuLinks) {
      for (let i = 0; i < menuLinks.length; i++) {
        menuLinks[i].addEventListener('click', closeMenu);
      }
    }

    // Close menu on window resize
    const handleResize = () => {
      if (window.innerWidth > 768) {
        closeMenu();
      }
    }

    window.addEventListener('resize', handleResize);

    // Slideshow functionality
    let slideIndex = 0;
    const showSlides = () => {
      const slides = document.getElementsByClassName("mySlides");
      for (let i = 0; i < slides.length; i++) {
        (slides[i] as HTMLElement).style.display = "none";
      }
      slideIndex++;
      if (slideIndex > slides.length) { slideIndex = 1 }
      if (slides[slideIndex - 1]) {
        (slides[slideIndex - 1] as HTMLElement).style.display = "block";
      }
      setTimeout(showSlides, 2000);
    }
    showSlides();

    // Manual slide controls
    const plusSlides = (n: number) => {
      slideIndex += n;
      const slides = document.getElementsByClassName("mySlides");
      if (slideIndex > slides.length) { slideIndex = 1 }
      if (slideIndex < 1) { slideIndex = slides.length }
      for (let i = 0; i < slides.length; i++) {
        (slides[i] as HTMLElement).style.display = "none";
      }
      if (slides[slideIndex - 1]) {
        (slides[slideIndex - 1] as HTMLElement).style.display = "block";
      }
    }

    const currentSlide = (n: number) => {
      slideIndex = n;
      const slides = document.getElementsByClassName("mySlides");
      const dots = document.getElementsByClassName("dot");
      if (slideIndex > slides.length) { slideIndex = 1 }
      if (slideIndex < 1) { slideIndex = slides.length }
      for (let i = 0; i < slides.length; i++) {
        (slides[i] as HTMLElement).style.display = "none";
      }
      for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active");
      }
      if (slides[slideIndex - 1]) {
        (slides[slideIndex - 1] as HTMLElement).style.display = "block";
      }
      if (dots[slideIndex - 1]) {
        dots[slideIndex - 1].classList.add("active");
      }
    }

    // Progress bar
    const calScrollValue = () => {
      const scrollProgress = document.getElementsByClassName("progress")[0] as HTMLElement;
      const progressValue = document.getElementById("progress-value");
      const pos = document.documentElement.scrollTop || document.body.scrollTop;
      const calcHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollValue = Math.round((pos * 100) / calcHeight);

      if (pos > 100) {
        scrollProgress.style.display = "grid";
      } else {
        scrollProgress.style.display = "none";
      }
      
      scrollProgress.style.background = `conic-gradient(#ff004f ${scrollValue}%, #2c2c2c ${scrollValue}%)`;
    }

    const scrollToTop = () => {
      document.documentElement.scrollTop = 0;
    }

    window.addEventListener("scroll", calScrollValue);
    window.addEventListener("resize", calScrollValue);

    // Contact form functionality
    const scriptURL = "https://script.google.com/macros/s/AKfycbwD11D7WsF4Hq2IlJsVPB-uww4tVRBFYJ--4rCTJSXtQb7bDfOzlQC5N6nMbUUH_aT1/exec";
    const form = document.forms.namedItem("submit-to-google-sheet");

    if (form) {
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        fetch(scriptURL, { method: "POST", body: new FormData(form) })
          .then((response) => {
            if (confirm("Message sent successfully! We'll reach you out soon!.")) {
              form.reset();
            } else {
              console.log("User canceled further actions.");
            }
          })
          .catch((error) => console.error("Error!", error.message));
      });
    }

    // Surprise button
    const surpriseButton = document.getElementById('surpriseButton');

    if (surpriseButton) {
      surpriseButton.addEventListener('click', function (event) {
        event.preventDefault();
        window.open('/surprise', '_blank');
      });
    }

    // AOS animation
    if (typeof window !== 'undefined' && (window as any).AOS) {
      (window as any).AOS.init({
        offset: 300,
        duration: 1000,
      });
    }

    // Global functions for onclick handlers
    (window as any).opentab = openTab;
    (window as any).openmenu = openMenu;
    (window as any).closemenu = closeMenu;
    (window as any).plusSlides = plusSlides;
    (window as any).currentSlide = currentSlide;
    (window as any).scrollToTop = scrollToTop;

    // Progress click handler
    const progressEl = document.getElementsByClassName("progress")[0];
    if (progressEl) {
      progressEl.addEventListener("click", scrollToTop);
    }

  }, [])

  useEffect(() => {
    // Load AOS script
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/aos@next/dist/aos.js';
    script.onload = () => {
      if ((window as any).AOS) {
        (window as any).AOS.init({
          offset: 300,
          duration: 1000,
        });
      }
    };
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return null;
}