import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import Heading from 'components/01-atoms/heading/heading';
import Image from 'next/image';
import PropTypes from 'prop-types';

const HighlightSlider = ({ className }) => {

    const sliderItems = [
        { id: 1,label: 'Storytelling', title: 'Vergänglichkeit', image: { url: "https://picsum.photos/id/301/1440/800" } },
        { id: 2,label: 'Hochzeiten', title: 'Nicole & Sandro', image: { url: "https://picsum.photos/id/302/1440/800" } },
        { id: 3,label: 'Corporate', title: 'Keramik-Kurs Buitig', image: { url: "https://picsum.photos/id/305/1440/800" } },
        { id: 4,label: 'Architektur', title: 'Boutique Hotel B2', image: { url: "https://picsum.photos/id/307/1440/800" } },
    ];
    
    const timeline = useRef();
    const sliderRef = useRef();
    const [ counter, setCounter ] = useState(0);
    
    const updateCounter = () => {
        const isLastSlide = counter === sliderItems.length - 1;
        const newCounter = isLastSlide ? 0 : counter + 1;
        setCounter(newCounter);
    }

    const playSlide = () => {
        gsap.context(() => {
            const status = gsap.utils.toArray('.box .progress__status');
            const images = gsap.utils.toArray('.preview .preview__image');
            const labels = gsap.utils.toArray('.box .box__label');
            const titles = gsap.utils.toArray('.box .box__title');
            timeline.current = gsap.timeline({ onComplete: updateCounter });
            timeline.current.to(status, { right: '100%', left: '0%', duration: 0, ease: 'inOut' }, '-0');
            timeline.current.to(images, { opacity: 0, duration: 0.5, ease: 'inOut' });
            timeline.current.to(labels, { opacity: 0.2, duration: 0.5, ease: 'inOut' }, '-0');
            timeline.current.to(titles, { opacity: 0.2, duration: 0.5, ease: 'inOut' }, '-0');
            timeline.current.to(labels[counter], { opacity: 1, duration: 0.5, ease: 'inOut' }, '-=0.5');
            timeline.current.to(titles[counter], { opacity: 1, duration: 0.5, ease: 'inOut' }, '-=0.5');
            timeline.current.to(images[counter], { opacity: 1, duration: 1, ease: 'inOut' }, '-=0.5');
            timeline.current.to(status[counter], { right: '0%', duration: 2, ease: 'none' });
            timeline.current.to(status[counter], { left: '100%', duration: 2, ease: 'none ' });
            timeline.current.to(images[counter], { opacity: 0, duration: 0.5, ease: 'inOut' });
        }, sliderRef );
    };



    useEffect(() => {
        playSlide();
    }, [counter])
    
    return (
        <div className={`${ className } highlight-slider`} ref={ sliderRef }>
            <div className="highlight-slider__preview preview">
                { sliderItems.map((item) => (
                    <Image className="preview__image" src={ item.image.url } alt="Image" key={ item.id } width={ 2000 } height={ 1600 } />
                ))}
            </div>
            <div className="highlight-slider__projects projects">
                { sliderItems.map((item) => (
                    <div className="projects__box box" key={ item.id }>
                        <div className="box__progress progress">
                            <div className="progress__background"></div>
                            <div className="progress__status"></div>
                        </div>
                        <Heading className="box__label" level="h3">{ item.label }</Heading>
                        <Heading className="box__title" level="h4" >{ item.title }</Heading>
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