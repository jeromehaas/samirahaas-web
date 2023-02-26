import LegalInformations from "components/03-organisms/legal-informations/legal-informations";
import Page from "components/04-layouts/page/page";
import client from "graphql/client";
import queries from "graphql/queries";

const DataPrivacy = ({ data }) => {

    return (
        <Page>
            <LegalInformations data={ data.dataPrivacy } />
        </Page>
    )

};

export async function getServerSideProps() {

    const dataPrivacy = await client.query({ query: queries.GET_DATA_PRIVACY() });

    return {
        props: {
            data: {
                dataPrivacy: dataPrivacy.data.dataPrivacy.data,
            },
        },
    };

};

export default DataPrivacy;