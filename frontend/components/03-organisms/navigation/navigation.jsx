import Hamburger from "components/01-atoms/hamburger/hamburger";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const Navigation = () => {

    // SETUP STATE
    const [ isOpen, setIsOpen ] = useState(false);
		const [ scrollPosition, setScrollPosition ] = useState(0);
		const [ previousScrollPosition, setPreviousScrollPosition ] = useState(0);

		// SETUP ROUTER
		const router = useRouter();

    // SETUP REFS
    const navigationRef = useRef();
    const menuTimelineRef = useRef();
		const barTimelineRef = useRef();

    // TOGGLE MENU
    const toggleMenu = () => {
        isOpen ? closeMenu() : openMenu();
        setIsOpen(!isOpen);
    };

    // OPEN MENU
    const openMenu = () => {
        menuTimelineRef.current.play();
    };

		// HANDLE LINK KLICK
		const handleLinkClick = (event) => {
			const currentPath = router.pathname;
			const targetPath = event.target.href;
			if (targetPath.includes(currentPath)) {
				event.preventDefault();
				toggleMenu();
			};
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

		// ANIMATE BAR
		useEffect(() => {
			const context = gsap.context(() => {
				barTimelineRef.current = gsap.timeline({ paused: true});
				barTimelineRef.current.to(['.navigation .bar__hamburger', '.navigation .bar__logo' ], { opacity: 0 }, 0);
				barTimelineRef.current.to(['.navigation .navigation__bar', '.navigation .navigation__background', '.navigation .navigation__placeholder'], { top: '-80px' }, 0);
			}, navigationRef.current);
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

		// ADD SCROLL EVENTLISTENER
		useEffect(() => {
			window.addEventListener('scroll', handleScroll);
			return () => window.removeEventListener('scroll', handleScroll);
		}, []);

		// HANDLE SCROLL
		const handleScroll = () => {
			setScrollPosition(window.pageYOffset);
		};
		
		// ANIMATIE BAR
		useEffect(() => {
			if (scrollPosition > previousScrollPosition && !isOpen) {
				barTimelineRef.current.play();
			} else {
				barTimelineRef.current.reverse();
			};
			setPreviousScrollPosition(scrollPosition);
		}, [scrollPosition]);

    return (
			<nav className="navigation" ref={ navigationRef }>
            <div className="navigation__inner">
                <div className="navigation__placeholder"></div>
                <div className="navigation__background"></div>
                <div className="navigation__bar bar">
									<div className="bar__inner">
                    <Link className="bar__logo-link" href="/">
                        <Image className="bar__logo" src="/logos/full.svg" alt="Samira Haas" width="140" height="40" priority />
                    </Link>
                    <Hamburger className="bar__hamburger" isOpen={ isOpen } onClick={ toggleMenu } /> 
									</div>
                </div>
                <div className="navigation__menu menu">
                     <div className="menu__main-links main-links">
                        <Link className="main-links__item heading--h1" href="/corporate" onClick={ (event) => handleLinkClick(event) }>Corporate</Link>
                        <Link className="main-links__item heading--h1" href="/storytelling" onClick={ (event) => handleLinkClick(event) }>Storytelling</Link>
                        <Link className="main-links__item heading--h1" href="/architecture" onClick={ (event) => handleLinkClick(event) }>Architektur</Link>
                        <Link className="main-links__item heading--h1" href="/weddings" onClick={ (event) => handleLinkClick(event) }>Hochzeiten</Link>
                        <Link className="main-links__item heading--h1" href="/design" onClick={ (event) => handleLinkClick(event) }>Gestaltung</Link>
                        <Link className="main-links__item heading--h1" href="/contact" onClick={ (event) => handleLinkClick(event) }>Kontakt</Link>
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