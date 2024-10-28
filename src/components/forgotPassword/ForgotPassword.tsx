import { fr } from "@codegouvfr/react-dsfr";
import { Breadcrumb } from "@codegouvfr/react-dsfr/Breadcrumb";
import { useTranslation } from "i18n/i18n";
import { declareComponentKeys } from "i18nifty";
import content from "resources/content.json";
import { ForgotPasswordForm } from "./ForgotPasswordForm";
import { useState } from "react";
import { useFetchMutationWithoutAuth } from "hooks/useFetchQuery";
import { useForm } from "hooks/useForm";
import { forgotPasswordForm } from "types/schemas";
import { TechnicalError } from "components/errorPages/TechnicalError";
import { ForgotPasswordValidated } from "./ForgotPasswordValidated";

export const ForgotPassword = ({ surveyId }: { surveyId: string }) => {
  const { t } = useTranslation("ForgotPassword");
  const titleShort = content.specifique.find(s => s.id === surveyId)?.titleShort;

  const { mutateAsync, isError } = useFetchMutationWithoutAuth("/reinit-password", "post");

  const [isSuccessPage, setIsSuccessPage] = useState(false);
  const { register, errors, handleSubmit } = useForm(forgotPasswordForm);

  const onSubmit = handleSubmit(data => {
    mutateAsync({ query: { idec: data.idec } });
    setIsSuccessPage(true);
  });

  if (isError) {
    return <TechnicalError surveyId={surveyId} />;
  }

  return (
    <div className={"fr-container"}>
      <Breadcrumb
        currentPageLabel={t("pageTitleForgotPassword")}
        className="fr-mb-0"
        homeLinkProps={{
          to: "/",
        }}
        segments={[
          {
            label: titleShort,
            linkProps: {
              to: "/$survey/introduction",
              params: { survey: surveyId },
            },
          },
        ]}
      />
      <div id="content" className="fr-grid-row fr-grid-row--center ">
        <div
          className="fr-col-md-10 fr-col-lg-7 fr-col-12 fr-mt-3w fr-mb-3w "
          style={{
            backgroundColor: fr.colors.decisions.background.default.grey.hover,
          }}
        >
          <div className="fr-grid-row  fr-grid-row--center fr-py-md-7w fr-py-3w">
            <div className="fr-col-11 fr-col-md-9 ">
              <h4>{t("sectionTitle")}</h4>
              {isSuccessPage ? (
                <ForgotPasswordValidated
                  surveyId={surveyId}
                  onClickToGoBack={() => setIsSuccessPage(false)}
                />
              ) : (
                <ForgotPasswordForm
                  surveyId={surveyId}
                  register={register}
                  onSubmit={onSubmit}
                  errors={errors}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const { i18n } = declareComponentKeys<
  | "pageTitleForgotPassword"
  | "sectionTitle"
  | "information"
  | "idecHintText"
  | "submitButton"
  | "forgotPasswordHelpTitle"
  | "contactSupport"
  | "forgotPasswordHelp"
  | "alertText"
  | "alertTextEEC"
  | "goBackToConnexion"
  | "modifyIdentifier"
>()("ForgotPassword");

export type I18n = typeof i18n;
