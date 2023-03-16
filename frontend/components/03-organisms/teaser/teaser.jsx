import Section from "components/04-layouts/section/section";
import HighlightSlider from "components/02-molecules/highlight-slider/highlight-slider";
import HighlightPreview from "components/02-molecules/highlight-preview/highlight-preview";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useRef, useEffect } from 'react';

const Teaser = ({ data }) => {

    // REGISTER PLUGIN
    gsap.registerPlugin(ScrollTrigger);

    // CREATE REFS
    const teaserRef = useRef();
    const teaserTimelineRef = useRef();

    // ANIMATE ELEMENTS
    useEffect(() => {
        const context = gsap.context(() => {
            teaserTimelineRef.current = gsap.timeline({ scrollTrigger: { trigger: teaserRef.current, start: 'top bottom-=320px', end: 'bottom top+=320px', markers: false }});
            teaserTimelineRef.current.to('.teaser .teaser__highlight-slider', { autoAlpha: 1, duration: 2 }, 0);
            teaserTimelineRef.current.to('.teaser .teaser__highlight-preview', { autoAlpha: 1, duration: 2 }, 0);
            teaserTimelineRef.current.to('.teaser .teaser__highlight-slider .projects__box', { autoAlpha: 1, top: 0, duration: 2, stagger: 0.25 }, 0.25);
        }, teaserRef);
        return () => context.revert();
    }, []);


    return (
        <Section className="teaser" ref={ teaserRef }>
            <HighlightSlider className="teaser__highlight-slider" items={ data.attributes.projects.data }  />
            <HighlightPreview className="teaser__highlight-preview" items={ data.attributes.projects.data } />
        </Section>
    );

};

export default Teaser;