import Page from "components/04-layouts/page/page";
import Showcase from "components/03-organisms/showcase/showcase";
import client from "graphql/client";
import queries from "graphql/queries";

const Corporate = ({ data }) => {

    return (
        <Page meta={{ title: 'Corporate', description: 'Lorem ipsum' }}>
            <Showcase data={ data.corporate } />
        </Page>
    );

 };

 export async function getServerSideProps() {

	const corporate = await client.query({ query: queries.GET_CORPORATE() });

	return {
		props: {
			data: {
				corporate: corporate.data.corporate.data
			},
		},
	};

 };

 export default Corporate;

