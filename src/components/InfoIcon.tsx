import React from "react";
import { themeStyles } from "../styles/theme";
import { sizes } from "../styles/size";

interface InfoIconProps {
    text?: string;
    iconClass?: string;
    className?: string;
}

class InfoIcon extends React.Component<InfoIconProps> {
    constructor(props: InfoIconProps) {
        super(props); 
    }

    render() {
        const { text, iconClass, className } = this.props;

        return (
            <div className={`${className} ${themeStyles.icon} ${sizes.only2XL} hover:scale-110`}>
                <p><i className={`${iconClass}`} /> {text}</p>
            </div>
        );
    }

}

export default InfoIcon;
