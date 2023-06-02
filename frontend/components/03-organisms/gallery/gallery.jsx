import Section from 'components/04-layouts/section/section';
import Heading from 'components/01-atoms/heading/heading';
import Text from 'components/01-atoms/text/text';
import Impressions from 'components/02-molecules/impressions/impressions';
import Link from 'next/link';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useRef, useEffect } from 'react';
import { useRouter } from 'next/router';
import Markdown from 'components/01-atoms/markdown/markdown';

const Gallery = ({ data }) => {

	// GET PATH ID
	const router = useRouter();
	const { id } = router.query;

	// REGISTER PLUGIN
	gsap.registerPlugin(ScrollTrigger);

	// CREATE REFS
	const galleryRef = useRef(null);
	const galleryTimelineRef = useRef(null);

	// ANIMATE ELEMENTS
	useEffect(() => {
		const context = gsap.context(() => {
			galleryTimelineRef.current = gsap.timeline({ scrollTrigger: { trigger: galleryRef.current, start: 'top bottom-=160px', end: 'bottom top+=160px', markers: false } });
			galleryTimelineRef.current.to('.gallery .gallery__heading', { autoAlpha: 1, duration: 1, top: 0 }, 0.25);
			galleryTimelineRef.current.to('.gallery .gallery__description', { autoAlpha: 1, duration: 1, top: 0 }, 0.5);
			galleryTimelineRef.current.to('.gallery .impressions__item .item__image', { autoAlpha: 1, duration: 1, top: 0, stagger: 0.25 }, 0.5);
			galleryTimelineRef.current.to('.gallery .gallery__navigation', { autoAlpha: 1, duration: 1, top: 0 }, 1.5);
		}, galleryRef);
		return () => { return context.revert(); };
	}, [id]);

	return (
		<Section className="gallery" ref={ galleryRef }>
			<Heading className="gallery__heading animation--fade-in" level="h1" lookLike="h4">{ data.attributes.heading }</Heading>
			{ data.attributes.description ? <Markdown className="gallery__description animation--fade-in">{ data.attributes.description }</Markdown> : null }
			<Impressions className="gallery__impressions" items={ data.attributes.images } />
			{ data.attributes.navigation?.next.data.id && data.attributes.navigation?.previous.data.id ? (
				<nav className="gallery__navigation navigation animation--fade-in">
					<Link className="navigation__item item" href={ `/project/${ data.attributes.navigation.previous.data.id }` }>
						<img className="item__icon" src="/icons/chevron-left.svg" alt="Arrow" />
						<Text className="item__label">zurück</Text>
					</Link>
					<Link className="navigation__item item" href={ `/project/${ data.attributes.navigation.next.data.id }` }>
						<Text className="item__label">weiter</Text>
						<img className="item__icon" src="/icons/chevron-right.svg" alt="Arrow" />
					</Link>
				</nav>
			) : null }
		</Section>
	);

};

export default Gallery;
