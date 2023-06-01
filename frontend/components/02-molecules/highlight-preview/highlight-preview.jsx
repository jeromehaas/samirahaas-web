import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import Heading from 'components/01-atoms/heading/heading';
import PropTypes from 'prop-types';
import Picture from 'components/01-atoms/picture/picture';
import Link from 'next/link';

const HighlightPreview = ({ className, items }) => {

	const timeline = useRef();
	const previewRef = useRef();
	const [counter, setCounter] = useState(0);

	const updateCounter = () => {
		const isLastSlide = counter === items.length - 1;
		const newCounter = isLastSlide ? 0 : counter + 1;
		setCounter(newCounter);
	};

	useEffect(() => {
		const context = gsap.context(() => {
			if (!items || items.length === 0) return;
			const status = gsap.utils.toArray('.progress .progress__status');
			const images = gsap.utils.toArray('.preview .preview__image');
			const boxes = gsap.utils.toArray('.projects .box');
			timeline.current = gsap.timeline({ onComplete: updateCounter });
			timeline.current.to(status, { right: '100%', left: '0%', duration: 0 }, 0);
			timeline.current.to(images, { opacity: 0, duration: 1, ease: 'inOut' }, 0);
			timeline.current.to(boxes, { zIndex: 0, duration: 0, ease: 'inOut' }, 0);
			timeline.current.to(boxes, { opacity: 0, duration: 1, ease: 'inOut' }, 0);
			timeline.current.to(boxes[counter], { zIndex: 5, duration: 0, ease: 'inOut' }, 0);
			timeline.current.to(boxes[counter], { opacity: 1, duration: 1, ease: 'inOut' }, 0.5);
			timeline.current.to(images[counter], { opacity: 1, duration: 1, ease: 'inOut' }, 0.5);
			timeline.current.to(status, { opacity: 1, duration: 0, ease: 'none ' }, 0.5);
			timeline.current.to(status, { right: '0%', duration: 6, ease: 'none' }, 0.5);
			timeline.current.to(status, { opacity: 0, duration: 1, ease: 'inOut' }, 8);
			timeline.current.to(images[counter], { opacity: 0, duration: 1, ease: 'inOut' }, 8);
			timeline.current.to(images[counter], { opacity: 0, duration: 1, ease: 'inOut' }, 8);
			timeline.current.to(boxes[counter], { opacity: 0, duration: 1, ease: 'inOut' }, 8);
		}, previewRef);
		return () => { return context.revert(); };
	}, [counter]);

	return (
		<div className={ `${ className } highlight-preview` } ref={ previewRef }>
			<div className="highlight-preview__preview preview">
				{ items?.map((item) => {
					return (
						<Picture className="preview__image" src={ item.attributes.teaser.data?.attributes.url } alt="Image" key={ item.id } quality={ 100 } priority />
					);
				})}
			</div>
			<div className="highlight-preview__progress progress">
				<div className="progress__background" />
				<div className="progress__status" />
			</div>
			<div className="highlight-preview__projects projects">
				{ items?.map((item) => {
					return (
						<Link className="projects__box box" key={ item.id } href={ `/project/${ item.id }` }>
							<Heading className="box__label" level="h3">{ item.attributes.category }</Heading>
							<Heading className="box__title" level="h5">{ item.attributes.heading }</Heading>
						</Link>
					);
				})}
			</div>
		</div>
	);

};

HighlightPreview.propTypes = {
	className: PropTypes.string,
};

HighlightPreview.defaultProps = {
	className: '',
};

export default HighlightPreview;
