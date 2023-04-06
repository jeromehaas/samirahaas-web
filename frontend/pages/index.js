import Page from "components/04-layouts/page/page";
import Hero from "components/03-organisms/hero/hero";
import Teaser from "components/03-organisms/teaser/teaser";
import AboutMe from "components/03-organisms/about-me/about-me";
import MyEthics from "components/03-organisms/my-ethics/my-ethics";
import client from "graphql/client";
import queries from "graphql/queries";

const Start = ({ data }) => {

  return (
      <Page meta={{ title: 'Fotografie & Gestaltung', description: 'Lorem ipsum' }}>
        <Hero />
        <Teaser data={ data.teaser } />
        <AboutMe data={ data.aboutMe } />
        <MyEthics data={ data.myEthics } />
    </Page>
  );

};

export async function getServerSideProps() {

	const teaser = await client.query({ query: queries.GET_TEASER() });
  const aboutMe = await client.query({ query: queries.GET_ABOUT_ME() });
  const myEthics = await client.query({ query: queries.GET_MY_ETHICS() });

	return {
		props: {
			data: {
				teaser: teaser.data.teaser.data,
        aboutMe: aboutMe.data.aboutMe.data,
        myEthics: myEthics.data.myEthic.data,
			},
		},
	};

};

export default Start;
