import Section from "components/04-layouts/section/section";
import Heading from "components/01-atoms/heading/heading";
import Text from "components/01-atoms/text/text";
import Impressions from "components/02-molecules/impressions/impressions";
import Link from "next/link";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useRef, useEffect } from 'react';
import { useRouter } from "next/router";
import Markdown from "components/01-atoms/markdown/markdown";

const Gallery = ({ data }) => {

	console.log(data);

	// SETUP ROUTER
	const router = useRouter();

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
				<Heading className="gallery__heading" level="h1" lookLike="h4">{ data.attributes.heading }</Heading>
				<Markdown className="gallery__description">{ data.attributes.description }</Markdown>
				<Impressions className="gallery__impressions" items={ data.attributes.images } />
				<nav className="gallery__navigation navigation">
					<Link className="navigation__item item" href={`/${ data.attributes.category.toLowerCase() }`}>
							<img className="item__icon" src='/icons/chevron-left.svg' alt='Scroller' />
							<Text className="item__label">zurück</Text>
					</Link>
				</nav>
		</Section>
	);

};

export default Gallery;