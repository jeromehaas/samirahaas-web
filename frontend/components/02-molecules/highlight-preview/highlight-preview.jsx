import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import Heading from 'components/01-atoms/heading/heading';
import PropTypes from 'prop-types';
import Picture from 'components/01-atoms/picture/picture';

const HighlightPreview = ({ className, items }) => {
    
    const timeline = useRef();
    const previewRef = useRef();
    const [ counter, setCounter ] = useState(0);
    
    const updateCounter = () => {
        const isLastSlide = counter === items.length - 1;
        const newCounter = isLastSlide ? 0 : counter + 1;
        setCounter(newCounter);
    }

    const playSlide = () => {
        gsap.context(() => {
            const status = gsap.utils.toArray('.progress .progress__status');
            const images = gsap.utils.toArray('.preview .preview__image');
            const boxes = gsap.utils.toArray('.projects .box');
            timeline.current = gsap.timeline({ onComplete: updateCounter });
            timeline.current.to(status, { right: '100%', left: '0%', duration: 0 });
            timeline.current.to(images, { opacity: 0, duration: 0.25, ease: 'inOut' });
            timeline.current.to(boxes, { opacity: 0, duration: 0.25, ease: 'inOut' });
            timeline.current.to(boxes[counter], { opacity: 1, duration: 2, ease: 'inOut' }, '-=0.25');
            timeline.current.to(images[counter], { opacity: 1, duration: 2, ease: 'inOut' }, '-=0.25');
            timeline.current.to(status[0], { right: '0%', duration: 2, ease: 'none' });
            timeline.current.to(status[0], { left: '100%', duration: 2, ease: 'none ' });
            timeline.current.to(images[counter], { opacity: 0, duration: 0.25, ease: 'inOut' });
        }, previewRef );
    };

    useEffect(() => {
        playSlide();
    }, [counter])
    
    return (
        <div className={`${ className } highlight-preview`} ref={ previewRef }>
            <div className="highlight-preview__preview preview">
                { items.map((item) => (
                    <Picture className="preview__image" src={ item.attributes.teaser.data?.attributes.formats.large.url } alt="Image" key={ item.id } width={ 2000 } height={ 1600 } quality={ 100 } />
                ))}
            </div>
            <div className="highlight-preview__progress progress">
                <div className="progress__background"></div>
                <div className="progress__status"></div>
            </div>
            <div className="highlight-preview__projects projects">
                { items.map((item) => (
                    <div className="projects__box box" key={ item.id }>
                        <Heading className="box__label" level="h3">{ item.attributes.category }</Heading>
                        <Heading className="box__title" level="h4" >{ item.attributes.heading }</Heading>
                    </div>
                ))}
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