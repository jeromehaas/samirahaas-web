import PropTypes from 'prop-types';

const Scroller =({ className }) => {

    return (
        <div className={`${ className } scroller`}>
            <img className="scroller__icon" src='/icons/chevron-down.svg' alt='Scroller' />
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

