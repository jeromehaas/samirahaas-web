import Section from "components/04-layouts/section/section";
import Heading from "components/01-atoms/heading/heading";
import PictureCollection from "components/02-molecules/picture-collection/picture-collection";

const Showcase = () => {

    return (
        <Section className="showcase">
            <Heading className="showcase__heading" level="h1">Cor <br /> porate</Heading>
            <PictureCollection className="showcase__picture-collection" />
        </Section>
    )
};

export default Showcase;