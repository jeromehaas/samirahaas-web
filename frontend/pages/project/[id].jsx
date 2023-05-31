import Page from 'components/04-layouts/page/page';
import queries from 'graphql/queries';
import client from 'graphql/client';
import Gallery from 'components/03-organisms/gallery/gallery';

const Project = ({ data }) => {

	return (
		<Page>
			<Gallery heading={ data.project.attributes.heading } data={ data.project } />
		</Page>
	);

};

export async function getServerSideProps(context) {

	const { id } = context.query;
	const project = await client.query({ query: queries.GET_PROJECTS_BY_ID(id) });

	return {
		props: {
			data: {
				project: project.data.project.data,
			},
		},
	};

};

export default Project;
