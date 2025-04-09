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
    card: 'border-2 border-white/10 p-6 rounded-4xl shadow-white/20 shadow-xl bg-zinc-600/50'
}