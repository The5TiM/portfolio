import React from "react";
import BlurText from "../components/BlurText";
import TypingText from "../components/TypingText";
import { themeStyles } from "../styles/theme";
import { sizes } from "../styles/size";
import { infos } from "../data/info";
import FadeContent from "../components/FadeContent";
import SkeletonLoader from "../components/SkeletonLoader";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight,faEnvelope } from '@fortawesome/free-solid-svg-icons';
import ScrollReveal from "../components/ScrollReveal";
// import { faGithub } from '@fortawesome/free-brands-svg-icons';


interface GithubData {
    login: string;
    id: number;
    node_id: string;
    avatar_url: string;
    gravatar_id: string;
    url: string;
    html_url: string;
    followers_url: string;
    following_url: string;
    gists_url: string;
    starred_url: string;
    subscriptions_url: string;
    organizations_url: string;
    repos_url: string;
    events_url: string;
    received_events_url: string;
    type: string;
    site_admin: boolean;
    name: string;
    company: string;
    blog: string;
    location: string;
    email: string;
    hireable: boolean;
    bio: string;
    twitter_username: string;
    public_repos: number;
    public_gists: number;
    followers: number;
    following: number;
    created_at: string;
    updated_at: string;
  }

interface HomeProps {
  githubData: GithubData | null;
  loading: boolean;
}

class Home extends React.Component<HomeProps> {

  constructor(props: HomeProps) {
    super(props); 
  }


  render() {
    const { githubData, loading } = this.props;

    if (loading) {
      return <SkeletonLoader type="profile" />;
    }

    return (
        <>
            <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
                <div className={`flex items-center justify-center ${sizes.pageHeight}`}>
                    <div className="flex items-center flex-col-reverse md:flex-row w-full max-w-5xl gap-6">
                        <div className="flex flex-col gap-4 p-4 flex-1">
                            <p className={`${sizes.textSm} text-center md:text-start font-bold`}>Hi, I'm</p>
                            <BlurText 
                                className={`${sizes.text2Xl} flex justify-center md:justify-start font-bold`} 
                                text={githubData?.name} />
                            <TypingText 
                                className={`${sizes.textMd} ${themeStyles.text.secondary} ${themeStyles.textShadow} text-center md:text-start font-bold`} 
                                text={infos.skills} 
                                delay={2000} 
                                typingSpeed={200}/> 

                            <div className={`${sizes.textSm} flex justify-center md:justify-start gap-4 mt-12`}>
                                <Link to="/projects" className={`flex gap-2 ${themeStyles.button.primary} ${sizes.textXxs} `}>
                                    <FontAwesomeIcon icon={faArrowRight} /> View Projects
                                </Link>
                                {githubData?.hireable && 
                                    <a href={infos.email} className={`flex gap-2 ${themeStyles.button.secondary} ${sizes.textXxs}`}>
                                        <FontAwesomeIcon icon={faEnvelope} /> Hire Me
                                    </a>
                                }
                                {/* <a href={githubData?.repos_url} className={`flex gap-2 ${themeStyles.button.secondary} ${sizes.textXxs}`}>
                                    <FontAwesomeIcon icon={faGithub} /> Public Repos: {githubData?.public_repos}
                                </a> */}
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
            <div className={`flex items-center justify-center ${sizes.pageHeight}`}>
                <div className="w-xs md:w-xl">
                    <ScrollReveal baseOpacity={0} enableBlur={true} blurStrength={15} >{githubData?.bio}</ScrollReveal>
                </div>
            </div>
        </>
    );

  }
}

export default Home;