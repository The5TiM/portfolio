// Copyright © 2025 Juwan Jouma. All rights reserved.

import React from "react";
import { Link } from "react-router-dom";
import { sizes } from "../styles/size";
import { themeStyles } from "../styles/theme";
import { infos } from "../data/info";
import { GithubData } from "../shared/github";

interface FooterProps {
    githubData: GithubData | null;
}

const Footer: React.FC<FooterProps> = ({ githubData }) => {
    const currentYear = new Date().getFullYear();

    const footerText = (
        <>&copy; <span>{currentYear === 2025 ? '2025' : `2025-${currentYear}`} Juwan Jouma. All rights reserved.</span></>
    );

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    if(!githubData) return <></>; 

    return (
        <footer className={`${themeStyles.main} ${sizes.footerHeight} ${themeStyles.footer.borderTop} py-8 mt-8 z-40`}>
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 place-items-center">
                    {/* Logo and Copyright */}
                    <div className="text-center md:text-left">
                        <div className="flex items-center gap-4 md:justify-start justify-center">
                            <Link to="/" onClick={scrollToTop} className={themeStyles.footer.primary}>
                                {githubData.name}
                            </Link>
                        </div>
                        <p className="text-zinc-400 text-sm mt-2">{footerText}</p>
                    </div>

                    <div className="flex gap-4">
                        <div className="flex items-center gap-1 text-zinc-400 text-sm">
                            <i className="fas fa-users"></i>
                            <span>{githubData.followers}</span>
                        </div>
                        <div className="flex items-center gap-1 text-zinc-400 text-sm">
                            <i className="fas fa-code-branch"></i>
                            <span>{githubData.public_repos}</span>
                        </div>
                    </div>

                    {/* Social Icons */}
                    <div className="flex gap-4">
                        {infos.socialMedia.map((s) => (
                            <a key={s.name} href={s.url} target="_blank" rel="noopener noreferrer"
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