import Hamburger from "components/01-atoms/hamburger/hamburger";
import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const Navigation = () => {

    // SETUP STATE
    const [ isOpen, setIsOpen ] = useState(false);

    // SETUP REFS
    const navigationRef = useRef();
    const menuTimelineRef = useRef();

    // TOGGLE MENU
    const toggleMenu = () => {
        isOpen ? closeMenu() : openMenu();
        setIsOpen(!isOpen);
    };

    // OPEN MENU
    const openMenu = () => {
        menuTimelineRef.current.play();
    };

    // CLOSE MENU
    const closeMenu = () => {
        menuTimelineRef.current.reverse();
    };

    // ANIMATE HAMBURGER
    useEffect(() => {
        const context = gsap.context(() => {
            gsap.to(['.navigation .bar__logo', '.navigation .bar__hamburger'], { autoAlpha: 1, duration: 2 })
        }, navigationRef.current)
        return () => context.revert();
    }, []);

    // ANIMATE MENU
    useEffect(() => {
        const context = gsap.context(() => {
            menuTimelineRef.current = gsap.timeline({ paused: true });
            menuTimelineRef.current.to('.navigation .navigation__menu', { bottom: '0%', duration: 1, ease: 'power4.inOut' }, 0);
            menuTimelineRef.current.to('.navigation .main-links__item', { opacity: '1', duration: 1, ease: 'power4.inOut', stagger: { amount: 0.5 } }, 0.75);
            menuTimelineRef.current.to('.navigation .social-links__item', { opacity: '1', duration: 1, ease: 'power4.inOut' }, 1.25);
        }, navigationRef.current);
        return () => context.revert();
    }, []);

    return (
        <nav className="navigation" ref={ navigationRef }>
            <div className="navigation__inner">
                <div className="navigation__placeholder"></div>
                <div className="navigation__background"></div>
                <div className="navigation__bar bar">
                    <Link className="bar__logo-link" href="/">
                        <Image className="bar__logo" src="/logos/full.svg" alt="Samira Haas" width="140" height="40" priority />
                    </Link>
                    <Hamburger className="bar__hamburger" isOpen={ isOpen } onClick={ toggleMenu } /> 
                </div>
                <div className="navigation__menu menu">
                     <div className="menu__main-links main-links">
                        <Link className="main-links__item heading--h1" href="/corporate">Corporate</Link>
                        <Link className="main-links__item heading--h1" href="/storytelling">Storytelling</Link>
                        <Link className="main-links__item heading--h1" href="/architecture">Architektur</Link>
                        <Link className="main-links__item heading--h1" href="/weddings">Hochzeiten</Link>
                        <Link className="main-links__item heading--h1" href="/design">Gestaltung</Link>
                        <Link className="main-links__item heading--h1" href="/contact">Kontakt</Link>
                     </div>
                     <div className="menu__social-links social-links">
                        <Link className="social-links__item" href="/">Instagram</Link>
                     </div>
                </div>
            </div>
        </nav>
    );

};

export default Navigation;