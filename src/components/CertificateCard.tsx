import React from 'react';
import FadeContent from './FadeContent';
import { themeStyles } from '../styles/theme';

interface CertificateCardProps {
    certificates: CategoryData[];
}

interface CategoryData {
    icon: string;
    title: string;
    institution: string;
    date: string;
    className: string;
    link: string;
    downloadLink: string;
}

const CertificateCard: React.FC<CertificateCardProps> = ({ certificates }) => {

    return (
        <FadeContent blur={true} duration={1000} delay={500} easing="ease-out" initialOpacity={0}>
            <div className={`${themeStyles.card} m-8 rounded-3xl backdrop-blur-md bg-opacity-70 max-w-6xl`}>
                <div className='mdi mdi-certificate text-9xl text-center opacity-25 mb-8'></div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
                    {Object.values(certificates).map(certificate => (
                        <div 
                            key={certificate.title} 
                            className={`${certificate.className} ${themeStyles.icon} hover:scale-105 flex flex-col items-center justify-center p-4 rounded-2xl transition-all duration-300 text-center cursor-pointer`}
                            onClick={() => {
                                if (certificate.downloadLink) {
                                    const link = document.createElement('a');
                                    link.href = certificate.downloadLink;
                                    link.download = certificate.title;
                                    document.body.appendChild(link);
                                    link.click();
                                    document.body.removeChild(link);
                                } else if (certificate.link) {
                                    window.open(certificate.link, '_blank');
                                }
                            }}
                        >
                            <i className={`${certificate.icon} text-3xl mb-2`} />
                            <p className="text-sm font-medium">{certificate.title}</p>
                            <p className="text-sm font-medium">{certificate.institution}</p>
                            <p className="text-sm font-medium">Issued: {certificate.date}</p>
                        </div>
                    ))}
                </div>
            </div>

        </FadeContent>
    );
};

export default CertificateCard;