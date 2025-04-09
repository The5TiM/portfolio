import React from "react";
import SpotlightCard from "./SpotlightCard";
import FadeContent from "./FadeContent";

interface InfoCardProps {

}

class InfoCard extends React.Component<InfoCardProps> {
  render() {    
    return (
        <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
            <SpotlightCard spotlightColor="rgba(37, 99, 235, 1)">
            </SpotlightCard>
        </FadeContent>
    );
  }
}

export default InfoCard;
