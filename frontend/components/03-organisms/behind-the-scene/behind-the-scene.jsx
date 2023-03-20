import Section from "components/04-layouts/section/section";
import Picture from "components/01-atoms/picture/picture";
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useRef, useEffect } from 'react';

const BehindTheScenes = ({ data }) => {


    // REGISTER PLUGIN
    gsap.registerPlugin(ScrollTrigger);

    // CREATE REFS
    const behindTheScenesRef = useRef();
    const behindTheScenesTimelineRef = useRef();

    // ANIMATE ELEMENTS
    useEffect(() => {
        const context = gsap.context(() => {
            behindTheScenesTimelineRef.current = gsap.timeline({ trigger: behindTheScenesRef.current, start: 'top bottom-=80px', end: 'bottom top+=80px', markers: true });
            behindTheScenesTimelineRef.current.to('.behind-the-scenes .images__item', { autoAlpha: 1, duration: 2, stagger: 0.25 }, 0.75);
        }, behindTheScenesRef);
    }, []);

    const items = data && data.attributes.images.data.map((item) => {
        return {
            id: item.id,
            preview: item.attributes.formats.large,
        }
    });

    return(
        <Section className="behind-the-scenes" ref={ behindTheScenesRef }>
            <div className="behind-the-scenes__images images">
                { items.map((item) => (
                    <Picture className="images__item" src={ item.preview?.url } key={ item.id } alt="Image" />
                ))}
            </div>
        </Section>
    )

};

export default BehindTheScenes;