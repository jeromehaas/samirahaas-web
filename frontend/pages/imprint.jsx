import Page from 'components/04-layouts/page/page';
import Publication from 'components/03-organisms/publication/publication';
import fetchImprint from 'queries/fetch-imprint';

const Imprint = ({ data }) => {

	return (
		<Page meta={ { title: 'Impressum', description: 'Lorem ipsum' } }>
			<Publication data={ data.imprint } />
		</Page>
	);

};

export async function getServerSideProps() {

	const imprint = await fetchImprint();

	return {
		props: {
			data: {
				imprint: imprint.data.data,
			},
		},
	};

};

export default Imprint;
