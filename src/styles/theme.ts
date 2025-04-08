export const themeStyles = {
    main: 'bg-zinc-900',
    text: {
        primary: 'text-white',
        secondary: 'text-blue-500',
    },
    navbarBtn: {
        primary: {
            base: 'transition-all duration-200 text-zinc-700 hover:text-white hover:[text-shadow:0_0_10px_rgba(59,130,246,0.5)]',
            active: 'text-blue-500 font-bold',
            activeUnterline: '!text-white border-b-4 border-blue-500',
        },
        logo: {
            base: 'transition-all duration-200 hover:text-blue-500 hover:[text-shadow:0_0_10px_rgba(59,130,246,0.5)]',
            active: 'text-blue-500 font-bold',
        },
    },
    accent: {
        primary: 'bg-blue-600',
        secondary: 'bg-blue-500',
        hover: 'hover:bg-blue-700',
    },
    button: {
        primary: 'transition-all duration-200 bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full shadow-lg shadow-blue-500/50 hover:shadow-xl flex items-center justify-center',
        secondary: 'transition-all duration-200 bg-blue-500/20 hover:bg-blue-500/30 text-blue-400 p-2 rounded-full shadow-lg shadow-blue-500/20 hover:shadow-xl flex items-center justify-center',
        outline: 'transition-all duration-200 border-2 border-blue-500 text-blue-500 hover:bg-blue-500/10',
    },
    border: 'transition-all duration-200 border-5 border-blue-500',
    hover: 'hover:[box-shadow:0_0_20px_rgba(59,130,246,0.5)]',
    textShadow: '[text-shadow:0_0_10px_rgba(59,130,246,0.5)]',
}