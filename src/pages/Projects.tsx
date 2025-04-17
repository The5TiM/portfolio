import React from "react";
import { sizes } from "../styles/size";
import FadeContent from "../components/FadeContent";
import { infos } from "../data/info";
import ProjectCard from "../components/ProjectCard";
import SpotlightCard from "../components/SpotlightCard";
import { themeStyles } from "../styles/theme";
import SkeletonLoader from "../components/SkeletonLoader";

interface ProjectProps {
   loading: boolean;
}

const Projects: React.FC<ProjectProps> = ({ loading }) => {
    if (loading) {
        return <SkeletonLoader type="profile" />;
    }
    
    return (
        <>
            <div className="relative">
                <div className={`${sizes.pageHeight} flex flex-col items-center justify-center gap-16 py-16 px-4 relative z-10`}>
                    <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
                        <div className="text-center">
                            <h1 className="text-6xl font-bold mb-4 text-center relative inline-block">
                                <span className="relative z-10">Projects</span>
                                <span className={themeStyles.projects.projectUnderline}></span>
                                <span className={themeStyles.projects.projectUnderlineGlow}></span>
                            </h1>
                            <p className="text-zinc-400 max-w-2xl mx-auto mt-4">Explore my portfolio of projects across different domains</p>
                        </div>
                    </FadeContent>
                    
                    <div className="w-full max-w-6xl grid grid-cols-1 gap-16">
                        {
                            Object.values(infos.projectCategories).map((category) => {
                                return (
                                    <FadeContent key={category.title} blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
                                        <SpotlightCard key={category.title}>
                                            <div className="mb-8">
                                                <h2 className={`${sizes.textLg} font-bold text-center mb-2 flex items-center justify-center gap-3`}>
                                                    <i className={`${category.icon} ${themeStyles.projects.categoryIcon}`}></i>
                                                    <span>{category.title}</span>
                                                </h2>
                                                <div className={themeStyles.projects.categoryDivider}></div>
                                                <div className={themeStyles.projects.categoryDividerGlow}></div>
                                            </div>
                                            
                                            <div className="grid grid-cols-1 gap-8">
                                                {
                                                    category.projects.map((project) => (
                                                        <ProjectCard 
                                                            key={project.title}
                                                            title={project.title}
                                                            description={project.description}
                                                            image={project.image}
                                                            githubLink={project.githubLink}
                                                            toolsAndTechnologies={project.toolsAndTechnologies}
                                                        />
                                                    ))
                                                }
                                            </div>
                                        </SpotlightCard>
                                    </FadeContent>
                                );
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    );
}

export default Projects;