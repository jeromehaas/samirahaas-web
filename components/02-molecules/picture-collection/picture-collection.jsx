import PropTypes from 'prop-types';
import Image from 'next/image';
import Heading from 'components/01-atoms/heading/heading';
import Link from 'next/link';

const PictureCollection = () => {

    const items = [
        { id: 1, heading: 'Vergänglichkeit', image: { url: "https://picsum.photos/id/301/900/600" } },
        { id: 2, heading: 'Nicole & Sandro', image: { url: "https://picsum.photos/id/302/600/800" } },
        { id: 3, heading: 'Keramik-Kurs Buitig', image: { url: "https://picsum.photos/id/305/500/880" } },
        { id: 4, heading: 'Boutique Hotel B2', image: { url: "https://picsum.photos/id/307/800/500" } },
        { id: 5, heading: 'Vergänglichkeit', image: { url: "https://picsum.photos/id/301/900/600" } },
        { id: 6, heading: 'Nicole & Sandro', image: { url: "https://picsum.photos/id/302/600/800" } },
        { id: 7, heading: 'Keramik-Kurs Buitig', image: { url: "https://picsum.photos/id/305/500/880" } },
        { id: 8, heading: 'Boutique Hotel B2', image: { url: "https://picsum.photos/id/307/800/500" } },
        { id: 9, heading: 'Vergänglichkeit', image: { url: "https://picsum.photos/id/301/900/600" } },
        { id: 10, heading: 'Nicole & Sandro', image: { url: "https://picsum.photos/id/302/600/800" } },
        { id: 11, heading: 'Keramik-Kurs Buitig', image: { url: "https://picsum.photos/id/305/500/800" } },
        { id: 12, heading: 'Boutique Hotel B2', image: { url: "https://picsum.photos/id/307/800/500" } },
        { id: 13, heading: 'Vergänglichkeit', image: { url: "https://picsum.photos/id/301/900/600" } },
        { id: 14, heading: 'Nicole & Sandro', image: { url: "https://picsum.photos/id/302/600/800" } },
        { id: 15, heading: 'Keramik-Kurs Buitig', image: { url: "https://picsum.photos/id/305/500/800" } },
        { id: 16, heading: 'Boutique Hotel B2', image: { url: "https://picsum.photos/id/307/800/500" } },
    ];

    return (
        <div className="picture-collection">
            <div className="picture-collection__inner">
            { items.map((item) => (
                <Link className="picture-collection__item item" href="/" key={ item.id }>
                    <div className="item__image-wrapper">
                        <Image className="item__image" src={ item.image.url } key={ item.id } width={ 2000 } height={ 1600 } alt="Image" />
                    </div>
                    <Heading className="item__heading" level="h4">{ item.heading }</Heading>
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