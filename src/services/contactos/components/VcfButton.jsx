import { buildVcf } from "../utils/buildVcf";
import { SaveContactIcon } from "./ContactIcons";
import "./VcfButton.css";

export default function VcfButton({ contact }) {
  const download = () => {
    const vcf = buildVcf(contact);
    const url = URL.createObjectURL(new Blob([vcf], { type: "text/vcard;charset=utf-8" }));
    const link = document.createElement("a");

    link.href = url;
    link.download = `${contact.fileName}.vcf`;
    link.click();

    URL.revokeObjectURL(url);
  };

  return (
    <button type="button" className="vcfButton" onClick={download}>
      <SaveContactIcon />
      <span className="vcfButton__label">Guardar contacto</span>
    </button>
  );
}
