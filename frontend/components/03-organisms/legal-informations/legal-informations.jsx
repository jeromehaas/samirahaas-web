import Section from "components/04-layouts/section/section";
import Heading from "components/01-atoms/heading/heading";
import Text from "components/01-atoms/text/text";
import ReactMarkdown from "react-markdown";

const LegalInformations = ({ data }) => {

    return (
        <Section className="legal-informations">
            <Heading className="legal-informations__heading heading" level="h1">
                <span className="heading__item" >{ data.attributes.heading.top }</span>
                <span className="heading__item" >{ data.attributes.heading.sub }</span>
            </Heading>
            <div className="legal-informations__paragraphs paragraphs">
                { data.attributes.paragraph.map((item) => (
                    <div className="paragraphs__item item" key={ item.id }>
                        <Heading className="item__heading" level="h4">{ item.heading }</Heading>
                        <ReactMarkdown className="item__text">{ item.text }</ReactMarkdown>
                    </div>
                ))}
            </div>
        </Section>
    );

};

export default LegalInformations;