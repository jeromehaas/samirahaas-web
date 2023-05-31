import Page from 'components/04-layouts/page/page';
import Publication from 'components/03-organisms/publication/publication';
import client from 'graphql/client';
import queries from 'graphql/queries';

const Imprint = ({ data }) => {

	return (
		<Page meta={ { title: 'Impressum', description: 'Lorem ipsum' } }>
			<Publication data={ data.imprint } />
		</Page>
	);

};

export async function getServerSideProps() {

	const imprint = await client.query({ query: queries.GET_IMPRINT() });

	return {
		props: {
			data: {
				imprint: imprint.data.imprint.data,
			},
		},
	};

};

export default Imprint;
