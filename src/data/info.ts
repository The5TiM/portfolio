export enum SkillCategory {
    Languages = 'Languages',
    FrameworksAndLibraries = 'Frameworks & Libraries',
    ToolsAndTechnologies = 'Tools & Technologies',
    GameAnd3DDevelopment = 'Game & 3D Development',
    DesignAndMedia = 'Design & Media'
}

export const infos = {
    githubId: 144624787,
    email: 'mailto:juwan.jouma@gmail.com',
    expertise: [
        'Software Developer',
        'Game Developer',
        'Responsive Web Designer',
        'Frontend Developer',
        'Backend Developer',
        'Fullstack Developer',
        'API Developer',
        '3D Modeling',
    ],
    knowledge: [
        'Software and Game Development',
        'Object-Oriented Programming',
        'Responsive Web Design',
        'Data Structures and Algorithms',
    ],
    socialMedia: [
        {
            name: 'GitHub',
            url: 'https://github.com/The5TiM',
            icon: 'fa-brands fa-github',
            color: 'text-zinc-400 hover:text-white hover:scale-110 transition-all duration-300'
        },
        {
            name: 'LinkedIn',
            url: 'https://www.linkedin.com/in/juwan-jouma-2074b3305/',
            icon: 'fa-brands fa-linkedin-in',
            color: 'text-zinc-400 hover:text-blue-500 hover:scale-110 transition-all duration-300'
        },
        {
            name: 'Email',
            url: 'mailto:juwan.jouma@gmail.com',
            icon: 'mdi mdi-email-outline',
            color: 'text-zinc-400 hover:text-green-400 hover:scale-110 transition-all duration-300'
        }
    ],
    skills: {
        [SkillCategory.Languages]: {
            title: 'Languages',
            icon: 'mdi mdi-code-braces',
            items: [
                {
                    icon: 'devicon-html5-plain',
                    text: 'HTML',
                    className: 'bg-orange-600 hover:bg-orange-700 shadow-orange-500/50 hover:shadow-xl text-orange-300',
                    level: 5
                },
                {
                    icon: 'devicon-css3-plain',
                    text: 'CSS',
                    className: 'bg-blue-600 hover:bg-blue-700 shadow-blue-500/50 hover:shadow-xl text-blue-300',
                    level: 5
                },
                {
                    icon: 'devicon-javascript-plain',
                    text: 'JavaScript',
                    className: 'bg-yellow-600 hover:bg-yellow-700 shadow-yellow-500/50 hover:shadow-xl text-yellow-300',
                    level: 5
                },
                {
                    icon: 'devicon-typescript-plain',
                    text: 'TypeScript',
                    className: 'bg-blue-500 hover:bg-blue-600 shadow-blue-400/50 hover:shadow-xl text-blue-200',
                    level: 4
                },
                {
                    icon: 'devicon-csharp-plain',
                    text: 'C Sharp',
                    className: 'bg-purple-600 hover:bg-purple-700 shadow-purple-500/50 hover:shadow-xl text-purple-300',
                    level: 5
                },
                {
                    icon: 'devicon-php-plain',
                    text: 'PHP',
                    className: 'bg-indigo-600 hover:bg-indigo-700 shadow-indigo-500/50 hover:shadow-xl text-indigo-300',
                    level: 4
                },
                {
                    icon: 'devicon-azuresqldatabase-plain',
                    text: 'SQL',
                    className: 'bg-sky-600 hover:bg-sky-700 shadow-sky-500/50 hover:shadow-xl text-sky-300',
                    level: 5
                },
                {
                    icon: 'mdi mdi-database',
                    text: 'PL/SQL',
                    className: 'bg-emerald-600 hover:bg-emerald-700 shadow-emerald-500/50 hover:shadow-xl text-emerald-300',
                    level: 4
                },
                {
                    icon: 'devicon-python-plain',
                    text: 'Python',
                    className: 'bg-yellow-500 hover:bg-yellow-600 shadow-yellow-400/50 hover:shadow-xl text-yellow-200',
                    level: 3
                },
                {
                    icon: 'devicon-bash-plain',
                    text: 'Bash',
                    className: 'bg-gray-600 hover:bg-gray-700 shadow-gray-500/50 hover:shadow-xl text-gray-300',
                    level: 3
                },
            ]
        },
        [SkillCategory.FrameworksAndLibraries]: {
            title: 'Frameworks & Libraries',
            icon: 'mdi mdi-package-variant-closed',
            items: [
                {
                    icon: 'mdi mdi-dot-net',
                    text: '.NET Framework',
                    className: 'bg-purple-600 hover:bg-purple-700 shadow-purple-500/50 hover:shadow-xl text-purple-300',
                    level: 5
                },
                {
                    icon: 'mdi mdi-database-outline',
                    text: 'Entity Framework',
                    className: 'bg-blue-600 hover:bg-blue-700 shadow-blue-500/50 hover:shadow-xl text-blue-300',
                    level: 4
                },
                {
                    icon: 'devicon-dot-net-plain',
                    text: 'WPF',
                    className: 'bg-indigo-600 hover:bg-indigo-700 shadow-indigo-500/50 hover:shadow-xl text-indigo-300',
                    level: 5
                },
                {
                    icon: 'devicon-react-original',
                    text: 'React.js',
                    className: 'bg-cyan-600 hover:bg-cyan-700 shadow-cyan-500/50 hover:shadow-xl text-cyan-300',
                    level: 4
                },
                {
                    icon: 'devicon-redux-original',
                    text: 'Redux.js',
                    className: 'bg-purple-600 hover:bg-purple-700 shadow-purple-500/50 hover:shadow-xl text-purple-300',
                    level: 3
                },
                {
                    icon: 'devicon-blazor-original',
                    text: 'Blazor',
                    className: 'bg-blue-600 hover:bg-blue-700 shadow-blue-500/50 hover:shadow-xl text-blue-300',
                    level: 4
                },
                {
                    icon: 'devicon-bootstrap-plain',
                    text: 'Bootstrap',
                    className: 'bg-purple-600 hover:bg-purple-700 shadow-purple-500/50 hover:shadow-xl text-purple-300',
                    level: 5
                },
                {
                    icon: 'devicon-tailwindcss-original',
                    text: 'Tailwind CSS',
                    className: 'bg-cyan-600 hover:bg-cyan-700 shadow-cyan-500/50 hover:shadow-xl text-cyan-300',
                    level: 4
                },
                {
                    icon: 'devicon-jquery-plain',
                    text: 'jQuery',
                    className: 'bg-blue-600 hover:bg-blue-700 shadow-blue-500/50 hover:shadow-xl text-blue-300',
                    level: 4
                },
                {
                    icon: 'devicon-sass-original',
                    text: 'SASS',
                    className: 'bg-pink-600 hover:bg-pink-700 shadow-pink-500/50 hover:shadow-xl text-pink-300',
                    level: 4
                }
            ]
        },
        [SkillCategory.ToolsAndTechnologies]: {
            title: 'Tools & Technologies',
            icon: 'mdi mdi-tools',
            items: [
                {
                    icon: 'devicon-vscode-plain',
                    text: 'Visual Studio Code',
                    className: 'bg-blue-600 hover:bg-blue-700 shadow-blue-500/50 hover:shadow-xl text-blue-300',
                    level: 5
                },
                {
                    icon: 'devicon-visualstudio-plain',
                    text: 'Visual Studio',
                    className: 'bg-purple-600 hover:bg-purple-700 shadow-purple-500/50 hover:shadow-xl text-purple-300',
                    level: 5
                },
                {
                    icon: 'devicon-git-plain',
                    text: 'Git',
                    className: 'bg-orange-600 hover:bg-orange-700 shadow-orange-500/50 hover:shadow-xl text-orange-300',
                    level: 5
                },
                {
                    icon: 'devicon-linux-plain',
                    text: 'Linux',
                    className: 'bg-yellow-600 hover:bg-yellow-700 shadow-yellow-500/50 hover:shadow-xl text-yellow-300',
                    level: 4
                },
                {
                    icon: 'devicon-powershell-plain',
                    text: 'PowerShell',
                    className: 'bg-blue-600 hover:bg-blue-700 shadow-blue-500/50 hover:shadow-xl text-blue-300',
                    level: 3
                },
                {
                    icon: 'mdi mdi-api',
                    text: 'REST API',
                    className: 'bg-green-600 hover:bg-green-700 shadow-green-500/50 hover:shadow-xl text-green-300',
                    level: 5
                },
                {
                    icon: 'devicon-mysql-plain',
                    text: 'MySQL',
                    className: 'bg-blue-600 hover:bg-blue-700 shadow-blue-500/50 hover:shadow-xl text-blue-300',
                    level: 4
                },
                {
                    icon: 'devicon-sqlite-plain',
                    text: 'SQLite',
                    className: 'bg-sky-600 hover:bg-sky-700 shadow-sky-500/50 hover:shadow-xl text-sky-300',
                    level: 4
                },
                {
                    icon: 'devicon-oracle-plain',
                    text: 'Oracle',
                    className: 'bg-red-600 hover:bg-red-700 shadow-red-500/50 hover:shadow-xl text-red-300',
                    level: 4
                },
                {
                    icon: 'mdi mdi-database-edit',
                    text: 'SQL Developer',
                    className: 'bg-orange-600 hover:bg-orange-700 shadow-orange-500/50 hover:shadow-xl text-orange-300',
                    level: 4
                }, 
            ]
        },
        [SkillCategory.GameAnd3DDevelopment]: {
            title: 'Game & 3D Development',
            icon: 'mdi mdi-controller',
            items: [
                {
                    icon: 'devicon-unity-plain',
                    text: 'Unity',
                    className: 'bg-gray-600 hover:bg-gray-700 shadow-gray-500/50 hover:shadow-xl text-gray-300',
                    level: 4
                },
                {
                    icon: 'devicon-unrealengine-original',
                    text: 'Unreal Engine',
                    className: 'bg-blue-600 hover:bg-blue-700 shadow-blue-500/50 hover:shadow-xl text-blue-300',
                    level: 3
                },
                {
                    icon: 'devicon-blender-original',
                    text: 'Blender',
                    className: 'bg-orange-600 hover:bg-orange-700 shadow-orange-500/50 hover:shadow-xl text-orange-300',
                    level: 4
                },
            ]
        },
        [SkillCategory.DesignAndMedia]: {
            title: 'Design & Media',
            icon: 'mdi mdi-palette',
            items: [
                {
                    icon: 'devicon-photoshop-plain',
                    text: 'Adobe Photoshop',
                    className: 'bg-blue-600 hover:bg-blue-700 shadow-blue-500/50 hover:shadow-xl text-blue-300',
                    level: 4
                },
                {
                    icon: 'devicon-illustrator-plain',
                    text: 'Adobe Illustrator',
                    className: 'bg-orange-600 hover:bg-orange-700 shadow-orange-500/50 hover:shadow-xl text-orange-300',
                    level: 3
                },
                {
                    icon: 'devicon-aftereffects-plain',
                    text: 'After Effects',
                    className: 'bg-purple-600 hover:bg-purple-700 shadow-purple-500/50 hover:shadow-xl text-purple-300',
                    level: 3
                },
                {
                    icon: 'devicon-figma-plain',
                    text: 'Figma',
                    className: 'bg-indigo-600 hover:bg-indigo-700 shadow-indigo-500/50 hover:shadow-xl text-indigo-300',
                    level: 3
                }
            ]
        }
    },
    certifications: [
        {
            icon: 'fa-solid fa-people-group',
            title: 'Scrum Workshop',
            institution: 'bib International College',
            date: 'September 2023',
            className: 'bg-green-900 hover:bg-green-800 shadow-green-700/50 hover:shadow-xl text-green-400',
            link: '',
            downloadLink: '/certificates/scrum-workshop-cert.pdf',
        },
        {
            icon: 'fa-solid fa-robot',
            title: 'Voice Assistant Development',
            institution: 'bib International College',
            date: 'May 2023',
            className: 'bg-yellow-900 hover:bg-yellow-800 shadow-yellow-700/50 hover:shadow-xl text-yellow-400',
            link: '',
            downloadLink: '/certificates/voice-assistant-cert.pdf',
        },
        {
            icon: 'fa-solid fa-gamepad',
            title: 'Horror Game Development',
            institution: 'bib International College',
            date: 'May 2024',
            className: 'bg-red-900 hover:bg-red-800 shadow-red-700/50 hover:shadow-xl text-red-400',
            link: '',
            downloadLink: '/certificates/game-development-cert.pdf',
        },
        {
            icon: 'fa-brands fa-free-code-camp',
            title: 'Responsive Web Design',
            institution: 'FreeCodeCamp',
            date: 'July 2024',
            className: 'bg-blue-900 hover:bg-blue-800 shadow-blue-700/50 hover:shadow-xl text-blue-400',
            link: 'https://www.freecodecamp.org/certification/STiM/responsive-web-design',
            downloadLink: '',
        }, 
        {
            icon: 'fa-brands fa-free-code-camp',
            title: 'JavaScript Algorithms and Data Structures',
            institution: 'FreeCodeCamp',
            date: 'April 2025',
            className: 'bg-blue-900 hover:bg-blue-800 shadow-blue-700/50 hover:shadow-xl text-blue-400',
            link: 'https://www.freecodecamp.org/certification/STiM/javascript-algorithms-and-data-structures-v8', 
            downloadLink: '',
        },
        {
            icon: 'fa-brands fa-free-code-camp',
            title: 'Front End Development Libraries',
            institution: 'FreeCodeCamp',
            date: 'April 2025',
            className: 'bg-blue-900 hover:bg-blue-800 shadow-blue-700/50 hover:shadow-xl text-blue-400',
            link: 'https://www.freecodecamp.org/certification/STiM/front-end-development-libraries', 
            downloadLink: '',
        },
    ],
    projectCategories: {
        softwareDevelopment: {
            title: 'Software Development',
            icon: 'mdi mdi-laptop-windows',
            projects: [
                {
                    title: 'LoRa Chat',
                    description: 'LoRa Chat is a messaging application that enables communication over LoRa networks. This project was developed during a three-month Software Engineering and Scrum-focused college project by a team of four developers: Juwan Jouma, Joulian Alsuliman, Sergej Jahne, and Ilja Groo. The application allows users to create chats, send and receive encrypted messages over LoRa networks, and manage connections with LoRa devices.',
                    image: '/images/projects/lora-chat.png',
                    githubLink: 'https://github.com/The5TiM/lora-chat-wpf-public',
                    toolsAndTechnologies: [
                        'C#',
                        'WPF',
                        'WPF-UI',
                        'SQLite',
                        'Entity Framework',
                        'Arduino/C',
                        'LoRa',
                        'AES',
                        'System.IO.Ports'
                    ]
                },
                {
                    title: 'EVE Voice Assistant',
                    description: 'EVE is a desktop application that combines speech recognition, natural language processing, and text-to-speech capabilities. This project was developed during a two-week college assignment by Juwan Jouma. The assistant can perform various tasks including weather updates, system controls, and natural conversations powered by OpenAI API.',
                    image: '/images/projects/voice-assistant.png',
                    githubLink: 'https://github.com/The5TiM/eve-voice-assistant',
                    toolsAndTechnologies: [
                        'C#',
                        'Entity Framework',
                        'Password Hashing (BCrypt)',
                        'MySQL',
                        'OpenAI API',
                        'Picovoice',
                        'PyAudio',
                        'Python',
                        'Silero TTS',
                        'SpeechRecognition',
                        'Weather API',
                        'WPF',
                    ]
                },
                {
                    title: 'TaskIt',
                    description: 'TaskIt-Maui is a full-stack task management application developed as part of a 4-6 week college assignment. The project features both a frontend built with .NET MAUI Blazor Hybrid and a backend REST API implemented in PHP. Students were given the flexibility to choose their preferred frontend framework or language.',
                    image: '/images/projects/taskit.png',
                    githubLink: 'https://github.com/The5TiM/taskit-maui',
                    toolsAndTechnologies: [
                        'C#',
                        'PHP',
                        'MySQL',
                        'REST API',
                        '.NET MAUI Blazor Hybrid',
                    ]
                }
            ]
        },
        gameDevelopment: {
            title: 'Game Development',
            icon: 'mdi mdi-gamepad-variant',
            projects: [
                {
                    title: 'Out of Light - Horror Game',
                    description: 'Out of Light is a first-person horror game developed in Unity. The game follows a protagonist who must navigate through a dark, eerie house with only a flashlight and lighter to illuminate their path. Players must manage battery life, find keys, and uncover the mystery of what happened in this unsettling environment. This project was created as a two-week college assignment by Juwan Jouma and Joulian Alsuliman.',
                    image: '/images/projects/horror-game.png',
                    githubLink: 'https://github.com/The5TiM/out-of-light-unity-public', 
                    toolsAndTechnologies: [
                        'C#',
                        'Unity',
                        'Blender',
                        'Photoshop',
                        'ElevenLabs',
                    ]
                },
                {
                    title: 'Unreal Engine Workshop - 3D Platformer',
                    description: 'This is a 3D platformer game developed in Unreal Engine during a one-week Unreal Workshop, completed in just 2 days. ',
                    image: '/images/projects/unreal-engine-workshop.png',
                    githubLink: 'https://github.com/The5TiM/platformer-workshop-ue5',
                    toolsAndTechnologies: [
                       'Unreal Engine 5',
                       'Blueprints',
                       'Game Animation Samples',
                       'Quixel Bridge', 
                    ]
                },
                {
                    title: 'Minecraft 2D',
                    description: 'Minecraft-WPF is a 2D Minecraft-inspired game built with WPF. This project was developed during a two-week college assignment by Juwan Jouma. Disclaimer: This project has no affiliation with Mojang or Microsoft and was created solely for educational purposes.',
                    image: '/images/projects/minecraft-2d.png',
                    githubLink: 'https://github.com/The5TiM/minecraft-wpf-public',
                    toolsAndTechnologies: [
                        'C#',
                        'WPF',
                        'XAML',
                        'Perlin Noise',
                    ]
                }
            ]
        },
        webDevelopment: {
            title: 'Web Development',
            icon: 'mdi mdi-web',
            projects: [
                {
                    title: 'Portfolio',
                    description: 'This portfolio website is a showcase of my skills and projects.',
                    image: '/images/projects/portfolio.png', 
                    githubLink: 'https://github.com/The5TiM/portfolio',
                    toolsAndTechnologies: [
                        'Vite',
                        'React.js',
                        'TypeScript',
                        'Tailwind CSS',
                        'Reactbits',
                        'Github API',
                    ]
                },
                {
                    title: 'Notflix',
                    description: 'Notflix is a movie browsing application built with Blazor and Entity Framework Core. This project was developed during a two-week college assignment by Juwan Jouma and Joulian Alsuliman. Disclaimer: This project has no affiliation with Netflix and was created solely for educational purposes.',
                    image: '/images/projects/notflix.png',
                    githubLink: 'https://github.com/The5TiM/notflix-blazor-public',
                    toolsAndTechnologies: [
                        'HTML',
                        'CSS',
                        'C#',
                        'Blazor',
                        'SQLite',
                        'Bootstrap',
                        'EmailService',
                        'Entity Framework',
                        'The Movie Database API',
                        'Password Hashing (BCrypt)',
                        'Blazored.LocalStorage / SessionStorage',
                    ]
                }
            ]
        }
    },
};