import PropTypes from 'prop-types';

const Section = ({ className, children }) => {

    return (
        <section className={`${ className } section`} id={ className }>
            <div className={`${ className }__inner section__inner`}>
                { children }
            </div>
        </section>
    );

};

Section.propTypes = {
    className: PropTypes.string,
    child: PropTypes.node,
};

Section.defaultProps = {
    className: '',
};

export default Section;

