import Link from "next/link";
import Text from "components/01-atoms/text/text";
import Image from "next/image";
import Heading from "components/01-atoms/heading/heading";

const Footer = () => {

    const getCurrentYear = () => {
        return new Date().getFullYear();
    };

    return (
        <footer className="footer section">
            <div className="footer__inner section__inner">
                <Image className="footer__logo" src="/logos/small.svg" alt="Samira Haas" width="140" height="40" priority />
                <div className="footer__content content">
                    <Heading className="content__title" level="h3">Fotografie und Gestaltung</Heading>
                    <div className="content__contact-links contact-links">
                        <Link className="contact-links__item" href="mailto:mail@samirahaas.ch">mail@samirahaas.ch</Link>
                        <Link className="contact-links__item" href="tel:0797894050">079 789 40 50</Link>
                    </div>
                    <div className="content__social-media-links social-media-links">
                        <Link className="social-media-links__item" href="/">Insagram</Link>
                        <Link className="social-media-links__item" href="/">Facebook</Link>
                    </div>
                   <div className="content__legal-links legal-links">
                        <Link className="legal-links__item" href="/">Impressum</Link>
                        <Link className="legal-links__item" href="/data-privacy">Datenschutz</Link>
                    </div>   
                    <Text className="content__copyright">© { getCurrentYear() } Samira Haas</Text>
                </div>
            </div>
        </footer>
    );

};

export default Footer;