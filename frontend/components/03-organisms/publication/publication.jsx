import Section from "components/04-layouts/section/section";
import Heading from "components/01-atoms/heading/heading";
import Text from "components/01-atoms/text/text";
import Link from "next/link";
import { gsap } from 'gsap';
import { ScrollTrigger } from  'gsap/dist/ScrollTrigger';
import { useEffect, useRef } from 'react';

const Publication = ({ data }) => {

    // REGISTER PLUGIN
    gsap.registerPlugin(ScrollTrigger);

    // CREATE REFS
    const publicationRef = useRef();
    const publicationTimelineRef = useRef();

    // ANIMATE ELEMENTS 
    useEffect(() => {
        const context = gsap.context(() => {
            publicationTimelineRef.current = gsap.timeline({ scrollTrigger: { trigger: publicationRef.current, start: 'top bottom-=80px', end: 'bottom top+=80px', markers: false }});
            publicationTimelineRef.current.to('.publication .publication__heading', { autoAlpha: 1, duration: 2 }, 0);
            publicationTimelineRef.current.to('.publication .contributors__item', { autoAlpha: 1, duration: 2, stagger: 0.25 }, 0.25);
        }, publicationRef);
    }, []);

    return (
        <Section className="publication" ref={ publicationRef }>
            <Heading className="publication__heading heading" level="h1">
                <span className="heading__item">{ data.attributes.heading.top }</span>
                <span className="heading__item">{ data.attributes.heading.sub }</span>
            </Heading>
            <div className="publication__contributors contributors">
                { data.attributes.contributors.map((item) => (
                    <div className="contributors__item item">
                    <Heading className="item__heading" level="h4">{ item.heading }</Heading>
                    { item.address.map((line) => (
                        line.link ? (
                            <Link className="item__link" href={ line.link }>
                                <Text className="item__text">{ line.text }</Text>
                            </Link>
                        ) : (
                            <Text className="item__text">{ line.text }</Text>
                        )
                    ))}
                </div>
                ))}
            </div>
        </Section>
    );

};

export default Publication;
