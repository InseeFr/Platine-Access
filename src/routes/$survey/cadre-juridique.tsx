import { fr } from "@codegouvfr/react-dsfr";
import { createFileRoute } from "@tanstack/react-router";
import { Markdown } from "components/Markdown";
import { Loading } from "components/surveyHomepage/Loading";
import { useTranslation } from "i18n";
import content from "resources/content.json";

export const Route = createFileRoute("/$survey/cadre-juridique")({
  component: LegalFrameworkIndex,
});

function LegalFrameworkIndex() {
  const { survey } = Route.useParams();
  const { t } = useTranslation("SurveyHomepage");

  const legalFrameworkData = content.specifique.find(s => s.id === survey)?.content[
    "donnees-personnelles"
  ].cartouche;

  if (!legalFrameworkData) {
    return <Loading />;
  }

  return (
    <section className={fr.cx("fr-col-12", "fr-col-md-6", "fr-pr-md-4w")}>
      <h3>{t("legal framework")}</h3>
      <Markdown content={legalFrameworkData} />
    </section>
  );
}