import React from "react";
import { Link, useLocation } from 'react-router-dom';
import { themeStyles } from "../styles/theme";
import { sizes } from "../styles/size";
import SkeletonLoader from './SkeletonLoader';

interface NavbarProps {
  username: string;
}

const Navbar: React.FC<NavbarProps> = ({ username }) => {
    const location = useLocation();
    
    // Check if the current path is active
    const isActive = (path: string): boolean => {
        return location.pathname === path;
    }

    if (!username) return <SkeletonLoader type="navbar" />;

    return (
        <div className={`flex ${sizes.navbarHeight} ${themeStyles.main} navbar justify-between items-center text-2xl sticky top-0 z-40`}>
            <Link 
                to="/" 
                className={`${themeStyles.navbarBtn.logo.base} ${sizes.textSm}`}>
                    <span className="font-bold">{username}</span>
                    <span className="font-extralight"> / portfolio</span>
            </Link> 
            <div className="flex gap-6">
                <Link to="/" className={`${themeStyles.navbarBtn.primary.base} ${sizes.textSm} ${isActive('/') ? themeStyles.navbarBtn.primary.activeUnderline : ''}`}>
                    Home
                </Link>
                <Link to="/projects" className={`${themeStyles.navbarBtn.primary.base} ${sizes.textSm} ${isActive('/projects') ? themeStyles.navbarBtn.primary.activeUnderline : ''}`}>
                    Projects
                </Link>
                <Link to="/contact" className={`${themeStyles.navbarBtn.primary.base} ${sizes.textSm} ${isActive('/contact') ? themeStyles.navbarBtn.primary.activeUnderline : ''}`}>
                    Contact
                </Link>
            </div>
        </div>
    );
}

export default Navbar;