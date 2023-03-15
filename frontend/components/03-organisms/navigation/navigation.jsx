import Hamburger from "components/01-atoms/hamburger/hamburger";
import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const Navigation = () => {

    const [ isOpen, setIsOpen ] = useState(false);
    const navigationRef = useRef();
    const menuTimelineRef = useRef();

    const toggleMenu = () => {
        isOpen ? closeMenu() : openMenu();
        setIsOpen(!isOpen);
    };

    const openMenu = () => {
        menuTimelineRef.current.play();
    };

    const closeMenu = () => {
        menuTimelineRef.current.reverse();
    };

    useEffect(() => {
        gsap.context(() => {
            gsap.to(['.navigation .bar__logo', '.navigation .bar__hamburger'], { autoAlpha: 1, duration: 2 })
        }, navigationRef.current)
    }, []);

    useEffect(() => {
        gsap.context(() => {
            menuTimelineRef.current = gsap.timeline();
            menuTimelineRef.current.to('.navigation .navigation__menu', { bottom: '0%', duration: 1, ease: 'power4.inOut' }).reverse();
            menuTimelineRef.current.to('.navigation .main-links__item', { opacity: '1', duration: 0.5, ease: 'power4.inOut', stagger: { amount: 0.5 } }).reverse();
            menuTimelineRef.current.to('.navigation .social-links__item', { opacity: '1', duration: 0.5, ease: 'power4.inOut' }).reverse();
        }, navigationRef.current);
        () => menuTimelineRef.current.kill();
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