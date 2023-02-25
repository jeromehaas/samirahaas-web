import PropTypes from 'prop-types';
import Image from 'next/image';
import Heading from 'components/01-atoms/heading/heading';
import Link from 'next/link';

const PictureCollection = ({ className, items }) => {

    return (
        <div className={`picture-collection`}>
            <div className="picture-collection__inner">
            { items && items.map((item) => (
                <Link className="picture-collection__item item" href={`/project/${ item.id }`} key={ item.id }>
                    <div className="item__image-wrapper">
                        <Image className="item__image" src={`${ item.preview.url} `} key={ item.id } width={ 2000 } height={ 1600 } alt="Image" />
                    </div>
                    { item.heading && ( <Heading className="item__heading" level="h4">{ item.heading }</Heading> )}
                        
                </Link>
            ))}
            </div>
        </div>
    )

};

PictureCollection.protTypes = {
    className: PropTypes.string,
};

PictureCollection.defaultProps = {
    className: '',
};

export default PictureCollection;