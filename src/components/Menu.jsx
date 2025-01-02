import React from 'react';
import { MobileMenu } from '@components/MobileMenu';
import { DesktopMenu } from '@components/DesktopMenu';
import { useMusic } from '@context/MusicContext';

export function Menu() {
    const { deskMenuOpen } = useMusic();

    return (
        <>
        <div className={`hidden md:flex ${deskMenuOpen ? "w-[272px]" : "w-20 mr-1"} `}>
            <DesktopMenu />
        </div>
        <div className="md:hidden">
            <MobileMenu />
        </div>
        </>
    );
}
