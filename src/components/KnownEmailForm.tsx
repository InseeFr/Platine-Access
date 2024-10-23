import Button from "@codegouvfr/react-dsfr/Button";
import Input from "@codegouvfr/react-dsfr/Input";
import { Navigate } from "@tanstack/react-router";
import { useFetchMutationPortail } from "hooks/useFetchQuery";
import { useForm } from "hooks/useForm";
import { useTranslation } from "i18n/i18n";
import { useEffect } from "react";
import { knownEmailForm } from "types/schemas";

export const KnownEmailForm = ({
  questioningUrl,
  email,
}: {
  questioningUrl?: string;
  email: string;
}) => {
  const { t } = useTranslation("EmailForm");
  const { t: supportFormTranslation } = useTranslation("SupportForm");
  const { register, errors, handleSubmit } = useForm(knownEmailForm, {
    defaultValues: { mailaddress: email },
  });

  const { mutateAsync, isSuccess } = useFetchMutationPortail("/repondant/mail", "put");

  useEffect(() => {
    if (isSuccess) {
      // Todo: change navigate url
      questioningUrl ? (window.location.href = questioningUrl) : <Navigate to={"/"} />;
    }
  }, [isSuccess]);

  const onSubmit = handleSubmit(data => {
    if (email !== data.mailaddress) {
      mutateAsync({
        body: data.mailaddress,
      });
    }
  });

  return (
    <div>
      <h4>{t("knownEmailFormtitle")}</h4>
      <form action="#" onSubmit={onSubmit}>
        <Input
          label={t("email")}
          nativeInputProps={{
            autoComplete: "email",
            type: "email",
            ...register("mailaddress"),
            id: "email",
            ...(errors.mailaddress && { "aria-invalid": true, "aria-errormessage": "email-desc-error" }),
          }}
          state={errors.mailaddress ? "error" : "default"}
          stateRelatedMessage={
            errors.mailaddress?.message &&
            supportFormTranslation(errors.mailaddress?.message as keyof typeof supportFormTranslation)
          }
        />
        {!errors.mailaddress && <p className="fr-hidden" id={"email-desc-error"} />}

        <Button style={{ width: "100%" }} className="fr-grid-row fr-grid-row--center" type="submit">
          {t("submitKnownEmailForm")}
        </Button>
      </form>
    </div>
  );
};
