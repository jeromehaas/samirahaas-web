import Page from 'components/04-layouts/page/page';
import Gallery from 'components/03-organisms/gallery/gallery';
import { fetchProject } from 'queries';

const Project = ({ data }) => {

	return (
		<Page meta={ { title: data.project.attributes.heading } }>
			<Gallery heading={ data.project.attributes.heading } data={ data.project } />
		</Page>
	);

};

export async function getServerSideProps(context) {

	const { id } = context.query;
	const project = await fetchProject(id);

	return {
		props: {
			data: {
				project: project.data.data,
			},
		},
	};

};

export default Project;
