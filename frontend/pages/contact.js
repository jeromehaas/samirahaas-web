import Page from "components/04-layouts/page/page";
import SayHello from "components/03-organisms/say-hello/say-hello";
import Profile from "components/03-organisms/profile/profile";
import BehindTheScene from "components/03-organisms/behind-the-scene/behind-the-scene";
import client from "graphql/client";
import queries from "graphql/queries";

const Contact = ({ data }) => {

    return (
        <Page>
            <SayHello data={ data.sayHello } />
            <Profile data={ data.profile } />
            <BehindTheScene data={ data.behindTheScene } />
        </Page>
    )

};

export async function getServerSideProps() {

    const sayHello = await client.query({ query: queries.GET_SAY_HELLO() });
    const behindTheScene = await client.query({ query: queries.GET_BEHIND_THE_SCENE() });
    const profile = await client.query({ query: queries.GET_PROFILE() });

    return {
        props: {
            data: {
                sayHello: sayHello.data.sayHello.data,
                behindTheScene: behindTheScene.data.behindTheScene.data,
                profile: profile.data.profile.data,
            },
        },
    };

};

export default Contact;