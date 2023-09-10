import Page from 'components/04-layouts/page/page';
import Showcase from 'components/03-organisms/showcase/showcase';
import { fetchDesign } from 'queries';

const Design = ({ data }) => {

	return (
		<Page meta={ { title: 'Gestaltung', description: 'Lorem ipsum' } }>
			<Showcase data={ data.design } />
		</Page>
	);

};

export async function getServerSideProps() {

	const design = await fetchDesign();

	return {
		props: {
			data: {
				design: design.data.data,
			},
		},
	};

};

export default Design;
