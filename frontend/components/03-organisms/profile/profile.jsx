import Heading from "components/01-atoms/heading/heading";
import Section from "components/04-layouts/section/section"
import Text from "components/01-atoms/text/text";
import Link from "next/link";

const Profile = () => {

    return (
        <Section className="profile">
            <div className="profile__education education">
                <Heading className="education__heading" level="h3">Aus- und Weiterbildungen</Heading>
                <table className="education__table table">
                    <tbody className="table__body">
                        <tr className="table__row">
                            <td className="table__cell"><Text>2015 - 2018</Text></td>
                            <td className="table__cell"><Text>Dipl. Gestalterin Kommunikationsdesign Vertiefung Fotografie HF, St. Gallen</Text></td>
                        </tr>
                        <tr className="table__row">
                            <td className="table__cell"><Text>2008 - 2012</Text></td>
                            <td className="table__cell"><Text>Polygrafin EFZ, Luzern</Text></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="profile__contact contact">
                <Heading className="contact__heading" level="h3">Kontakt</Heading>
                <div className="contact__address address">
                    <Text className="address__item">Bleicherstrasse 22</Text>
                    <Text className="address__item">6003 Luzern</Text>
                    <Text className="address__item"><a href="mailto:mail@samirahaas.ch">mail@samirahaas.ch</a></Text>
                    <Text className="address__item"><a href="tel:0797894050">079 789 40 50</a></Text>
                </div>
            </div>
        </Section>
    );

};

export default Profile;