import PropTypes from 'prop-types';

const Text = ({ className, children, modifier, size }) => {

    return (
        <p className={` ${ className } text ${ modifier ? `text--${ modifier }` : '' } ${ size ? `text--${ size }` : '' } `}>
            { children }
        </p>
    );

};

Text.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
    modifier: PropTypes.string,
};

Text.defaultProps = {
    className: '',
    modifier: '',
    size: '',
};

export default Text;