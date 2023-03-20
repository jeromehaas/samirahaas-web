import Section from "components/04-layouts/section/section";
import Heading from "components/01-atoms/heading/heading";
import Text from "components/01-atoms/text/text";
import ReactMarkdown from "react-markdown";
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect, useRef } from 'react';

const LegalInformations = ({ data }) => {
    
    // REGISTER PLUGIN
    gsap.registerPlugin(ScrollTrigger);

    // CREATE REFS
    const legalInformationsRef = useRef();
    const legalInformationsTimelineRef = useRef();

    // ANIMATE ELEMENTS
    useEffect(() => {
        const context = gsap.context(() => {
            legalInformationsTimelineRef.current = gsap.timeline({ scrollTrigger: { trigger: legalInformationsRef.current, start: 'top bottom-=80px', end: 'bottom top+=80px', markers: true }});
            legalInformationsTimelineRef.current.to('.legal-informations .legal-informations__heading', { autoAlpha: 1, duration: 2 }, 0);
            legalInformationsTimelineRef.current.to('.legal-informations .paragraphs__item', { autoAlpha: 1, duration: 2, stagger: 0.25 }, 0);
        }, legalInformationsRef);
    }, []);

    return (
        <Section className="legal-informations" ref={ legalInformationsRef }>
            <Heading className="legal-informations__heading heading" level="h1">
                <span className="heading__item" >{ data.attributes.heading.top }</span>
                <span className="heading__item" >{ data.attributes.heading.sub }</span>
            </Heading>
            <div className="legal-informations__paragraphs paragraphs">
                { data.attributes.paragraph.map((item) => (
                    <div className="paragraphs__item item" key={ item.idss }>
                        <Heading className="item__heading" level="h4">{ item.heading }</Heading>
                        <ReactMarkdown className="item__text">{ item.text }</ReactMarkdown>
                    </div>
                ))}
            </div>
        </Section>
    );

};

export default LegalInformations;