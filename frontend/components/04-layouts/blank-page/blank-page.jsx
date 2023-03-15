import PropTypes from 'prop-types';
import Head from 'components/01-atoms/head/head';

const BlankPage = ({ className, children, meta }) => {

    return (
        <div className={`${ className } blank-page`}>
            <Head meta={ meta } />
            { children }
        </div>
    );

};

BlankPage.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    meta: PropTypes.object,
};

BlankPage.defaultProps = {
    className: '',
};

export default BlankPage;