import Page from 'components/04-layouts/page/page';
import SayHello from 'components/03-organisms/say-hello/say-hello';
import Profile from 'components/03-organisms/profile/profile';
import BehindTheScene from 'components/03-organisms/behind-the-scene/behind-the-scene';
import { fetchBehindTheScene, fetchSayHello, fetchProfile } from 'queries/index.js';

const Contact = ({ data }) => {

	return (
		<Page meta={ { title: 'Kontakt', description: 'Lorem ipsum' } }>
			<SayHello data={ data.sayHello } />
			<Profile data={ data.profile } />
			<BehindTheScene data={ data.behindTheScene } />
		</Page>
	);

};

export async function getServerSideProps() {

	const sayHello = await fetchSayHello();
	const behindTheScenes = await fetchBehindTheScene();
	const profile = await fetchProfile();

	return {
		props: {
			data: {
				sayHello: sayHello.data.data,
				behindTheScene: behindTheScenes.data.data,
				profile: profile.data.data,
			},
		},
	};

};

export default Contact;
