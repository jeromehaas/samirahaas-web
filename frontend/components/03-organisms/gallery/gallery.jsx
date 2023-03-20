import Section from "components/04-layouts/section/section";
import Heading from "components/01-atoms/heading/heading";
import Text from "components/01-atoms/text/text";
import Impressions from "components/02-molecules/impressions/impressions";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useRef, useEffect } from 'react';

const Gallery = ({ data }) => {

	// REGISTER PLUGIN
	gsap.registerPlugin(ScrollTrigger);
	 
	// CREATE REFS
	const galleryRef = useRef();
	const galleryTimelineRef = useRef();

	// ANIMATE ELEMENTS
	useEffect(() => {
		const context = gsap.context(() => {
			galleryTimelineRef.current = gsap.timeline({ scrollTrigger: { trigger: galleryTimelineRef.current, start: 'top bottom-=160px', end: 'bottom top+=160px', markers: false }});
			galleryTimelineRef.current.to('.gallery .gallery__heading', { autoAlpha: 1, duration: 2 }, 0.25);
			galleryTimelineRef.current.to('.gallery .gallery__description', { autoAlpha: 1, duration: 2 }, 0.5);
			galleryTimelineRef.current.to('.gallery .impressions__item .item__image', { autoAlpha: 1, duration: 2, stagger: 0.25 }, 0.5);
		}, galleryRef);
		return () => context.revert();
	}, []);

	return (
		<Section className="gallery" ref={ galleryRef }>
				<Heading className="gallery__heading" level="h1" lookLike="h4">{data.attributes.heading }</Heading>
				<Text className="gallery__description">{ data.attributes.description }</Text>
				<Impressions className="gallery__impressions" items={ data.attributes.images } />
		</Section>
	);

};

export default Gallery;