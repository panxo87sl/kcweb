import "./PsicoTeamShowcase.css";
import ActionButton from "../../components/common/ActionButton/ActionButton";

export default function PsicoTeamShowcase({
  leftImage,
  leftName,
  leftText,
  leftBtnTitle,
  leftWsp,
  leftWspMsg,
  leftWspLink,
  leftWspGTag,
  leftAgenda,
  leftAgendaLink,
  leftAgendaGTag,
  rightImage,
  rightName,
  rightText,
  rightBtnTitle,
  rightWsp,
  rightWspMsg,
  rightWspLink,
  rightWspGTag,
  rightAgenda,
  rightAgendaLink,
  rightAgendaGTag,
  centerTitle = "Conoce al equipo",
}) {
  return (
    <section className="psicoTeamShowcase">
      <div className="psicoTeamShowcase__inner">
        <div className="psicoTeamShowcase__row">
          <div className="psicoTeamShowcase__card">
            <div className="psicoTeamShowcase__textAndPhoto leftSide">
              <div className="psicoShowcase__photo">
                <img src={leftImage} alt={leftName} />
              </div>

              <div className="psicoShowcase__text">
                <div className="psicoShowcase__name">
                  <h3>{leftName}</h3>
                </div>
                <div className="psicoShowcase__desc">
                  <p>{leftText}</p>
                </div>
              </div>
            </div>
            {(leftWsp || leftAgenda) && (
              <div className="psicoAgenda__buttons">
                {leftAgenda && (
                  <div className="psicoAgenda">
                    <ActionButton
                      label="Agenda"
                      href={leftAgendaLink}
                      variant="centro"
                      glAdsConversionID={leftAgendaGTag}
                    />
                  </div>
                )}
                {leftWsp && (
                  <div className="psicoAgenda">
                    <ActionButton
                      label="WhatsApp"
                      href={leftWspLink}
                      variant="whatsapp"
                      wspmsg={leftWspMsg}
                      glAdsConversionID={leftWspGTag}
                    />
                  </div>
                )}
              </div>
            )}
          </div>
          <div className="psicoTeamShowcase__card centercard">
            <div className="psicoShowcase__center">
              <h2>{centerTitle}</h2>
              <div className="psicoShowcase__diamonds">
                <span />
                <span />
                <span />
              </div>
            </div>
          </div>
          <div className="psicoTeamShowcase__card ">
            <div className="psicoTeamShowcase__textAndPhoto rightSide">
              <div className="psicoShowcase__text">
                <div className="psicoShowcase__name">
                  <h3>{rightName}</h3>
                </div>
                <div className="psicoShowcase__desc">
                  <p>{rightText}</p>
                </div>
              </div>

              <div className="psicoShowcase__photo">
                <img src={rightImage} alt={rightName} />
              </div>
            </div>
            {(rightWsp || rightAgenda) && (
              <div className="psicoAgenda__buttons">
                {rightWsp && (
                  <div className="psicoAgenda">
                    <ActionButton
                      label="WhatsApp"
                      href={rightWspLink}
                      variant="whatsapp"
                      wspmsg={rightWspMsg}
                      glAdsConversionID={rightWspGTag}
                    />
                  </div>
                )}

                {rightAgenda && (
                  <div className="psicoAgenda">
                    <ActionButton
                      label="Agenda"
                      href={rightAgendaLink}
                      variant="centro"
                      glAdsConversionID={rightAgendaGTag}
                    />
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
