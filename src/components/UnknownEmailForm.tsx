import { Button } from "@codegouvfr/react-dsfr/Button";
import { Input } from "@codegouvfr/react-dsfr/Input";
import { Navigate } from "@tanstack/react-router";
import { useFetchMutationPortail } from "hooks/useFetchQuery";
import { useForm } from "hooks/useForm";
import { useTranslation } from "i18n/i18n";
import { useEffect } from "react";
import { unknownEmailForm } from "types/schemas";

export const UnknownEmailForm = ({ questioningUrl }: { questioningUrl?: string }) => {
  const { t } = useTranslation("EmailForm");
  const { t: supportFormTranslation } = useTranslation("SupportForm");
  const { register, errors, handleSubmit } = useForm(unknownEmailForm);

  const { mutateAsync, isSuccess } = useFetchMutationPortail("/repondant/mail", "put");

  useEffect(() => {
    if (isSuccess) {
      // Todo: change navigate url
      questioningUrl ? (window.location.href = questioningUrl) : <Navigate to={"/"} />;
    }
  }, [isSuccess]);

  const onSubmit = handleSubmit(data => {
    mutateAsync({
      body: data.mailaddress,
    });
  });

  return (
    <div>
      <h4>{t("unknownEmailFormtitle")}</h4>
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
        <Input
          label={t("confirmEmail")}
          nativeInputProps={{
            autoComplete: "email",
            type: "email",
            ...register("mailaddressConfirmation"),
            id: "confirmEmail",
            ...(errors.mailaddressConfirmation && {
              "aria-invalid": true,
              "aria-errormessage": "confirmEmail-desc-error",
            }),
          }}
          state={errors.mailaddressConfirmation ? "error" : "default"}
          stateRelatedMessage={
            errors.mailaddressConfirmation?.message &&
            supportFormTranslation(
              errors.mailaddressConfirmation?.message as keyof typeof supportFormTranslation,
            )
          }
        />
        {!errors.mailaddressConfirmation && <p className="fr-hidden" id={"confirmEmail-desc-error"} />}
        <Button style={{ width: "100%" }} className="fr-grid-row fr-grid-row--center" type="submit">
          {t("submitUnknownEmailForm")}
        </Button>
      </form>
    </div>
  );
};
