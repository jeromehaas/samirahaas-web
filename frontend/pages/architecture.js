import Page from "components/04-layouts/page/page";
import Showcase from "components/03-organisms/showcase/showcase";
import client from "graphql/client";
import queries from "graphql/queries";

const Architecture = ({ data }) => {

    return (
        <Page>
            <Showcase heading={['Archi', 'Tektur']} data={ data.projects } />
        </Page>
    );

 };

 export async function getServerSideProps() {

    const projects = await client.query({ query: queries.GET_PROJECTS_BY_CATEGORY('Architecture')});
    
    return {
        props: {
            data: {
                projects: projects.data.projects.data
            },
        },
    };

 };

 export default Architecture;
