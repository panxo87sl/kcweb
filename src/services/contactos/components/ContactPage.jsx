import { Helmet } from "react-helmet-async";
import ContactCard from "./ContactCard";
import "./ContactPage.css";

export default function ContactPage({ contact, socials, services }) {
  return (
    <>
      <Helmet>
        <title>{`${contact.shortName} | Tarjeta de contacto KINECLIN`}</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <main className="contactPage">
        <div className="contactPage__inner">
          <ContactCard contact={contact} socials={socials} services={services} />
        </div>
      </main>
    </>
  );
}
