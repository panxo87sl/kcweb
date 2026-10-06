import ContactPage from "./components/ContactPage";
import { InstagramIcon, PhoneIcon, WhatsappIcon } from "./components/ContactIcons";
import { KinesiologiaIcon, OsteopatiaIcon } from "../home/components/ServicesSection/ServiceIcons";

const PHONE = "+56992804354";
const WHATSAPP = "https://wa.me/56992804354";
const INSTAGRAM = "https://www.instagram.com/osteopata.diegoz/";

const contact = {
  fullName: "Diego Alexis Zúñiga Norambuena",
  shortName: "Diego Zúñiga",
  firstName: "Diego Alexis",
  lastName: "Zúñiga Norambuena",
  fileName: "Diego-Zuniga",
  role: "Kinesiólogo · Osteópata",
  lead: "Director y fundador de Kineclin · Más de 10 años de experiencia",
  org: "Kineclin",
  photo: "/osteopatia/diego.jpg",
  phone: PHONE,
  agendaUrl: "https://ff.healthatom.io/qn3RXi",
  urls: [
    { type: "WhatsApp", href: WHATSAPP },
    { type: "Instagram", href: INSTAGRAM },
    { type: "Kineclin", href: "https://www.kineclin.cl" },
  ],
};

const socials = [
  { label: "Llamar", href: `tel:${PHONE}`, icon: <PhoneIcon /> },
  { label: "WhatsApp", href: WHATSAPP, icon: <WhatsappIcon />, color: "whatsapp" },
  { label: "Instagram", href: INSTAGRAM, icon: <InstagramIcon />, color: "instagram" },
];

const services = [
  { label: "Osteopatía", href: "/osteopatia", icon: <OsteopatiaIcon /> },
  { label: "Kinesiología", href: "/kinesiologia", icon: <KinesiologiaIcon /> },
];

export default function DiegoPage() {
  return <ContactPage contact={contact} socials={socials} services={services} />;
}
