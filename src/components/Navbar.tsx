import React from "react";
import { Link, useLocation } from 'react-router-dom';
import { themeStyles } from "../styles/theme";
import { sizes } from "../styles/size";
import SkeletonLoader from './SkeletonLoader';

interface NavbarProps {
  username: string;
}

const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

const Navbar: React.FC<NavbarProps> = ({ username }) => {
    const location = useLocation();
    
    // Check if the current path is active
    const isActive = (path: string): boolean => {
        return location.pathname === path;
    }

    if (!username) return <SkeletonLoader type="navbar" />;

    return (
        <div className={`flex ${sizes.navbarHeight} ${themeStyles.navbar.primary.backgroundColor} navbar justify-between items-center text-2xl sticky top-0 z-40`}>
            <Link 
                to="/" 
                onClick={scrollToTop}
                className={`${themeStyles.navbar.logo.base} ${sizes.textSm}`}>
                    <span className="font-bold">{username}</span>
                    <span className="font-extralight"> / portfolio</span>
            </Link> 
            <div className="flex gap-6">
                <Link 
                    to="/" 
                    onClick={scrollToTop}
                    className={`${themeStyles.navbar.primary.base} ${sizes.textSm} ${isActive('/') ? themeStyles.navbar.primary.activeUnderline : ''}`}>
                    Home
                </Link>
                <Link 
                    to="/projects"
                    onClick={scrollToTop}
                    className={`${themeStyles.navbar.primary.base} ${sizes.textSm} ${isActive('/projects') ? themeStyles.navbar.primary.activeUnderline : ''}`}>
                    Projects
                </Link>
                <Link to="/contact"
                    onClick={scrollToTop}
                    className={`${themeStyles.navbar.primary.base} ${sizes.textSm} ${isActive('/contact') ? themeStyles.navbar.primary.activeUnderline : ''}`}>
                    Contact
                </Link>
            </div>
        </div>
    );
}

export default Navbar;