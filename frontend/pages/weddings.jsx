import Page from 'components/04-layouts/page/page';
import Showcase from 'components/03-organisms/showcase/showcase';
import { fetchWedding } from 'queries';

const Weddings = ({ data }) => {

	return (
		<Page meta={ { title: 'Hochzeiten', description: 'Lorem ipsum' } }>
			<Showcase data={ data.wedding } />
		</Page>
	);

};

export async function getServerSideProps() {

	const wedding = await fetchWedding();

	return {
		props: {
			data: {
				wedding: wedding.data.data,
			},
		},
	};

};

export default Weddings;
