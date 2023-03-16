import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import Heading from 'components/01-atoms/heading/heading';
import PropTypes from 'prop-types';
import Picture from 'components/01-atoms/picture/picture';

const HighlightSlider = ({ className, items }) => {

    const timeline = useRef();
    const sliderRef = useRef();
    const [ counter, setCounter ] = useState(0);
    
    const updateCounter = () => {
        const isLastSlide = counter === items.length - 1;
        const newCounter = isLastSlide ? 0 : counter + 1;
        setCounter(newCounter);
    }

    const playSlide = () => {
        const context = gsap.context(() => {
            const status = gsap.utils.toArray('.box .progress__status');
            const images = gsap.utils.toArray('.preview .preview__image');
            const labels = gsap.utils.toArray('.box .box__label');
            const titles = gsap.utils.toArray('.box .box__title');
            timeline.current = gsap.timeline({ onComplete: updateCounter });
            timeline.current.to(status, { right: '100%', left: '0%', duration: 0, ease: 'inOut' }, 0);
            timeline.current.to(images, { opacity: 0, duration: 0.5, ease: 'inOut' }, 0);
            timeline.current.to(labels, { opacity: 0.2, duration: 0.5, ease: 'inOut' }, 0);
            timeline.current.to(titles, { opacity: 0.2, duration: 0.5, ease: 'inOut' }, 0);
            timeline.current.to(labels[counter], { opacity: 1, duration: 0.5, ease: 'inOut' }, 0.5);
            timeline.current.to(titles[counter], { opacity: 1, duration: 0.5, ease: 'inOut' }, 0.5);
            timeline.current.to(images[counter], { opacity: 1, duration: 1, ease: 'inOut' }, 0.5);
            timeline.current.to(status[counter], { right: '0%', duration: 2, ease: 'none' }, 2.5);
            timeline.current.to(status[counter], { left: '100%', duration: 2, ease: 'none ' }, 4.5);
            timeline.current.to(images[counter], { opacity: 0, duration: 0.5, ease: 'inOut' }, 6);
        }, sliderRef );
        return () => context.revert();
    };



    useEffect(() => {
        playSlide();
    }, [counter])
    
    return (
        <div className={`${ className } highlight-slider`} ref={ sliderRef }>
            <div className="highlight-slider__preview preview">
                { items.map((item) => (
                    <Picture className="preview__image" src={ item.attributes.teaser.data?.attributes.formats.large.url } alt="Image" key={ item.id } width={ 2000 } height={ 1600 } />
                ))}
            </div>
            <div className="highlight-slider__projects projects">
                { items.map((item) => (
                    <div className="projects__box box" key={ item.id }>
                        <div className="box__progress progress">
                            <div className="progress__background"></div>
                            <div className="progress__status"></div>
                        </div>
                        <Heading className="box__label" level="h3">{ item.attributes.category }</Heading>
                        <Heading className="box__title" level="h4" >{ item.attributes.heading }</Heading>
                    </div>
                ))}
            </div>
        </div>
    );
    
};

HighlightSlider.propTypes = {
    className: PropTypes.string,
};

HighlightSlider.defaultProps = {
    className: '',
};

export default HighlightSlider;