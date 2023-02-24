import Section from "components/04-layouts/section/section";
import Heading from "components/01-atoms/heading/heading";
import Text from "components/01-atoms/text/text";
import Impressions from "components/02-molecules/impressions/impressions";

const Gallery = ({ data }) => {

	return (
		<Section className="gallery">
				<Heading className="gallery__heading" level="h1" lookLike="h4">{data.attributes.heading }</Heading>
				<Text className="gallery__description">{ data.attributes.description }</Text>
				<Impressions className="gallery__impressions" items={ data.attributes.images } />
		</Section>
	);

};

export default Gallery;