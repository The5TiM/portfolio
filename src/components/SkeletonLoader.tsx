import React from 'react';
import { themeStyles } from '../styles/theme';
import { sizes } from '../styles/size';

interface SkeletonLoaderProps {
  type?: 'profile' | 'navbar';
}

const SkeletonLoader: React.FC<SkeletonLoaderProps> = ({ type = 'profile' }) => {
  if (type === 'profile') {
    return (
        <div className={`flex items-center justify-center ${sizes.pageHeight}`}>
          <div className="flex items-center flex-col-reverse md:flex-row w-full max-w-5xl gap-6">
            {/* Left side content */}
            <div className="flex flex-col items-center md:items-baseline gap-4 p-4 flex-1">
              {/* Hi, I'm text */}
              <div className={`${themeStyles.skeleton.primary} h-6 rounded-md w-16 animate-pulse`}></div>
              
              {/* Name */}
              <div className={`${themeStyles.skeleton.primary} h-10 rounded-md w-48 md:w-64 animate-pulse`}></div>
              
              {/* Skills text */}
              <div className={`${themeStyles.skeleton.secondary} h-8 rounded-md w-64 md:w-80 animate-pulse`}></div>
              
              {/* Buttons */}
              <div className={`flex gap-4 mt-12`}>
                <div className={`${themeStyles.skeleton.primary} h-10 w-32 rounded-full animate-pulse`}></div>
                <div className={`${themeStyles.skeleton.primary} h-10 w-32 rounded-full animate-pulse`}></div>
              </div>
            </div>
            
            {/* Right side - Avatar */}
            <div className="flex-1 flex justify-center">
              <div className={`${themeStyles.skeleton.primary} w-48 md:w-72 lg:w-96 h-48 md:h-72 lg:h-96 rounded-full animate-pulse flex items-center justify-center`}>
                <svg className={`${themeStyles.skeleton.tertiary} w-12 h-12`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                  <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
    );
  }
  
  if (type === 'navbar') {
    return (
      <div className={`flex ${sizes.navbarHeight} ${themeStyles.main} container mx-auto justify-between items-center text-2xl sticky top-0 z-40`}>
        <div className="animate-pulse">
            {/* Logo */}
            <div className="flex items-center gap-2">
                <span className={`${themeStyles.skeleton.primary} h-6 rounded-full w-24`}></span>
                <span>/</span>
                <span className={`${themeStyles.skeleton.primary} h-6 rounded-full w-24`}></span>
            </div>
        </div>
        {/* Menu */}
        <div className="flex gap-6">
            <div className={`${themeStyles.skeleton.primary} h-6 rounded-full w-16 hidden md:block`}></div>
            <div className={`${themeStyles.skeleton.primary} h-6 rounded-full w-16`}></div>
        </div>
      </div>
    );
  }
  
  // For future custom skeleton types
  return null;
};

export default SkeletonLoader;