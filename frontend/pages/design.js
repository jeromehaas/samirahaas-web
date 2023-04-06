import Page from "components/04-layouts/page/page";
import Showcase from "components/03-organisms/showcase/showcase";
import client from "graphql/client";
import queries from "graphql/queries";

const Design = ({ data }) => {

    return (
        <Page meta={{ title: 'Gestaltung', description: 'Lorem ipsum' }}>
            <Showcase data={ data.design } />
        </Page>
    );

 };

 export async function getServerSideProps() {

    const design = await client.query({ query: queries.GET_DESIGN() });

    return {
        props: {
            data: {
                design: design.data.design.data,
            },
        },
    };

 };

 export default Design;

