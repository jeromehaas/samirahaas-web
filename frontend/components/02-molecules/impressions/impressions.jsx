import Picture from 'components/01-atoms/picture/picture';

const Impressions = ({ className, items }) => {

	return (
		<div className={ `${ className } impressions` }>
			<div className="impressions__inner">
				{ items.map((item, index) => {
					return (
						<div className={ `impressions__item item` } key={ item.id }>
							{ item.group.data.map((image) => {
								return (
									<Picture className="item__image animation--fade-in" src={ image.attributes.url } quality={ 100 } alt="Image" width={ image.attributes.width } height={ image.attributes.height } priority={ false } />
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
