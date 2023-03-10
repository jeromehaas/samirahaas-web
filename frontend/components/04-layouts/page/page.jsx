import PropTypes from 'prop-types';
import Head from 'components/01-atoms/head/head';
import Navigation from 'components/03-organisms/navigation/navigation';
import Jumper from 'components/03-organisms/jumper/jumper';
import Footer from 'components/03-organisms/footer/footer';

const Page = ({ className, children, meta }) => {

    return (
        <div className={`${ className } page`}>
            <Head meta={ meta } />
            <Navigation />
            { children }
            <Jumper />
            <Footer />
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