import Page from 'components/04-layouts/page/page';
import Showcase from 'components/03-organisms/showcase/showcase';
import client from 'graphql/client';
import queries from 'graphql/queries';

const Storytelling = ({ data }) => {

	return (
		<Page meta={ { title: 'Storytelling', description: 'Lorem ipsum' } }>
			<Showcase data={ data.storytelling } />
		</Page>
	);

};

export async function getServerSideProps() {

	const storytelling = await client.query({ query: queries.GET_STORYTELLING() });

	return {
		props: {
			data: {
				storytelling: storytelling.data.storytelling.data,
			},
		},
	};

};

export default Storytelling;
