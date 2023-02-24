import Section from "components/04-layouts/section/section";
import Heading from "components/01-atoms/heading/heading";
import Text from "components/01-atoms/text/text";
import Picture from "components/01-atoms/picture/picture";

const Values = () => {

    return (
        <Section className="values">
            <Picture className="values__image" src="https://picsum.photos/id/302/800/500" alt="" />
            <div className="values__content content">
                <Heading className="content__heading" level="h2" lookLike="h3">Meine Werte</Heading>
                <Text className="content__text text--large">Empathie</Text>
                <Text className="content__text text--large">Kreativität</Text>
                <Text className="content__text text--large">Zuverlässigkeit</Text>
                <Text className="content__text text--large">Ästhetik</Text>
                <Text className="content__text text--large">Individualismus</Text>
                <Text className="content__text text--large">Offenheit</Text>
            </div>
        </Section>
    );

};

export default Values;
