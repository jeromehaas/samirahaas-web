import PropTypes from 'prop-types';
import Heading from 'components/01-atoms/heading/heading';
import Link from 'next/link';
import Picture from 'components/01-atoms/picture/picture';

const PictureCollection = ({ className, items }) => {

    return (
        <div className={`${ className } picture-collection`}>
            <div className="picture-collection__container">
                { items && items.map((item, index) => (
                    <Link className="picture-collection__item item animation--fade-in" href={`/project/${ item.id }`} key={ item.id }>
                        <div className="item__image-wrapper">
                            <Picture className="item__image" src={ item.preview?.url }  key={ item.id } width={ 2000 } height={ 1600 } alt="Image" priority={ index === 0 ? true : false } />
                        </div>
                        { item.heading && ( <Heading className="item__heading" level="h5">{ item.heading }</Heading> )}
                    </Link>
                ))}
            </div>
        </div>
    )

};

PictureCollection.propTypes = {
    className: PropTypes.string,
};

PictureCollection.defaultProps = {
    className: '',
};

export default PictureCollection;