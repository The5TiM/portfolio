import React from 'react';
import SpotlightCard from './SpotlightCard';
import { themeStyles } from '../styles/theme';

interface ProjectCardProps {
    title: string;
    description: string;
    image?: string;
    githubLink?: string;
    toolsAndTechnologies?: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({
    title,
    description,
    image,
    githubLink,
    toolsAndTechnologies
}) => {
    return (
        <SpotlightCard 
            className={themeStyles.projects.cardWrapper}
            spotlightColor="rgba(59, 130, 246, 0.25)"
        >
            <div className="md:w-1/3 overflow-hidden rounded-xl relative">
                {image && (
                    <div className={`overflow-hidden rounded-xl relative h-48 transition-all duration-500`}>
                        <img 
                            src={image} 
                            alt={title} 
                            loading="lazy"
                            className={`w-full h-full object-cover rounded-xl transition-all duration-700 group-hover:scale-110`}
                        />
                        <div className={`${themeStyles.projects.imageOverlay}`}></div>
                    </div>
                )}
            </div>
            <div className="md:w-2/3 flex flex-col gap-3">
                <h3 className={themeStyles.projects.title}>
                    {title}
                    {githubLink && (
                        <a 
                            href={githubLink} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className={themeStyles.projects.githubLink}
                        >
                            <i className="fa-brands fa-github text-xl"></i>
                        </a>
                    )}
                </h3>
                <p className={themeStyles.projects.description}>{description}</p>
                
                {toolsAndTechnologies && toolsAndTechnologies.length > 0 && (
                    <div className="mt-2">
                        <h4 className={themeStyles.projects.techTitle}>Technologies:</h4>
                        <div className="flex flex-wrap gap-2">
                            {toolsAndTechnologies.map((tech) => (
                                <span 
                                    key={tech}
                                    className={themeStyles.projects.technologyTag}
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </SpotlightCard>
    );
};

export default ProjectCard;