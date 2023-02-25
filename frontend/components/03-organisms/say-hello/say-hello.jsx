import Section from "components/04-layouts/section/section";
import Heading from "components/01-atoms/heading/heading";
import Text from "components/01-atoms/text/text";
import Picture from "components/01-atoms/picture/picture";

const SayHello = () => {

    return (
        <Section className="say-hello">
            <div className="say-hello__content content">
                <Heading className="content__heading heading" level="h1" lookLike="h1">
                    <span className="heading__item">Say</span> 
                    <span className="heading__item">Hello</span> 
                </Heading>
                <Text className="content__text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.</Text>
            </div>
            <Picture className="say-hello__image" src="/images/placeholders/placeholder.png" alt="Samira Haas" />
            
        </Section>
    );

};

export default SayHello;