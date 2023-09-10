import LegalInformations from 'components/03-organisms/legal-informations/legal-informations';
import Page from 'components/04-layouts/page/page';
import { fetchDataPrivacy } from 'queries';

const DataPrivacy = ({ data }) => {

	return (
		<Page meta={ { title: 'Datenschutz', description: 'Lorem ipsum' } }>
			<LegalInformations data={ data.dataPrivacy } />
		</Page>
	);

};

export async function getServerSideProps() {

	const dataPrivacy = await fetchDataPrivacy();

	return {
		props: {
			data: {
				dataPrivacy: dataPrivacy.data.data,
			},
		},
	};

};

export default DataPrivacy;
