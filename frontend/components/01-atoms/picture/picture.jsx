import PropTypes from 'prop-types';
import Image from 'next/image';

const Picture =({ className, src, alt, quality }) => {

    return (
        <div className={`${ className } picture`}>
            { src ? (
                <Image className="picture__source" src={ src } alt={ alt } width={ 1300 } height={ 700 } quality={ quality || 100 } />
            ) : (
                <div className="picture__alternative"></div>
            )}
        </div>
    );

};

Picture.propTypes = {
    className: PropTypes.string,
};

Picture.defaultProps = {
    className: '',
}

export default Picture;

