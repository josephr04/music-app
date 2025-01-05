import React from 'react';
import { MobileMenu } from '@components/MobileMenu';
import { DesktopMenu } from '@components/DesktopMenu';
import { useMusic } from '@context/MusicContext';

export function Menu() {
    const { deskMenuOpen } = useMusic();

    return (
        <>
        <div className={`hidden md:flex ${deskMenuOpen ? "w-[265px]" : "w-20"} `}>
            <DesktopMenu />
        </div>
        <div className="md:hidden">
            <MobileMenu />
        </div>
        </>
    );
}
