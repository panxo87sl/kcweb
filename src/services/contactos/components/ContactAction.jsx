import { Link } from "react-router-dom";
import "./ContactAction.css";

export default function ContactAction({ icon, label, href, color }) {
  const isHex = color?.startsWith("#");
  const className = `contactAction ${color && !isHex ? `contactAction--${color}` : ""}`.trim();
  const style = isHex ? { "--bColor": color } : undefined;
  const content = (
    <>
      <span className="contactAction__icon">{icon}</span>
      <span className="contactAction__label">{label}</span>
    </>
  );

  if (href.startsWith("/")) {
    return (
      <Link className={className} style={style} to={href}>
        {content}
      </Link>
    );
  }

  const isWeb = href.startsWith("http");

  return (
    <a
      className={className}
      style={style}
      href={href}
      target={isWeb ? "_blank" : undefined}
      rel={isWeb ? "noreferrer" : undefined}
    >
      {content}
    </a>
  );
}
