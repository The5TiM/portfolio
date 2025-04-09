import React from "react";
import FadeContent from "./FadeContent";
import InfoIcon from "./InfoIcon";
import { sizes } from "../styles/size";
import { themeStyles } from "../styles/theme";

interface InfoCardProps {
    skills: {
        [key: string]: CategoryData;
    };
}

interface SkillItem {
    icon: string;
    text: string;
    className: string;
}

interface CategoryData {
    title: string;
    icon: string;
    items: SkillItem[];
}

class InfoCard extends React.Component<InfoCardProps> {
  render() {   
    const Icons = Object.values(this.props.skills).map((category: CategoryData) => (
        <div key={category.title} className={`${themeStyles.card} flex flex-wrap flex-col gap-4 items-center justify-start w-full md:w-[55%] lg:w-[40%] h-fit min-h-[600px]`}>
            <p className={`${sizes.only2XL} font-bold`}><i className={`${category.icon}`} /> {category.title}</p>
            <div className="flex flex-wrap gap-6 items-center justify-center">
                {category.items.map((item) => (
                    <InfoIcon 
                        key={item.text} 
                        className={item.className} 
                        iconClass={item.icon} 
                        text={item.text} 
                    />
                ))}
            </div>
        </div>
    ));
    return (
        <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
            <div className="flex flex-wrap gap-12 items-stretch justify-center">
                {Icons}
            </div>
        </FadeContent>
    );
  }
}

export default InfoCard;
