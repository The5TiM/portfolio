// Copyright © 2025 Juwan Jouma. All rights reserved.

import React from "react";
import { Link } from "react-router-dom";
import { sizes } from "../styles/size";
import { themeStyles } from "../styles/theme";
import { infos } from "../data/info";

interface FooterProps {
    name?: string;
}

const Footer: React.FC<FooterProps> = ({ name }) => {
    const currentYear = new Date().getFullYear();

    const footerText = (
        <>&copy; <span>{currentYear === 2025 ? '2025' : `2025-${currentYear}`} Juwan Jouma. All rights reserved.</span></>
    );

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    if(!name) return <></>; 

    return (
        <footer className={`${themeStyles.main} ${sizes.footerHeight} ${themeStyles.footer.borderTop} py-8`}>
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    {/* Logo and Copyright */}
                    <div className="text-center md:text-left">
                        <Link to="/" onClick={scrollToTop} className={themeStyles.footer.primary}>
                            {name}
                        </Link>
                        <p className="text-zinc-400 text-sm mt-2">{footerText}</p>
                    </div>

                    {/* Navigation Links */}
                    <div className="flex flex-wrap justify-center gap-6">
                        <Link to="/" onClick={scrollToTop} className={themeStyles.footer.secondary}>
                            Home
                        </Link>
                        <Link to="/projects" onClick={scrollToTop} className={themeStyles.footer.secondary}>
                            Projects
                        </Link>
                        <Link to="/contact" onClick={scrollToTop} className={themeStyles.footer.secondary}>
                            Contact
                        </Link>
                    </div>

                    {/* Social Icons */}
                    <div className="flex gap-4">
                        {infos.socialMedia.map((s) => (
                            <a href={s.url} target="_blank" rel="noopener noreferrer"
                               className={`${s.color}`}>
                                <i className={s.icon}></i>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;