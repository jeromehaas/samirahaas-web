import Heading from "components/01-atoms/heading/heading";
import Section from "components/04-layouts/section/section"
import Text from "components/01-atoms/text/text";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useRef, useEffect } from 'react';

const Profile = ({ data }) => {

    // REGISTER PLUGIN
    gsap.registerPlugin(ScrollTrigger);

    // CREATE REFS
    const profileRef = useRef();
    const profileTimelineRef = useRef();

    // ANIMATE ELEMENTS
    useEffect(() => {
        const context = gsap.context(() => {
            profileTimelineRef.current = gsap.timeline({ ScrollTrigger: { trigger: profileTimelineRef.current, start: 'top bottom-=80px', end: 'bottom top-=80px' }});
            profileTimelineRef.current.to('.profile .profile__education', { autoAlpha: 1, duration: 1 }, 0.5);
            profileTimelineRef.current.to('.profile .profile__contact', { autoAlpha: 1, duration: 1 }, 0.75);
        }, profileRef);
        return () => context.revert();
    }, []);

    return (
        <Section className="profile" ref={ profileRef }>
            <div className="profile__education education">
                <Heading className="education__heading" level="h3">{ data.attributes.education.heading }</Heading>
                <table className="education__table table">
                    <tbody className="table__body">
                        { data.attributes.education.training.map((item) => (
                        <tr className="table__row" key={ item.id }>
                            <td className="table__cell"><Text>{ item.period }</Text></td>
                            <td className="table__cell"><Text>{ item.description }</Text></td>
                        </tr>
                        )) }
                    </tbody>
                </table>
            </div>
            <div className="profile__contact contact">
                <Heading className="contact__heading" level="h3">{ data.attributes.contact.heading }</Heading>
                <div className="contact__address address">
                    { data.attributes.contact.address.map((item) => (
                         item.link ? (
                            <a className="address__link" href={ item.link } key={ item.id }>
                                <Text className="address__item">{ item.text }</Text>
                            </a>
                        ) : ( 
                            <Text className="address__item" key={ item.id }>{ item.text }</Text>
                        )

                    ))}
                </div>
            </div>
        </Section>
    );

};

export default Profile;