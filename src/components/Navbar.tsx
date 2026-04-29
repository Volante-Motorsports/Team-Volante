"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { repoBasePath, withRepoBase } from '@/utils/pathUtils';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();

    const getBaseUrl = () => {
        return repoBasePath;
    };

    const navLinks = [
        { href: "/", label: "Home" },
        { href: "/Team-Volante/about/", label: "About" },
        { href: "/Team-Volante/team/", label: "Team" },
        { href: "/Team-Volante/achievements/", label: "Achievements" },
        { href: "/Team-Volante/sponsors/", label: "Sponsors" },
        { href: "/Team-Volante/contact/", label: "Contact" },
    ];

    const openMenu = () => setIsMenuOpen(true);
    const closeMenu = () => setIsMenuOpen(false);

    // Close menu on window resize
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768) {
                closeMenu();
            }
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Check if link is active
    const isActive = (href: string) => {
        const basePath = getBaseUrl();
        const currentPath = pathname.replace(basePath, "") || "/";
        return currentPath === href;
    };

    return (
        <nav className="main-navbar">
            <a href="/" className="logo-link">
                <span className="porsche-text">VOLANTE</span>
                <img
                    src={`${getBaseUrl()}/imagesvolante/logotrial1.webp`}
                    className="logo"
                    alt="Team Volante Logo"
                />
            </a>

            {/* Mobile Menu */}
            <ul
                id="sidemenu"
                className={`sidemenu ${isMenuOpen ? 'open' : ''}`}
                style={{ right: isMenuOpen ? "0" : "-100%" }}
            >
                {navLinks.map((link) => (
                    <li key={link.href}>
                        <a
                            href={link.href}
                            className={isActive(link.href) ? "active" : ""}

                        >
                            {link.label}
                        </a>
                    </li>
                ))}
                <i className="fas fa-times" onClick={closeMenu}></i>
            </ul>

            {/* Hamburger Menu Icon */}
            <i className="fas fa-bars" onClick={openMenu}></i>

            {/* Desktop Menu */}
            <ul id="desktop-menu">
                {navLinks.map((link) => (
                    <li key={link.href}>
                        <a
                            href={link.href}
                            className={isActive(link.href) ? "active" : ""}
                        >
                            {link.label}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
