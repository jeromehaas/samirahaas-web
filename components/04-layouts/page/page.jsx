import PropTypes from 'prop-types';
import Head from 'components/01-atoms/head/head';

const Page = ({ className, children, meta }) => {

    return (
        <div className={`${ className } page`}>
            <Head meta={ meta } />
            { children }
        </div>
    );

};

Page.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    meta: PropTypes.object,
};

Page.defaultProps = {
    className: '',
};

export default Page;