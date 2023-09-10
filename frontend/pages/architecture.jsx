import Page from 'components/04-layouts/page/page';
import Showcase from 'components/03-organisms/showcase/showcase';
import { fetchArchitecture } from 'queries/index.js';

const Architecture = ({ data }) => {

	return (
		<Page meta={ { title: 'Architektur', description: 'Lorem ipsum' } }>
			<Showcase data={ data.architecture } />
		</Page>
	);

};

export async function getServerSideProps() {

	const architecture = await fetchArchitecture();

	return {
		props: {
			data: {
				architecture: architecture.data.data,
			},
		},
	};

};

export default Architecture;
