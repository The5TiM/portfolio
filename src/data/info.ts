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
    skills: {
        [SkillCategory.Languages]: {
            title: 'Languages',
            icon: 'mdi mdi-code-braces',
            items: [
                {
                    icon: 'devicon-html5-plain',
                    text: 'HTML',
                    className: 'bg-orange-600 hover:bg-orange-700 shadow-orange-500/50 hover:shadow-xl text-orange-300'
                },
                {
                    icon: 'devicon-css3-plain',
                    text: 'CSS',
                    className: 'bg-blue-600 hover:bg-blue-700 shadow-blue-500/50 hover:shadow-xl text-blue-300'
                },
                {
                    icon: 'devicon-javascript-plain',
                    text: 'JavaScript',
                    className: 'bg-yellow-600 hover:bg-yellow-700 shadow-yellow-500/50 hover:shadow-xl text-yellow-300'
                },
                {
                    icon: 'devicon-typescript-plain',
                    text: 'TypeScript',
                    className: 'bg-blue-500 hover:bg-blue-600 shadow-blue-400/50 hover:shadow-xl text-blue-200'
                },
                {
                    icon: 'devicon-csharp-plain',
                    text: 'C Sharp',
                    className: 'bg-purple-600 hover:bg-purple-700 shadow-purple-500/50 hover:shadow-xl text-purple-300'
                },
                {
                    icon: 'devicon-php-plain',
                    text: 'PHP',
                    className: 'bg-indigo-600 hover:bg-indigo-700 shadow-indigo-500/50 hover:shadow-xl text-indigo-300'
                },
                {
                    icon: 'devicon-azuresqldatabase-plain',
                    text: 'SQL',
                    className: 'bg-sky-600 hover:bg-sky-700 shadow-sky-500/50 hover:shadow-xl text-sky-300'
                },
                {
                    icon: 'mdi mdi-database',
                    text: 'PL/SQL',
                    className: 'bg-emerald-600 hover:bg-emerald-700 shadow-emerald-500/50 hover:shadow-xl text-emerald-300'
                },
                {
                    icon: 'devicon-python-plain',
                    text: 'Python',
                    className: 'bg-yellow-500 hover:bg-yellow-600 shadow-yellow-400/50 hover:shadow-xl text-yellow-200'
                },
                {
                    icon: 'devicon-bash-plain',
                    text: 'Bash',
                    className: 'bg-gray-600 hover:bg-gray-700 shadow-gray-500/50 hover:shadow-xl text-gray-300'
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
                    className: 'bg-purple-600 hover:bg-purple-700 shadow-purple-500/50 hover:shadow-xl text-purple-300'
                },
                {
                    icon: 'mdi mdi-database-outline',
                    text: 'Entity Framework',
                    className: 'bg-blue-600 hover:bg-blue-700 shadow-blue-500/50 hover:shadow-xl text-blue-300'
                },
                {
                    icon: 'devicon-dot-net-plain',
                    text: 'WPF',
                    className: 'bg-indigo-600 hover:bg-indigo-700 shadow-indigo-500/50 hover:shadow-xl text-indigo-300'
                },
                {
                    icon: 'devicon-react-original',
                    text: 'React.js',
                    className: 'bg-cyan-600 hover:bg-cyan-700 shadow-cyan-500/50 hover:shadow-xl text-cyan-300'
                },
                {
                    icon: 'devicon-redux-original',
                    text: 'Redux.js',
                    className: 'bg-purple-600 hover:bg-purple-700 shadow-purple-500/50 hover:shadow-xl text-purple-300'
                },
                {
                    icon: 'devicon-blazor-original',
                    text: 'Blazor',
                    className: 'bg-blue-600 hover:bg-blue-700 shadow-blue-500/50 hover:shadow-xl text-blue-300'
                },
                {
                    icon: 'devicon-bootstrap-plain',
                    text: 'Bootstrap',
                    className: 'bg-purple-600 hover:bg-purple-700 shadow-purple-500/50 hover:shadow-xl text-purple-300'
                },
                {
                    icon: 'devicon-tailwindcss-original',
                    text: 'Tailwind CSS',
                    className: 'bg-cyan-600 hover:bg-cyan-700 shadow-cyan-500/50 hover:shadow-xl text-cyan-300'
                },
                {
                    icon: 'devicon-jquery-plain',
                    text: 'jQuery',
                    className: 'bg-blue-600 hover:bg-blue-700 shadow-blue-500/50 hover:shadow-xl text-blue-300'
                },
                {
                    icon: 'devicon-sass-original',
                    text: 'SASS',
                    className: 'bg-pink-600 hover:bg-pink-700 shadow-pink-500/50 hover:shadow-xl text-pink-300'
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
                    className: 'bg-blue-600 hover:bg-blue-700 shadow-blue-500/50 hover:shadow-xl text-blue-300'
                },
                {
                    icon: 'devicon-visualstudio-plain',
                    text: 'Visual Studio',
                    className: 'bg-purple-600 hover:bg-purple-700 shadow-purple-500/50 hover:shadow-xl text-purple-300'
                },
                {
                    icon: 'devicon-git-plain',
                    text: 'Git',
                    className: 'bg-orange-600 hover:bg-orange-700 shadow-orange-500/50 hover:shadow-xl text-orange-300'
                },
                {
                    icon: 'devicon-linux-plain',
                    text: 'Linux',
                    className: 'bg-yellow-600 hover:bg-yellow-700 shadow-yellow-500/50 hover:shadow-xl text-yellow-300'
                },
                {
                    icon: 'devicon-powershell-plain',
                    text: 'PowerShell',
                    className: 'bg-blue-600 hover:bg-blue-700 shadow-blue-500/50 hover:shadow-xl text-blue-300'
                },
                {
                    icon: 'mdi mdi-api',
                    text: 'REST API',
                    className: 'bg-green-600 hover:bg-green-700 shadow-green-500/50 hover:shadow-xl text-green-300'
                },
                {
                    icon: 'devicon-mysql-plain',
                    text: 'MySQL',
                    className: 'bg-blue-600 hover:bg-blue-700 shadow-blue-500/50 hover:shadow-xl text-blue-300'
                },
                {
                    icon: 'devicon-sqlite-plain',
                    text: 'SQLite',
                    className: 'bg-sky-600 hover:bg-sky-700 shadow-sky-500/50 hover:shadow-xl text-sky-300'
                },
                {
                    icon: 'devicon-oracle-plain',
                    text: 'Oracle',
                    className: 'bg-red-600 hover:bg-red-700 shadow-red-500/50 hover:shadow-xl text-red-300'
                },
                {
                    icon: 'mdi mdi-database-edit',
                    text: 'SQL Developer',
                    className: 'bg-orange-600 hover:bg-orange-700 shadow-orange-500/50 hover:shadow-xl text-orange-300'
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
                    className: 'bg-gray-600 hover:bg-gray-700 shadow-gray-500/50 hover:shadow-xl text-gray-300'
                },
                {
                    icon: 'devicon-unrealengine-original',
                    text: 'Unreal Engine',
                    className: 'bg-blue-600 hover:bg-blue-700 shadow-blue-500/50 hover:shadow-xl text-blue-300'
                },
                {
                    icon: 'devicon-blender-original',
                    text: 'Blender',
                    className: 'bg-orange-600 hover:bg-orange-700 shadow-orange-500/50 hover:shadow-xl text-orange-300'
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
                    className: 'bg-blue-600 hover:bg-blue-700 shadow-blue-500/50 hover:shadow-xl text-blue-300'
                },
                {
                    icon: 'devicon-illustrator-plain',
                    text: 'Adobe Illustrator',
                    className: 'bg-orange-600 hover:bg-orange-700 shadow-orange-500/50 hover:shadow-xl text-orange-300'
                },
                {
                    icon: 'devicon-aftereffects-plain',
                    text: 'After Effects',
                    className: 'bg-purple-600 hover:bg-purple-700 shadow-purple-500/50 hover:shadow-xl text-purple-300'
                },
                {
                    icon: 'devicon-figma-plain',
                    text: 'Figma',
                    className: 'bg-indigo-600 hover:bg-indigo-700 shadow-indigo-500/50 hover:shadow-xl text-indigo-300' 
                }
            ]
        }
    }
};