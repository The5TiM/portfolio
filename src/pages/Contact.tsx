import React, { FormEvent, useRef, useState } from "react";
import FadeContent from "../components/FadeContent";
import { sizes } from "../styles/size";
import emailjs from '@emailjs/browser';
import SpotlightCard from "../components/SpotlightCard";
import { themeStyles } from "../styles/theme";
import GlowingText from "../components/GlowingText";
import { GithubData } from "../shared/github";
import { infos } from "../data/info";
import SkeletonLoader from "../components/SkeletonLoader";

interface ContactProps {
    githubData: GithubData | null;
    loading: boolean;
}


const Contact: React.FC<ContactProps> = ({ githubData, loading }) => {
    const form = useRef<HTMLFormElement>(null);
    const [error, setError] = useState<string>('');
    const [sendingEmail, setSendingEmail] = useState<boolean>(false);
    const [success, setSuccess] = useState<string>('');

    if (loading) {
        return <SkeletonLoader type="profile" />;
    }

    function sendEmail(event: FormEvent<HTMLFormElement>): void {
        event.preventDefault();
        setSendingEmail(true);

        if (form.current) {
            emailjs.sendForm(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                form.current,
                {
                    publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY
                }
            )
            .then(() => {
                form.current!.reset();
                setSendingEmail(false);
                setSuccess('Email sent successfully!');
                setError('');
            }, (error) => {
                setError('An error occurred while sending the email. Please try again later.');
                console.error('Error sending email:', error);
            });
        }
    }

    return (
        <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
            <div className={`${sizes.pageHeight} flex flex-col items-center justify-center px-4`}>
                <h2 className={`${sizes.textXl} font-bold text-center mb-6`}>Get In Touch</h2>
                <SpotlightCard className="w-full max-w-md">
                    {githubData?.hireable && (
                        <div className="flex items-center justify-center gap-2 mb-4">
                            <span className="relative flex h-3 w-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                            </span>
                            <span className="text-green-500">Available for hire</span>
                        </div>
                    )}
                    <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-6">
             
                        <div className="flex flex-col gap-2">
                            <label htmlFor="name" className={`${themeStyles.contact.label}`}>Name</label>
                            <input 
                                type="text" 
                                id="name"
                                name="name"
                                placeholder="Your name" 
                                className={`${themeStyles.contact.input}`}
                                required
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label htmlFor="email" className={`${themeStyles.contact.label}`}>Email</label>
                            <input 
                                type="email" 
                                id="email"
                                name="email"
                                placeholder="Your email address" 
                                className={`${themeStyles.contact.input}`}
                                required
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label htmlFor="subject" className={`${themeStyles.contact.label}`}>Subject</label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                placeholder="Subject"
                                className={`${themeStyles.contact.input}`}
                                required
                            />
                        </div>
                        
                        <div className="flex flex-col gap-2">
                            <label htmlFor="message" className={`${themeStyles.contact.label}`}>Message</label>
                            <textarea 
                                id="message"
                                name="message"
                                placeholder="Your message" 
                                rows={5}
                                className={`${themeStyles.contact.input} resize-none`} 
                                required
                            />
                        </div>

                        {error && <p className="text-red-500">{error}</p>}
                        {success && <p className="text-green-500">{success}</p>}
                        
                        <button 
                            type="submit" 
                            className={`${themeStyles.contact.button} mt-2`}
                        >
                            <GlowingText text="Send Message" isStatic={!sendingEmail} animationTime={2} />
                        </button>
                        
                    </form>
                    <div className="flex gap-4 justify-center mt-10 animate-pulse">
                        {infos.socialMedia.map((s) => (
                            <a key={s.url} href={s.url} target="_blank" rel="noopener noreferrer"
                               className={`${s.color}`}>
                                <i className={s.icon}></i>
                            </a>
                        ))}
                    </div>
                </SpotlightCard>
            </div>
        </FadeContent>
    )

}

export default Contact;