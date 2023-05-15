import Picture from "components/01-atoms/picture/picture";

const Impressions = ({ className, items }) => {

	return (
		<div className={`${ className } impressions`}>
			<div className="impressions__inner">
				{ items.map((item, index) => {
					const images = item.group.data.map((image) => ({ src: image.attributes.url }))
					return ( <Items images={ images } key={ index } priority={ index === 0 ? true : false } />)
				})}
			</div>
		</div>
	);

};

const Items = ({ images, priority }) => {

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
				 <Picture className="item__image animation--fade-in" src={ image.src } width={2000} height={ 1600 } key={ index } quality={ 100 } alt="Image" priority={ priority } />
			))}
		</div>
	);

};


export default Impressions;