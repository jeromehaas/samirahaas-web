import Page from 'components/04-layouts/page/page';
import Hero from 'components/03-organisms/hero/hero';
import Teaser from 'components/03-organisms/teaser/teaser';
import AboutMe from 'components/03-organisms/about-me/about-me';
import MyEthics from 'components/03-organisms/my-ethics/my-ethics';
import { fetchAboutMe, fetchHero, fetchTeaser, fetchMyEthic } from 'queries/index.js';

const Start = ({ data }) => {

	return (
		<Page meta={ { title: 'Fotografie & Gestaltung', description: 'Lorem ipsum' } }>
			<Hero data={ data.hero } />
			<Teaser data={ data.teaser } />
			<AboutMe data={ data.aboutMe } />
			<MyEthics data={ data.myEthic } />
		</Page>
	);

};

export async function getServerSideProps() {

	const hero = await fetchHero();
	const teaser = await fetchTeaser();
	const aboutMe = await fetchAboutMe();
	const myEthic = await fetchMyEthic();

	return {
		props: {
			data: {
				hero: hero.data.data,
				teaser: teaser.data.data,
				aboutMe: aboutMe.data.data,
				myEthic: myEthic.data.data,
			},
		},
	};

};

export default Start;
