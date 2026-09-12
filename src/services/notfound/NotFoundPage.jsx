import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import "./NotFoundPage.css";

export default function NotFoundPage() {
  return (
    <>
      <Helmet>
        <title>Página no encontrada | KINECLIN Centro de Salud</title>
        <meta name="robots" content="noindex, follow" />
      </Helmet>

      <main className="notFoundPage">
        <div className="notFoundPage__inner">
          <p className="notFoundPage__code">404</p>
          <h1 className="notFoundPage__title">Esta página no existe</h1>
          <p className="notFoundPage__lead">
            El enlace que seguiste puede estar roto o la página fue movida. Vuelve al inicio para
            encontrar lo que buscas.
          </p>
          <Link className="notFoundPage__button" to="/">
            Volver al inicio
          </Link>
        </div>
      </main>
    </>
  );
}
