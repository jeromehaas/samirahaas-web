import Section from 'components/04-layouts/section/section';
import Heading from 'components/01-atoms/heading/heading';
import Link from 'next/link';

const Cta = () => {

	return (
		<Section className="cta">
			<Link className="cta__link link" href="/contact">
				<Heading className="link__text" level="h2">Lets work together</Heading>
				<img className="link__icon" src="/icons/arrow-right.svg" alt="Arrow" />
			</Link>
		</Section>
	);

};

export default Cta;
