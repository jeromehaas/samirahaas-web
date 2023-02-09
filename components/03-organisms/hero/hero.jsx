import PropTypes from 'prop-types';
import Heading from 'components/01-atoms/heading/heading';
import Text from 'components/01-atoms/text/text';
import Picture from 'components/01-atoms/picture/picture';
import Section from 'components/04-layouts/section/section';
import Scroller from 'components/01-atoms/scroller/scroller';

const Hero = () => {

    return (
        <Section className="hero">
            <Heading className="hero__heading">Fotografie & Gestaltung</Heading>
            <Text className="hero__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus facere repellat voluptatem natus doloremque a tenetur, numquam eligendi nulla velit inventore necessitatibus molestias dicta officia, eos autem corrupti asperiores possimus.</Text>
            <Scroller className="hero__scroller" />
        </Section>
    );

};

export default Hero;