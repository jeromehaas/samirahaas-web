import Page from "components/04-layouts/page/page";
import Showcase from "components/03-organisms/showcase/showcase";
import client from "graphql/client";
import queries from "graphql/queries";

const Design = ({ data }) => {

    return (
        <Page>
            <Showcase heading={['Gestal', 'Tung']} />
        </Page>
    );

 };

 export default Design;

