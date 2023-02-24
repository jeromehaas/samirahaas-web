import Image from "next/image";

const Impressions = ({ className, items }) => {


	return (
		<div className={`${ className } impressions`}>
			<div className="impressions__inner">
				{ items.map((item, index) => {
					const images = item.group.data.map((image) => ({ src: `${ process.env.NEXT_PUBLIC_STRAPI_URI }${ image.attributes.formats?.large.url }`}))
					return ( <Items images={ images } key={ index } />)
				})}
			</div>
		</div>
	);

};

const Items = ({ images }) => {

	const getLength = (images) => {
		let length;
		switch(images.length) {
			case 1: length = 'one'; break;
			case 2: length = 'two'; break;
			case 3: length = 'three'; break;
		};
		return length;
	};
	
	return (
		<div className={`impressions__item item item--${ getLength(images) }`}>
			{ images.map((image, index) => (
				<Image className="item__image" src={ image.src } width={2000} height={ 1600 } key={ index } alt="Image" />
			))}
		</div>
	);

};


export default Impressions;