import Section from "components/04-layouts/section/section";
import Heading from "components/01-atoms/heading/heading";
import Text from "components/01-atoms/text/text";
import Picture from "components/01-atoms/picture/picture";

const SayHello = ({ data }) => {

    return (
        <Section className="say-hello">
            <div className="say-hello__content content">
                <Heading className="content__heading heading" level="h1" lookLike="h1">
                    { data.attributes.heading }
                </Heading>
                <Text className="content__text">{ data.attributes.text }</Text>
            </div>
            <Picture className="say-hello__image" src={ data.attributes.image.data.attributes.formats.large.url } alt="Samira Haas" />
            
        </Section>
    );

};

export default SayHello;