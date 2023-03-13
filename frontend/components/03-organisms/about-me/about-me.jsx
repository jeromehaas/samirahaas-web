import Section from "components/04-layouts/section/section";
import Heading from "components/01-atoms/heading/heading";
import Text from "components/01-atoms/text/text";
import Picture from "components/01-atoms/picture/picture";
import Link from "components/01-atoms/link/link";

const AboutMe = ({ data }) => {


    return (
        <Section className="about-me">
            <div className="about-me__content content">
                <Heading className="content__heading" level="h2">{ data.attributes.heading }</Heading>
                <Text className="content__text">{ data.attributes.text }</Text>
                <Link className="content__link" href={ data.attributes.button.link }>{ data.attributes.button.label }</Link>
            </div>
            <Picture className="about-me__image" src={ data.attributes.image.data?.attributes.formats.large.url } alt="Image" />
        </Section>
    );

};

export default AboutMe;