import React from 'react';

interface GlowingTextProps {
    text: string;
    isStatic?: boolean;
    animationTime?: number;
    className?: string;
}

const GlowingText: React.FC<GlowingTextProps> = ({ 
    text, 
    isStatic = false, 
    animationTime = 5, 
    className = '' 
}) => {
    const duration = `${animationTime}s`;

    const backgroundImage = isStatic ? 'none' : 'linear-gradient(120deg, rgba(255, 255, 255, 0) 35%, rgba(255, 255, 255, 0.85) 50%, rgba(255, 255, 255, 0) 65%)';
    
    return (
        <div
            className={`text-[#b5b5b5a4] bg-clip-text inline-block ${isStatic ? '' : 'animate-shine'} ${className}`}
            style={{
                backgroundImage: backgroundImage,
                backgroundSize: '200% 100%',
                WebkitBackgroundClip: 'text',
                animationDuration: duration,
            }}
        >
            {text}
        </div>
    );
};

export default GlowingText;
