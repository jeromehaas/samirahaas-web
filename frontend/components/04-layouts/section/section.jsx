import PropTypes from 'prop-types';
import { forwardRef } from 'react';

const Section = forwardRef(({ className, children }, ref) => {

    return (
        <section className={`${ className } section`} id={ className } ref={ ref }>
            <div className={`${ className }__inner section__inner`}>
                { children }
            </div>
        </section>
    );

});

Section.displayName = 'Section';

Section.propTypes = {
    className: PropTypes.string,
    child: PropTypes.node,
};

Section.defaultProps = {
    className: '',
};

export default Section;

