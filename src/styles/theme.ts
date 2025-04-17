export const themeStyles = {
    main: 'bg-zinc-900',
    text: {
        primary: 'text-white',
        secondary: 'text-blue-500',
    },
    navbar: {
        primary: {
            base: 'transition-all duration-200 text-zinc-700 hover:text-white hover:[text-shadow:0_0_10px_rgba(59,130,246,0.5)]',
            active: 'text-blue-500 font-bold',
            activeUnderline: '!text-white border-b-4 border-blue-500',
            backgroundColor: 'bg-zinc-900/10 backdrop-blur-sm',
        },
        logo: {
            base: 'transition-all duration-200 hover:text-blue-500 hover:[text-shadow:0_0_10px_rgba(59,130,246,0.5)]',
            active: 'text-blue-500 font-bold',
        },
    },
    footer: {
        primary: 'font-bold text-xl text-white hover:text-blue-500 transition-colors duration-300',
        secondary: 'text-zinc-400 hover:text-white transition-colors duration-300', 
        borderTop: 'border-t border-zinc-800',
    },
    projects: {
        technologyTag: 'text-xs bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full hover:bg-blue-500/50 hover:text-white transition-all duration-300 cursor-default transform hover:scale-105 hover:shadow-[0_0_10px_rgba(59,130,246,0.5)]',
        projectCard: 'border border-white/10 rounded-xl p-4 bg-zinc-700/30 hover:bg-zinc-700/50 transition-all duration-300',
        githubLink: 'text-zinc-400 hover:text-white transition-colors duration-300 hover:scale-110 transform',
        imageOverlay: 'absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500',
        title: 'text-2xl font-bold flex items-center gap-2 group-hover:text-blue-400 transition-colors duration-300',
        description: 'text-lg text-zinc-300 group-hover:text-zinc-100 transition-colors duration-300',
        techTitle: 'text-sm text-zinc-400 mb-1 group-hover:text-zinc-300 transition-colors duration-300',
        cardWrapper: 'flex flex-col md:flex-row gap-6 transition-all duration-500 hover:scale-[1.02] group',
        categoryIcon: 'text-blue-400',
        categoryDivider: 'w-24 h-1 bg-blue-500/50 mx-auto rounded-full',
        categoryDividerGlow: 'w-24 h-1 bg-blue-300/50 mx-auto rounded-full blur-sm animate-pulse',
        projectUnderline: 'absolute -bottom-2 left-0 w-full h-1 bg-blue-500 rounded-full opacity-70',
        projectUnderlineGlow: 'absolute -bottom-2 left-0 w-full h-1 bg-blue-300 rounded-full blur-sm animate-pulse',
    },
    contact: {
        input: 'bg-neutral-800 border border-neutral-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 focus:bg-zinc-900',
        label: 'text-sm font-medium text-zinc-300',
        button: 'transition-all duration-200 bg-zinc-800 border border-zinc-700 text-white pt-2 pb-2 ps-4 pe-4 rounded-full shadow-lg hover:shadow-xl hover:border-white-500/50 hover:bg-zinc-900',
    },
    skeleton: {
        primary: 'bg-zinc-700',
        secondary: 'bg-zinc-700/50',
        tertiary: 'bg-zinc-600',
    },
    button: {
        primary: 'transition-all duration-200 bg-blue-600 hover:bg-blue-700 text-white pt-2 pb-2 ps-4 pe-4 rounded-full shadow-lg shadow-blue-500/50 hover:shadow-xl flex items-center justify-center',
        secondary: 'transition-all duration-200 bg-blue-500/20 hover:bg-blue-500/30 text-blue-400 pt-2 pb-2 ps-4 pe-4 rounded-full shadow-lg shadow-blue-500/20 hover:shadow-xl flex items-center justify-center',
        outline: 'transition-all duration-200 border-2 border-blue-500 text-blue-500 hover:bg-blue-500/10',
    },
    icon: 'transition-all duration-200 p-4 shadow-lg hover:shadow-xl flex items-center justify-center rounded-3xl flex gap-4 border-2 border-white/20',
    border: 'transition-all duration-200 border-5 border-blue-500',
    hover: 'hover:[box-shadow:0_0_20px_rgba(59,130,246,0.5)]',
    textShadow: '[text-shadow:0_0_10px_rgba(59,130,246,0.5)]',
    card: 'border-2 border-white/10 p-6 rounded-4xl shadow-white/20 shadow-xl bg-zinc-600/50',
}