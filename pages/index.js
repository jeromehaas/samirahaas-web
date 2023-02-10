import Page from "components/04-layouts/page/page";
import Section from "components/04-layouts/section/section";
import Hero from "components/03-organisms/hero/hero";
import Teaser from "components/03-organisms/teaser/teaser";
import AboutMe from "components/03-organisms/about-me/about-me";
import Values from "components/03-organisms/values/values";

const Start = () => {

  return (
    <Page className="start">
        <Hero />
        <Teaser />
        <AboutMe />
        <Values />
    </Page>
  );

};

export default Start;
