import Page from "components/04-layouts/page/page";
import SayHello from "components/03-organisms/say-hello/say-hello";
import Profile from "components/03-organisms/profile/profile";
import BehindTheScenes from "components/03-organisms/behind-the-scenes/behind-the-scenes";

const Contact = () => {

    return (
        <Page>
            <SayHello />
            <Profile />
            <BehindTheScenes />
        </Page>
    )

};

export default Contact;