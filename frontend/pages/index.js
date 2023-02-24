import Page from "components/04-layouts/page/page";
import Hero from "components/03-organisms/hero/hero";
import Teaser from "components/03-organisms/teaser/teaser";
import AboutMe from "components/03-organisms/about-me/about-me";
import Values from "components/03-organisms/values/values";
import client from "graphql/client";
import queries from "graphql/queries";

const Start = ({ data }) => {

  return (
    <Page className="start">
        <Hero />
        <Teaser data={ data.teaser } />
        <AboutMe />
        <Values />
    </Page>
  );

};

export async function getServerSideProps() {

	const teaser = await client.query({ query: queries.GET_TEASER() });

	return {
		props: {
			data: {
				teaser: teaser.data
			},
		},
	};

};

export default Start;
