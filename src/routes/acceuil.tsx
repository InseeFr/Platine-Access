import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "components/homePage/HomePage";
import { useTranslation } from "i18n";
import { Helmet } from "react-helmet-async";

export const Route = createFileRoute("/acceuil")({
  component: Index,
});

function Index() {
  const { t: headerTranslation } = useTranslation("Header");
  const { t } = useTranslation("HomePage");

  return (
    <div>
      <Helmet>
        <title>{`${t("pageTitle")} - ${headerTranslation("service tagline")}`} </title>
      </Helmet>
      <HomePage></HomePage>
    </div>
  );
}
