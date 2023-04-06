import Page from "components/04-layouts/page/page";
import Showcase from "components/03-organisms/showcase/showcase";
import client from "graphql/client";
import queries from "graphql/queries";

const Weddings = ({ data }) => {

    return (
        <Page meta={{ title: 'Hochzeiten', description: 'Lorem ipsum' }}>
            <Showcase data={ data.wedding } />
        </Page>
    );

 };

 export async function getServerSideProps() {

    const wedding = await client.query({ query: queries.GET_WEDDING() });

    return {
        props: {
            data: {
                wedding: wedding.data.wedding.data,
            },
        },
    };

 };

 export default Weddings;
