import React from "react";
import { Link, useLocation } from 'react-router-dom';
import { themeStyles } from "../styles/theme";
import { sizes } from "../styles/size";

interface NavbarProps {
  username: string;
}

const Navbar: React.FC<NavbarProps> = ({ username }) => {
    const location = useLocation();
    
    // Check if the current path is active
    const isActive = (path: string): boolean => {
        return location.pathname === path;
    }

    const logo = username 
        ? <Link 
            to="/" 
            className={`${themeStyles.navbarBtn.logo.base}`}>
                <span className="font-bold">{username}</span>
                <span className="font-extralight"> / portfolio</span>
        </Link> 
        : <div className="animate-pulse">
            <div className="flex items-center gap-2">
                <span 
                    className="h-2.5 
                    bg-gray-300 rounded-full 
                    dark:bg-gray-600 
                    w-24">
                </span>
                <span>/</span>
                <span 
                    className="h-2.5 
                    bg-gray-300 
                    rounded-full 
                    dark:bg-gray-600 w-24">
                </span>
            </div>
        </div>;
    
    return (
        <div className={`flex ${sizes.navbarHeight} ${themeStyles.main} justify-between items-center text-2xl sticky top-0 z-40`}>
            {logo}
            <div className="flex gap-6">
                <Link to="/" className={`${themeStyles.navbarBtn.primary.base} ${isActive('/') ? themeStyles.navbarBtn.primary.activeUnterline : ''}`}>
                    Home
                </Link>
                <Link to="/projects" className={`${themeStyles.navbarBtn.primary.base} ${isActive('/projects') ? themeStyles.navbarBtn.primary.activeUnterline : ''}`}>
                    Projects
                </Link>
                <Link to="/contact" className={`${themeStyles.navbarBtn.primary.base} ${isActive('/contact') ? themeStyles.navbarBtn.primary.activeUnterline : ''}`}>
                    Contact
                </Link>
            </div>
        </div>
    );
}

export default Navbar;