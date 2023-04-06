import Page from "components/04-layouts/page/page";
import Showcase from "components/03-organisms/showcase/showcase";
import client from "graphql/client";
import queries from "graphql/queries";

const Architecture = ({ data }) => {

    return (
        <Page meta={{ title: 'Architektur', description: 'Lorem ipsum' }}>
            <Showcase data={ data.architecture } />
        </Page>
    );

 };

 export async function getServerSideProps() {

    const architecture = await client.query({ query: queries.GET_ARCHITECTURE() });
    
    return {
        props: {
            data: {
                architecture: architecture.data.architecture.data,
            },
        },
    };

 };

 export default Architecture;
