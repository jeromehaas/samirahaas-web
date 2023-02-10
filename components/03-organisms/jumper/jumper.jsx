import Section from "components/04-layouts/section/section";
import Link from "next/link";

const Jumper = () => {

    return (
        <Section className="jumper">
            <Link className="jumper__link" href="/corporate">Corporate</Link>
            <Link className="jumper__link" href="/storytelling">Storytelling</Link>
            <Link className="jumper__link" href="/architecture">Architektur</Link>
            <Link className="jumper__link" href="/weddings">Hochzeiten</Link>
            <Link className="jumper__link" href="/design">Gestaltung</Link>
        </Section>
    );

};

export default Jumper;
