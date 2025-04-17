import React from "react";
import BlurText from "../components/BlurText";
import TypingText from "../components/TypingText";
import { themeStyles } from "../styles/theme";
import { sizes } from "../styles/size";
import { infos } from "../data/info";
import FadeContent from "../components/FadeContent";
import SkeletonLoader from "../components/SkeletonLoader";
import { Link } from "react-router-dom";
import ScrollReveal from "../components/ScrollReveal";
import ScrollFloat from "../components/ScrollFloat";
import SkillsCard from "../components/SkillsCard";
import { GithubData } from "../shared/github";
import ScrollVelocity from "../components/ScrollVelocity";
import CertificateCard from "../components/CertificateCard";

interface HomeProps {
  githubData: GithubData | null;
  loading: boolean;
}

const Home: React.FC<HomeProps> = ({ githubData, loading }) => {
  if (loading) {
    return <SkeletonLoader type="profile" />;
  }

  return (
        <>
            <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
                <div className={`${sizes.pageHeight} flex flex-col items-center justify-center`}>
                    <div className="flex items-center flex-col-reverse md:flex-row w-full max-w-5xl gap-6">
                        <div className="flex flex-col gap-4 p-4 flex-1">
                            <p className={`${sizes.textSm} text-center md:text-start font-bold`}>Hi, I'm</p>
                            <BlurText 
                                className={`${sizes.text2Xl} flex justify-center md:justify-start font-bold`} 
                                text={githubData?.name} />
                            <TypingText 
                                className={`${sizes.textMd} ${themeStyles.text.secondary} ${themeStyles.textShadow} text-center md:text-start font-bold`} 
                                text={infos.expertise} 
                                delay={2000} 
                                typingSpeed={200}/> 

                            <div className={`${sizes.textSm} flex justify-center md:justify-start gap-4 mt-12`}>
                                <Link to="/projects" className={`flex gap-2 ${themeStyles.button.primary} ${sizes.textXxs} `}>
                                    <i className="fa-solid fa-arrow-right"></i> Projects
                                </Link>
                                {githubData?.hireable && 
                                    <a href={`mailto:${infos.email}`} className={`flex gap-2 ${themeStyles.button.secondary} ${sizes.textXxs}`}>
                                        <i className="fa-solid fa-envelope"></i> Hire Me
                                    </a>
                                }
                            </div>
                        </div>
                        <div className="flex-1 flex justify-center">
                            <img
                                src={githubData?.avatar_url}
                                alt={`${githubData?.name}'s avatar`}
                                className={`w-48 md:w-72 lg:w-96 rounded-full ${themeStyles.border} ${themeStyles.hover}`}
                            />
                        </div>
                    </div>
                </div>
            </FadeContent>
            <div className={`${sizes.pageHeight} flex items-center justify-center`}>
                    <ScrollFloat
                        animationDuration={1}
                        ease='back.inOut(2)'
                        scrollStart='center bottom+=50%'
                        scrollEnd='bottom bottom-=40%'
                        stagger={0.03}
                        textClassName="font-bold !text-[clamp(3.2rem,8vw,6rem)]"
                    >
                        About Me
                    </ScrollFloat>
            </div>
            <div className={`${sizes.pageHeight} flex items-center justify-center`}>
                <div className="w-xs md:w-xl lg:w-2xl">
                    <ScrollReveal 
                        baseOpacity={0} 
                        enableBlur={true} 
                        blurStrength={15} 
                        textClassName="text-center"
                    >
                        {`${githubData?.bio || ''} 
                            ${githubData?.location ? `Currently living in ${githubData?.location}.` : ''} 
                            ${githubData?.company? `Working at ${githubData?.company}.` : ''}`}

                    </ScrollReveal>
                </div>
            </div>
            <div className={`${sizes.pageHeight} flex items-center justify-center`}>
                <ScrollFloat
                    animationDuration={1}
                    ease='back.inOut(2)'
                    scrollStart='center bottom+=50%'
                    scrollEnd='bottom bottom-=40%'
                    stagger={0.03}
                    textClassName="font-bold !text-[clamp(3.2rem,8vw,6rem)]"
                >
                    Skills
                </ScrollFloat>
            </div>
            <div className={`${sizes.pageHeight} flex items-center justify-center`}>
                <ScrollVelocity
                    texts={infos.knowledge} 
                    velocity={100} 
                />
            </div>
            <div className={`${sizes.pageHeight} flex items-center justify-center p-4 md:p-8 lg:p-20`}>
                <SkillsCard skills={infos.skills} />
            </div>
            <div className={`${sizes.pageHeight} flex items-center justify-center`}>
                <ScrollFloat
                    animationDuration={1}
                    ease='back.inOut(2)'
                    scrollStart='center bottom+=50%'
                    scrollEnd='bottom bottom-=40%'
                    stagger={0.03}
                    textClassName="font-bold !text-[clamp(3.2rem,8vw,6rem)]"
                >
                    Certificates
                </ScrollFloat>
            </div>
            <div className={`${sizes.pageHeight} flex items-center justify-center`}>
                <CertificateCard certificates={infos.certifications || []} />
            </div>
        </>
    );
};

export default Home;