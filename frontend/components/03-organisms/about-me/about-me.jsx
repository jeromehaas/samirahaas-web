import Section from "components/04-layouts/section/section";
import Heading from "components/01-atoms/heading/heading";
import Text from "components/01-atoms/text/text";
import Picture from "components/01-atoms/picture/picture";
import Link from "components/01-atoms/link/link";
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useRef, useEffect, useMemo } from "react";

const AboutMe = ({ data }) => {

    // REGISTER PLUGIN
    gsap.registerPlugin(ScrollTrigger);

    // CREATE REFS
    const aboutMeRef = useRef();
    const aboutMeTimelineRef = useRef();

    
    // ANIMATE ELEMENTS
    useEffect(() => {
        const context = gsap.context(() => {
            aboutMeTimelineRef.current = gsap.timeline({ scrollTrigger: { trigger: aboutMeRef.current, start: 'top bottom-=320px', end: 'bottom top+=320px', markers: false }});
            aboutMeTimelineRef.current.to('.about-me .about-me__image', { autoAlpha: 1, duration: 1 }, 0);
            aboutMeTimelineRef.current.to('.about-me .content__heading', { autoAlpha: 1, duration: 1 }, 0.25);
            aboutMeTimelineRef.current.to('.about-me .content__text', { autoAlpha: 1, duration: 1 }, 0.5);
           aboutMeTimelineRef.current.to('.about-me .content__link', { autoAlpha: 1, duration: 1 }, 0.75);
        }, aboutMeRef);
        return () => context.revert();
    }, []);

    return (
        <Section className="about-me" ref={ aboutMeRef }>
            <div className="about-me__content content">
                <Heading className="content__heading" level="h2">{ data.attributes.heading }</Heading>
                <Text className="content__text">{ data.attributes.text }</Text>
                <Link className="content__link" href={ data.attributes.button.link }>{ data.attributes.button.label }</Link>
            </div>
            <Picture className="about-me__image" src={ data.attributes.image.data?.attributes.formats.large.url } alt="Image" />
        </Section>
    );

};

export default AboutMe;