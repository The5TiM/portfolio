import React, { useState } from "react";
import FadeContent from "./FadeContent";
import { sizes } from "../styles/size";
import { themeStyles } from "../styles/theme";

interface SkillsCardProps {
    skills: {
        [key: string]: CategoryData;
    };
}

interface SkillItem {
    icon: string;
    text: string;
    className: string;
    level?: number;
}

interface CategoryData {
    title: string;
    icon: string;
    items: SkillItem[];
}

const SkillsCard: React.FC<SkillsCardProps> = ({ skills }) => {
    const [activeCategory, setActiveCategory] = useState<string>(Object.keys(skills)[0]);
    const categories = Object.keys(skills);

    const handleCategoryChange = (category: string) => {
        setActiveCategory(category);
    };

    const renderSkillLevel = (level: number = 3) => {
        return (
            <div className="flex gap-1 mt-1">
                {[1, 2, 3, 4, 5].map((dot) => (
                    <div 
                        key={dot}
                        className={`w-1.5 h-1.5 rounded-full ${dot <= level ? 'bg-white' : 'bg-white/30'}`}
                    />
                ))}
            </div>
        );
    };

    return (
        <FadeContent blur={true} duration={1000} delay={500} easing="ease-out" initialOpacity={0}>
            <div className="flex flex-col gap-6 w-full max-w-6xl">
                {/* Category filter */}
                <div className="flex flex-wrap gap-3 justify-center mb-4">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => handleCategoryChange(category)}
                            className={`px-4 py-2 rounded-full text-sm transition-all duration-300 hover:cursor-pointer ${activeCategory === category 
                                ? themeStyles.button.primary 
                                : themeStyles.button.secondary}`}
                        >
                            <i className={`${skills[category].icon} mr-2`} />
                            {skills[category].title}
                        </button>
                    ))}
                </div>

                {/* Display skills of the selected category */}
                <div className={`${themeStyles.card} p-8 rounded-3xl backdrop-blur-md bg-opacity-70`}>
                    <h3 className={`${sizes.textMd} font-bold text-center mb-8`}>
                        <i className={`${skills[activeCategory].icon} mr-2`} />
                        {skills[activeCategory].title}
                    </h3>
                    
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
                        {skills[activeCategory].items.map((item) => (
                            <div 
                                key={item.text} 
                                className={`${item.className} ${themeStyles.icon} hover:scale-105 flex flex-col items-center justify-center p-4 rounded-2xl transition-all duration-300 text-center`}
                            >
                                <i className={`${item.icon} text-3xl mb-2`} />
                                <p className="text-sm font-medium">{item.text}</p>
                                {renderSkillLevel(item.level)}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </FadeContent>
    );
};

export default SkillsCard;