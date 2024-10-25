import { fr } from "@codegouvfr/react-dsfr";
import { Button } from "@codegouvfr/react-dsfr/Button";
import { NotFoundIcon } from "assets/NotFound";
import { declareComponentKeys, useTranslation } from "i18n";
import { Helmet } from "react-helmet-async";

export const TechnicalError = ({ surveyId }: { surveyId: string }) => {
  const { t } = useTranslation("TechnicalError");
  const { t: headerTranslation } = useTranslation("Header");

  return (
    <>
      <Helmet>
        <title>{`${t("title")} - ${headerTranslation("service tagline")}`}</title>
      </Helmet>
      <section className="fr-container">
        <div
          className={"fr-grid-row fr-grid-row--center fr-grid-row--middle fr-col-12 fr-px-2w fr-py-6w"}
        >
          <div className={"fr-col-md-6 fr-col-12"}>
            <h1>{t("title")}</h1>
            <p className="fr-text--sm" style={{ color: fr.colors.decisions.text.mention.grey.default }}>
              {t("error")}
            </p>
            <p className={"fr-text--lead"}>{t("technicalErrorText")}</p>
            <p className="fr-text--sm fr-mb-0">{t("reloadPageTips")}</p>
            <p className="fr-text--sm">{t("supportInformation")}</p>
            <Button
              priority="secondary"
              linkProps={{ to: "/$survey/contacter-assistance", params: { survey: surveyId } }}
            >
              {t("buttonLabel")}
            </Button>
          </div>
          <div className={"fr-col-3 fr-hidden fr-unhidden-md fr-col-offset-1"}>
            <NotFoundIcon />
          </div>
        </div>
      </section>
    </>
  );
};

const { i18n } = declareComponentKeys<
  "title" | "error" | "technicalErrorText" | "reloadPageTips" | "supportInformation" | "buttonLabel"
>()("TechnicalError");

export type I18n = typeof i18n;
