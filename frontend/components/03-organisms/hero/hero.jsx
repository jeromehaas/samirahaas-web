import PropTypes from 'prop-types';
import Heading from 'components/01-atoms/heading/heading';
import Text from 'components/01-atoms/text/text';
import Picture from 'components/01-atoms/picture/picture';
import Section from 'components/04-layouts/section/section';
import Scroller from 'components/01-atoms/scroller/scroller';
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const Hero = () => {

    // CREATE REFS
    const heroRef = useRef();
    const heroTimelineRef = useRef();

    // ANIMATE ELEMENTS
    useEffect(() => {
        const context = gsap.context(() => {
            heroTimelineRef.current = gsap.timeline();
            heroTimelineRef.current.to('.hero__heading', { autoAlpha: 1, duration: 2 }, 0.5 )
            heroTimelineRef.current.to('.hero__text', { autoAlpha: 1, duration: 1 }, 0.75 )
            heroTimelineRef.current.to('.hero__scroller', { autoAlpha: 1, duration: 1 }, 1 )
        }, heroRef);
        return () => context.revert();
    }, []);

    return (
        <Section className="hero" ref={ heroRef }>
            <Heading className="hero__heading">Fotografie & Gestaltung</Heading>
            <Text className="hero__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus facere repellat voluptatem natus doloremque a tenetur, numquam eligendi nulla velit inventore necessitatibus molestias dicta officia, eos autem corrupti asperiores possimus.</Text>
            <Scroller className="hero__scroller" />
        </Section>
    );

};

export default Hero;