import Section from "components/04-layouts/section/section";
import HighlightSlider from "components/02-molecules/highlight-slider/highlight-slider";
import HighlightPreview from "components/02-molecules/highlight-preview/highlight-preview";

const Teaser = ({ data }) => {


    return (
        <Section className="teaser">
            <HighlightSlider className="teaser__highlight-slider" items={ data.teaser.data.attributes.projects.data }  />
            <HighlightPreview classname="teaser__highlight-preview" items={ data.teaser.data.attributes.projects.data } />
        </Section>
    );

};

export default Teaser;