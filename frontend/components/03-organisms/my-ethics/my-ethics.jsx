import Section from "components/04-layouts/section/section";
import Heading from "components/01-atoms/heading/heading";
import Text from "components/01-atoms/text/text";
import Picture from "components/01-atoms/picture/picture";

const MyEthics = ({ data }) => {


    return (
        <Section className="my-ehtics">
            <Picture className="my-ehtics__image" src={ data.attributes.image.data.attributes.formats.small.url } alt="Leave" />
            <div className="my-ehtics__content content">
                <Heading className="content__heading" level="h2" lookLike="h3">{ data.attributes.heading }</Heading>
                { data.attributes.values.map((item) => (
                    <Text className="content__text text--large" key={ item.id }>{ item.value }</Text>
                ))}
            </div>
        </Section>
    );

};

export default MyEthics;
