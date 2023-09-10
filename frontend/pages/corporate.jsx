import Page from 'components/04-layouts/page/page';
import Showcase from 'components/03-organisms/showcase/showcase';
import { fetchCorporate } from 'queries';

const Corporate = ({ data }) => {

	return (
		<Page meta={ { title: 'Corporate', description: 'Lorem ipsum' } }>
			<Showcase data={ data.corporate } />
		</Page>
	);

};

export async function getServerSideProps() {

	const corporate = await fetchCorporate();

	return {
		props: {
			data: {
				corporate: corporate.data.data,
			},
		},
	};

};

export default Corporate;
