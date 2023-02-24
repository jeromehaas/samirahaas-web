import Section from "components/04-layouts/section/section";
import Heading from "components/01-atoms/heading/heading";
import PictureCollection from "components/02-molecules/picture-collection/picture-collection";

const Showcase = ({ heading, data }) => {

	const items = data && data.map((item) => {
		return {
			id: item.id,
			heading: item.attributes.heading,
			preview: item.attributes.preview.data.attributes.formats.large,
		}
	});

  return (
        <Section className="showcase">
            <Heading className="showcase__heading heading" level="h1">
                { heading.map((item, index) => <span className="heading__item" key={ index } >{ item }</span> )}
            </Heading>
            <PictureCollection className="showcase__picture-collection" items={ items }  />
        </Section>
    )
};

export default Showcase;