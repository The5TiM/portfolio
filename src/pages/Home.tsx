import React from "react";
import BlurText from "../components/BlurText";
import TypingText from "../components/TypingText";
import { themeStyles } from "../styles/theme";
import { sizes } from "../styles/size";
import { infos } from "../data/info";
import FadeContent from "../components/FadeContent";
import { Link } from "react-router-dom";

interface GithubData {
  login: string;
  avatar_url: string;
  name: string;
  bio: string;
  followers: number;
  following: number;
  public_repos: number;
  hireable: boolean;
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
      return <div>Loading...</div>;
    }

    return (
        <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
            <div className={`flex items-center justify-center ${sizes.pageHeight}`}>
                <div className="flex items-center w-full max-w-5xl gap-6">
                    <div className="flex flex-col gap-4 p-4 flex-1">
                        <p className={`${sizes.textSm} font-bold`}>Hi, I'm</p>
                        <BlurText 
                            className={`${sizes.text2Xl} font-bold`} 
                            text={githubData?.name} />
                        <TypingText 
                            className={`${sizes.textMd} ${themeStyles.text.secondary} ${themeStyles.textShadow} font-bold`} 
                            text={infos.skills} 
                            delay={2000} 
                            typingSpeed={200}/> 

                        <div className={`${sizes.textSm} flex gap-4 mt-12`}>
                            <Link to="/projects" className={`${themeStyles.button.primary} ${sizes.textXxs}`}>View Projects</Link>
                            {githubData?.hireable && 
                                <Link to="/contact" className={`${themeStyles.button.secondary} ${sizes.textXxs}`}>Hire Me</Link> 
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
    );

  }
}

export default Home;