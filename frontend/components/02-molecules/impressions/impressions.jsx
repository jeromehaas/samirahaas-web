import Picture from 'components/01-atoms/picture/picture';

const Impressions = ({ className, items }) => {

	const getLength = (images) => {
		switch (images.length) {
		case 1: return 'one';
		case 2: return 'two';
		case 3: return 'three';
		default: return 'one';
		};
	};

	return (
		<div className={ `${ className } impressions` }>
			<div className="impressions__inner">
				{ items.map((item) => {
					return (
						<div className={ `impressions__item item item--${ getLength(item.group.data) }` } key={ item.id }>
							{ item.group.data.map((image) => {
								return (
									<Picture className="item__image animation" src={ image.attributes.url } key={ Math.random() } quality={ 100 } alt="Image" width={ image.attributes.width } height={ image.attributes.height } />
								);
							})}
						</div>
					);
				})}
			</div>
		</div>
	);

};

export default Impressions;
