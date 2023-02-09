import PropTypes from 'prop-types';
import NextHead from 'next/head';

const Head = ({ meta }) => {

    return (
        <NextHead>
            <title>{`${meta.title} | Samira Haas`}</title>
            <meta name="description" content={ meta.description } />
            <link rel="shortcut icon" href="/favicons/favicon.png" type="image/x-icon" />
            <meta property="og:title" content={ meta.title } />
            <meta property="og:description" content={ meta.description } />
            <meta property="og:image" content={ meta.image } />
            <meta property="og:image:width" content="1920"/>
            <meta property="og:image:height" content="1080"/>
            <meta property="og:image:alt" content={ meta.description }/>
            <meta property="og:image:type" content="image/png"/>
            <meta property="og:type" content="image/png"/>
            <meta property="og:url" content="samirahaas.ch"/>
            <meta property="og:site_name" content={ meta.title } />
        </NextHead>
    );

};

Head.propTypes = {
    meta: PropTypes.object
};

Head.defaultProps = {
    meta: {
        title: 'Fotografie & Gestaltung',
        description: '',
        image: 'https://samirahaas.ch/images/placeholders/placeholder.png'
    },
};

export default Head;