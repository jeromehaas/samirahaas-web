import PropTypes from 'prop-types';
import { gsap } from 'gsap';
import { useEffect, useRef } from 'react';

const Scroller =({ className }) => {

    const scrollerRef =  useRef();

    const handleClick = () => {
        console.log('click');

    };

    useEffect(() => {
        if (!scrollerRef) return;
        const context = gsap.context(() => {
            gsap.to('.scroller__icon', { top: 8, repeat: -1, duration: 1, yoyo: true, ease: 'power1.inOut' });   
        }, scrollerRef);
        return () =>  context.revert();
    }, []);

    return (
        <div className={`${ className } scroller`} href="/#sroller-target" ref={ scrollerRef }>
            <img className="scroller__icon" src='/icons/chevron-down.svg' alt='Scroller' onClick={ handleClick } />
        </div>
    );

};

Scroller.propTypes = {
    className: PropTypes.string,
};

Scroller.defaultProps = {
    className: '',
}

export default Scroller;

