import tailwindLogo from '@assets/images/tailwind-logo.svg';

export function ReactLogo() {
    return (
        <a href="https://react.dev" target="_blank" className="container" >
            <span className="react-logo">
                <span className="nucleo"></span>
            </span>
        </a>
    );
}

export function TailwindLogo() {
    return(
        <a href="https://tailwindcss.com" target="_blank">
            <img className="w-16 h-16" src={tailwindLogo} alt="Tailwind Logo" />
        </a>
    );
}