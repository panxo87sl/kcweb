import "./FacialesPage.css";
import { Helmet } from "react-helmet-async";

export default function FacialesPage() {
  return (
    <>
      <Helmet>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <main className="facialesPage">
        {/* AQUÍ VA TODO TU BODY CONVERTIDO */}
        {/* IMPORTANTE: NO LO MODIFIQUES */}

        <header className="topnav">
          <div className="tn-logo">
            KINE<span>CLIN</span>
          </div>
          <div className="tn-center">
            <div className="tn-dot"></div>
            <span className="tn-promo-text">Hollywood Peel + Limpieza</span>
            <span className="tn-promo-detail">— Precio especial hasta agotar cupos</span>
          </div>
          <a className="tn-cta" href="#pago-section">
            Comprar ahora
          </a>
        </header>

        {/* PROMO HERO */}
        <section className="promo-hero" id="promo">
          <div className="promo-grid">
            <div className="promo-left">
              <div className="promo-live">
                <div className="promo-live-dot"></div>
                <span className="promo-live-txt">Campaña activa</span>
              </div>

              <h1 className="promo-title">
                Hollywood Peel
                <br />
                <em>+ Limpieza</em>
                <br />
                en 1 sesión.
              </h1>

              <p className="promo-desc">
                El combo más popular de la clínica a precio especial por tiempo limitado.
                Peeling de carbono + limpieza profunda. Sin tiempo de recuperación.
              </p>

              <div className="promo-price-row">
                <span className="promo-price">$49.990</span>
                <span className="promo-price-old">$89.990</span>
                <span className="promo-discount">−44%</span>
              </div>

              <div className="trust-row">
                <div className="trust-chip">
                  <span>🛡️</span>
                  <span>Profesionales certificadas</span>
                </div>
                <div className="trust-chip">
                  <span>⚡</span>
                  <span>Tecnología de punta</span>
                </div>
                <div className="trust-chip">
                  <span>✦</span>
                  <span>Diagnóstico personalizado</span>
                </div>
              </div>

              <div className="pago-block" id="pago-section">
                <a className="btn-pago btn-flow" href="#">
                  Pagar con Flow
                </a>
                <a className="btn-pago btn-mp" href="#">
                  Mercado Pago
                </a>
              </div>
            </div>

            <div className="promo-right">
              <div className="promo-included-label">Incluido en esta campaña</div>

              <div className="promo-items">
                <div className="promo-item active-item">
                  <div>
                    <div className="pi-name">Hollywood Peel</div>
                    <div className="pi-sub">Peeling carbono + láser</div>
                  </div>
                  <span className="pi-tag">Incluido</span>
                </div>
              </div>

              <div className="countdown-box">
                <div className="cd-title">Campaña termina en</div>
                <div className="cd-digits">
                  <div className="cd-unit">
                    <div className="cd-num">05</div>
                    <div className="cd-lbl">días</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="faqs">
          <div className="faq" onClick={(e) => e.currentTarget.classList.toggle("open")}>
            <div className="faq-q">
              ¿Cuántas sesiones necesito? <span>+</span>
            </div>
            <p className="faq-a">Depende del tratamiento...</p>
          </div>
        </section>
      </main>
    </>
  );
}
