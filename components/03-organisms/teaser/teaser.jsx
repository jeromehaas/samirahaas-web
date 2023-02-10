import Section from "components/04-layouts/section/section";
import HighlightSlider from "components/02-molecules/highlight-slider/highlight-slider";
import HighlightPreview from "components/02-molecules/highlight-preview/highlight-preview";

const Teaser = () => {

    return (
        <Section className="teaser">
            <HighlightSlider className="teaser__highlight-slider"  />
            <HighlightPreview classname="teaser__highlight-preview" />
        </Section>
    );

};

export default Teaser;