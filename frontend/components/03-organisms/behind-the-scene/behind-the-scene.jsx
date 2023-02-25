import Section from "components/04-layouts/section/section";
import PictureCollection from "components/02-molecules/picture-collection/picture-collection";

const BehindTheScenes = ({ data }) => {

    const items = data && data.attributes.images.data.map((item) => {
        return {
            id: item.id,
            preview: item.attributes.formats.large,
        }
    });

    return(
        <Section className="behind-the-scenes">
            <PictureCollection items={ items } />
        </Section>
    )

};

export default BehindTheScenes;