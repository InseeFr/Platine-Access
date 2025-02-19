import { declareComponentKeys, useTranslation } from "i18n";
import { BannerImage } from "../commons/BannerImage";
import { H2TitleWithText } from "../commons/TitleWithText/H2TitleWithText";
import { fr } from "@codegouvfr/react-dsfr";
import { SelfTrainingPictogram } from "assets/pictograms/SelfTrainingPictogram";
import Button from "@codegouvfr/react-dsfr/Button";
import { PadLockPictogram } from "assets/pictograms/PadLockPictogram";
import { ActivityTiles } from "./ActivityTitle";

export const HomePage = () => {
  const { t } = useTranslation("HomePage");
  const containerLayout = fr.cx("fr-container", "fr-py-3w", "fr-px-10v", "fr-my-1w");

  // TODO : <div style={{ background: "var(--background-alt-grey)" }} className="fr-py-5w">
  // TODO : <hr className="fr-my-2w" style={{ borderBottomColor: "1px solid grey" }} />

  return (
    <>
      <BannerImage />
      <div className={containerLayout}>
        <h1>{t("portalTitle")}</h1>
        <p>{t("portalDescription")}</p>
      </div>
      <div style={{ background: "var(--background-alt-grey)" }} className="fr-py-5w">
        <div className={containerLayout}>
          <div className="fr-grid-row fr-grid-row--center fr-grid-row--middle">
            <div className="fr-col-10 fr-col-md-6">
              <H2TitleWithText title={t("authenticationTitle")} text={t("authenticationDescription")} />
              <Button
                linkProps={{
                  to: "/connexion",
                }}
              >
                {t("authenticationButton")}
              </Button>
            </div>
            <div className="fr-px-6w">
              <SelfTrainingPictogram />
            </div>
          </div>
        </div>
      </div>
      <div className={containerLayout}>
        <H2TitleWithText title={t("activitiesTitle")} text={t("activitiesDescription")} />
        <div className="fr-grid-row fr-grid-row--gutters fr-grid-row--center">
          <ActivityTiles />
        </div>
      </div>
      <hr className="fr-my-2w" style={{ borderBottomColor: "1px solid grey" }} />
      <div className={containerLayout}>
        <div className="fr-grid-row fr-grid-row--gutters fr-grid-row--center">
          <div className="fr-col-10">
            <H2TitleWithText title={t("confidentialityTitle")} text={t("confidentialityDescription")} />
            <a
              href="https://www.insee.fr/fr/information/4174982#:~:text=L'Insee%20applique%20ainsi%20des,directe%20ni%20indirecte%2C%20des%20r%C3%A9pondants."
              target="_blank"
              className="fr-link"
            >
              {t("LearnMore")}
            </a>
          </div>
          <div className="fr-col-2 fr-px-6w">
            <PadLockPictogram />
          </div>
        </div>
      </div>
    </>
  );
};

const { i18n } = declareComponentKeys<
  | "portalTitle"
  | "portalDescription"
  | "authenticationTitle"
  | "authenticationDescription"
  | "authenticationButton"
  | "activitiesTitle"
  | "activitiesDescription"
  | "activitiesCollect"
  | "activitiesAnalyze"
  | "activitiesDiffuse"
  | "confidentialityTitle"
  | "confidentialityDescription"
  | "LearnMore"
  | "pageTitle"
>()("HomePage");

export type I18n = typeof i18n;
