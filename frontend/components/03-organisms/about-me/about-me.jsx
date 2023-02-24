import Section from "components/04-layouts/section/section";
import Heading from "components/01-atoms/heading/heading";
import Text from "components/01-atoms/text/text";
import Picture from "components/01-atoms/picture/picture";
import Link from "components/01-atoms/link/link";

const AboutMe = () => {

    return (
        <Section className="about-me">
            <div className="about-me__content">
                <Heading className="content__heading" level="h2">Über Mich</Heading>
                <Text className="content__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit laborum, dolores qui, commodi doloremque tenetur iusto repudiandae quisquam consequuntur quis tempora deserunt saepe rem, dignissimos eligendi labore. Quisquam dolore tempora delectus qui reiciendis a consequuntur consequatur. Vitae aliquam dolor repellat.</Text>
                <Link className="content__link" href="/">Kontakt</Link>
            </div>
            <Picture className="about-me__image" src="https://picsum.photos/id/301/500/800" alt="Image" />
        </Section>
    );

};

export default AboutMe;